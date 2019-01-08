from flask import Flask
import psycopg2
import pandas
import logging
import os
import datetime

app = Flask(__name__)

logger = logging.getLogger('myapp')
hdlr = logging.FileHandler('./statistics_service.log')
formatter = logging.Formatter('%(asctime)s %(levelname)s %(message)s')
hdlr.setFormatter(formatter)
logger.addHandler(hdlr)
logger.setLevel(logging.INFO)

# database connection
connection = psycopg2.connect(
    user=os.environ.get('POSTGRES_USER', "youmind"),
    password=os.environ.get('POSTGRES_PASSWORD', "ksdjfj434ESADesFesafseFasdfae3"),
    host=os.environ.get('DATABASE_URL', '127.0.0.1'),
    port="5432",
    database=os.environ.get('POSTGRES_DB', "mindyou"), )

# intializing dataframes using pandas
activities = pandas.read_sql_query('select * from activity_blueprint', connection)
tracked_activities = pandas.read_sql_query('select * from tracked_activity', connection)
users = pandas.read_sql_query('select * from app_user', connection)


# hours spent on each activity, for last week, month, 3 months
@app.route("/hours-per-activity/<user_id>/<number_units>/<unit>")
def hours_per_activity(user_id, number_units, unit):
    logger.info('received: /hours-per-activity/{}/{}/{}'.format(user_id, number_units, unit))
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
    time_interval = "'{} {}'".format(str(number_units), str(unit))
    result = query(query_str, (user_id, time_interval))
    list_of_jsons = list(map(lambda row: '{"activity_name":"' + str(row[0]) + '","hours":' + str(row[1]) + '}', result))
    records = '[' + ','.join(obj for obj in list_of_jsons) + ']'
    logger.info('/hours-per-activity/{}/{}/{} ===> {}'.format(user_id, number_units, unit, records))
    return records


# hours spent on activity per day
@app.route("/hours-per-day/<user_id>/<activity_id>/<number_units>/<unit>")
def hours_per_day(user_id, activity_id, number_units, unit):
    logger.info('received: /hours-per-day/{}/{}/{}/{}'.format(user_id, activity_id, number_units, unit))
    query_str = '''
        select ta.time_start::date as date, trunc(sum(ta.duration_minutes) / 60, 2) as hours
        from tracked_activity ta
        where ta.user_id = %s
          and ta.activity_blueprint_id = %s
          and ta.duration_minutes is NOT NULL
          and ta.time_start > now() - interval %s
        group by ta.time_start::date
        '''
    time_interval = "'{} {}'".format(str(number_units), str(unit))
    result = query(query_str, (user_id, activity_id, time_interval))

    list_of_jsons = list(map(lambda row: '{"date":"' + str(row[0]) + '","hours":' + str(row[1]) + '}', result))
    records = '[' + ','.join(obj for obj in list_of_jsons) + ']'
    logger.info('/hours-per-day/{}/{}/{}/{} ===> {}'.format(user_id, activity_id, number_units, unit, records))
    return records


# cumulate distribution function for total time spent on an activity compared to other users
@app.route("/percentile-rank/<user_id>/<activity_id>/<number_units>/<unit>")
def percentile_rank(user_id, activity_id, number_units, unit):
    time_interval = "'{} {}'".format(str(number_units), str(unit))
    query_str = '''
        select user_id, sum(duration_minutes)
        from tracked_activity
        where activity_blueprint_id = %s
          and time_start > now() - interval %s
        group by user_id
        order by sum(duration_minutes) asc
        ''' % (activity_id, time_interval)
    user_minutes = pandas.read_sql_query(query_str, connection)

    current_user = user_minutes[user_minutes['user_id'] == user_id]
    current_user_value = current_user['sum'].values[0]

    less_user_minutes = user_minutes[user_minutes['sum'] < current_user_value]
    return str(100.0 * less_user_minutes.size / user_minutes.size)


# determine most popular activities in last day, week, month or quarter
@app.route("/top-activities/<number_unit>/<unit>")
def get_top_activities(number_unit, unit):
    if unit == 'week':
        top_activities = pandas.merge(activities, tracked_activities, left_on='activity_blueprint_id', right_on='activity_blueprint_id', how='inner')[tracked_activities.time_start > (datetime.datetime.now() - datetime.timedelta(days=7*int(number_unit)))].groupby(['name'])['duration_minutes'].sum().reset_index()[['name', 'duration_minutes']].sort_values('duration_minutes', ascending = False).head(10)
    elif unit == 'month':
        top_activities = pandas.merge(activities, tracked_activities, left_on='activity_blueprint_id', right_on='activity_blueprint_id', how='inner')[tracked_activities.time_start > (datetime.datetime.now() - datetime.timedelta(days=30*int(number_unit)))].groupby(['name'])['duration_minutes'].sum().reset_index()[['name', 'duration_minutes']].sort_values('duration_minutes', ascending = False).head(10)
    elif unit == 'quarter':
        top_activities = pandas.merge(activities, tracked_activities, left_on='activity_blueprint_id', right_on='activity_blueprint_id', how='inner')[tracked_activities.time_start > (datetime.datetime.now() - datetime.timedelta(days=90*int(number_unit)))].groupby(['name'])['duration_minutes'].sum().reset_index()[['name', 'duration_minutes']].sort_values('duration_minutes', ascending=False).head(10)
    elif unit == 'year':
        top_activities = pandas.merge(activities, tracked_activities, left_on='activity_blueprint_id', right_on='activity_blueprint_id', how='inner')[tracked_activities.time_start > (datetime.datetime.now() - datetime.timedelta(days=365*int(number_unit)))].groupby(['name'])['duration_minutes'].sum().reset_index()[['name', 'duration_minutes']].sort_values('duration_minutes', ascending = False).head(10)
    results = top_activities.to_json(orient='values')
    return results


#single random suggestion
@app.route("/suggestion/<user_id>")
def suggest(user_id):
    tracked_activities_with_user = tracked_activities[(tracked_activities.user_id == user_id)][['activity_blueprint_id']].drop_duplicates()
    untracked_activities = activities[(~activities.activity_blueprint_id.isin(tracked_activities_with_user.activity_blueprint_id))]
    result = untracked_activities.sample().to_json(orient='values')
    return result


def query(query_sql, params_tuple):
    try:
        cursor = connection.cursor()
        cursor.execute(query_sql, params_tuple)
        result = cursor.fetchall()
        return result
    except (Exception, psycopg2.Error) as error:
        print ("Error while connecting to PostgreSQL", error)
    finally:
        if (connection):
            cursor.close()
