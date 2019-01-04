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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGlzdGljcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGF0aXN0aWNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUdsRCx5REFBdUQ7QUFjdkQ7SUFPSSw4SUFBOEk7SUFDOUksaUhBQWlIO0lBQ2pILDZCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVB0RCxZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ2xCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO0lBTThCLENBQUM7SUFFM0Qsc0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQiwyREFBMkQ7SUFDL0QsQ0FBQztJQUVELDJDQUFhLEdBQWI7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxVQUFVO1lBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzdCLEtBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO1lBQzVCLEtBQUksQ0FBQyxPQUFPLEdBQUMsSUFBSSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXpCUSxtQkFBbUI7UUFSL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBR3ZDLENBQUM7eUNBVXdDLG9DQUFnQjtPQVQ3QyxtQkFBbUIsQ0EwQi9CO0lBQUQsMEJBQUM7Q0FBQSxBQTFCRCxJQTBCQztBQTFCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBTdGF0aXN0aWMgfSBmcm9tIFwiLi9zdGF0aXN0aWNcIjtcclxuaW1wb3J0IHsgU3RhdGlzdGljU2VydmljZSB9IGZyb20gXCIuL3N0YXRpc3RpYy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEFwcFNldHRpbmdzIH0gZnJvbSBcIn4vYXBwL2FwcC1zZXR0aW5nc1wiO1xyXG5pbXBvcnQgKiBhcyBjaGFydE1vZHVsZSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0XCI7XHJcblxyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xhYmVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLXN0YXRpc3RpY3NcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3N0YXRpc3RpY3MuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9zdGF0aXN0aWMtc3R5bGUuY3NzXCJdLFxyXG4gICAgLy8gdGVtcGxhdGU6IGA8QWN0aW9uQmFyIHRpdGxlPVwiQXBwbGljYXRpb24gVGl0bGVcIj48L0FjdGlvbkJhcj5gXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3RhdGlzdGljc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBzdGF0aXN0aWNzOiBTdGF0aXN0aWNbXTtcclxuICAgIGhhc0RhdGE6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBib3R0b21CYXJTaG93ID0gdHJ1ZTtcclxuXHJcbiAgICBwaWVTb3VyY2U6IFN0YXRpc3RpY1tdO1xyXG5cclxuICAgIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBGcmllbmRTZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLlxyXG4gICAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSwgZGVmaW5lZCBpbiBhcHAubW9kdWxlLnRzLlxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdGF0aXN0aWNTZXJ2aWNlOiBTdGF0aXN0aWNTZXJ2aWNlKSB7IH1cclxuICAgIFxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5nZXRTdGF0aXN0aWNzKCk7XHJcbiAgICAgICAgLy8gdGhpcy5zdGF0aXN0aWNzID0gdGhpcy5zdGF0aXN0aWNTZXJ2aWNlLmdldFN0YXRpc3RpY3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdGF0aXN0aWNzKCkge1xyXG4gICAgICAgIHRoaXMuaGFzRGF0YSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3RhdGlzdGljU2VydmljZS5nZXRTdGF0aXN0aWNzKCkuc3Vic2NyaWJlKChzdGF0aXN0aWNzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdGF0aXN0aWNzIHJlc3BvbnNlJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRpc3RpY3MpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRpc3RpY3MgPSBzdGF0aXN0aWNzO1xyXG4gICAgICAgICAgICB0aGlzLnBpZVNvdXJjZSA9IHN0YXRpc3RpY3M7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzRGF0YT10cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19