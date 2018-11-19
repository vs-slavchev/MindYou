from flask import Flask
app = Flask(__name__)
import psycopg2
import logging

logging.basicConfig(level=logging.DEBUG)
logging.debug('------------%s', 'started' )

connection = psycopg2.connect(user = "youmind",
        password = "ksdjfj434ESADesFesafseFasdfae3",
        host = "127.0.0.1",
        port = "5432",
        database = "mindyou")


# hours spent on each activity, for last week, month, 3 months
@app.route("/hours-per-activity/<user_id>/<number_units>/<unit>")
def hours_per_activity(user_id, number_units, unit):
    query_str = '''
        select ab.name, trunc(sum(ta.duration_minutes) / 60, 2)
        from tracked_activity ta
        join activity_blueprint ab
        on ta.activity_blueprint_id = ab.activity_blueprint_id
        where ta.user_id = %s
          and ta.duration_minutes is NOT NULL
          and ta.time_start > now() - interval %s
        group by ab.name
        '''
    time_interval = "'{} {}'".format( str(number_units), str(unit))
    result = query(query_str, (user_id, time_interval))

    list_of_jsons = list(map(lambda row: '{"activity_name":"' + str(row[0]) + '","hours":' + str(row[1]) + '}', result))
    records = '[' + ','.join(obj for obj in list_of_jsons) + ']'
    return records


# hours spent on activity per day
@app.route("/hours-per-day/<user_id>/<activity_id>/<number_units>/<unit>")
def hours_per_day(user_id, activity_id, number_units, unit):
    query_str = '''
        select ta.time_start::date as date, trunc(sum(ta.duration_minutes) / 60, 2) as hours
        from tracked_activity ta
        where ta.user_id = %s
          and ta.activity_blueprint_id = %s
          and ta.duration_minutes is NOT NULL
          and ta.time_start > now() - interval %s
        group by ta.time_start::date
        '''
    time_interval = "'{} {}'".format( str(number_units), str(unit))
    result = query(query_str, (user_id, activity_id, time_interval))

    list_of_jsons = list(map(lambda row: '{"date":"' + str(row[0]) + '","hours":' + str(row[1]) + '}', result))
    records = '[' + ','.join(obj for obj in list_of_jsons) + ']'
    return records


def getActivitiesList(user_id):
    query_str = '''select ta.activity_blueprint_id, ta.time_start, ta.duration_minutes
                   from tracked_activity ta
                   where ta.user_id = %s
                   and ta.duration_minutes is NOT NULL'''
    return query(query_str, (user_id)) 

def query(query_sql, params_tuple):
    try:
        cursor = connection.cursor()
        cursor.execute(query_sql, params_tuple)
        result = cursor.fetchall()
        return result
    except (Exception, psycopg2.Error) as error :
        print ("Error while connecting to PostgreSQL", error)
    finally:
        if(connection):
            cursor.close()
            connection.close()
            print("PostgreSQL connection is closed")






@app.route("/activities/<user_id>")
def getActivities(user_id):
    result = getActivitiesList(user_id)

    records = ''.join(str(row) for row  in result)
    return records

@app.route("/average/<user_id>/<activity_id>")
def average(user_id, activity_id):
    result = getActivitiesList(user_id)

    result = list(filter(lambda row: row[0] == int(activity_id), result))

    duration_sum = 0
    for activity_event in result:
        duration_sum += activity_event[2]

    return str(duration_sum / len(result))
