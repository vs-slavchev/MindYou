"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var statistic_service_1 = require("./statistic.service");
var StatisticDetailComponent = /** @class */ (function () {
    function StatisticDetailComponent(itemService, route) {
        this.itemService = itemService;
        this.route = route;
    }
    StatisticDetailComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.params["id"];
        this.item = this.itemService.getItem(id);
    };
    StatisticDetailComponent = __decorate([
        core_1.Component({
            selector: "ns-details",
            moduleId: module.id,
            templateUrl: "./statistic-detail.component.html",
        }),
        __metadata("design:paramtypes", [statistic_service_1.StatisticService,
            router_1.ActivatedRoute])
    ], StatisticDetailComponent);
    return StatisticDetailComponent;
}());
exports.StatisticDetailComponent = StatisticDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGlzdGljLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGF0aXN0aWMtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFHakQseURBQXVEO0FBT3ZEO0lBR0ksa0NBQ1ksV0FBNkIsRUFDN0IsS0FBcUI7UUFEckIsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQzdCLFVBQUssR0FBTCxLQUFLLENBQWdCO0lBQzdCLENBQUM7SUFFTCwyQ0FBUSxHQUFSO1FBQ0ksSUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBWFEsd0JBQXdCO1FBTHBDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLG1DQUFtQztTQUNuRCxDQUFDO3lDQUsyQixvQ0FBZ0I7WUFDdEIsdUJBQWM7T0FMeEIsd0JBQXdCLENBWXBDO0lBQUQsK0JBQUM7Q0FBQSxBQVpELElBWUM7QUFaWSw0REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgU3RhdGlzdGljIH0gZnJvbSBcIi4vc3RhdGlzdGljXCI7XG5pbXBvcnQgeyBTdGF0aXN0aWNTZXJ2aWNlIH0gZnJvbSBcIi4vc3RhdGlzdGljLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtZGV0YWlsc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zdGF0aXN0aWMtZGV0YWlsLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIFN0YXRpc3RpY0RldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaXRlbTogU3RhdGlzdGljO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgaXRlbVNlcnZpY2U6IFN0YXRpc3RpY1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBpZCA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xuICAgICAgICB0aGlzLml0ZW0gPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW0oaWQpO1xuICAgIH1cbn1cbiJdfQ==