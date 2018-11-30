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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGlzdGljcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGF0aXN0aWNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUdsRCx5REFBdUQ7QUFjdkQ7SUFNSSw4SUFBOEk7SUFDOUksaUhBQWlIO0lBQ2pILDZCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQU4vQyxrQkFBYSxHQUFHLElBQUksQ0FBQztJQU04QixDQUFDO0lBRTNELHNDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxVQUFVO1lBQ3ZELEtBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzdCLEtBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO1lBQzVCLDJCQUEyQjtRQUMvQixDQUFDLENBQUMsQ0FBQztRQUNILDJEQUEyRDtJQUMvRCxDQUFDO0lBakJRLG1CQUFtQjtRQVIvQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FHdkMsQ0FBQzt5Q0FTd0Msb0NBQWdCO09BUjdDLG1CQUFtQixDQWtCL0I7SUFBRCwwQkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgU3RhdGlzdGljIH0gZnJvbSBcIi4vc3RhdGlzdGljXCI7XG5pbXBvcnQgeyBTdGF0aXN0aWNTZXJ2aWNlIH0gZnJvbSBcIi4vc3RhdGlzdGljLnNlcnZpY2VcIjtcbmltcG9ydCB7IEFwcFNldHRpbmdzIH0gZnJvbSBcIn4vYXBwL2FwcC1zZXR0aW5nc1wiO1xuaW1wb3J0ICogYXMgY2hhcnRNb2R1bGUgZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jaGFydFwiO1xuXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xhYmVsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLXN0YXRpc3RpY3NcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc3RhdGlzdGljcy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9zdGF0aXN0aWMtc3R5bGUuY3NzXCJdLFxuICAgIC8vIHRlbXBsYXRlOiBgPEFjdGlvbkJhciB0aXRsZT1cIkFwcGxpY2F0aW9uIFRpdGxlXCI+PC9BY3Rpb25CYXI+YFxuXG59KVxuZXhwb3J0IGNsYXNzIFN0YXRpc3RpY3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHN0YXRpc3RpY3M6IFN0YXRpc3RpY1tdO1xuICAgIHB1YmxpYyBib3R0b21CYXJTaG93ID0gdHJ1ZTtcblxuICAgIHBpZVNvdXJjZTogU3RhdGlzdGljW107XG5cbiAgICAvLyBUaGlzIHBhdHRlcm4gbWFrZXMgdXNlIG9mIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGltcGxlbWVudGF0aW9uIHRvIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgRnJpZW5kU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy5cbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdGF0aXN0aWNTZXJ2aWNlOiBTdGF0aXN0aWNTZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRpc3RpY1NlcnZpY2UuZ2V0U3RhdGlzdGljcygpLnN1YnNjcmliZSgoc3RhdGlzdGljcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGF0aXN0aWNzID0gc3RhdGlzdGljcztcbiAgICAgICAgICAgIHRoaXMucGllU291cmNlID0gc3RhdGlzdGljcztcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN0YXRpc3RpY3MpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gdGhpcy5zdGF0aXN0aWNzID0gdGhpcy5zdGF0aXN0aWNTZXJ2aWNlLmdldFN0YXRpc3RpY3MoKTtcbiAgICB9XG59Il19