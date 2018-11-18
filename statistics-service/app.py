from flask import Flask
app = Flask(__name__)
import psycopg2
import logging

logging.basicConfig(level=logging.DEBUG)
logging.debug('------------%s', 'asdf' )

connection = psycopg2.connect(user = "youmind",
        password = "ksdjfj434ESADesFesafseFasdfae3",
        host = "127.0.0.1",
        port = "5432",
        database = "mindyou")


@app.route("/activities/<user_id>")
def getActivities(user_id):
    query_str = '''select ta.activity_blueprint_id, ta.time_start, ta.duration_minutes
                   from tracked_activity ta
                   join app_user au
                   on au.user_id = ta.user_id
                   where ta.user_id = %s
                   and ta.duration_minutes is NOT NULL'''
    result = query(query_str, (user_id)) 
    records = ''.join(str(row) for row  in result)
    return records


@app.route("/average/<user_id>/<activity_id>")
def average(user_id, activity_id):
    query_str = '''select ta.time_start, ta.duration_minutes
                   from tracked_activity ta
                   join app_user au
                   on au.user_id = ta.user_id
                   where ta.user_id = %s
                   and ta.activity_blueprint_id = %s
                   and ta.duration_minutes is NOT NULL'''
    results = query(query_str, (user_id, activity_id))
    duration_sum = 0
    for activity_event in results:
        duration_sum += activity_event[1]

    return str(duration_sum / len(results))

    



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
