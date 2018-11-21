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
        var id = +this.route.snapshot.params["id"];
        this.item = this.friendService.getItem(id);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJpZW5kLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmcmllbmQtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFHakQsbURBQWlEO0FBQ2pELG1EQUErQztBQU8vQztJQUdJLCtCQUNZLGFBQTRCLEVBQzVCLEtBQXFCO1FBRHJCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFVBQUssR0FBTCxLQUFLLENBQWdCO0lBQzdCLENBQUM7SUFFTCx3Q0FBUSxHQUFSO1FBQ0ksSUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQseUNBQVMsR0FBVCxVQUFVLE1BQWM7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBaUIsTUFBTSxZQUFPLDBCQUFXLENBQUMsT0FBUyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7WUFDekIsWUFBWSxFQUFDLDBCQUFXLENBQUMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNO1NBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzNFLENBQUM7SUFFRCw0Q0FBWSxHQUFaLFVBQWEsTUFBYztRQUN2QixxQkFBcUI7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBaUIsTUFBTSxZQUFPLDBCQUFXLENBQUMsT0FBUyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7WUFDekIsWUFBWSxFQUFFLDBCQUFXLENBQUMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNO1NBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzVFLENBQUM7SUF4QlEscUJBQXFCO1FBTGpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGdDQUFnQztTQUNoRCxDQUFDO3lDQUs2Qiw4QkFBYTtZQUNyQix1QkFBYztPQUx4QixxQkFBcUIsQ0F5QmpDO0lBQUQsNEJBQUM7Q0FBQSxBQXpCRCxJQXlCQztBQXpCWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgRnJpZW5kIH0gZnJvbSBcIi4vZnJpZW5kXCI7XG5pbXBvcnQgeyBGcmllbmRTZXJ2aWNlIH0gZnJvbSBcIi4vZnJpZW5kLnNlcnZpY2VcIjtcbmltcG9ydCB7QXBwU2V0dGluZ3N9IGZyb20gXCJ+L2FwcC9hcHAtc2V0dGluZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtZGV0YWlsc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9mcmllbmQtZGV0YWlsLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEZyaWVuZERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaXRlbTogRnJpZW5kO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZnJpZW5kU2VydmljZTogRnJpZW5kU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGlkID0gK3RoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl07XG4gICAgICAgIHRoaXMuaXRlbSA9IHRoaXMuZnJpZW5kU2VydmljZS5nZXRJdGVtKGlkKTtcbiAgICB9XG5cbiAgICBhZGRGcmllbmQodXNlcklkOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coYGFkZGluZyBmcmllbmQgJHt1c2VySWR9IGJ5ICR7QXBwU2V0dGluZ3MuVVNFUl9JRH1gKTtcbiAgICAgICAgdGhpcy5mcmllbmRTZXJ2aWNlLmFkZEZyaWVuZCh7XG4gICAgICAgICAgICBcImludml0ZXJfaWRcIjpBcHBTZXR0aW5ncy5VU0VSX0lELFwiaW52aXRlZV9pZFwiOnVzZXJJZH0pLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGFjY2VwdEZyaWVuZCh1c2VySWQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICAvLyBUT0RPOiBpbXBsZW1lbnQgbWVcbiAgICAgICAgY29uc29sZS5sb2coYGFkZGluZyBmcmllbmQgJHt1c2VySWR9IGJ5ICR7QXBwU2V0dGluZ3MuVVNFUl9JRH1gKTtcbiAgICAgICAgdGhpcy5mcmllbmRTZXJ2aWNlLmFkZEZyaWVuZCh7XG4gICAgICAgICAgICBcImludml0ZXJfaWRcIjogQXBwU2V0dGluZ3MuVVNFUl9JRCxcImludml0ZWVfaWRcIjp1c2VySWR9KS5zdWJzY3JpYmUoKTtcbiAgICB9XG59XG4iXX0=