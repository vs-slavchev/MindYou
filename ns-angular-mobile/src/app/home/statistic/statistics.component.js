"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var statistic_service_1 = require("./statistic.service");
var StatisticsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the FriendService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function StatisticsComponent(itemService) {
        this.itemService = itemService;
        this.bottomBarShow = true;
        this.pieSource = [
            { activity_name: 'Cleaning', hours: 0.33 },
            { activity_name: 'Commuting', hours: 1.66 },
            { activity_name: 'Cooking', hours: 1.33 },
            { activity_name: 'Eating', hours: 1.25 },
            { activity_name: 'Gym', hours: 2.00 },
            { activity_name: 'Music', hours: 0.75 },
            { activity_name: 'Reading', hours: 1.00 },
            { activity_name: 'Studying', hours: 5.50 },
            { activity_name: 'Working', hours: 8.00 }
        ];
    }
    StatisticsComponent.prototype.ngOnInit = function () {
        this.items = this.itemService.getItems();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGlzdGljcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGF0aXN0aWNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUdsRCx5REFBdUQ7QUFjdkQ7SUFnQkksOElBQThJO0lBQzlJLGlIQUFpSDtJQUNqSCw2QkFBb0IsV0FBNkI7UUFBN0IsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBaEIxQyxrQkFBYSxHQUFHLElBQUksQ0FBQztRQUM1QixjQUFTLEdBQTZDO1lBQ2xELEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQzFDLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQzNDLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQ3pDLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQ3hDLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQ3JDLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQ3ZDLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQ3pDLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQzFDLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1NBQzVDLENBQUM7SUFLbUQsQ0FBQztJQUV0RCxzQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUF0QlEsbUJBQW1CO1FBUi9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUd2QyxDQUFDO3lDQW1CbUMsb0NBQWdCO09BbEJ4QyxtQkFBbUIsQ0F1Qi9CO0lBQUQsMEJBQUM7Q0FBQSxBQXZCRCxJQXVCQztBQXZCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFN0YXRpc3RpYyB9IGZyb20gXCIuL3N0YXRpc3RpY1wiO1xuaW1wb3J0IHsgU3RhdGlzdGljU2VydmljZSB9IGZyb20gXCIuL3N0YXRpc3RpYy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBcHBTZXR0aW5ncyB9IGZyb20gXCJ+L2FwcC9hcHAtc2V0dGluZ3NcIjtcbmltcG9ydCAqIGFzIGNoYXJ0TW9kdWxlIGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2hhcnRcIjtcblxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1zdGF0aXN0aWNzXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3N0YXRpc3RpY3MuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vc3RhdGlzdGljLXN0eWxlLmNzc1wiXSxcbiAgICAvLyB0ZW1wbGF0ZTogYDxBY3Rpb25CYXIgdGl0bGU9XCJBcHBsaWNhdGlvbiBUaXRsZVwiPjwvQWN0aW9uQmFyPmBcblxufSlcbmV4cG9ydCBjbGFzcyBTdGF0aXN0aWNzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpdGVtczogU3RhdGlzdGljW107XG4gICAgcHVibGljIGJvdHRvbUJhclNob3cgPSB0cnVlO1xuICAgIHBpZVNvdXJjZToge2FjdGl2aXR5X25hbWU6IHN0cmluZywgaG91cnM6IG51bWJlcn1bXSA9IFtcbiAgICAgICAgeyBhY3Rpdml0eV9uYW1lOiAnQ2xlYW5pbmcnLCBob3VyczogMC4zMyB9LFxuICAgICAgICB7IGFjdGl2aXR5X25hbWU6ICdDb21tdXRpbmcnLCBob3VyczogMS42NiB9LFxuICAgICAgICB7IGFjdGl2aXR5X25hbWU6ICdDb29raW5nJywgaG91cnM6IDEuMzMgfSxcbiAgICAgICAgeyBhY3Rpdml0eV9uYW1lOiAnRWF0aW5nJywgaG91cnM6IDEuMjUgfSxcbiAgICAgICAgeyBhY3Rpdml0eV9uYW1lOiAnR3ltJywgaG91cnM6IDIuMDAgfSxcbiAgICAgICAgeyBhY3Rpdml0eV9uYW1lOiAnTXVzaWMnLCBob3VyczogMC43NSB9LFxuICAgICAgICB7IGFjdGl2aXR5X25hbWU6ICdSZWFkaW5nJywgaG91cnM6IDEuMDAgfSxcbiAgICAgICAgeyBhY3Rpdml0eV9uYW1lOiAnU3R1ZHlpbmcnLCBob3VyczogNS41MCB9LFxuICAgICAgICB7IGFjdGl2aXR5X25hbWU6ICdXb3JraW5nJywgaG91cnM6IDguMDAgfVxuICAgIF07XG5cblxuICAgIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBGcmllbmRTZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLlxuICAgIC8vIEFuZ3VsYXIga25vd3MgYWJvdXQgdGhpcyBzZXJ2aWNlIGJlY2F1c2UgaXQgaXMgaW5jbHVkZWQgaW4geW91ciBhcHDigJlzIG1haW4gTmdNb2R1bGUsIGRlZmluZWQgaW4gYXBwLm1vZHVsZS50cy5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGl0ZW1TZXJ2aWNlOiBTdGF0aXN0aWNTZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtcygpO1xuICAgIH1cbn0iXX0=