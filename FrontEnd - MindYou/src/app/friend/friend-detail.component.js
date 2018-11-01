"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var friend_service_1 = require("./friend.service");
var FriendDetailComponent = /** @class */ (function () {
    function FriendDetailComponent(itemService, route) {
        this.itemService = itemService;
        this.route = route;
    }
    FriendDetailComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.params["id"];
        this.item = this.itemService.getItem(id);
    };
    FriendDetailComponent = __decorate([
        core_1.Component({
            selector: "ns-details",
            moduleId: module.id,
            templateUrl: "./friend-detail.component.html",
        }),
        __metadata("design:paramtypes", [friend_service_1.FriendService,
            router_1.ActivatedRoute])
    ], FriendDetailComponent);
    return FriendDetailComponent;
}());
exports.FriendDetailComponent = FriendDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJpZW5kLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmcmllbmQtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFHakQsbURBQWlEO0FBT2pEO0lBR0ksK0JBQ1ksV0FBMEIsRUFDMUIsS0FBcUI7UUFEckIsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFDMUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFDN0IsQ0FBQztJQUVMLHdDQUFRLEdBQVI7UUFDSSxJQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFYUSxxQkFBcUI7UUFMakMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsZ0NBQWdDO1NBQ2hELENBQUM7eUNBSzJCLDhCQUFhO1lBQ25CLHVCQUFjO09BTHhCLHFCQUFxQixDQVlqQztJQUFELDRCQUFDO0NBQUEsQUFaRCxJQVlDO0FBWlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEZyaWVuZCB9IGZyb20gXCIuL2ZyaWVuZFwiO1xuaW1wb3J0IHsgRnJpZW5kU2VydmljZSB9IGZyb20gXCIuL2ZyaWVuZC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWRldGFpbHNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZnJpZW5kLWRldGFpbC5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBGcmllbmREZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGl0ZW06IEZyaWVuZDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGl0ZW1TZXJ2aWNlOiBGcmllbmRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaWQgPSArdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJpZFwiXTtcbiAgICAgICAgdGhpcy5pdGVtID0gdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtKGlkKTtcbiAgICB9XG59XG4iXX0=