from flask import Flask
app = Flask(__name__)
import psycopg2



connection = psycopg2.connect(user = "youmind",
        password = "ksdjfj434ESADesFesafseFasdfae3",
        host = "127.0.0.1",
        port = "5432",
        database = "mindyou")


@app.route('/')
@app.route('/index')
def index():
    return "Hello, World!"

@app.route("/data/<section>")
def data(section):
    return section

@app.route("/activities")
def getActivities():
    try:
        cursor = connection.cursor()
        query = '''select ta.activity_blueprint_id, ta.time_start, ta.duration_minutes
                   from tracked_activity ta
                   join app_user au
                   on au.user_id = ta.user_id
                   where ta.user_id = '6'
                   and ta.duration_minutes is NOT NULL'''
        cursor.execute("SELECT version();")
        record = cursor.fetchone()
    except (Exception, psycopg2.Error) as error :
        print ("Error while connecting to PostgreSQL", error)
    finally:
        if(connection):
            cursor.close()
            connection.close()
            print("PostgreSQL connection is closed")



