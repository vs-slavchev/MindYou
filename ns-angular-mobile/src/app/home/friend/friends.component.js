"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var friend_1 = require("./friend");
var friend_service_1 = require("./friend.service");
var app_settings_1 = require("~/app/app-settings");
var router_1 = require("@angular/router");
var Suggestion_1 = require("~/app/home/friend/Suggestion");
var dialogs = require("tns-core-modules/ui/dialogs");
var item_service_1 = require("../item/item.service");
var FriendsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the FriendService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function FriendsComponent(friendService, itemService, route, router) {
        this.friendService = friendService;
        this.itemService = itemService;
        this.route = route;
        this.router = router;
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
        this.getSuggestion();
        this.friendService.getReceivedInvitations().subscribe(function (invitations) {
            _this.receivedInvitations = invitations;
        });
    };
    FriendsComponent.prototype.getSuggestion = function () {
        var _this = this;
        this.friendService.getSuggestion().subscribe(function (suggestion) {
            // console.log("suggestion response");
            // console.log(suggestion);
            _this.suggestion = new Suggestion_1.Suggestion(suggestion[0][0], suggestion[0][1]);
        });
    };
    FriendsComponent.prototype.acceptSuggestion = function () {
        console.log("Accepted activity suggestion: " + this.suggestion.activityId + " " + this.suggestion.name);
        //TODO: navigate
        // this.ngZone.run(() => this._router.navigate(['/home/friends'], navigationExtras));
        var navigationExtras = {
            queryParams: { page: this.suggestion.activityId }
        };
        this.router.navigate(['/home/items'], navigationExtras);
    };
    FriendsComponent.prototype.denySuggestion = function () {
        console.log("Deny activity suggestion: " + this.suggestion.activityId + " " + this.suggestion.name);
        this.suggestion = null;
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
    FriendsComponent.prototype.refreshInvitations = function () {
        var _this = this;
        this.friendService.getReceivedInvitations().subscribe(function (invitations) {
            _this.receivedInvitations = invitations;
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
        // this.invitation = new Invitation()
        var _this = this;
        user.invitationShared = true;
        console.log("change button color to red");
        var b = args.object;
        console.log("Friend button: " + args.object);
        b.set('text', 'Pending');
        dialogs.action({
            message: "Choose the activity to share",
            cancelButtonText: "Cancel",
            actions: this.items.map(function (el) { return el.name; })
        }).then(function (result) {
            console.log("Dialog result: " + result);
            for (var i in _this.items) {
                if (_this.items[i].name == result) {
                    console.log("Item name: " + _this.items[i].name);
                    _this.friendService.sendInvitation(_this.items[i].activityBlueprintId, user.id).subscribe();
                }
            }
        });
    };
    //accept the invitation
    ///activities/invitation/:invitationId/accept
    FriendsComponent.prototype.acceptInvitation = function (invitationId, args) {
        var b = args.object;
        b.backgroundColor = 'red';
        this.friendService.acceptInvitation(invitationId).subscribe();
        for (var i in this.receivedInvitations) {
            if (this.receivedInvitations[i].invitationId == invitationId) {
                this.receivedInvitations.splice(this.receivedInvitations.indexOf[i], 1);
            }
        }
    };
    FriendsComponent.prototype.returnArray = function () {
        // console.log("invitations: " + this.receivedInvitations[0]);
        for (var i = 0; i < this.receivedInvitations.length; i++)
            console.log("PrintinvitationsData:", this.receivedInvitations[i].inviterUser.name);
    };
    //decline the invitation   
    ///activities/invitation/:invitationId/decline
    FriendsComponent.prototype.declineInivitation = function (invitationId) {
        this.friendService.declineInvitation(invitationId).subscribe();
        for (var i in this.receivedInvitations) {
            if (this.receivedInvitations[i].invitationId == invitationId) {
                this.receivedInvitations.splice(this.receivedInvitations.indexOf[i], 1);
            }
        }
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
        __metadata("design:paramtypes", [friend_service_1.FriendService, item_service_1.ItemService, router_1.ActivatedRoute, router_1.Router])
    ], FriendsComponent);
    return FriendsComponent;
}());
exports.FriendsComponent = FriendsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJpZW5kcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmcmllbmRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUtoRCxtQ0FBZ0M7QUFDaEMsbURBQStDO0FBRy9DLG1EQUErQztBQUUvQywwQ0FBeUU7QUFDekUsMkRBQXdEO0FBSXhELHFEQUF1RDtBQUN2RCxxREFBbUQ7QUFTbkQ7SUFjSSw4SUFBOEk7SUFDOUksaUhBQWlIO0lBQ2pILDBCQUFvQixhQUE0QixFQUFVLFdBQXdCLEVBQVUsS0FBcUIsRUFBVSxNQUFjO1FBQXJILGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDckksSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIseUVBQXlFO0lBQzdFLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQUEsaUJBZ0JDO1FBZkcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzlDLDRDQUE0QztZQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BCLElBQUksTUFBTSxJQUFJLE1BQU0sRUFBRTtnQkFDbEIsS0FBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztnQkFDMUIsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3BCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXJCLElBQUksQ0FBQyxhQUFhLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxXQUFXO1lBQzdELEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxXQUFXLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUQsd0NBQWEsR0FBYjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxVQUFVO1lBQ3BELHNDQUFzQztZQUN0QywyQkFBMkI7WUFDM0IsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLHVCQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDJDQUFnQixHQUFoQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQWlDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxTQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBTSxDQUFDLENBQUM7UUFDbkcsZ0JBQWdCO1FBQ2hCLHFGQUFxRjtRQUNyRixJQUFJLGdCQUFnQixHQUFxQjtZQUNyQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7U0FDcEQsQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQseUNBQWMsR0FBZDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQTZCLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxTQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBTSxDQUFDLENBQUM7UUFDL0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVNLG1DQUFRLEdBQWYsVUFBZ0IsSUFBSTtRQUNoQixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLG9EQUFvRDtRQUNwRCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRU0sd0NBQWEsR0FBcEIsVUFBcUIsSUFBSTtRQUNyQixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxvQ0FBUyxHQUFUO1FBQ0ksSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7U0FDN0I7YUFBTSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxDQUFDLEVBQUU7WUFDcEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztTQUM3QjthQUFNLElBQUksSUFBSSxDQUFDLGdCQUFnQixLQUFLLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztJQUVELG1EQUFtRDtJQUNuRCxpREFBc0IsR0FBdEIsVUFBdUIsSUFBbUM7UUFDdEQsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ3RCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0IsSUFBSSxRQUFRLEtBQUssQ0FBQyxFQUFFO2dCQUNoQixJQUFJLENBQUMsc0JBQXNCLEdBQUcscUNBQXFDLENBQUM7YUFDdkU7aUJBQU0sSUFBSSxRQUFRLEtBQUssQ0FBQyxFQUFFO2dCQUN2QixJQUFJLENBQUMsc0JBQXNCLEdBQUcsbUNBQW1DLENBQUM7YUFDckU7aUJBQU0sSUFBSSxRQUFRLEtBQUssQ0FBQyxFQUFFO2dCQUN2QixJQUFJLENBQUMsc0JBQXNCLEdBQUcsc0NBQXNDLENBQUM7YUFDeEU7WUFDRCxrR0FBa0c7WUFDbEcsb0JBQW9CO1lBQ3BCLHlDQUF5QztZQUN6QyxVQUFVO1NBQ2I7SUFDTCxDQUFDO0lBRUQscUNBQVUsR0FBVixVQUFXLElBQVk7UUFBdkIsaUJBR0M7UUFGRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQWxDLENBQWtDLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxvQ0FBUyxHQUFULFVBQVUsS0FBZTtRQUNyQixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7WUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksZUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7UUFDL0MsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLE1BQU0sQ0FBQTtJQUNqQixDQUFDO0lBRUQsOENBQW1CLEdBQW5CLFVBQW9CLFlBQW9CO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQXdCLFlBQWMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCwrQ0FBb0IsR0FBcEIsVUFBcUIsWUFBb0I7UUFBekMsaUJBT0M7UUFORyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUF3QixZQUFjLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FDM0Q7WUFDSSxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBRUQseUNBQWMsR0FBZCxVQUFlLEVBQVU7UUFDckIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFO2dCQUN4QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDeEI7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxvQ0FBUyxHQUFULFVBQVUsSUFBWTtRQUF0QixpQkFlQztRQWRHLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLE9BQU87U0FDVjtRQUNELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsT0FBTztTQUNWO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBaUIsSUFBSSxDQUFDLEVBQUUsWUFBTywwQkFBVyxDQUFDLEtBQU8sQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDNUMsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFBO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDZDQUFrQixHQUFsQjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLFdBQVc7WUFDN0QsS0FBSSxDQUFDLG1CQUFtQixHQUFHLFdBQVcsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx1Q0FBWSxHQUFaLFVBQWEsZ0JBQTBCO1FBQXZDLGlCQW1CQztRQWxCRyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUNuRCxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7UUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUNwRCxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7UUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLGdCQUFnQixFQUFFO1lBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztnQkFDekMsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuQyxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7WUFDeEIsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUMzQyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsd0NBQWEsR0FBYjtRQUFBLGlCQWtCQztRQWhCRyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU07Z0JBQ3hCLElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLElBQUksRUFBRTtvQkFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztpQkFDeEI7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNOO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPO1lBQ3pCLElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN2RCxJQUFJLElBQUksRUFBRTtnQkFDTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzthQUN6QjtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVELGlDQUFpQztJQUVqQyxnQ0FBZ0M7SUFDakMsdURBQXVEO0lBQ3RELHlDQUFjLEdBQWQsVUFBZSxJQUFZLEVBQUMsSUFBZTtRQUV4QyxxQ0FBcUM7UUFGeEMsaUJBMkJDO1FBdkJHLElBQUksQ0FBQyxnQkFBZ0IsR0FBQyxJQUFJLENBQUM7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBRTFDLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFnQixDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRXpCLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDWCxPQUFPLEVBQUUsOEJBQThCO1lBQ3ZDLGdCQUFnQixFQUFFLFFBQVE7WUFDMUIsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVMsRUFBRSxJQUFFLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQSxDQUFBLENBQUMsQ0FBQztTQUN4RCxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLENBQUM7WUFFeEMsS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFJLENBQUMsS0FBSyxFQUN4QjtnQkFDSSxJQUFJLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLE1BQU0sRUFDaEM7b0JBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDL0MsS0FBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsRUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7aUJBQzFGO2FBQ0o7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx1QkFBdUI7SUFDdkIsNkNBQTZDO0lBQzdDLDJDQUFnQixHQUFoQixVQUFpQixZQUFvQixFQUFFLElBQWU7UUFFbEQsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQWdCLENBQUM7UUFDaEMsQ0FBQyxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFFMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM5RCxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBQztZQUNuQyxJQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLElBQUUsWUFBWSxFQUFDO2dCQUN0RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7YUFDMUU7U0FDSjtJQUNMLENBQUM7SUFFRCxzQ0FBVyxHQUFYO1FBQ0csOERBQThEO1FBQzdELEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtZQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUlELDJCQUEyQjtJQUMzQiw4Q0FBOEM7SUFDOUMsNkNBQWtCLEdBQWxCLFVBQW1CLFlBQW9CO1FBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDL0QsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUM7WUFDbkMsSUFBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxJQUFFLFlBQVksRUFBQztnQkFDdEQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzFFO1NBQ0o7SUFFTCxDQUFDO0lBRUQsd0NBQWEsR0FBYjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxVQUFVO1lBQ2pELEtBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHNDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUF6UlEsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7WUFDdEMsV0FBVyxFQUFFLDBCQUEwQjtTQUMxQyxDQUFDO3lDQWlCcUMsOEJBQWEsRUFBdUIsMEJBQVcsRUFBaUIsdUJBQWMsRUFBa0IsZUFBTTtPQWhCaEksZ0JBQWdCLENBMFI1QjtJQUFELHVCQUFDO0NBQUEsQUExUkQsSUEwUkM7QUExUlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHthbGVydH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQge1NlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItdmlld1wiO1xyXG5pbXBvcnQge1NlYXJjaEJhcn0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2VhcmNoLWJhclwiO1xyXG5cclxuaW1wb3J0IHtGcmllbmR9IGZyb20gXCIuL2ZyaWVuZFwiO1xyXG5pbXBvcnQge0ZyaWVuZFNlcnZpY2V9IGZyb20gXCIuL2ZyaWVuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RnJpZW5kc2hpcH0gZnJvbSBcIn4vYXBwL2hvbWUvZnJpZW5kL2ZyaWVuZHNoaXBcIjtcclxuaW1wb3J0IHtmb3JFYWNofSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyL3NyYy91dGlscy9jb2xsZWN0aW9uXCI7XHJcbmltcG9ydCB7QXBwU2V0dGluZ3N9IGZyb20gXCJ+L2FwcC9hcHAtc2V0dGluZ3NcIjtcclxuaW1wb3J0IHtJdGVtfSBmcm9tIFwifi9hcHAvaG9tZS9pdGVtL2l0ZW1cIjtcclxuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvbkV4dHJhcywgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7U3VnZ2VzdGlvbn0gZnJvbSBcIn4vYXBwL2hvbWUvZnJpZW5kL1N1Z2dlc3Rpb25cIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uXCI7XHJcbi8vaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuLi9pdGVtL2l0ZW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBJbnZpdGF0aW9uIH0gZnJvbSBcIi4vaW52aXRhdGlvblwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1zdGF0aXN0aWNzXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vZnJpZW5kcy5jb21wb25lbnQuY3NzJ10sXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2ZyaWVuZHMuY29tcG9uZW50Lmh0bWxcIixcclxufSlcclxuZXhwb3J0IGNsYXNzIEZyaWVuZHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgdXNlcnM6IEZyaWVuZFtdO1xyXG4gICAgZnJpZW5kczogRnJpZW5kW107XHJcbiAgICBwZW5kaW5nOiBGcmllbmRzaGlwW107XHJcbiAgICByZWNlaXZlZDogRnJpZW5kc2hpcFtdO1xyXG4gICAgc3VnZ2VzdGlvbjogU3VnZ2VzdGlvbjtcclxuICAgIHB1YmxpYyB0YWJTZWxlY3RlZEluZGV4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdGFiU2VsZWN0ZWRJbmRleFJlc3VsdDogc3RyaW5nO1xyXG4gICAgcHVibGljIHNlYXJjaFBocmFzZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcclxuXHJcbiAgICBwdWJsaWMgaXRlbXM6IEl0ZW1bXTtcclxuICAgIHJlY2VpdmVkSW52aXRhdGlvbnM6IEludml0YXRpb25bXTtcclxuXHJcbiAgICAvLyBUaGlzIHBhdHRlcm4gbWFrZXMgdXNlIG9mIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGltcGxlbWVudGF0aW9uIHRvIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgRnJpZW5kU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy5cclxuICAgIC8vIEFuZ3VsYXIga25vd3MgYWJvdXQgdGhpcyBzZXJ2aWNlIGJlY2F1c2UgaXQgaXMgaW5jbHVkZWQgaW4geW91ciBhcHDigJlzIG1haW4gTmdNb2R1bGUsIGRlZmluZWQgaW4gYXBwLm1vZHVsZS50cy5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZnJpZW5kU2VydmljZTogRnJpZW5kU2VydmljZSwgcHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLmdldEFjdGl2aXRpZXMoKTtcclxuICAgICAgICAvLyB0aGlzLnRhYlNlbGVjdGVkSW5kZXhSZXN1bHQgPSBcIlByb2ZpbGUgVGFiICh0YWJTZWxlY3RlZEluZGV4ID0gMCApXCI7ICBcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIC8vIERlZmF1bHRzIHRvIDAgaWYgbm8gcXVlcnkgcGFyYW0gcHJvdmlkZWQuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGlmIChcInBhZ2VcIiBpbiBwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVRhYigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoVXNlcnMoKTtcclxuICAgICAgICB0aGlzLmdldFN1Z2dlc3Rpb24oKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmZyaWVuZFNlcnZpY2UuZ2V0UmVjZWl2ZWRJbnZpdGF0aW9ucygpLnN1YnNjcmliZShpbnZpdGF0aW9ucyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVjZWl2ZWRJbnZpdGF0aW9ucyA9IGludml0YXRpb25zO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRTdWdnZXN0aW9uKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZnJpZW5kU2VydmljZS5nZXRTdWdnZXN0aW9uKCkuc3Vic2NyaWJlKChzdWdnZXN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3VnZ2VzdGlvbiByZXNwb25zZVwiKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3VnZ2VzdGlvbik7XHJcbiAgICAgICAgICAgIHRoaXMuc3VnZ2VzdGlvbiA9IG5ldyBTdWdnZXN0aW9uKHN1Z2dlc3Rpb25bMF1bMF0sIHN1Z2dlc3Rpb25bMF1bMV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFjY2VwdFN1Z2dlc3Rpb24oKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYEFjY2VwdGVkIGFjdGl2aXR5IHN1Z2dlc3Rpb246ICR7dGhpcy5zdWdnZXN0aW9uLmFjdGl2aXR5SWR9ICR7dGhpcy5zdWdnZXN0aW9uLm5hbWV9YCk7XHJcbiAgICAgICAgLy9UT0RPOiBuYXZpZ2F0ZVxyXG4gICAgICAgIC8vIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvaG9tZS9mcmllbmRzJ10sIG5hdmlnYXRpb25FeHRyYXMpKTtcclxuICAgICAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHsgcGFnZTogdGhpcy5zdWdnZXN0aW9uLmFjdGl2aXR5SWQgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZS9pdGVtcyddLCBuYXZpZ2F0aW9uRXh0cmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBkZW55U3VnZ2VzdGlvbigpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgRGVueSBhY3Rpdml0eSBzdWdnZXN0aW9uOiAke3RoaXMuc3VnZ2VzdGlvbi5hY3Rpdml0eUlkfSAke3RoaXMuc3VnZ2VzdGlvbi5uYW1lfWApO1xyXG4gICAgICAgIHRoaXMuc3VnZ2VzdGlvbiA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uU3VibWl0KGFyZ3MpIHtcclxuICAgICAgICBsZXQgc2VhcmNoQmFyID0gPFNlYXJjaEJhcj5hcmdzLm9iamVjdDtcclxuICAgICAgICAvLyBhbGVydChcIllvdSBhcmUgc2VhcmNoaW5nIGZvciBcIiArIHNlYXJjaEJhci50ZXh0KTtcclxuICAgICAgICB0aGlzLnNlYXJjaFVzZXIoc2VhcmNoQmFyLnRleHQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VhcmNoQmFyIHRleHQhIFNlYXJjaDogXCIgKyBzZWFyY2hCYXIudGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uVGV4dENoYW5nZWQoYXJncykge1xyXG4gICAgICAgIGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VhcmNoQmFyIHRleHQgY2hhbmdlZCEgTmV3IHZhbHVlOiBcIiArIHNlYXJjaEJhci50ZXh0KTtcclxuICAgICAgICB0aGlzLnNlYXJjaFVzZXIoc2VhcmNoQmFyLnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVRhYigpIHtcclxuICAgICAgICBpZiAodGhpcy50YWJTZWxlY3RlZEluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRhYlNlbGVjdGVkSW5kZXggPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gMjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9PT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBkaXNwbGF5aW5nIHRoZSBvbGQgYW5kIG5ldyBUYWJWaWV3IHNlbGVjdGVkSW5kZXhcclxuICAgIG9uU2VsZWN0ZWRJbmRleENoYW5nZWQoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcclxuICAgICAgICBpZiAoYXJncy5vbGRJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3SW5kZXggPSBhcmdzLm5ld0luZGV4O1xyXG4gICAgICAgICAgICBpZiAobmV3SW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleFJlc3VsdCA9IFwiUHJvZmlsZSBUYWIgKHRhYlNlbGVjdGVkSW5kZXggPSAwIClcIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdJbmRleCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YWJTZWxlY3RlZEluZGV4UmVzdWx0ID0gXCJTdGF0cyBUYWIgKHRhYlNlbGVjdGVkSW5kZXggPSAxIClcIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdJbmRleCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YWJTZWxlY3RlZEluZGV4UmVzdWx0ID0gXCJTZXR0aW5ncyBUYWIgKHRhYlNlbGVjdGVkSW5kZXggPSAyIClcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBhbGVydChgU2VsZWN0ZWQgaW5kZXggaGFzIGNoYW5nZWQgKCBPbGQgaW5kZXg6ICR7YXJncy5vbGRJbmRleH0gTmV3IGluZGV4OiAke2FyZ3MubmV3SW5kZXh9IClgKVxyXG4gICAgICAgICAgICAvLyAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XHJcbiAgICAgICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoVXNlcihuYW1lOiBTdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmZyaWVuZFNlcnZpY2Uuc2VhcmNoVXNlcihuYW1lKS5zdWJzY3JpYmUodXNlcnMgPT4gdGhpcy51c2VycyA9IHRoaXMuaW5pdFVzZXJzKHVzZXJzKSk7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoVXNlcnMoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRVc2Vycyh1c2VyczogRnJpZW5kW10pOiBGcmllbmRbXSB7XHJcbiAgICAgICAgbGV0IF91c2VycyA9IFtdO1xyXG4gICAgICAgIHVzZXJzLmZvckVhY2goKHVzZXIpID0+IHtcclxuICAgICAgICAgICAgX3VzZXJzLnB1c2gobmV3IEZyaWVuZCh1c2VyLmlkLCB1c2VyLm5hbWUpKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBfdXNlcnNcclxuICAgIH1cclxuXHJcbiAgICBhY2NlcHRGcmllbmRSZXF1ZXN0KGZyaWVuZHNoaXBJZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGFjY2VwdGluZyBmcmllbmRzaGlwICR7ZnJpZW5kc2hpcElkfWApO1xyXG4gICAgICAgIHRoaXMuZnJpZW5kU2VydmljZS5hY2NlcHRGcmllbmRSZXN1ZXN0KGZyaWVuZHNoaXBJZCkuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoVXNlcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWNsaW5lRnJpZW5kUmVxdWVzdChmcmllbmRzaGlwSWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBkZWNsaW5pbmcgZnJpZW5kc2hpcCAke2ZyaWVuZHNoaXBJZH1gKTtcclxuICAgICAgICB0aGlzLmZyaWVuZFNlcnZpY2UuZGVjbGluZUZyaWVuZFJlc3Vlc3QoZnJpZW5kc2hpcElkKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaFVzZXJzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVzZXJMb2NhbGx5KGlkOiBzdHJpbmcpOiBGcmllbmQge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51c2Vycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy51c2Vyc1tpXS5pZCA9PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlcnNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRnJpZW5kKHVzZXI6IEZyaWVuZCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh1c2VyLmlzRnJpZW5kKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVzZXIuaXNSZXF1ZXN0aW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVzZXIucmVxdWVzdGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmcmllbmQtZGV0YWlsIFwiICsgdXNlci5pZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGFkZGluZyBmcmllbmQgJHt1c2VyLmlkfSBieSAke0FwcFNldHRpbmdzLlRPS0VOfWApO1xyXG4gICAgICAgIHRoaXMuZnJpZW5kU2VydmljZS5hZGRGcmllbmQodXNlci5pZCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVXNlcnMoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hJbnZpdGF0aW9ucygpOiB2b2lke1xyXG4gICAgICAgIHRoaXMuZnJpZW5kU2VydmljZS5nZXRSZWNlaXZlZEludml0YXRpb25zKCkuc3Vic2NyaWJlKGludml0YXRpb25zID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZWNlaXZlZEludml0YXRpb25zID0gaW52aXRhdGlvbnM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaFVzZXJzKGRvTm90UmVsb2FkVXNlcnM/OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5mcmllbmRTZXJ2aWNlLmdldFBlbmRpbmdSZXF1ZXN0cygpLnN1YnNjcmliZSh1c2VycyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGVuZGluZyA9IHVzZXJzO1xyXG4gICAgICAgICAgICB0aGlzLmFubm90YXRlVXNlcnMoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZnJpZW5kU2VydmljZS5nZXRSZWNlaXZlZFJlcXVlc3RzKCkuc3Vic2NyaWJlKHVzZXJzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZWNlaXZlZCA9IHVzZXJzO1xyXG4gICAgICAgICAgICB0aGlzLmFubm90YXRlVXNlcnMoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChkb05vdFJlbG9hZFVzZXJzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJpZW5kU2VydmljZS5nZXRVc2VycygpLnN1YnNjcmliZSh1c2VycyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJzID0gdGhpcy5pbml0VXNlcnModXNlcnMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbm5vdGF0ZVVzZXJzKClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZnJpZW5kU2VydmljZS5nZXRGcmllbmRzKCkuc3Vic2NyaWJlKHVzZXJzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5mcmllbmRzID0gdXNlcnM7XHJcbiAgICAgICAgICAgIHRoaXMuYW5ub3RhdGVVc2VycygpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5ub3RhdGVVc2VycygpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZnJpZW5kcykge1xyXG4gICAgICAgICAgICB0aGlzLmZyaWVuZHMuZm9yRWFjaCgoZnJpZW5kKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdXNlciA9IHRoaXMuZ2V0VXNlckxvY2FsbHkoZnJpZW5kLmlkKTtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci5pc0ZyaWVuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wZW5kaW5nLmZvckVhY2goKHBlbmRpbmcpID0+IHtcclxuICAgICAgICAgICAgbGV0IHVzZXIgPSB0aGlzLmdldFVzZXJMb2NhbGx5KHBlbmRpbmcuaW52aXRlZVVzZXIuaWQpO1xyXG4gICAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICAgICAgdXNlci5yZXF1ZXN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qIElOVklUQVRJT04gRk9SIFRIRSBBQ1RJVklUWSAqL1xyXG5cclxuICAgIC8vaW52aXQgYSBmcmllbmQgZm9yIGFuIGFjdGl2aXR5XHJcbiAgIC8vIC9hY3Rpdml0aWVzL2ludml0YXRpb24vY3JlYXRlLzphY3Rpdml0eUlkLzppbnZpdGVlSWRcclxuICAgIHNlbmRJbnZpdGF0aW9uKHVzZXI6IEZyaWVuZCxhcmdzOiBFdmVudERhdGEpOiB2b2lkIHtcclxuICAgICAgIFxyXG4gICAgICAgLy8gdGhpcy5pbnZpdGF0aW9uID0gbmV3IEludml0YXRpb24oKVxyXG4gICAgICAgXHJcbiAgICAgICAgdXNlci5pbnZpdGF0aW9uU2hhcmVkPXRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2UgYnV0dG9uIGNvbG9yIHRvIHJlZFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgYiA9IGFyZ3Mub2JqZWN0IGFzIEJ1dHRvbjsgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRnJpZW5kIGJ1dHRvbjogXCIgKyBhcmdzLm9iamVjdCk7XHJcbiAgICAgICAgYi5zZXQoJ3RleHQnLCAnUGVuZGluZycpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgZGlhbG9ncy5hY3Rpb24oe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkNob29zZSB0aGUgYWN0aXZpdHkgdG8gc2hhcmVcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcclxuICAgICAgICAgICAgYWN0aW9uczogdGhpcy5pdGVtcy5tYXAoZnVuY3Rpb24oZWwpe3JldHVybiBlbC5uYW1lfSlcclxuICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIHJlc3VsdDogXCIgKyByZXN1bHQpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLml0ZW1zKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pdGVtc1tpXS5uYW1lID09IHJlc3VsdClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkl0ZW0gbmFtZTogXCIgKyB0aGlzLml0ZW1zW2ldLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmZyaWVuZFNlcnZpY2Uuc2VuZEludml0YXRpb24odGhpcy5pdGVtc1tpXS5hY3Rpdml0eUJsdWVwcmludElkLHVzZXIuaWQpLnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7ICAgICAgXHJcbiAgICB9XHJcbiBcclxuICAgIC8vYWNjZXB0IHRoZSBpbnZpdGF0aW9uXHJcbiAgICAvLy9hY3Rpdml0aWVzL2ludml0YXRpb24vOmludml0YXRpb25JZC9hY2NlcHRcclxuICAgIGFjY2VwdEludml0YXRpb24oaW52aXRhdGlvbklkOiBudW1iZXIsIGFyZ3M6IEV2ZW50RGF0YSk6IHZvaWQge1xyXG5cclxuICAgICAgICBjb25zdCBiID0gYXJncy5vYmplY3QgYXMgQnV0dG9uOyAgXHJcbiAgICAgICAgYi5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcclxuICAgXHJcbiAgICAgICAgdGhpcy5mcmllbmRTZXJ2aWNlLmFjY2VwdEludml0YXRpb24oaW52aXRhdGlvbklkKS5zdWJzY3JpYmUoKTtcclxuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMucmVjZWl2ZWRJbnZpdGF0aW9ucyl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucmVjZWl2ZWRJbnZpdGF0aW9uc1tpXS5pbnZpdGF0aW9uSWQ9PWludml0YXRpb25JZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlY2VpdmVkSW52aXRhdGlvbnMuc3BsaWNlKHRoaXMucmVjZWl2ZWRJbnZpdGF0aW9ucy5pbmRleE9mW2ldLDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybkFycmF5KCk6dm9pZHtcclxuICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW52aXRhdGlvbnM6IFwiICsgdGhpcy5yZWNlaXZlZEludml0YXRpb25zWzBdKTtcclxuICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLnJlY2VpdmVkSW52aXRhdGlvbnMubGVuZ3RoOyBpKyspXHJcbiAgICBjb25zb2xlLmxvZyhcIlByaW50aW52aXRhdGlvbnNEYXRhOlwiLCB0aGlzLnJlY2VpdmVkSW52aXRhdGlvbnNbaV0uaW52aXRlclVzZXIubmFtZSk7XHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICBcclxuXHJcbiAgICAvL2RlY2xpbmUgdGhlIGludml0YXRpb24gICBcclxuICAgIC8vL2FjdGl2aXRpZXMvaW52aXRhdGlvbi86aW52aXRhdGlvbklkL2RlY2xpbmVcclxuICAgIGRlY2xpbmVJbml2aXRhdGlvbihpbnZpdGF0aW9uSWQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZnJpZW5kU2VydmljZS5kZWNsaW5lSW52aXRhdGlvbihpbnZpdGF0aW9uSWQpLnN1YnNjcmliZSgpO1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5yZWNlaXZlZEludml0YXRpb25zKXtcclxuICAgICAgICAgICAgaWYodGhpcy5yZWNlaXZlZEludml0YXRpb25zW2ldLmludml0YXRpb25JZD09aW52aXRhdGlvbklkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVjZWl2ZWRJbnZpdGF0aW9ucy5zcGxpY2UodGhpcy5yZWNlaXZlZEludml0YXRpb25zLmluZGV4T2ZbaV0sMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldEFjdGl2aXRpZXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pdGVtU2VydmljZS5nZXRBY3Rpdml0aWVzKCkuc3Vic2NyaWJlKGFjdGl2aXRpZXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zID0gYWN0aXZpdGllcztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==