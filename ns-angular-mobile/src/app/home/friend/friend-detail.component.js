"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var friend_service_1 = require("./friend.service");
var FriendDetailComponent = /** @class */ (function () {
    function FriendDetailComponent(friendService, route) {
        this.friendService = friendService;
        this.route = route;
    }
    FriendDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params["id"];
        this.friendService.getItem(id).subscribe(function (friend) { return _this.item = friend; });
        // FIXME: server response 500 to get user
        // this.item = {"id":"JhuhxY6OwKd0Cw3ujvYuuejVzMG3","name":"Mirela Goranova"};
    };
    FriendDetailComponent.prototype.acceptFriend = function (userId) {
        console.log("friend-detail");
        // TODO: implement me
        // console.log(`adding friend ${userId} by ${AppSettings.USER_ID}`);
        // this.friendService.addFriend({"inviter_id": AppSettings.USER_ID,"invitee_id":userId}).subscribe();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJpZW5kLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmcmllbmQtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFHakQsbURBQWlEO0FBUWpEO0lBR0ksK0JBQ1ksYUFBNEIsRUFDNUIsS0FBcUI7UUFEckIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFDN0IsQ0FBQztJQUVMLHdDQUFRLEdBQVI7UUFBQSxpQkFLQztRQUpHLElBQU0sRUFBRSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1FBQ3ZFLHlDQUF5QztRQUN6Qyw4RUFBOEU7SUFDbEYsQ0FBQztJQUVELDRDQUFZLEdBQVosVUFBYSxNQUFjO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDN0IscUJBQXFCO1FBQ3JCLG9FQUFvRTtRQUNwRSxxR0FBcUc7SUFDekcsQ0FBQztJQXBCUSxxQkFBcUI7UUFMakMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsZ0NBQWdDO1NBQ2hELENBQUM7eUNBSzZCLDhCQUFhO1lBQ3JCLHVCQUFjO09BTHhCLHFCQUFxQixDQXFCakM7SUFBRCw0QkFBQztDQUFBLEFBckJELElBcUJDO0FBckJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBGcmllbmQgfSBmcm9tIFwiLi9mcmllbmRcIjtcclxuaW1wb3J0IHsgRnJpZW5kU2VydmljZSB9IGZyb20gXCIuL2ZyaWVuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QXBwU2V0dGluZ3N9IGZyb20gXCJ+L2FwcC9hcHAtc2V0dGluZ3NcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtZGV0YWlsc1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZnJpZW5kLWRldGFpbC5jb21wb25lbnQuaHRtbFwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRnJpZW5kRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGl0ZW06IEZyaWVuZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGZyaWVuZFNlcnZpY2U6IEZyaWVuZFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcclxuICAgICkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgaWQ6IHN0cmluZyA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl07XHJcbiAgICAgICAgdGhpcy5mcmllbmRTZXJ2aWNlLmdldEl0ZW0oaWQpLnN1YnNjcmliZShmcmllbmQgPT4gdGhpcy5pdGVtID0gZnJpZW5kKTtcclxuICAgICAgICAvLyBGSVhNRTogc2VydmVyIHJlc3BvbnNlIDUwMCB0byBnZXQgdXNlclxyXG4gICAgICAgIC8vIHRoaXMuaXRlbSA9IHtcImlkXCI6XCJKaHVoeFk2T3dLZDBDdzN1anZZdXVlalZ6TUczXCIsXCJuYW1lXCI6XCJNaXJlbGEgR29yYW5vdmFcIn07XHJcbiAgICB9XHJcblxyXG4gICAgYWNjZXB0RnJpZW5kKHVzZXJJZDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmcmllbmQtZGV0YWlsXCIpO1xyXG4gICAgICAgIC8vIFRPRE86IGltcGxlbWVudCBtZVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBhZGRpbmcgZnJpZW5kICR7dXNlcklkfSBieSAke0FwcFNldHRpbmdzLlVTRVJfSUR9YCk7XHJcbiAgICAgICAgLy8gdGhpcy5mcmllbmRTZXJ2aWNlLmFkZEZyaWVuZCh7XCJpbnZpdGVyX2lkXCI6IEFwcFNldHRpbmdzLlVTRVJfSUQsXCJpbnZpdGVlX2lkXCI6dXNlcklkfSkuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19