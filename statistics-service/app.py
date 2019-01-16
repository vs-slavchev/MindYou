from flask import Flask
import psycopg2
import pandas
import logging
import os
import datetime
import time
import requests
import json
from threading import Thread

app = Flask(__name__)

logger = logging.getLogger('myapp')
hdlr = logging.FileHandler('./statistics_service.log')
formatter = logging.Formatter('%(asctime)s %(levelname)s %(message)s')
hdlr.setFormatter(formatter)
logger.addHandler(hdlr)
logger.setLevel(logging.INFO)

FIREBASE_PUSH_URL = "https://fcm.googleapis.com/fcm/send"
FIREBASE_PUSH_KEY = "key=AAAA7_KxZwU:APA91bGOysZbGFO-grloUHj50HfIgYJfeleOYygSBxZRdV4Fmnd60Gvj5MQlCA_zh2PcuQRhvsMnUS0BlU5LrZKO_xGIJMcIapv6WDbeJ6UdTg2GXs5JgSbc4n46ypvHwjahpyIWyWGc"

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
    top_activities = pandas.merge(activities, tracked_activities, left_on='activity_blueprint_id', right_on='activity_blueprint_id', how='inner')
    if unit == 'week':
        top_activities = top_activities[top_activities.time_start > (datetime.datetime.now() - datetime.timedelta(days=7*int(number_unit)))]
        top_activities = top_activities.groupby(['name'])['duration_minutes'].sum().reset_index()
        top_activities = top_activities[['name', 'duration_minutes']].sort_values('duration_minutes', ascending=False).head(10)
    elif unit == 'month':
        top_activities = top_activities[top_activities.time_start > (datetime.datetime.now() - datetime.timedelta(days=30*int(number_unit)))]
        top_activities = top_activities.groupby(['name'])['duration_minutes'].sum().reset_index()
        top_activities = top_activities[['name', 'duration_minutes']].sort_values('duration_minutes', ascending=False).head(10)
    elif unit == 'quarter':
        top_activities = top_activities[top_activities.time_start > (datetime.datetime.now() - datetime.timedelta(days=90*int(number_unit)))]
        top_activities = top_activities.groupby(['name'])['duration_minutes'].sum().reset_index()
        top_activities = top_activities[['name', 'duration_minutes']].sort_values('duration_minutes', ascending=False).head(10)
    elif unit == 'year':
        top_activities = top_activities[top_activities.time_start > (datetime.datetime.now() - datetime.timedelta(days=365*int(number_unit)))]
        top_activities = top_activities.groupby(['name'])['duration_minutes'].sum().reset_index()
        top_activities = top_activities[['name', 'duration_minutes']].sort_values('duration_minutes', ascending=False).head(10)
    results = top_activities.to_json(orient='values')
    return results


# time spent on an activity in 4 different weeks (last 4 weeks)
@app.route("/four-weeks-activity/<user_id>/<activity_id>")
def four_weeks_activity(activity_id, user_id):
    days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    merger = pandas.merge(activities, tracked_activities, left_on='activity_blueprint_id', right_on='activity_blueprint_id', how='inner')
    merger = merger[(merger['user_id'] == user_id) & (merger['activity_blueprint_id'] == activity_id)]

    last_week_1 = merger[(merger['time_start'] > (datetime.datetime.now() - datetime.timedelta(weeks=1)))]
    last_week_1 = last_week_1.groupby(merger['time_start'].dt.weekday_name)['duration_minutes'].sum().reindex(days).reset_index()
    last_week_1 = last_week_1[['time_start', 'duration_minutes']]

    last_week_2 = merger[(merger['time_start'] > (datetime.datetime.now() - datetime.timedelta(weeks=2))) & (merger['time_start'] < (datetime.datetime.now() - datetime.timedelta(weeks=1)))]
    last_week_2 = last_week_2.groupby(merger['time_start'].dt.weekday_name)['duration_minutes'].sum().reindex(days).reset_index()
    last_week_2 = last_week_2[['time_start', 'duration_minutes']]

    last_week_3 = merger[(merger['time_start'] > (datetime.datetime.now() - datetime.timedelta(weeks=3))) & (merger['time_start'] < (datetime.datetime.now() - datetime.timedelta(weeks=2)))]
    last_week_3 = last_week_3.groupby(merger['time_start'].dt.weekday_name)['duration_minutes'].sum().reindex(days).reset_index()
    last_week_3 = last_week_3[['time_start', 'duration_minutes']]

    last_week_4 = merger[(merger['time_start'] > (datetime.datetime.now() - datetime.timedelta(weeks=4))) & (merger['time_start'] < (datetime.datetime.now() - datetime.timedelta(weeks=3)))]
    last_week_4 = last_week_4.groupby(merger['time_start'].dt.weekday_name)['duration_minutes'].sum().reindex(days).reset_index()
    last_week_4 = last_week_4[['time_start', 'duration_minutes']]

    results = pandas.concat([last_week_1, last_week_2, last_week_3, last_week_4], ignore_index=True)
    results = results.to_json(orient='values')
    return results


# Top 6 activities of a particular user
@app.route("/top-six-activities/<user_id>")
def top_six_activities(user_id):
    merger = pandas.merge(activities, tracked_activities, left_on='activity_blueprint_id', right_on='activity_blueprint_id', how='inner')
    merger = merger[(merger['user_id'] == user_id)]

    weeks_per_activity = merger.groupby(['name'])['time_start'].size().reset_index()
    time_spent_per_activity = merger.groupby(['name'])['duration_minutes'].sum().reset_index()
    top_activities = pandas.merge(weeks_per_activity, time_spent_per_activity, left_on='name', right_on='name')
    top_activities = top_activities[['name', 'time_start', 'duration_minutes']].sort_values('duration_minutes', ascending=False).head(6)
    return top_activities


# single random suggestion
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
        print("Error while connecting to PostgreSQL", error)
    finally:
        if connection:
            cursor.close()


def send_suggestion():
    interval = 15
    active = True
    settings_id = None
    device_tokens = None
    while True:
        query_str = "select * from suggestion_settings limit 1"
        query(query_str, (settings_id, interval, active))

        if not active:
            time.sleep(interval*60)
            continue
        query_device_tokens = "select(device_token) from app_user where device_token NOTNULL and " \
                              "device_token not like ''"
        res = query(query_device_tokens, device_tokens)
        headers = {
            "Authorization": FIREBASE_PUSH_KEY,
            "Content-Type": "application/json"
        }
        for token_tuple in res:
            data = {
                "notification": {
                    "title": "Time to refresh",
                    "text": "Check out new activity suggestion delivered specially for you!",
                    "badge": 1,
                    "sound": "default"
                },
                "data": {"type": "suggestion"},
                "priority": "High",
                "to": token_tuple[0]
            }
            data = json.dumps(data)
            requests.post(FIREBASE_PUSH_URL, data=data, headers=headers)

        time.sleep(interval*60)


suggestion_thread = Thread(target=send_suggestion, args=())
suggestion_thread.start()
