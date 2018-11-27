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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGlzdGljcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGF0aXN0aWNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUdsRCx5REFBdUQ7QUFjdkQ7SUFnQkksOElBQThJO0lBQzlJLGlIQUFpSDtJQUNqSCw2QkFBb0IsV0FBNkI7UUFBN0IsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBaEIxQyxrQkFBYSxHQUFHLElBQUksQ0FBQztRQUM1QixjQUFTLEdBQTZDO1lBQ2xELEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQzFDLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQzNDLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQ3pDLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQ3hDLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQ3JDLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQ3ZDLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQ3pDLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQzFDLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1NBQ2hELENBQUM7SUFLdUQsQ0FBQztJQUV0RCxzQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUF0QlEsbUJBQW1CO1FBUi9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUd2QyxDQUFDO3lDQW1CbUMsb0NBQWdCO09BbEJ4QyxtQkFBbUIsQ0F1Qi9CO0lBQUQsMEJBQUM7Q0FBQSxBQXZCRCxJQXVCQztBQXZCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBTdGF0aXN0aWMgfSBmcm9tIFwiLi9zdGF0aXN0aWNcIjtcclxuaW1wb3J0IHsgU3RhdGlzdGljU2VydmljZSB9IGZyb20gXCIuL3N0YXRpc3RpYy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEFwcFNldHRpbmdzIH0gZnJvbSBcIn4vYXBwL2FwcC1zZXR0aW5nc1wiO1xyXG5pbXBvcnQgKiBhcyBjaGFydE1vZHVsZSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0XCI7XHJcblxyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xhYmVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLXN0YXRpc3RpY3NcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3N0YXRpc3RpY3MuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9zdGF0aXN0aWMtc3R5bGUuY3NzXCJdLFxyXG4gICAgLy8gdGVtcGxhdGU6IGA8QWN0aW9uQmFyIHRpdGxlPVwiQXBwbGljYXRpb24gVGl0bGVcIj48L0FjdGlvbkJhcj5gXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3RhdGlzdGljc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBpdGVtczogU3RhdGlzdGljW107XHJcbiAgICBwdWJsaWMgYm90dG9tQmFyU2hvdyA9IHRydWU7XHJcbiAgICBwaWVTb3VyY2U6IHthY3Rpdml0eV9uYW1lOiBzdHJpbmcsIGhvdXJzOiBudW1iZXJ9W10gPSBbXHJcbiAgICAgICAgeyBhY3Rpdml0eV9uYW1lOiAnQ2xlYW5pbmcnLCBob3VyczogMC4zMyB9LFxyXG4gICAgICAgIHsgYWN0aXZpdHlfbmFtZTogJ0NvbW11dGluZycsIGhvdXJzOiAxLjY2IH0sXHJcbiAgICAgICAgeyBhY3Rpdml0eV9uYW1lOiAnQ29va2luZycsIGhvdXJzOiAxLjMzIH0sXHJcbiAgICAgICAgeyBhY3Rpdml0eV9uYW1lOiAnRWF0aW5nJywgaG91cnM6IDEuMjUgfSxcclxuICAgICAgICB7IGFjdGl2aXR5X25hbWU6ICdHeW0nLCBob3VyczogMi4wMCB9LFxyXG4gICAgICAgIHsgYWN0aXZpdHlfbmFtZTogJ011c2ljJywgaG91cnM6IDAuNzUgfSxcclxuICAgICAgICB7IGFjdGl2aXR5X25hbWU6ICdSZWFkaW5nJywgaG91cnM6IDEuMDAgfSxcclxuICAgICAgICB7IGFjdGl2aXR5X25hbWU6ICdTdHVkeWluZycsIGhvdXJzOiA1LjUwIH0sXHJcbiAgICAgICAgeyBhY3Rpdml0eV9uYW1lOiAnV29ya2luZycsIGhvdXJzOiA4LjAwIH1cclxuXTtcclxuXHJcblxyXG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEZyaWVuZFNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuXHJcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGl0ZW1TZXJ2aWNlOiBTdGF0aXN0aWNTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtcygpO1xyXG4gICAgfVxyXG59Il19