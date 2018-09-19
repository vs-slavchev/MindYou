from flask import Flask
from flask_restful import Api, Resource, reqparse

app = Flask(__name__)
api = Api(app)

stats = [
    {
        "activity": "swimming",
        "totalHours": "58",
        "timePercentage": "7"
    },
    {
        "activity": "cooking",
        "totalHours": "21",
        "timePercentage": "2"
    }
]

class Stat(Resource):
    def get(self, activity):
        for stat in stats:
            if(activity == stat["activity"]):
                return stat, 200
        return "activity not found", 404

    def post(self, activity):
        return "activity not found", 404

    def put(self, name):
        return "activity not found", 404

    def delete(self, name):
        return "activity not found", 404
      
      
api.add_resource(Stat, "/activity/<string:activity>")

app.run(debug=True, host='0.0.0.0')

