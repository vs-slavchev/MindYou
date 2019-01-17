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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJpZW5kLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmcmllbmQtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFHakQsbURBQWlEO0FBUWpEO0lBR0ksK0JBQ1ksYUFBNEIsRUFDNUIsS0FBcUI7UUFEckIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFDN0IsQ0FBQztJQUVMLHdDQUFRLEdBQVI7UUFBQSxpQkFLQztRQUpHLElBQU0sRUFBRSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1FBQ3ZFLHlDQUF5QztRQUN6Qyw4RUFBOEU7SUFDbEYsQ0FBQztJQUVELDRDQUFZLEdBQVosVUFBYSxNQUFjO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDN0IscUJBQXFCO1FBQ3JCLG9FQUFvRTtRQUNwRSxxR0FBcUc7SUFDekcsQ0FBQztJQXBCUSxxQkFBcUI7UUFMakMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsZ0NBQWdDO1NBQ2hELENBQUM7eUNBSzZCLDhCQUFhO1lBQ3JCLHVCQUFjO09BTHhCLHFCQUFxQixDQXFCakM7SUFBRCw0QkFBQztDQUFBLEFBckJELElBcUJDO0FBckJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBGcmllbmQgfSBmcm9tIFwiLi9mcmllbmRcIjtcbmltcG9ydCB7IEZyaWVuZFNlcnZpY2UgfSBmcm9tIFwiLi9mcmllbmQuc2VydmljZVwiO1xuaW1wb3J0IHtBcHBTZXR0aW5nc30gZnJvbSBcIn4vYXBwL2FwcC1zZXR0aW5nc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1kZXRhaWxzXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2ZyaWVuZC1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgRnJpZW5kRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpdGVtOiBGcmllbmQ7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBmcmllbmRTZXJ2aWNlOiBGcmllbmRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaWQ6IHN0cmluZyA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl07XG4gICAgICAgIHRoaXMuZnJpZW5kU2VydmljZS5nZXRJdGVtKGlkKS5zdWJzY3JpYmUoZnJpZW5kID0+IHRoaXMuaXRlbSA9IGZyaWVuZCk7XG4gICAgICAgIC8vIEZJWE1FOiBzZXJ2ZXIgcmVzcG9uc2UgNTAwIHRvIGdldCB1c2VyXG4gICAgICAgIC8vIHRoaXMuaXRlbSA9IHtcImlkXCI6XCJKaHVoeFk2T3dLZDBDdzN1anZZdXVlalZ6TUczXCIsXCJuYW1lXCI6XCJNaXJlbGEgR29yYW5vdmFcIn07XG4gICAgfVxuXG4gICAgYWNjZXB0RnJpZW5kKHVzZXJJZDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZnJpZW5kLWRldGFpbFwiKTtcbiAgICAgICAgLy8gVE9ETzogaW1wbGVtZW50IG1lXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBhZGRpbmcgZnJpZW5kICR7dXNlcklkfSBieSAke0FwcFNldHRpbmdzLlVTRVJfSUR9YCk7XG4gICAgICAgIC8vIHRoaXMuZnJpZW5kU2VydmljZS5hZGRGcmllbmQoe1wiaW52aXRlcl9pZFwiOiBBcHBTZXR0aW5ncy5VU0VSX0lELFwiaW52aXRlZV9pZFwiOnVzZXJJZH0pLnN1YnNjcmliZSgpO1xuICAgIH1cbn1cbiJdfQ==