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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJpZW5kLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmcmllbmQtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFHakQsbURBQWlEO0FBQ2pELG1EQUErQztBQU8vQztJQUdJLCtCQUNZLGFBQTRCLEVBQzVCLEtBQXFCO1FBRHJCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFVBQUssR0FBTCxLQUFLLENBQWdCO0lBQzdCLENBQUM7SUFFTCx3Q0FBUSxHQUFSO1FBQ0ksSUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQseUNBQVMsR0FBVCxVQUFVLE1BQWM7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBaUIsTUFBTSxZQUFPLDBCQUFXLENBQUMsT0FBUyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7WUFDekIsWUFBWSxFQUFDLDBCQUFXLENBQUMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNO1NBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzNFLENBQUM7SUFFRCw0Q0FBWSxHQUFaLFVBQWEsTUFBYztRQUN2QixxQkFBcUI7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBaUIsTUFBTSxZQUFPLDBCQUFXLENBQUMsT0FBUyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7WUFDekIsWUFBWSxFQUFFLDBCQUFXLENBQUMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNO1NBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzVFLENBQUM7SUF4QlEscUJBQXFCO1FBTGpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGdDQUFnQztTQUNoRCxDQUFDO3lDQUs2Qiw4QkFBYTtZQUNyQix1QkFBYztPQUx4QixxQkFBcUIsQ0F5QmpDO0lBQUQsNEJBQUM7Q0FBQSxBQXpCRCxJQXlCQztBQXpCWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgRnJpZW5kIH0gZnJvbSBcIi4vZnJpZW5kXCI7XHJcbmltcG9ydCB7IEZyaWVuZFNlcnZpY2UgfSBmcm9tIFwiLi9mcmllbmQuc2VydmljZVwiO1xyXG5pbXBvcnQge0FwcFNldHRpbmdzfSBmcm9tIFwifi9hcHAvYXBwLXNldHRpbmdzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWRldGFpbHNcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2ZyaWVuZC1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIixcclxufSlcclxuZXhwb3J0IGNsYXNzIEZyaWVuZERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBpdGVtOiBGcmllbmQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBmcmllbmRTZXJ2aWNlOiBGcmllbmRTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGlkID0gK3RoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl07XHJcbiAgICAgICAgdGhpcy5pdGVtID0gdGhpcy5mcmllbmRTZXJ2aWNlLmdldEl0ZW0oaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEZyaWVuZCh1c2VySWQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBhZGRpbmcgZnJpZW5kICR7dXNlcklkfSBieSAke0FwcFNldHRpbmdzLlVTRVJfSUR9YCk7XHJcbiAgICAgICAgdGhpcy5mcmllbmRTZXJ2aWNlLmFkZEZyaWVuZCh7XHJcbiAgICAgICAgICAgIFwiaW52aXRlcl9pZFwiOkFwcFNldHRpbmdzLlVTRVJfSUQsXCJpbnZpdGVlX2lkXCI6dXNlcklkfSkuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWNjZXB0RnJpZW5kKHVzZXJJZDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgLy8gVE9ETzogaW1wbGVtZW50IG1lXHJcbiAgICAgICAgY29uc29sZS5sb2coYGFkZGluZyBmcmllbmQgJHt1c2VySWR9IGJ5ICR7QXBwU2V0dGluZ3MuVVNFUl9JRH1gKTtcclxuICAgICAgICB0aGlzLmZyaWVuZFNlcnZpY2UuYWRkRnJpZW5kKHtcclxuICAgICAgICAgICAgXCJpbnZpdGVyX2lkXCI6IEFwcFNldHRpbmdzLlVTRVJfSUQsXCJpbnZpdGVlX2lkXCI6dXNlcklkfSkuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19