"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var StatisticService = /** @class */ (function () {
    function StatisticService() {
        this.items = new Array({ id: 1, name: "statistic 1", role: "Goalkeeper" }, { id: 3, name: "statistic 2", role: "Defender" }, { id: 4, name: "statistic 3", role: "Midfielder" }, { id: 5, name: "Sergio", role: "Midfielder" }, { id: 6, name: "Denis Suárez", role: "Midfielder" }, { id: 7, name: "Arda", role: "Midfielder" }, { id: 8, name: "A. Iniesta", role: "Midfielder" }, { id: 9, name: "Suárez", role: "Forward" }, { id: 10, name: "Messi", role: "Forward" }, { id: 11, name: "Neymar", role: "Forward" }, { id: 12, name: "Rafinha", role: "Midfielder" }, { id: 13, name: "Cillessen", role: "Goalkeeper" }, { id: 14, name: "Mascherano", role: "Defender" }, { id: 17, name: "Paco Alcácer", role: "Forward" }, { id: 18, name: "Jordi Alba", role: "Defender" }, { id: 19, name: "Digne", role: "Defender" }, { id: 20, name: "Sergi Roberto", role: "Midfielder" }, { id: 21, name: "André Gomes", role: "Midfielder" }, { id: 22, name: "Aleix Vidal", role: "Midfielder" }, { id: 23, name: "Umtiti", role: "Defender" }, { id: 24, name: "Mathieu", role: "Defender" }, { id: 25, name: "Masip", role: "Goalkeeper" });
    }
    StatisticService.prototype.getItems = function () {
        return this.items;
    };
    StatisticService.prototype.getItem = function (id) {
        return this.items.filter(function (item) { return item.id === id; })[0];
    };
    StatisticService = __decorate([
        core_1.Injectable()
    ], StatisticService);
    return StatisticService;
}());
exports.StatisticService = StatisticService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGlzdGljLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGF0aXN0aWMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUszQztJQURBO1FBRVksVUFBSyxHQUFHLElBQUksS0FBSyxDQUNyQixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQ2xELEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFDaEQsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUNsRCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQzdDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDbkQsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUMzQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQ2pELEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsRUFDMUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUMxQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQzNDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDL0MsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUNqRCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQ2hELEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsRUFDakQsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUNoRCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQzNDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDckQsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUNuRCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQ25ELEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFDNUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUM3QyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLENBQ2hELENBQUM7SUFTTixDQUFDO0lBUEcsbUNBQVEsR0FBUjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxrQ0FBTyxHQUFQLFVBQVEsRUFBVTtRQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFkLENBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFoQ1EsZ0JBQWdCO1FBRDVCLGlCQUFVLEVBQUU7T0FDQSxnQkFBZ0IsQ0FpQzVCO0lBQUQsdUJBQUM7Q0FBQSxBQWpDRCxJQWlDQztBQWpDWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgU3RhdGlzdGljIH0gZnJvbSBcIi4vc3RhdGlzdGljXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdGF0aXN0aWNTZXJ2aWNlIHtcbiAgICBwcml2YXRlIGl0ZW1zID0gbmV3IEFycmF5PFN0YXRpc3RpYz4oXG4gICAgICAgIHsgaWQ6IDEsIG5hbWU6IFwic3RhdGlzdGljIDFcIiwgcm9sZTogXCJHb2Fsa2VlcGVyXCIgfSxcbiAgICAgICAgeyBpZDogMywgbmFtZTogXCJzdGF0aXN0aWMgMlwiLCByb2xlOiBcIkRlZmVuZGVyXCIgfSxcbiAgICAgICAgeyBpZDogNCwgbmFtZTogXCJzdGF0aXN0aWMgM1wiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiB9LFxuICAgICAgICB7IGlkOiA1LCBuYW1lOiBcIlNlcmdpb1wiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiB9LFxuICAgICAgICB7IGlkOiA2LCBuYW1lOiBcIkRlbmlzIFN1w6FyZXpcIiwgcm9sZTogXCJNaWRmaWVsZGVyXCIgfSxcbiAgICAgICAgeyBpZDogNywgbmFtZTogXCJBcmRhXCIsIHJvbGU6IFwiTWlkZmllbGRlclwiIH0sXG4gICAgICAgIHsgaWQ6IDgsIG5hbWU6IFwiQS4gSW5pZXN0YVwiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiB9LFxuICAgICAgICB7IGlkOiA5LCBuYW1lOiBcIlN1w6FyZXpcIiwgcm9sZTogXCJGb3J3YXJkXCIgfSxcbiAgICAgICAgeyBpZDogMTAsIG5hbWU6IFwiTWVzc2lcIiwgcm9sZTogXCJGb3J3YXJkXCIgfSxcbiAgICAgICAgeyBpZDogMTEsIG5hbWU6IFwiTmV5bWFyXCIsIHJvbGU6IFwiRm9yd2FyZFwiIH0sXG4gICAgICAgIHsgaWQ6IDEyLCBuYW1lOiBcIlJhZmluaGFcIiwgcm9sZTogXCJNaWRmaWVsZGVyXCIgfSxcbiAgICAgICAgeyBpZDogMTMsIG5hbWU6IFwiQ2lsbGVzc2VuXCIsIHJvbGU6IFwiR29hbGtlZXBlclwiIH0sXG4gICAgICAgIHsgaWQ6IDE0LCBuYW1lOiBcIk1hc2NoZXJhbm9cIiwgcm9sZTogXCJEZWZlbmRlclwiIH0sXG4gICAgICAgIHsgaWQ6IDE3LCBuYW1lOiBcIlBhY28gQWxjw6FjZXJcIiwgcm9sZTogXCJGb3J3YXJkXCIgfSxcbiAgICAgICAgeyBpZDogMTgsIG5hbWU6IFwiSm9yZGkgQWxiYVwiLCByb2xlOiBcIkRlZmVuZGVyXCIgfSxcbiAgICAgICAgeyBpZDogMTksIG5hbWU6IFwiRGlnbmVcIiwgcm9sZTogXCJEZWZlbmRlclwiIH0sXG4gICAgICAgIHsgaWQ6IDIwLCBuYW1lOiBcIlNlcmdpIFJvYmVydG9cIiwgcm9sZTogXCJNaWRmaWVsZGVyXCIgfSxcbiAgICAgICAgeyBpZDogMjEsIG5hbWU6IFwiQW5kcsOpIEdvbWVzXCIsIHJvbGU6IFwiTWlkZmllbGRlclwiIH0sXG4gICAgICAgIHsgaWQ6IDIyLCBuYW1lOiBcIkFsZWl4IFZpZGFsXCIsIHJvbGU6IFwiTWlkZmllbGRlclwiIH0sXG4gICAgICAgIHsgaWQ6IDIzLCBuYW1lOiBcIlVtdGl0aVwiLCByb2xlOiBcIkRlZmVuZGVyXCIgfSxcbiAgICAgICAgeyBpZDogMjQsIG5hbWU6IFwiTWF0aGlldVwiLCByb2xlOiBcIkRlZmVuZGVyXCIgfSxcbiAgICAgICAgeyBpZDogMjUsIG5hbWU6IFwiTWFzaXBcIiwgcm9sZTogXCJHb2Fsa2VlcGVyXCIgfSxcbiAgICApO1xuXG4gICAgZ2V0SXRlbXMoKTogU3RhdGlzdGljW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcztcbiAgICB9XG5cbiAgICBnZXRJdGVtKGlkOiBudW1iZXIpOiBTdGF0aXN0aWMge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09PSBpZClbMF07XG4gICAgfVxufVxuIl19