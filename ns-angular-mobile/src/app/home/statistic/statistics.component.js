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
    }
    StatisticsComponent.prototype.ngOnInit = function () {
        this.getStatistics();
        // this.statistics = this.statisticService.getStatistics();
    };
    StatisticsComponent.prototype.getStatistics = function () {
        var _this = this;
        this.hasData = false;
        this.statisticService.getStatistics().subscribe(function (statistics) {
            console.log('statistics response');
            console.log(statistics);
            _this.statistics = statistics;
            _this.pieSource = statistics;
            _this.hasData = true;
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGlzdGljcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGF0aXN0aWNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUdsRCx5REFBdUQ7QUFjdkQ7SUFPSSw4SUFBOEk7SUFDOUksaUhBQWlIO0lBQ2pILDZCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVB0RCxZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ2xCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO0lBTThCLENBQUM7SUFFM0Qsc0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQiwyREFBMkQ7SUFDL0QsQ0FBQztJQUVELDJDQUFhLEdBQWI7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxVQUFVO1lBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzdCLEtBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO1lBQzVCLEtBQUksQ0FBQyxPQUFPLEdBQUMsSUFBSSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXpCUSxtQkFBbUI7UUFSL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBR3ZDLENBQUM7eUNBVXdDLG9DQUFnQjtPQVQ3QyxtQkFBbUIsQ0EwQi9CO0lBQUQsMEJBQUM7Q0FBQSxBQTFCRCxJQTBCQztBQTFCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFN0YXRpc3RpYyB9IGZyb20gXCIuL3N0YXRpc3RpY1wiO1xuaW1wb3J0IHsgU3RhdGlzdGljU2VydmljZSB9IGZyb20gXCIuL3N0YXRpc3RpYy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBcHBTZXR0aW5ncyB9IGZyb20gXCJ+L2FwcC9hcHAtc2V0dGluZ3NcIjtcbmltcG9ydCAqIGFzIGNoYXJ0TW9kdWxlIGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2hhcnRcIjtcblxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1zdGF0aXN0aWNzXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3N0YXRpc3RpY3MuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vc3RhdGlzdGljLXN0eWxlLmNzc1wiXSxcbiAgICAvLyB0ZW1wbGF0ZTogYDxBY3Rpb25CYXIgdGl0bGU9XCJBcHBsaWNhdGlvbiBUaXRsZVwiPjwvQWN0aW9uQmFyPmBcblxufSlcbmV4cG9ydCBjbGFzcyBTdGF0aXN0aWNzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBzdGF0aXN0aWNzOiBTdGF0aXN0aWNbXTtcbiAgICBoYXNEYXRhOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIGJvdHRvbUJhclNob3cgPSB0cnVlO1xuXG4gICAgcGllU291cmNlOiBTdGF0aXN0aWNbXTtcblxuICAgIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBGcmllbmRTZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLlxuICAgIC8vIEFuZ3VsYXIga25vd3MgYWJvdXQgdGhpcyBzZXJ2aWNlIGJlY2F1c2UgaXQgaXMgaW5jbHVkZWQgaW4geW91ciBhcHDigJlzIG1haW4gTmdNb2R1bGUsIGRlZmluZWQgaW4gYXBwLm1vZHVsZS50cy5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0YXRpc3RpY1NlcnZpY2U6IFN0YXRpc3RpY1NlcnZpY2UpIHsgfVxuICAgIFxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdldFN0YXRpc3RpY3MoKTtcbiAgICAgICAgLy8gdGhpcy5zdGF0aXN0aWNzID0gdGhpcy5zdGF0aXN0aWNTZXJ2aWNlLmdldFN0YXRpc3RpY3MoKTtcbiAgICB9XG5cbiAgICBnZXRTdGF0aXN0aWNzKCkge1xuICAgICAgICB0aGlzLmhhc0RhdGEgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdGF0aXN0aWNTZXJ2aWNlLmdldFN0YXRpc3RpY3MoKS5zdWJzY3JpYmUoKHN0YXRpc3RpY3MpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdGF0aXN0aWNzIHJlc3BvbnNlJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0aXN0aWNzKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGlzdGljcyA9IHN0YXRpc3RpY3M7XG4gICAgICAgICAgICB0aGlzLnBpZVNvdXJjZSA9IHN0YXRpc3RpY3M7XG4gICAgICAgICAgICB0aGlzLmhhc0RhdGE9dHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==