"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var friend_1 = require("./friend");
var friend_service_1 = require("./friend.service");
var app_settings_1 = require("~/app/app-settings");
var router_1 = require("@angular/router");
var dialogs = require("tns-core-modules/ui/dialogs");
var item_service_1 = require("../item/item.service");
var FriendsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the FriendService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function FriendsComponent(friendService, itemService, route) {
        this.friendService = friendService;
        this.itemService = itemService;
        this.route = route;
        this.buttonClicked = false;
        this.tabSelectedIndex = 0;
        this.getActivities();
        // this.tabSelectedIndexResult = "Profile Tab (tabSelectedIndex = 0 )";
    }
    FriendsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.queryParams.subscribe(function (params) {
            // Defaults to 0 if no query param provided.
            console.log(params);
            if ("page" in params) {
                _this.tabSelectedIndex = 1;
                _this.changeTab();
            }
        });
        this.refreshUsers();
    };
    FriendsComponent.prototype.onSubmit = function (args) {
        var searchBar = args.object;
        // alert("You are searching for " + searchBar.text);
        this.searchUser(searchBar.text);
        console.log("SearchBar text! Search: " + searchBar.text);
    };
    FriendsComponent.prototype.onTextChanged = function (args) {
        var searchBar = args.object;
        console.log("SearchBar text changed! New value: " + searchBar.text);
        this.searchUser(searchBar.text);
    };
    FriendsComponent.prototype.changeTab = function () {
        if (this.tabSelectedIndex === 0) {
            this.tabSelectedIndex = 1;
        }
        else if (this.tabSelectedIndex === 1) {
            this.tabSelectedIndex = 2;
        }
        else if (this.tabSelectedIndex === 2) {
            this.tabSelectedIndex = 0;
        }
    };
    // displaying the old and new TabView selectedIndex
    FriendsComponent.prototype.onSelectedIndexChanged = function (args) {
        if (args.oldIndex !== -1) {
            var newIndex = args.newIndex;
            if (newIndex === 0) {
                this.tabSelectedIndexResult = "Profile Tab (tabSelectedIndex = 0 )";
            }
            else if (newIndex === 1) {
                this.tabSelectedIndexResult = "Stats Tab (tabSelectedIndex = 1 )";
            }
            else if (newIndex === 2) {
                this.tabSelectedIndexResult = "Settings Tab (tabSelectedIndex = 2 )";
            }
            // alert(`Selected index has changed ( Old index: ${args.oldIndex} New index: ${args.newIndex} )`)
            //     .then(() => {
            //         console.log("Dialog closed!");
            //     });
        }
    };
    FriendsComponent.prototype.searchUser = function (name) {
        var _this = this;
        this.friendService.searchUser(name).subscribe(function (users) { return _this.users = _this.initUsers(users); });
        this.refreshUsers(false);
    };
    FriendsComponent.prototype.initUsers = function (users) {
        var _users = [];
        users.forEach(function (user) {
            _users.push(new friend_1.Friend(user.id, user.name));
        });
        return _users;
    };
    FriendsComponent.prototype.acceptFriendRequest = function (friendshipId) {
        console.log("accepting friendship " + friendshipId);
        this.friendService.acceptFriendResuest(friendshipId).subscribe();
        this.refreshUsers();
    };
    FriendsComponent.prototype.declineFriendRequest = function (friendshipId) {
        var _this = this;
        console.log("declining friendship " + friendshipId);
        this.friendService.declineFriendResuest(friendshipId).subscribe(function () {
            _this.refreshUsers();
        });
    };
    FriendsComponent.prototype.getUserLocally = function (id) {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].id == id) {
                return this.users[i];
            }
        }
        return null;
    };
    FriendsComponent.prototype.addFriend = function (user) {
        var _this = this;
        if (user.isFriend) {
            return;
        }
        if (user.isRequesting) {
            return;
        }
        if (user.requested) {
            return;
        }
        console.log("friend-detail " + user.id);
        console.log("adding friend " + user.id + " by " + app_settings_1.AppSettings.TOKEN);
        this.friendService.addFriend(user.id).subscribe(function () {
            _this.refreshUsers();
        });
    };
    FriendsComponent.prototype.refreshUsers = function (doNotReloadUsers) {
        var _this = this;
        this.friendService.getPendingRequests().subscribe(function (users) {
            _this.pending = users;
            _this.annotateUsers();
        });
        this.friendService.getReceivedRequests().subscribe(function (users) {
            _this.received = users;
            _this.annotateUsers();
        });
        if (doNotReloadUsers) {
            this.friendService.getUsers().subscribe(function (users) {
                _this.users = _this.initUsers(users);
                _this.annotateUsers();
            });
        }
        this.friendService.getFriends().subscribe(function (users) {
            _this.friends = users;
            _this.annotateUsers();
        });
    };
    FriendsComponent.prototype.annotateUsers = function () {
        var _this = this;
        if (this.friends) {
            this.friends.forEach(function (friend) {
                var user = _this.getUserLocally(friend.id);
                if (user) {
                    user.isFriend = true;
                }
            });
        }
        this.pending.forEach(function (pending) {
            var user = _this.getUserLocally(pending.inviteeUser.id);
            if (user) {
                user.requested = true;
            }
        });
    };
    /* INVITATION FOR THE ACTIVITY */
    //invit a friend for an activity
    // /activities/invitation/create/:activityId/:inviteeId
    FriendsComponent.prototype.sendInvitation = function (user, args) {
        var _this = this;
        user.invitationShared = true;
        console.log("change button color to red");
        var b = args.object;
        console.log("Friend button: " + args.object);
        b.set('text', 'Pending');
        dialogs.action({
            message: "Choose the activity to share",
            cancelButtonText: "Invite",
            actions: this.items.map(function (el) { return el.name; })
        }).then(function (result) {
            console.log("Dialog result: " + result);
            for (var i in _this.items) {
                if (_this.items[i].name == result) {
                    console.log("Item name: " + _this.items[i].name);
                    _this.friendService.sendInvitation(_this.items[i].activityBlueprintId, user.id).subscribe();
                }
            }
            // if(result == "Option1"){
            //     //Do action1
            //      console.log("Option1");
            // }else if(result == "Option2"){
            //     //Do action2
            //     console.log("Option2");
            // }
        });
        // this.friendService.sendInvitation(activityID.activityBlueprintId.toString(),user.id).subscribe();
    };
    //accept the invitation
    ///activities/invitation/:invitationId/accept
    FriendsComponent.prototype.acceptInvitation = function () {
        // console.log(`accepting friendship ${friendshipId}`);
        // this.friendService.acceptFriendResuest(friendshipId).subscribe();
        // this.refreshUsers();
    };
    //decline the invitation   
    FriendsComponent.prototype.declineInivitation = function () {
        // console.log(`declining friendship ${friendshipId}`);
        // this.friendService.declineFriendResuest(friendshipId).subscribe(
        //     () => {
        //         this.refreshUsers();
        //     }
        // );
    };
    FriendsComponent.prototype.getActivities = function () {
        var _this = this;
        this.itemService.getActivities().subscribe(function (activities) {
            _this.items = activities;
        });
    };
    FriendsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    FriendsComponent = __decorate([
        core_1.Component({
            selector: "ns-statistics",
            moduleId: module.id,
            styleUrls: ['./friends.component.css'],
            templateUrl: "./friends.component.html",
        }),
        __metadata("design:paramtypes", [friend_service_1.FriendService, item_service_1.ItemService, router_1.ActivatedRoute])
    ], FriendsComponent);
    return FriendsComponent;
}());
exports.FriendsComponent = FriendsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJpZW5kcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmcmllbmRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUtoRCxtQ0FBZ0M7QUFDaEMsbURBQStDO0FBRy9DLG1EQUErQztBQUUvQywwQ0FBK0M7QUFJL0MscURBQXVEO0FBQ3ZELHFEQUFtRDtBQVduRDtJQWVJLDhJQUE4STtJQUM5SSxpSEFBaUg7SUFDakgsMEJBQW9CLGFBQTRCLEVBQVUsV0FBd0IsRUFBVSxLQUFxQjtRQUE3RixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFMakgsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFNM0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsdUVBQXVFO0lBQzNFLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDOUMsNENBQTRDO1lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsSUFBSSxNQUFNLElBQUksTUFBTSxFQUFFO2dCQUNsQixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO2dCQUMxQixLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDcEI7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU0sbUNBQVEsR0FBZixVQUFnQixJQUFJO1FBQ2hCLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkMsb0RBQW9EO1FBQ3BELElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFTSx3Q0FBYSxHQUFwQixVQUFxQixJQUFJO1FBQ3JCLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELG9DQUFTLEdBQVQ7UUFDSSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztTQUM3QjthQUFNLElBQUksSUFBSSxDQUFDLGdCQUFnQixLQUFLLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1NBQzdCO2FBQU0sSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7U0FDN0I7SUFDTCxDQUFDO0lBRUQsbURBQW1EO0lBQ25ELGlEQUFzQixHQUF0QixVQUF1QixJQUFtQztRQUN0RCxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDdEIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvQixJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxxQ0FBcUMsQ0FBQzthQUN2RTtpQkFBTSxJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxtQ0FBbUMsQ0FBQzthQUNyRTtpQkFBTSxJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxzQ0FBc0MsQ0FBQzthQUN4RTtZQUNELGtHQUFrRztZQUNsRyxvQkFBb0I7WUFDcEIseUNBQXlDO1lBQ3pDLFVBQVU7U0FDYjtJQUNMLENBQUM7SUFFRCxxQ0FBVSxHQUFWLFVBQVcsSUFBWTtRQUF2QixpQkFHQztRQUZHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELG9DQUFTLEdBQVQsVUFBVSxLQUFlO1FBQ3JCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtZQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxlQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtRQUMvQyxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sTUFBTSxDQUFBO0lBQ2pCLENBQUM7SUFFRCw4Q0FBbUIsR0FBbkIsVUFBb0IsWUFBb0I7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBd0IsWUFBYyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELCtDQUFvQixHQUFwQixVQUFxQixZQUFvQjtRQUF6QyxpQkFPQztRQU5HLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQXdCLFlBQWMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxDQUMzRDtZQUNJLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFFRCx5Q0FBYyxHQUFkLFVBQWUsRUFBVTtRQUNyQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUU7Z0JBQ3hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN4QjtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELG9DQUFTLEdBQVQsVUFBVSxJQUFZO1FBQXRCLGlCQWVDO1FBZEcsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsT0FBTztTQUNWO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ25CLE9BQU87U0FDVjtRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixPQUFPO1NBQ1Y7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFpQixJQUFJLENBQUMsRUFBRSxZQUFPLDBCQUFXLENBQUMsS0FBTyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUM1QyxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsdUNBQVksR0FBWixVQUFhLGdCQUEwQjtRQUF2QyxpQkFtQkM7UUFsQkcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUs7WUFDbkQsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUs7WUFDcEQsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxnQkFBZ0IsRUFBRTtZQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUs7Z0JBQ3pDLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbkMsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO1lBQ3hCLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUs7WUFDM0MsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHdDQUFhLEdBQWI7UUFBQSxpQkFrQkM7UUFoQkcsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO2dCQUN4QixJQUFJLElBQUksR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxJQUFJLEVBQUU7b0JBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7aUJBQ3hCO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztZQUN6QixJQUFJLElBQUksR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdkQsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7YUFDekI7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCxpQ0FBaUM7SUFFakMsZ0NBQWdDO0lBQ2pDLHVEQUF1RDtJQUN0RCx5Q0FBYyxHQUFkLFVBQWUsSUFBWSxFQUFDLElBQWU7UUFBM0MsaUJBcUNDO1FBcENHLElBQUksQ0FBQyxnQkFBZ0IsR0FBQyxJQUFJLENBQUM7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBRTFDLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFnQixDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRXpCLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDWCxPQUFPLEVBQUUsOEJBQThCO1lBQ3ZDLGdCQUFnQixFQUFFLFFBQVE7WUFDMUIsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVMsRUFBRSxJQUFFLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQSxDQUFBLENBQUMsQ0FBQztTQUN4RCxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLENBQUM7WUFFeEMsS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFJLENBQUMsS0FBSyxFQUN4QjtnQkFDSSxJQUFJLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLE1BQU0sRUFDaEM7b0JBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDL0MsS0FBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsRUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7aUJBQzFGO2FBQ0o7WUFHRCwyQkFBMkI7WUFDM0IsbUJBQW1CO1lBQ25CLCtCQUErQjtZQUMvQixpQ0FBaUM7WUFDakMsbUJBQW1CO1lBQ25CLDhCQUE4QjtZQUU5QixJQUFJO1FBQ1IsQ0FBQyxDQUFDLENBQUM7UUFFSixvR0FBb0c7SUFFdkcsQ0FBQztJQUdELHVCQUF1QjtJQUN2Qiw2Q0FBNkM7SUFDN0MsMkNBQWdCLEdBQWhCO1FBQ0ksdURBQXVEO1FBQ3ZELG9FQUFvRTtRQUNwRSx1QkFBdUI7SUFDM0IsQ0FBQztJQUNELDJCQUEyQjtJQUMzQiw2Q0FBa0IsR0FBbEI7UUFDSSx1REFBdUQ7UUFDdkQsbUVBQW1FO1FBQ25FLGNBQWM7UUFDZCwrQkFBK0I7UUFDL0IsUUFBUTtRQUNSLEtBQUs7SUFDVCxDQUFDO0lBRUQsd0NBQWEsR0FBYjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxVQUFVO1lBQ2pELEtBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHNDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFoUFEsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7WUFDdEMsV0FBVyxFQUFFLDBCQUEwQjtTQUMxQyxDQUFDO3lDQWtCcUMsOEJBQWEsRUFBdUIsMEJBQVcsRUFBaUIsdUJBQWM7T0FqQnhHLGdCQUFnQixDQWlQNUI7SUFBRCx1QkFBQztDQUFBLEFBalBELElBaVBDO0FBalBZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7YWxlcnR9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHtTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLXZpZXdcIjtcclxuaW1wb3J0IHtTZWFyY2hCYXJ9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NlYXJjaC1iYXJcIjtcclxuXHJcbmltcG9ydCB7RnJpZW5kfSBmcm9tIFwiLi9mcmllbmRcIjtcclxuaW1wb3J0IHtGcmllbmRTZXJ2aWNlfSBmcm9tIFwiLi9mcmllbmQuc2VydmljZVwiO1xyXG5pbXBvcnQge0ZyaWVuZHNoaXB9IGZyb20gXCJ+L2FwcC9ob21lL2ZyaWVuZC9mcmllbmRzaGlwXCI7XHJcbmltcG9ydCB7Zm9yRWFjaH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlci9zcmMvdXRpbHMvY29sbGVjdGlvblwiO1xyXG5pbXBvcnQge0FwcFNldHRpbmdzfSBmcm9tIFwifi9hcHAvYXBwLXNldHRpbmdzXCI7XHJcbmltcG9ydCB7SXRlbX0gZnJvbSBcIn4vYXBwL2hvbWUvaXRlbS9pdGVtXCI7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uXCI7XHJcbi8vaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuLi9pdGVtL2l0ZW0uc2VydmljZVwiO1xyXG5cclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1zdGF0aXN0aWNzXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vZnJpZW5kcy5jb21wb25lbnQuY3NzJ10sXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2ZyaWVuZHMuY29tcG9uZW50Lmh0bWxcIixcclxufSlcclxuZXhwb3J0IGNsYXNzIEZyaWVuZHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgdXNlcnM6IEZyaWVuZFtdO1xyXG4gICAgZnJpZW5kczogRnJpZW5kW107XHJcbiAgICBwZW5kaW5nOiBGcmllbmRzaGlwW107XHJcbiAgICByZWNlaXZlZDogRnJpZW5kc2hpcFtdO1xyXG4gICAgcHVibGljIHRhYlNlbGVjdGVkSW5kZXg6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0YWJTZWxlY3RlZEluZGV4UmVzdWx0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc2VhcmNoUGhyYXNlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHN1YjogYW55O1xyXG4gICAgXHJcbiAgICBwdWJsaWMgaXRlbXM6IEl0ZW1bXTtcclxuXHJcbiAgICBidXR0b25DbGlja2VkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAgIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBGcmllbmRTZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLlxyXG4gICAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSwgZGVmaW5lZCBpbiBhcHAubW9kdWxlLnRzLlxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmcmllbmRTZXJ2aWNlOiBGcmllbmRTZXJ2aWNlLCBwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcclxuICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuZ2V0QWN0aXZpdGllcygpO1xyXG4gICAgICAgIC8vIHRoaXMudGFiU2VsZWN0ZWRJbmRleFJlc3VsdCA9IFwiUHJvZmlsZSBUYWIgKHRhYlNlbGVjdGVkSW5kZXggPSAwIClcIjtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIC8vIERlZmF1bHRzIHRvIDAgaWYgbm8gcXVlcnkgcGFyYW0gcHJvdmlkZWQuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGlmIChcInBhZ2VcIiBpbiBwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVRhYigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoVXNlcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25TdWJtaXQoYXJncykge1xyXG4gICAgICAgIGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIC8vIGFsZXJ0KFwiWW91IGFyZSBzZWFyY2hpbmcgZm9yIFwiICsgc2VhcmNoQmFyLnRleHQpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoVXNlcihzZWFyY2hCYXIudGV4dCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZWFyY2hCYXIgdGV4dCEgU2VhcmNoOiBcIiArIHNlYXJjaEJhci50ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25UZXh0Q2hhbmdlZChhcmdzKSB7XHJcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZWFyY2hCYXIgdGV4dCBjaGFuZ2VkISBOZXcgdmFsdWU6IFwiICsgc2VhcmNoQmFyLnRleHQpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoVXNlcihzZWFyY2hCYXIudGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlVGFiKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRhYlNlbGVjdGVkSW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gMTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAyO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50YWJTZWxlY3RlZEluZGV4ID09PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGRpc3BsYXlpbmcgdGhlIG9sZCBhbmQgbmV3IFRhYlZpZXcgc2VsZWN0ZWRJbmRleFxyXG4gICAgb25TZWxlY3RlZEluZGV4Q2hhbmdlZChhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSkge1xyXG4gICAgICAgIGlmIChhcmdzLm9sZEluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IGFyZ3MubmV3SW5kZXg7XHJcbiAgICAgICAgICAgIGlmIChuZXdJbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YWJTZWxlY3RlZEluZGV4UmVzdWx0ID0gXCJQcm9maWxlIFRhYiAodGFiU2VsZWN0ZWRJbmRleCA9IDAgKVwiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5ld0luZGV4ID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXhSZXN1bHQgPSBcIlN0YXRzIFRhYiAodGFiU2VsZWN0ZWRJbmRleCA9IDEgKVwiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5ld0luZGV4ID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXhSZXN1bHQgPSBcIlNldHRpbmdzIFRhYiAodGFiU2VsZWN0ZWRJbmRleCA9IDIgKVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGFsZXJ0KGBTZWxlY3RlZCBpbmRleCBoYXMgY2hhbmdlZCAoIE9sZCBpbmRleDogJHthcmdzLm9sZEluZGV4fSBOZXcgaW5kZXg6ICR7YXJncy5uZXdJbmRleH0gKWApXHJcbiAgICAgICAgICAgIC8vICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcclxuICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2hVc2VyKG5hbWU6IFN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZnJpZW5kU2VydmljZS5zZWFyY2hVc2VyKG5hbWUpLnN1YnNjcmliZSh1c2VycyA9PiB0aGlzLnVzZXJzID0gdGhpcy5pbml0VXNlcnModXNlcnMpKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hVc2VycyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFVzZXJzKHVzZXJzOiBGcmllbmRbXSk6IEZyaWVuZFtdIHtcclxuICAgICAgICBsZXQgX3VzZXJzID0gW107XHJcbiAgICAgICAgdXNlcnMuZm9yRWFjaCgodXNlcikgPT4ge1xyXG4gICAgICAgICAgICBfdXNlcnMucHVzaChuZXcgRnJpZW5kKHVzZXIuaWQsIHVzZXIubmFtZSkpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIF91c2Vyc1xyXG4gICAgfVxyXG5cclxuICAgIGFjY2VwdEZyaWVuZFJlcXVlc3QoZnJpZW5kc2hpcElkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgYWNjZXB0aW5nIGZyaWVuZHNoaXAgJHtmcmllbmRzaGlwSWR9YCk7XHJcbiAgICAgICAgdGhpcy5mcmllbmRTZXJ2aWNlLmFjY2VwdEZyaWVuZFJlc3Vlc3QoZnJpZW5kc2hpcElkKS5zdWJzY3JpYmUoKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hVc2VycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlY2xpbmVGcmllbmRSZXF1ZXN0KGZyaWVuZHNoaXBJZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGRlY2xpbmluZyBmcmllbmRzaGlwICR7ZnJpZW5kc2hpcElkfWApO1xyXG4gICAgICAgIHRoaXMuZnJpZW5kU2VydmljZS5kZWNsaW5lRnJpZW5kUmVzdWVzdChmcmllbmRzaGlwSWQpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoVXNlcnMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlckxvY2FsbHkoaWQ6IHN0cmluZyk6IEZyaWVuZCB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVzZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVzZXJzW2ldLmlkID09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51c2Vyc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBhZGRGcmllbmQodXNlcjogRnJpZW5kKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHVzZXIuaXNGcmllbmQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodXNlci5pc1JlcXVlc3RpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodXNlci5yZXF1ZXN0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcImZyaWVuZC1kZXRhaWwgXCIgKyB1c2VyLmlkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgYWRkaW5nIGZyaWVuZCAke3VzZXIuaWR9IGJ5ICR7QXBwU2V0dGluZ3MuVE9LRU59YCk7XHJcbiAgICAgICAgdGhpcy5mcmllbmRTZXJ2aWNlLmFkZEZyaWVuZCh1c2VyLmlkKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hVc2VycygpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaFVzZXJzKGRvTm90UmVsb2FkVXNlcnM/OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5mcmllbmRTZXJ2aWNlLmdldFBlbmRpbmdSZXF1ZXN0cygpLnN1YnNjcmliZSh1c2VycyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGVuZGluZyA9IHVzZXJzO1xyXG4gICAgICAgICAgICB0aGlzLmFubm90YXRlVXNlcnMoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZnJpZW5kU2VydmljZS5nZXRSZWNlaXZlZFJlcXVlc3RzKCkuc3Vic2NyaWJlKHVzZXJzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZWNlaXZlZCA9IHVzZXJzO1xyXG4gICAgICAgICAgICB0aGlzLmFubm90YXRlVXNlcnMoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChkb05vdFJlbG9hZFVzZXJzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJpZW5kU2VydmljZS5nZXRVc2VycygpLnN1YnNjcmliZSh1c2VycyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJzID0gdGhpcy5pbml0VXNlcnModXNlcnMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbm5vdGF0ZVVzZXJzKClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZnJpZW5kU2VydmljZS5nZXRGcmllbmRzKCkuc3Vic2NyaWJlKHVzZXJzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5mcmllbmRzID0gdXNlcnM7XHJcbiAgICAgICAgICAgIHRoaXMuYW5ub3RhdGVVc2VycygpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5ub3RhdGVVc2VycygpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZnJpZW5kcykge1xyXG4gICAgICAgICAgICB0aGlzLmZyaWVuZHMuZm9yRWFjaCgoZnJpZW5kKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdXNlciA9IHRoaXMuZ2V0VXNlckxvY2FsbHkoZnJpZW5kLmlkKTtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci5pc0ZyaWVuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wZW5kaW5nLmZvckVhY2goKHBlbmRpbmcpID0+IHtcclxuICAgICAgICAgICAgbGV0IHVzZXIgPSB0aGlzLmdldFVzZXJMb2NhbGx5KHBlbmRpbmcuaW52aXRlZVVzZXIuaWQpO1xyXG4gICAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICAgICAgdXNlci5yZXF1ZXN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qIElOVklUQVRJT04gRk9SIFRIRSBBQ1RJVklUWSAqL1xyXG5cclxuICAgIC8vaW52aXQgYSBmcmllbmQgZm9yIGFuIGFjdGl2aXR5XHJcbiAgIC8vIC9hY3Rpdml0aWVzL2ludml0YXRpb24vY3JlYXRlLzphY3Rpdml0eUlkLzppbnZpdGVlSWRcclxuICAgIHNlbmRJbnZpdGF0aW9uKHVzZXI6IEZyaWVuZCxhcmdzOiBFdmVudERhdGEpOiB2b2lkIHtcclxuICAgICAgICB1c2VyLmludml0YXRpb25TaGFyZWQ9dHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZSBidXR0b24gY29sb3IgdG8gcmVkXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBiID0gYXJncy5vYmplY3QgYXMgQnV0dG9uOyAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGcmllbmQgYnV0dG9uOiBcIiArIGFyZ3Mub2JqZWN0KTtcclxuICAgICAgICBiLnNldCgndGV4dCcsICdQZW5kaW5nJyk7XHJcbiAgICAgICAgICBcclxuICAgICAgICBkaWFsb2dzLmFjdGlvbih7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hvb3NlIHRoZSBhY3Rpdml0eSB0byBzaGFyZVwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkludml0ZVwiLFxyXG4gICAgICAgICAgICBhY3Rpb25zOiB0aGlzLml0ZW1zLm1hcChmdW5jdGlvbihlbCl7cmV0dXJuIGVsLm5hbWV9KVxyXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHJlc3VsdCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMuaXRlbXMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zW2ldLm5hbWUgPT0gcmVzdWx0KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSXRlbSBuYW1lOiBcIiArIHRoaXMuaXRlbXNbaV0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuZnJpZW5kU2VydmljZS5zZW5kSW52aXRhdGlvbih0aGlzLml0ZW1zW2ldLmFjdGl2aXR5Qmx1ZXByaW50SWQsdXNlci5pZCkuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAvLyBpZihyZXN1bHQgPT0gXCJPcHRpb24xXCIpe1xyXG4gICAgICAgICAgICAvLyAgICAgLy9EbyBhY3Rpb24xXHJcbiAgICAgICAgICAgIC8vICAgICAgY29uc29sZS5sb2coXCJPcHRpb24xXCIpO1xyXG4gICAgICAgICAgICAvLyB9ZWxzZSBpZihyZXN1bHQgPT0gXCJPcHRpb24yXCIpe1xyXG4gICAgICAgICAgICAvLyAgICAgLy9EbyBhY3Rpb24yXHJcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIk9wdGlvbjJcIik7XHJcblxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgLy8gdGhpcy5mcmllbmRTZXJ2aWNlLnNlbmRJbnZpdGF0aW9uKGFjdGl2aXR5SUQuYWN0aXZpdHlCbHVlcHJpbnRJZC50b1N0cmluZygpLHVzZXIuaWQpLnN1YnNjcmliZSgpO1xyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgIFxyXG4gICAgLy9hY2NlcHQgdGhlIGludml0YXRpb25cclxuICAgIC8vL2FjdGl2aXRpZXMvaW52aXRhdGlvbi86aW52aXRhdGlvbklkL2FjY2VwdFxyXG4gICAgYWNjZXB0SW52aXRhdGlvbigpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgYWNjZXB0aW5nIGZyaWVuZHNoaXAgJHtmcmllbmRzaGlwSWR9YCk7XHJcbiAgICAgICAgLy8gdGhpcy5mcmllbmRTZXJ2aWNlLmFjY2VwdEZyaWVuZFJlc3Vlc3QoZnJpZW5kc2hpcElkKS5zdWJzY3JpYmUoKTtcclxuICAgICAgICAvLyB0aGlzLnJlZnJlc2hVc2VycygpO1xyXG4gICAgfVxyXG4gICAgLy9kZWNsaW5lIHRoZSBpbnZpdGF0aW9uICAgXHJcbiAgICBkZWNsaW5lSW5pdml0YXRpb24oKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYGRlY2xpbmluZyBmcmllbmRzaGlwICR7ZnJpZW5kc2hpcElkfWApO1xyXG4gICAgICAgIC8vIHRoaXMuZnJpZW5kU2VydmljZS5kZWNsaW5lRnJpZW5kUmVzdWVzdChmcmllbmRzaGlwSWQpLnN1YnNjcmliZShcclxuICAgICAgICAvLyAgICAgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5yZWZyZXNoVXNlcnMoKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWN0aXZpdGllcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLml0ZW1TZXJ2aWNlLmdldEFjdGl2aXRpZXMoKS5zdWJzY3JpYmUoYWN0aXZpdGllcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBhY3Rpdml0aWVzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19