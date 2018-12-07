"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var friend_service_1 = require("./friend.service");
var app_settings_1 = require("~/app/app-settings");
var FriendDetailComponent = /** @class */ (function () {
    function FriendDetailComponent(friendService, route) {
        this.friendService = friendService;
        this.route = route;
    }
    FriendDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params["id"];
        this.friendService.getItem(id).subscribe(function (user) { return _this.item = user; });
    };
    FriendDetailComponent.prototype.addFriend = function (userId) {
        console.log("adding friend " + userId + " by " + app_settings_1.AppSettings.USER_ID);
        this.friendService.addFriend({
            "inviter_id": app_settings_1.AppSettings.USER_ID, "invitee_id": userId
        }).subscribe();
    };
    FriendDetailComponent.prototype.acceptFriend = function (userId) {
        // TODO: implement me
        console.log("adding friend " + userId + " by " + app_settings_1.AppSettings.USER_ID);
        this.friendService.addFriend({
            "inviter_id": app_settings_1.AppSettings.USER_ID, "invitee_id": userId
        }).subscribe();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUdqRCxtREFBaUQ7QUFDakQsbURBQStDO0FBTy9DO0lBR0ksK0JBQ1ksYUFBNEIsRUFDNUIsS0FBcUI7UUFEckIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFDN0IsQ0FBQztJQUVMLHdDQUFRLEdBQVI7UUFBQSxpQkFHQztRQUZHLElBQU0sRUFBRSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCx5Q0FBUyxHQUFULFVBQVUsTUFBYztRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFpQixNQUFNLFlBQU8sMEJBQVcsQ0FBQyxPQUFTLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztZQUN6QixZQUFZLEVBQUMsMEJBQVcsQ0FBQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU07U0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDM0UsQ0FBQztJQUVELDRDQUFZLEdBQVosVUFBYSxNQUFjO1FBQ3ZCLHFCQUFxQjtRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFpQixNQUFNLFlBQU8sMEJBQVcsQ0FBQyxPQUFTLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztZQUN6QixZQUFZLEVBQUUsMEJBQVcsQ0FBQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU07U0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDNUUsQ0FBQztJQXhCUSxxQkFBcUI7UUFMakMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsZ0NBQWdDO1NBQ2hELENBQUM7eUNBSzZCLDhCQUFhO1lBQ3JCLHVCQUFjO09BTHhCLHFCQUFxQixDQXlCakM7SUFBRCw0QkFBQztDQUFBLEFBekJELElBeUJDO0FBekJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBGcmllbmQgfSBmcm9tIFwiLi9mcmllbmRcIjtcbmltcG9ydCB7IEZyaWVuZFNlcnZpY2UgfSBmcm9tIFwiLi9mcmllbmQuc2VydmljZVwiO1xuaW1wb3J0IHtBcHBTZXR0aW5nc30gZnJvbSBcIn4vYXBwL2FwcC1zZXR0aW5nc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1kZXRhaWxzXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2ZyaWVuZC1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgRnJpZW5kRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpdGVtOiBGcmllbmQ7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBmcmllbmRTZXJ2aWNlOiBGcmllbmRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaWQ6IHN0cmluZyA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl07XG4gICAgICAgIHRoaXMuZnJpZW5kU2VydmljZS5nZXRJdGVtKGlkKS5zdWJzY3JpYmUodXNlciA9PiB0aGlzLml0ZW0gPSB1c2VyKTtcbiAgICB9XG5cbiAgICBhZGRGcmllbmQodXNlcklkOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coYGFkZGluZyBmcmllbmQgJHt1c2VySWR9IGJ5ICR7QXBwU2V0dGluZ3MuVVNFUl9JRH1gKTtcbiAgICAgICAgdGhpcy5mcmllbmRTZXJ2aWNlLmFkZEZyaWVuZCh7XG4gICAgICAgICAgICBcImludml0ZXJfaWRcIjpBcHBTZXR0aW5ncy5VU0VSX0lELFwiaW52aXRlZV9pZFwiOnVzZXJJZH0pLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGFjY2VwdEZyaWVuZCh1c2VySWQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICAvLyBUT0RPOiBpbXBsZW1lbnQgbWVcbiAgICAgICAgY29uc29sZS5sb2coYGFkZGluZyBmcmllbmQgJHt1c2VySWR9IGJ5ICR7QXBwU2V0dGluZ3MuVVNFUl9JRH1gKTtcbiAgICAgICAgdGhpcy5mcmllbmRTZXJ2aWNlLmFkZEZyaWVuZCh7XG4gICAgICAgICAgICBcImludml0ZXJfaWRcIjogQXBwU2V0dGluZ3MuVVNFUl9JRCxcImludml0ZWVfaWRcIjp1c2VySWR9KS5zdWJzY3JpYmUoKTtcbiAgICB9XG59XG4iXX0=