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
    FriendsComponent.prototype.acceptInvitation = function (invitationId) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJpZW5kcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmcmllbmRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUtoRCxtQ0FBZ0M7QUFDaEMsbURBQStDO0FBRy9DLG1EQUErQztBQUUvQywwQ0FBeUU7QUFDekUsMkRBQXdEO0FBSXhELHFEQUF1RDtBQUN2RCxxREFBbUQ7QUFTbkQ7SUFjSSw4SUFBOEk7SUFDOUksaUhBQWlIO0lBQ2pILDBCQUFvQixhQUE0QixFQUFVLFdBQXdCLEVBQVUsS0FBcUIsRUFBVSxNQUFjO1FBQXJILGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDckksSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIseUVBQXlFO0lBQzdFLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQUEsaUJBZ0JDO1FBZkcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzlDLDRDQUE0QztZQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BCLElBQUksTUFBTSxJQUFJLE1BQU0sRUFBRTtnQkFDbEIsS0FBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztnQkFDMUIsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3BCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXJCLElBQUksQ0FBQyxhQUFhLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxTQUFTLENBQUMs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YyxFQUFrQixlQUFNO09BaEJoSSxnQkFBZ0IsQ0FzUjVCO0lBQUQsdUJBQUM7Q0FBQSxBQXRSRCxJQXNSQztBQXRSWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge2FsZXJ0fSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7U2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGF9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCI7XHJcbmltcG9ydCB7U2VhcmNoQmFyfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWFyY2gtYmFyXCI7XHJcblxyXG5pbXBvcnQge0ZyaWVuZH0gZnJvbSBcIi4vZnJpZW5kXCI7XHJcbmltcG9ydCB7RnJpZW5kU2VydmljZX0gZnJvbSBcIi4vZnJpZW5kLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtGcmllbmRzaGlwfSBmcm9tIFwifi9hcHAvaG9tZS9mcmllbmQvZnJpZW5kc2hpcFwiO1xyXG5pbXBvcnQge2ZvckVhY2h9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXIvc3JjL3V0aWxzL2NvbGxlY3Rpb25cIjtcclxuaW1wb3J0IHtBcHBTZXR0aW5nc30gZnJvbSBcIn4vYXBwL2FwcC1zZXR0aW5nc1wiO1xyXG5pbXBvcnQge0l0ZW19IGZyb20gXCJ+L2FwcC9ob21lL2l0ZW0vaXRlbVwiO1xyXG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRXh0cmFzLCBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtTdWdnZXN0aW9ufSBmcm9tIFwifi9hcHAvaG9tZS9mcmllbmQvU3VnZ2VzdGlvblwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b25cIjtcclxuLy9pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIjtcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlL29ic2VydmFibGVcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4uL2l0ZW0vaXRlbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEludml0YXRpb24gfSBmcm9tIFwiLi9pbnZpdGF0aW9uXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLXN0YXRpc3RpY3NcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9mcmllbmRzLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZnJpZW5kcy5jb21wb25lbnQuaHRtbFwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRnJpZW5kc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICB1c2VyczogRnJpZW5kW107XHJcbiAgICBmcmllbmRzOiBGcmllbmRbXTtcclxuICAgIHBlbmRpbmc6IEZyaWVuZHNoaXBbXTtcclxuICAgIHJlY2VpdmVkOiBGcmllbmRzaGlwW107XHJcbiAgICBzdWdnZXN0aW9uOiBTdWdnZXN0aW9uO1xyXG4gICAgcHVibGljIHRhYlNlbGVjdGVkSW5kZXg6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0YWJTZWxlY3RlZEluZGV4UmVzdWx0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc2VhcmNoUGhyYXNlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHN1YjogYW55O1xyXG5cclxuICAgIHB1YmxpYyBpdGVtczogSXRlbVtdO1xyXG4gICAgcmVjZWl2ZWRJbnZpdGF0aW9uczogSW52aXRhdGlvbltdO1xyXG5cclxuICAgIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBGcmllbmRTZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLlxyXG4gICAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSwgZGVmaW5lZCBpbiBhcHAubW9kdWxlLnRzLlxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmcmllbmRTZXJ2aWNlOiBGcmllbmRTZXJ2aWNlLCBwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuZ2V0QWN0aXZpdGllcygpO1xyXG4gICAgICAgIC8vIHRoaXMudGFiU2VsZWN0ZWRJbmRleFJlc3VsdCA9IFwiUHJvZmlsZSBUYWIgKHRhYlNlbGVjdGVkSW5kZXggPSAwIClcIjsgIFxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgLy8gRGVmYXVsdHMgdG8gMCBpZiBubyBxdWVyeSBwYXJhbSBwcm92aWRlZC5cclxuICAgICAgICAgICAgY29uc29sZS5sb2cocGFyYW1zKTtcclxuICAgICAgICAgICAgaWYgKFwicGFnZVwiIGluIHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlVGFiKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hVc2VycygpO1xyXG4gICAgICAgIHRoaXMuZ2V0U3VnZ2VzdGlvbigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZnJpZW5kU2VydmljZS5nZXRSZWNlaXZlZEludml0YXRpb25zKCkuc3Vic2NyaWJlKGludml0YXRpb25zID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZWNlaXZlZEludml0YXRpb25zID0gaW52aXRhdGlvbnM7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFN1Z2dlc3Rpb24oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5mcmllbmRTZXJ2aWNlLmdldFN1Z2dlc3Rpb24oKS5zdWJzY3JpYmUoKHN1Z2dlc3Rpb24pID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzdWdnZXN0aW9uIHJlc3BvbnNlXCIpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdWdnZXN0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5zdWdnZXN0aW9uID0gbmV3IFN1Z2dlc3Rpb24oc3VnZ2VzdGlvblswXVswXSwgc3VnZ2VzdGlvblswXVsxXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWNjZXB0U3VnZ2VzdGlvbigpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgQWNjZXB0ZWQgYWN0aXZpdHkgc3VnZ2VzdGlvbjogJHt0aGlzLnN1Z2dlc3Rpb24uYWN0aXZpdHlJZH0gJHt0aGlzLnN1Z2dlc3Rpb24ubmFtZX1gKTtcclxuICAgICAgICAvL1RPRE86IG5hdmlnYXRlXHJcbiAgICAgICAgLy8gdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9ob21lL2ZyaWVuZHMnXSwgbmF2aWdhdGlvbkV4dHJhcykpO1xyXG4gICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczogeyBwYWdlOiB0aGlzLnN1Z2dlc3Rpb24uYWN0aXZpdHlJZCB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lL2l0ZW1zJ10sIG5hdmlnYXRpb25FeHRyYXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbnlTdWdnZXN0aW9uKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBEZW55IGFjdGl2aXR5IHN1Z2dlc3Rpb246ICR7dGhpcy5zdWdnZXN0aW9uLmFjdGl2aXR5SWR9ICR7dGhpcy5zdWdnZXN0aW9uLm5hbWV9YCk7XHJcbiAgICAgICAgdGhpcy5zdWdnZXN0aW9uID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25TdWJtaXQoYXJncykge1xyXG4gICAgICAgIGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIC8vIGFsZXJ0KFwiWW91IGFyZSBzZWFyY2hpbmcgZm9yIFwiICsgc2VhcmNoQmFyLnRleHQpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoVXNlcihzZWFyY2hCYXIudGV4dCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZWFyY2hCYXIgdGV4dCEgU2VhcmNoOiBcIiArIHNlYXJjaEJhci50ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25UZXh0Q2hhbmdlZChhcmdzKSB7XHJcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZWFyY2hCYXIgdGV4dCBjaGFuZ2VkISBOZXcgdmFsdWU6IFwiICsgc2VhcmNoQmFyLnRleHQpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoVXNlcihzZWFyY2hCYXIudGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlVGFiKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRhYlNlbGVjdGVkSW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gMTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAyO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50YWJTZWxlY3RlZEluZGV4ID09PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGRpc3BsYXlpbmcgdGhlIG9sZCBhbmQgbmV3IFRhYlZpZXcgc2VsZWN0ZWRJbmRleFxyXG4gICAgb25TZWxlY3RlZEluZGV4Q2hhbmdlZChhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSkge1xyXG4gICAgICAgIGlmIChhcmdzLm9sZEluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IGFyZ3MubmV3SW5kZXg7XHJcbiAgICAgICAgICAgIGlmIChuZXdJbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YWJTZWxlY3RlZEluZGV4UmVzdWx0ID0gXCJQcm9maWxlIFRhYiAodGFiU2VsZWN0ZWRJbmRleCA9IDAgKVwiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5ld0luZGV4ID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXhSZXN1bHQgPSBcIlN0YXRzIFRhYiAodGFiU2VsZWN0ZWRJbmRleCA9IDEgKVwiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5ld0luZGV4ID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXhSZXN1bHQgPSBcIlNldHRpbmdzIFRhYiAodGFiU2VsZWN0ZWRJbmRleCA9IDIgKVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGFsZXJ0KGBTZWxlY3RlZCBpbmRleCBoYXMgY2hhbmdlZCAoIE9sZCBpbmRleDogJHthcmdzLm9sZEluZGV4fSBOZXcgaW5kZXg6ICR7YXJncy5uZXdJbmRleH0gKWApXHJcbiAgICAgICAgICAgIC8vICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcclxuICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2hVc2VyKG5hbWU6IFN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZnJpZW5kU2VydmljZS5zZWFyY2hVc2VyKG5hbWUpLnN1YnNjcmliZSh1c2VycyA9PiB0aGlzLnVzZXJzID0gdGhpcy5pbml0VXNlcnModXNlcnMpKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hVc2VycyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFVzZXJzKHVzZXJzOiBGcmllbmRbXSk6IEZyaWVuZFtdIHtcclxuICAgICAgICBsZXQgX3VzZXJzID0gW107XHJcbiAgICAgICAgdXNlcnMuZm9yRWFjaCgodXNlcikgPT4ge1xyXG4gICAgICAgICAgICBfdXNlcnMucHVzaChuZXcgRnJpZW5kKHVzZXIuaWQsIHVzZXIubmFtZSkpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIF91c2Vyc1xyXG4gICAgfVxyXG5cclxuICAgIGFjY2VwdEZyaWVuZFJlcXVlc3QoZnJpZW5kc2hpcElkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgYWNjZXB0aW5nIGZyaWVuZHNoaXAgJHtmcmllbmRzaGlwSWR9YCk7XHJcbiAgICAgICAgdGhpcy5mcmllbmRTZXJ2aWNlLmFjY2VwdEZyaWVuZFJlc3Vlc3QoZnJpZW5kc2hpcElkKS5zdWJzY3JpYmUoKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hVc2VycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlY2xpbmVGcmllbmRSZXF1ZXN0KGZyaWVuZHNoaXBJZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGRlY2xpbmluZyBmcmllbmRzaGlwICR7ZnJpZW5kc2hpcElkfWApO1xyXG4gICAgICAgIHRoaXMuZnJpZW5kU2VydmljZS5kZWNsaW5lRnJpZW5kUmVzdWVzdChmcmllbmRzaGlwSWQpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoVXNlcnMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlckxvY2FsbHkoaWQ6IHN0cmluZyk6IEZyaWVuZCB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVzZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVzZXJzW2ldLmlkID09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51c2Vyc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBhZGRGcmllbmQodXNlcjogRnJpZW5kKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHVzZXIuaXNGcmllbmQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodXNlci5pc1JlcXVlc3RpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodXNlci5yZXF1ZXN0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcImZyaWVuZC1kZXRhaWwgXCIgKyB1c2VyLmlkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgYWRkaW5nIGZyaWVuZCAke3VzZXIuaWR9IGJ5ICR7QXBwU2V0dGluZ3MuVE9LRU59YCk7XHJcbiAgICAgICAgdGhpcy5mcmllbmRTZXJ2aWNlLmFkZEZyaWVuZCh1c2VyLmlkKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hVc2VycygpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaEludml0YXRpb25zKCk6IHZvaWR7XHJcbiAgICAgICAgdGhpcy5mcmllbmRTZXJ2aWNlLmdldFJlY2VpdmVkSW52aXRhdGlvbnMoKS5zdWJzY3JpYmUoaW52aXRhdGlvbnMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlY2VpdmVkSW52aXRhdGlvbnMgPSBpbnZpdGF0aW9ucztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoVXNlcnMoZG9Ob3RSZWxvYWRVc2Vycz86IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmZyaWVuZFNlcnZpY2UuZ2V0UGVuZGluZ1JlcXVlc3RzKCkuc3Vic2NyaWJlKHVzZXJzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wZW5kaW5nID0gdXNlcnM7XHJcbiAgICAgICAgICAgIHRoaXMuYW5ub3RhdGVVc2VycygpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5mcmllbmRTZXJ2aWNlLmdldFJlY2VpdmVkUmVxdWVzdHMoKS5zdWJzY3JpYmUodXNlcnMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlY2VpdmVkID0gdXNlcnM7XHJcbiAgICAgICAgICAgIHRoaXMuYW5ub3RhdGVVc2VycygpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGRvTm90UmVsb2FkVXNlcnMpIHtcclxuICAgICAgICAgICAgdGhpcy5mcmllbmRTZXJ2aWNlLmdldFVzZXJzKCkuc3Vic2NyaWJlKHVzZXJzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlcnMgPSB0aGlzLmluaXRVc2Vycyh1c2Vycyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFubm90YXRlVXNlcnMoKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5mcmllbmRTZXJ2aWNlLmdldEZyaWVuZHMoKS5zdWJzY3JpYmUodXNlcnMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZyaWVuZHMgPSB1c2VycztcclxuICAgICAgICAgICAgdGhpcy5hbm5vdGF0ZVVzZXJzKClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhbm5vdGF0ZVVzZXJzKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5mcmllbmRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJpZW5kcy5mb3JFYWNoKChmcmllbmQpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB1c2VyID0gdGhpcy5nZXRVc2VyTG9jYWxseShmcmllbmQuaWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLmlzRnJpZW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBlbmRpbmcuZm9yRWFjaCgocGVuZGluZykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdXNlciA9IHRoaXMuZ2V0VXNlckxvY2FsbHkocGVuZGluZy5pbnZpdGVlVXNlci5pZCk7XHJcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICB1c2VyLnJlcXVlc3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyogSU5WSVRBVElPTiBGT1IgVEhFIEFDVElWSVRZICovXHJcblxyXG4gICAgLy9pbnZpdCBhIGZyaWVuZCBmb3IgYW4gYWN0aXZpdHlcclxuICAgLy8gL2FjdGl2aXRpZXMvaW52aXRhdGlvbi9jcmVhdGUvOmFjdGl2aXR5SWQvOmludml0ZWVJZFxyXG4gICAgc2VuZEludml0YXRpb24odXNlcjogRnJpZW5kLGFyZ3M6IEV2ZW50RGF0YSk6IHZvaWQge1xyXG4gICAgICAgXHJcbiAgICAgICAvLyB0aGlzLmludml0YXRpb24gPSBuZXcgSW52aXRhdGlvbigpXHJcbiAgICAgICBcclxuICAgICAgICB1c2VyLmludml0YXRpb25TaGFyZWQ9dHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZSBidXR0b24gY29sb3IgdG8gcmVkXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBiID0gYXJncy5vYmplY3QgYXMgQnV0dG9uOyAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGcmllbmQgYnV0dG9uOiBcIiArIGFyZ3Mub2JqZWN0KTtcclxuICAgICAgICBiLnNldCgndGV4dCcsICdQZW5kaW5nJyk7XHJcbiAgICAgICAgICBcclxuICAgICAgICBkaWFsb2dzLmFjdGlvbih7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2hvb3NlIHRoZSBhY3Rpdml0eSB0byBzaGFyZVwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxyXG4gICAgICAgICAgICBhY3Rpb25zOiB0aGlzLml0ZW1zLm1hcChmdW5jdGlvbihlbCl7cmV0dXJuIGVsLm5hbWV9KVxyXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHJlc3VsdCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMuaXRlbXMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zW2ldLm5hbWUgPT0gcmVzdWx0KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSXRlbSBuYW1lOiBcIiArIHRoaXMuaXRlbXNbaV0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuZnJpZW5kU2VydmljZS5zZW5kSW52aXRhdGlvbih0aGlzLml0ZW1zW2ldLmFjdGl2aXR5Qmx1ZXByaW50SWQsdXNlci5pZCkuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTsgICAgICBcclxuICAgIH1cclxuIFxyXG4gICAgLy9hY2NlcHQgdGhlIGludml0YXRpb25cclxuICAgIC8vL2FjdGl2aXRpZXMvaW52aXRhdGlvbi86aW52aXRhdGlvbklkL2FjY2VwdFxyXG4gICAgYWNjZXB0SW52aXRhdGlvbihpbnZpdGF0aW9uSWQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZnJpZW5kU2VydmljZS5hY2NlcHRJbnZpdGF0aW9uKGludml0YXRpb25JZCkuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLnJlY2VpdmVkSW52aXRhdGlvbnMpe1xyXG4gICAgICAgICAgICBpZih0aGlzLnJlY2VpdmVkSW52aXRhdGlvbnNbaV0uaW52aXRhdGlvbklkPT1pbnZpdGF0aW9uSWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWNlaXZlZEludml0YXRpb25zLnNwbGljZSh0aGlzLnJlY2VpdmVkSW52aXRhdGlvbnMuaW5kZXhPZltpXSwxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm5BcnJheSgpOnZvaWR7XHJcbiAgICAgICAvLyBjb25zb2xlLmxvZyhcImludml0YXRpb25zOiBcIiArIHRoaXMucmVjZWl2ZWRJbnZpdGF0aW9uc1swXSk7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5yZWNlaXZlZEludml0YXRpb25zLmxlbmd0aDsgaSsrKVxyXG4gICAgY29uc29sZS5sb2coXCJQcmludGludml0YXRpb25zRGF0YTpcIiwgdGhpcy5yZWNlaXZlZEludml0YXRpb25zW2ldLmludml0ZXJVc2VyLm5hbWUpO1xyXG4gICAgfVxyXG4gICAgICAgIFxyXG4gICAgXHJcblxyXG4gICAgLy9kZWNsaW5lIHRoZSBpbnZpdGF0aW9uICAgXHJcbiAgICAvLy9hY3Rpdml0aWVzL2ludml0YXRpb24vOmludml0YXRpb25JZC9kZWNsaW5lXHJcbiAgICBkZWNsaW5lSW5pdml0YXRpb24oaW52aXRhdGlvbklkOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmZyaWVuZFNlcnZpY2UuZGVjbGluZUludml0YXRpb24oaW52aXRhdGlvbklkKS5zdWJzY3JpYmUoKTtcclxuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMucmVjZWl2ZWRJbnZpdGF0aW9ucyl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucmVjZWl2ZWRJbnZpdGF0aW9uc1tpXS5pbnZpdGF0aW9uSWQ9PWludml0YXRpb25JZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlY2VpdmVkSW52aXRhdGlvbnMuc3BsaWNlKHRoaXMucmVjZWl2ZWRJbnZpdGF0aW9ucy5pbmRleE9mW2ldLDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRBY3Rpdml0aWVzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXRlbVNlcnZpY2UuZ2V0QWN0aXZpdGllcygpLnN1YnNjcmliZShhY3Rpdml0aWVzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtcyA9IGFjdGl2aXRpZXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxufVxyXG4iXX0=