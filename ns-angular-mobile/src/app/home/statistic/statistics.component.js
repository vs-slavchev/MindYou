"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var statistic_service_1 = require("./statistic.service");
var StatisticsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the FriendService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function StatisticsComponent(statisticService) {
        this.statisticService = statisticService;
        this.hasData = false;
        this.bottomBarShow = true;
        this.periods = ["Week", "Month", "Quarter", "Year"];
    }
    StatisticsComponent.prototype.ngOnInit = function () {
        this.picked = "week";
        this.getStatistics();
    };
    StatisticsComponent.prototype.getStatistics = function () {
        var _this = this;
        this.hasData = false;
        this.statistics = [];
        this.statisticService.getStatistics(this.picked.toLowerCase()).subscribe(function (statistics) {
            console.log('statistics response');
            console.log(statistics);
            _this.statistics = statistics;
            _this.pieSource = statistics;
            _this.hasData = true;
        });
    };
    StatisticsComponent.prototype.selectedIndexChanged = function (args) {
        try {
            var picker = args.object;
            console.log("selected index " + picker.selectedIndex + " length " + this.periods.length);
            this.picked = this.periods[picker.selectedIndex];
            this.getStatistics();
        }
        catch (e) {
            console.log(e);
        }
    };
    StatisticsComponent = __decorate([
        core_1.Component({
            selector: "ns-statistics",
            moduleId: module.id,
            templateUrl: "./statistics.component.html",
            styleUrls: ["./statistic-style.css"],
        }),
        __metadata("design:paramtypes", [statistic_service_1.StatisticService])
    ], StatisticsComponent);
    return StatisticsComponent;
}());
exports.StatisticsComponent = StatisticsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGlzdGljcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGF0aXN0aWNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUdsRCx5REFBdUQ7QUFldkQ7SUFTSSw4SUFBOEk7SUFDOUksaUhBQWlIO0lBQ2pILDZCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVR0RCxZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ2xCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLFlBQU8sR0FBYSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBT1AsQ0FBQztJQUUxRCxzQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCwyQ0FBYSxHQUFiO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxVQUFVO1lBQ2hGLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzdCLEtBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO1lBQzVCLEtBQUksQ0FBQyxPQUFPLEdBQUMsSUFBSSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLGtEQUFvQixHQUEzQixVQUE0QixJQUFJO1FBQzVCLElBQUk7WUFDQSxJQUFJLE1BQU0sR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQWtCLE1BQU0sQ0FBQyxhQUFhLGdCQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBUSxDQUFDLENBQUM7WUFDcEYsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDeEI7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEI7SUFFTCxDQUFDO0lBeENRLG1CQUFtQjtRQVIvQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FHdkMsQ0FBQzt5Q0FZd0Msb0NBQWdCO09BWDdDLG1CQUFtQixDQXlDL0I7SUFBRCwwQkFBQztDQUFBLEFBekNELElBeUNDO0FBekNZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IFN0YXRpc3RpYyB9IGZyb20gXCIuL3N0YXRpc3RpY1wiO1xyXG5pbXBvcnQgeyBTdGF0aXN0aWNTZXJ2aWNlIH0gZnJvbSBcIi4vc3RhdGlzdGljLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQXBwU2V0dGluZ3MgfSBmcm9tIFwifi9hcHAvYXBwLXNldHRpbmdzXCI7XHJcbmltcG9ydCAqIGFzIGNoYXJ0TW9kdWxlIGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2hhcnRcIjtcclxuXHJcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWxcIjtcclxuaW1wb3J0IHsgTGlzdFBpY2tlciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3QtcGlja2VyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLXN0YXRpc3RpY3NcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3N0YXRpc3RpY3MuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9zdGF0aXN0aWMtc3R5bGUuY3NzXCJdLFxyXG4gICAgLy8gdGVtcGxhdGU6IGA8QWN0aW9uQmFyIHRpdGxlPVwiQXBwbGljYXRpb24gVGl0bGVcIj48L0FjdGlvbkJhcj5gXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3RhdGlzdGljc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBzdGF0aXN0aWNzOiBTdGF0aXN0aWNbXTtcclxuICAgIGhhc0RhdGE6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBib3R0b21CYXJTaG93ID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBwZXJpb2RzOiBzdHJpbmdbXSA9IFtcIldlZWtcIiwgXCJNb250aFwiLCBcIlF1YXJ0ZXJcIiwgXCJZZWFyXCJdO1xyXG4gICAgcHVibGljIHBpY2tlZDogc3RyaW5nO1xyXG5cclxuICAgIHBpZVNvdXJjZTogU3RhdGlzdGljW107XHJcblxyXG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEZyaWVuZFNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuXHJcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0YXRpc3RpY1NlcnZpY2U6IFN0YXRpc3RpY1NlcnZpY2UpIHt9XHJcbiAgICBcclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGlja2VkID0gXCJ3ZWVrXCI7XHJcbiAgICAgICAgdGhpcy5nZXRTdGF0aXN0aWNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RhdGlzdGljcygpIHtcclxuICAgICAgICB0aGlzLmhhc0RhdGEgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0YXRpc3RpY3MgPSBbXTtcclxuICAgICAgICB0aGlzLnN0YXRpc3RpY1NlcnZpY2UuZ2V0U3RhdGlzdGljcyh0aGlzLnBpY2tlZC50b0xvd2VyQ2FzZSgpKS5zdWJzY3JpYmUoKHN0YXRpc3RpY3MpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0YXRpc3RpY3MgcmVzcG9uc2UnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdGlzdGljcyk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGlzdGljcyA9IHN0YXRpc3RpY3M7XHJcbiAgICAgICAgICAgIHRoaXMucGllU291cmNlID0gc3RhdGlzdGljcztcclxuICAgICAgICAgICAgdGhpcy5oYXNEYXRhPXRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbGVjdGVkSW5kZXhDaGFuZ2VkKGFyZ3MpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgcGlja2VyID0gPExpc3RQaWNrZXI+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzZWxlY3RlZCBpbmRleCAke3BpY2tlci5zZWxlY3RlZEluZGV4fSBsZW5ndGggJHt0aGlzLnBlcmlvZHMubGVuZ3RofWApO1xyXG4gICAgICAgICAgICB0aGlzLnBpY2tlZCA9IHRoaXMucGVyaW9kc1twaWNrZXIuc2VsZWN0ZWRJbmRleF07XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0U3RhdGlzdGljcygpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSJdfQ==