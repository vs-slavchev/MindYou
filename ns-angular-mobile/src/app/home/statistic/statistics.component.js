"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var statistic_service_1 = require("./statistic.service");
var StatisticsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the FriendService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function StatisticsComponent(statisticService) {
        this.statisticService = statisticService;
        this.bottomBarShow = true;
    }
    StatisticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.statisticService.getStatistics().subscribe(function (statistics) {
            _this.statistics = statistics;
            _this.pieSource = statistics;
            // console.log(statistics);
        });
        // this.statistics = this.statisticService.getStatistics();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGlzdGljcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGF0aXN0aWNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUdsRCx5REFBdUQ7QUFjdkQ7SUFNSSw4SUFBOEk7SUFDOUksaUhBQWlIO0lBQ2pILDZCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQU4vQyxrQkFBYSxHQUFHLElBQUksQ0FBQztJQU04QixDQUFDO0lBRTNELHNDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxVQUFVO1lBQ3ZELEtBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzdCLEtBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO1lBQzVCLDJCQUEyQjtRQUMvQixDQUFDLENBQUMsQ0FBQztRQUNILDJEQUEyRDtJQUMvRCxDQUFDO0lBakJRLG1CQUFtQjtRQVIvQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FHdkMsQ0FBQzt5Q0FTd0Msb0NBQWdCO09BUjdDLG1CQUFtQixDQWtCL0I7SUFBRCwwQkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IFN0YXRpc3RpYyB9IGZyb20gXCIuL3N0YXRpc3RpY1wiO1xyXG5pbXBvcnQgeyBTdGF0aXN0aWNTZXJ2aWNlIH0gZnJvbSBcIi4vc3RhdGlzdGljLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQXBwU2V0dGluZ3MgfSBmcm9tIFwifi9hcHAvYXBwLXNldHRpbmdzXCI7XHJcbmltcG9ydCAqIGFzIGNoYXJ0TW9kdWxlIGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2hhcnRcIjtcclxuXHJcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtc3RhdGlzdGljc1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc3RhdGlzdGljcy5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL3N0YXRpc3RpYy1zdHlsZS5jc3NcIl0sXHJcbiAgICAvLyB0ZW1wbGF0ZTogYDxBY3Rpb25CYXIgdGl0bGU9XCJBcHBsaWNhdGlvbiBUaXRsZVwiPjwvQWN0aW9uQmFyPmBcclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdGF0aXN0aWNzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHN0YXRpc3RpY3M6IFN0YXRpc3RpY1tdO1xyXG4gICAgcHVibGljIGJvdHRvbUJhclNob3cgPSB0cnVlO1xyXG5cclxuICAgIHBpZVNvdXJjZTogU3RhdGlzdGljW107XHJcblxyXG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEZyaWVuZFNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuXHJcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0YXRpc3RpY1NlcnZpY2U6IFN0YXRpc3RpY1NlcnZpY2UpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3RhdGlzdGljU2VydmljZS5nZXRTdGF0aXN0aWNzKCkuc3Vic2NyaWJlKChzdGF0aXN0aWNzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGlzdGljcyA9IHN0YXRpc3RpY3M7XHJcbiAgICAgICAgICAgIHRoaXMucGllU291cmNlID0gc3RhdGlzdGljcztcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3RhdGlzdGljcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gdGhpcy5zdGF0aXN0aWNzID0gdGhpcy5zdGF0aXN0aWNTZXJ2aWNlLmdldFN0YXRpc3RpY3MoKTtcclxuICAgIH1cclxufSJdfQ==