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

heroes = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornad" },
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornad" }
]

class Heroes(Resource):
    def get(self):
        return heroes, 200

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
api.add_resource(Heroes, "/heroes/")

app.run(debug=True, host='0.0.0.0')

