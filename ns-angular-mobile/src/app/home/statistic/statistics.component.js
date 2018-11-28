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
            { Brand: 'Audi', Amount: 10 },
            { Brand: 'Mercedes', Amount: 76 },
            { Brand: 'Fiat', Amount: 60 },
            { Brand: 'BMW', Amount: 24 },
            { Brand: 'Crysler', Amount: 40 }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGlzdGljcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGF0aXN0aWNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUdsRCx5REFBdUQ7QUFVdkQ7SUFZSSw4SUFBOEk7SUFDOUksaUhBQWlIO0lBQ2pILDZCQUFvQixXQUE2QjtRQUE3QixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFaMUMsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDNUIsY0FBUyxHQUFzQztZQUMzQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRTtZQUM3QixFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRTtZQUNqQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRTtZQUM3QixFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRTtZQUM1QixFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRTtTQUN2QyxDQUFDO0lBS3VELENBQUM7SUFFdEQsc0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBbEJRLG1CQUFtQjtRQVAvQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FFdkMsQ0FBQzt5Q0FlbUMsb0NBQWdCO09BZHhDLG1CQUFtQixDQW1CL0I7SUFBRCwwQkFBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgU3RhdGlzdGljIH0gZnJvbSBcIi4vc3RhdGlzdGljXCI7XG5pbXBvcnQgeyBTdGF0aXN0aWNTZXJ2aWNlIH0gZnJvbSBcIi4vc3RhdGlzdGljLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGNoYXJ0TW9kdWxlIGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2hhcnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtc3RhdGlzdGljc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zdGF0aXN0aWNzLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3N0YXRpc3RpYy1zdHlsZS5jc3NcIl0sXG4gICAgLy8gdGVtcGxhdGU6IGA8QWN0aW9uQmFyIHRpdGxlPVwiQXBwbGljYXRpb24gVGl0bGVcIj48L0FjdGlvbkJhcj5gXG59KVxuZXhwb3J0IGNsYXNzIFN0YXRpc3RpY3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGl0ZW1zOiBTdGF0aXN0aWNbXTtcbiAgICBwdWJsaWMgYm90dG9tQmFyU2hvdyA9IHRydWU7XG4gICAgcGllU291cmNlOiB7QnJhbmQ6IHN0cmluZywgQW1vdW50OiBudW1iZXJ9W10gPSBbXG4gICAgICAgIHsgQnJhbmQ6ICdBdWRpJywgQW1vdW50OiAxMCB9LFxuICAgICAgICB7IEJyYW5kOiAnTWVyY2VkZXMnLCBBbW91bnQ6IDc2IH0sXG4gICAgICAgIHsgQnJhbmQ6ICdGaWF0JywgQW1vdW50OiA2MCB9LFxuICAgICAgICB7IEJyYW5kOiAnQk1XJywgQW1vdW50OiAyNCB9LFxuICAgICAgICB7IEJyYW5kOiAnQ3J5c2xlcicsIEFtb3VudDogNDAgfVxuXTtcblxuXG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEZyaWVuZFNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuXG4gICAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSwgZGVmaW5lZCBpbiBhcHAubW9kdWxlLnRzLlxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbVNlcnZpY2U6IFN0YXRpc3RpY1NlcnZpY2UpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zKCk7XG4gICAgfVxufSJdfQ==