"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var friend_1 = require("./friend");
var friend_service_1 = require("./friend.service");
var app_settings_1 = require("~/app/app-settings");
var router_1 = require("@angular/router");
var FriendsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the FriendService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function FriendsComponent(friendService, route) {
        this.friendService = friendService;
        this.route = route;
        this.tabSelectedIndex = 0;
        // this.tabSelectedIndexResult = "Profile Tab (tabSelectedIndex = 0 )";
    }
    FriendsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.refreshUsers();
        this.sub = this.route.queryParams.subscribe(function (params) {
            // Defaults to 0 if no query param provided.
            console.log(params);
            if ("page" in params) {
                _this.tabSelectedIndex = 1;
                _this.changeTab();
            }
        });
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
        });
    };
    //accept the invitation
    ///activities/invitation/:invitationId/accept
    FriendsComponent.prototype.acceptInvitation = function (invitationId) {
        this.friendService.acceptInvitation(invitationId).subscribe();
    };
    //decline the invitation   
    ///activities/invitation/:invitationId/decline
    FriendsComponent.prototype.declineInivitation = function (inivitationId) {
        this.friendService.declineInvitation(inivitationId).subscribe();
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
        __metadata("design:paramtypes", [friend_service_1.FriendService, router_1.ActivatedRoute])
    ], FriendsComponent);
    return FriendsComponent;
}());
exports.FriendsComponent = FriendsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJpZW5kcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmcmllbmRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUtoRCxtQ0FBZ0M7QUFDaEMsbURBQStDO0FBRy9DLG1EQUErQztBQUUvQywwQ0FBK0M7QUFJL0MscURBQXVEO0FBQ3ZELHFEQUFtRDtBQVduRDtJQWVJLDhJQUE4STtJQUM5SSxpSEFBaUg7SUFDakgsMEJBQW9CLGFBQTRCLEVBQVUsV0FBd0IsRUFBVSxLQUFxQjtRQUE3RixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFMakgsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFNM0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsdUVBQXVFO0lBQzNFLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDOUMsNENBQTRDO1lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsSUFBSSxNQUFNLElBQUksTUFBTSxFQUFFO2dCQUNsQixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO2dCQUMxQixLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDcEI7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU0sbUNBQVEsR0FBZixVQUFnQixJQUFJO1FBQ2hCLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkMsb0RBQW9EO1FBQ3BELElBQUksQ0FB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QUF1QiwwQkFBVyxFQUFpQix1QkFBYztPQWpCeEcsZ0JBQWdCLENBNk41QjtJQUFELHVCQUFDO0NBQUEsQUE3TkQsSUE2TkM7QUE3TlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHthbGVydH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQge1NlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItdmlld1wiO1xyXG5pbXBvcnQge1NlYXJjaEJhcn0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2VhcmNoLWJhclwiO1xyXG5cclxuaW1wb3J0IHtGcmllbmR9IGZyb20gXCIuL2ZyaWVuZFwiO1xyXG5pbXBvcnQge0ZyaWVuZFNlcnZpY2V9IGZyb20gXCIuL2ZyaWVuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RnJpZW5kc2hpcH0gZnJvbSBcIn4vYXBwL2hvbWUvZnJpZW5kL2ZyaWVuZHNoaXBcIjtcclxuaW1wb3J0IHtmb3JFYWNofSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyL3NyYy91dGlscy9jb2xsZWN0aW9uXCI7XHJcbmltcG9ydCB7QXBwU2V0dGluZ3N9IGZyb20gXCJ+L2FwcC9hcHAtc2V0dGluZ3NcIjtcclxuaW1wb3J0IHtJdGVtfSBmcm9tIFwifi9hcHAvaG9tZS9pdGVtL2l0ZW1cIjtcclxuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b25cIjtcclxuLy9pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIjtcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlL29ic2VydmFibGVcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4uL2l0ZW0vaXRlbS5zZXJ2aWNlXCI7XHJcblxyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLXN0YXRpc3RpY3NcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9mcmllbmRzLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZnJpZW5kcy5jb21wb25lbnQuaHRtbFwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRnJpZW5kc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICB1c2VyczogRnJpZW5kW107XHJcbiAgICBmcmllbmRzOiBGcmllbmRbXTtcclxuICAgIHBlbmRpbmc6IEZyaWVuZHNoaXBbXTtcclxuICAgIHJlY2VpdmVkOiBGcmllbmRzaGlwW107XHJcbiAgICBwdWJsaWMgdGFiU2VsZWN0ZWRJbmRleDogbnVtYmVyO1xyXG4gICAgcHVibGljIHRhYlNlbGVjdGVkSW5kZXhSZXN1bHQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBzZWFyY2hQaHJhc2U6IHN0cmluZztcclxuICAgIHByaXZhdGUgc3ViOiBhbnk7XHJcbiAgICBcclxuICAgIHB1YmxpYyBpdGVtczogSXRlbVtdO1xyXG5cclxuICAgIGJ1dHRvbkNsaWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEZyaWVuZFNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuXHJcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZyaWVuZFNlcnZpY2U6IEZyaWVuZFNlcnZpY2UsIHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG4gICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5nZXRBY3Rpdml0aWVzKCk7XHJcbiAgICAgICAgLy8gdGhpcy50YWJTZWxlY3RlZEluZGV4UmVzdWx0ID0gXCJQcm9maWxlIFRhYiAodGFiU2VsZWN0ZWRJbmRleCA9IDAgKVwiO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgLy8gRGVmYXVsdHMgdG8gMCBpZiBubyBxdWVyeSBwYXJhbSBwcm92aWRlZC5cclxuICAgICAgICAgICAgY29uc29sZS5sb2cocGFyYW1zKTtcclxuICAgICAgICAgICAgaWYgKFwicGFnZVwiIGluIHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlVGFiKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hVc2VycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblN1Ym1pdChhcmdzKSB7XHJcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgLy8gYWxlcnQoXCJZb3UgYXJlIHNlYXJjaGluZyBmb3IgXCIgKyBzZWFyY2hCYXIudGV4dCk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hVc2VyKHNlYXJjaEJhci50ZXh0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlYXJjaEJhciB0ZXh0ISBTZWFyY2g6IFwiICsgc2VhcmNoQmFyLnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblRleHRDaGFuZ2VkKGFyZ3MpIHtcclxuICAgICAgICBsZXQgc2VhcmNoQmFyID0gPFNlYXJjaEJhcj5hcmdzLm9iamVjdDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlYXJjaEJhciB0ZXh0IGNoYW5nZWQhIE5ldyB2YWx1ZTogXCIgKyBzZWFyY2hCYXIudGV4dCk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hVc2VyKHNlYXJjaEJhci50ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VUYWIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50YWJTZWxlY3RlZEluZGV4ID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRhYlNlbGVjdGVkSW5kZXggPT09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZGlzcGxheWluZyB0aGUgb2xkIGFuZCBuZXcgVGFiVmlldyBzZWxlY3RlZEluZGV4XHJcbiAgICBvblNlbGVjdGVkSW5kZXhDaGFuZ2VkKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XHJcbiAgICAgICAgaWYgKGFyZ3Mub2xkSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gYXJncy5uZXdJbmRleDtcclxuICAgICAgICAgICAgaWYgKG5ld0luZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXhSZXN1bHQgPSBcIlByb2ZpbGUgVGFiICh0YWJTZWxlY3RlZEluZGV4ID0gMCApXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3SW5kZXggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleFJlc3VsdCA9IFwiU3RhdHMgVGFiICh0YWJTZWxlY3RlZEluZGV4ID0gMSApXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3SW5kZXggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleFJlc3VsdCA9IFwiU2V0dGluZ3MgVGFiICh0YWJTZWxlY3RlZEluZGV4ID0gMiApXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gYWxlcnQoYFNlbGVjdGVkIGluZGV4IGhhcyBjaGFuZ2VkICggT2xkIGluZGV4OiAke2FyZ3Mub2xkSW5kZXh9IE5ldyBpbmRleDogJHthcmdzLm5ld0luZGV4fSApYClcclxuICAgICAgICAgICAgLy8gICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xyXG4gICAgICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlYXJjaFVzZXIobmFtZTogU3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5mcmllbmRTZXJ2aWNlLnNlYXJjaFVzZXIobmFtZSkuc3Vic2NyaWJlKHVzZXJzID0+IHRoaXMudXNlcnMgPSB0aGlzLmluaXRVc2Vycyh1c2VycykpO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFVzZXJzKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0VXNlcnModXNlcnM6IEZyaWVuZFtdKTogRnJpZW5kW10ge1xyXG4gICAgICAgIGxldCBfdXNlcnMgPSBbXTtcclxuICAgICAgICB1c2Vycy5mb3JFYWNoKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgICAgIF91c2Vycy5wdXNoKG5ldyBGcmllbmQodXNlci5pZCwgdXNlci5uYW1lKSlcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gX3VzZXJzXHJcbiAgICB9XHJcblxyXG4gICAgYWNjZXB0RnJpZW5kUmVxdWVzdChmcmllbmRzaGlwSWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBhY2NlcHRpbmcgZnJpZW5kc2hpcCAke2ZyaWVuZHNoaXBJZH1gKTtcclxuICAgICAgICB0aGlzLmZyaWVuZFNlcnZpY2UuYWNjZXB0RnJpZW5kUmVzdWVzdChmcmllbmRzaGlwSWQpLnN1YnNjcmliZSgpO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFVzZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVjbGluZUZyaWVuZFJlcXVlc3QoZnJpZW5kc2hpcElkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgZGVjbGluaW5nIGZyaWVuZHNoaXAgJHtmcmllbmRzaGlwSWR9YCk7XHJcbiAgICAgICAgdGhpcy5mcmllbmRTZXJ2aWNlLmRlY2xpbmVGcmllbmRSZXN1ZXN0KGZyaWVuZHNoaXBJZCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hVc2VycygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2VyTG9jYWxseShpZDogc3RyaW5nKTogRnJpZW5kIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudXNlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudXNlcnNbaV0uaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVzZXJzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEZyaWVuZCh1c2VyOiBGcmllbmQpOiB2b2lkIHtcclxuICAgICAgICBpZiAodXNlci5pc0ZyaWVuZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1c2VyLmlzUmVxdWVzdGluZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1c2VyLnJlcXVlc3RlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZnJpZW5kLWRldGFpbCBcIiArIHVzZXIuaWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBhZGRpbmcgZnJpZW5kICR7dXNlci5pZH0gYnkgJHtBcHBTZXR0aW5ncy5UT0tFTn1gKTtcclxuICAgICAgICB0aGlzLmZyaWVuZFNlcnZpY2UuYWRkRnJpZW5kKHVzZXIuaWQpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFVzZXJzKClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoVXNlcnMoZG9Ob3RSZWxvYWRVc2Vycz86IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmZyaWVuZFNlcnZpY2UuZ2V0UGVuZGluZ1JlcXVlc3RzKCkuc3Vic2NyaWJlKHVzZXJzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wZW5kaW5nID0gdXNlcnM7XHJcbiAgICAgICAgICAgIHRoaXMuYW5ub3RhdGVVc2VycygpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5mcmllbmRTZXJ2aWNlLmdldFJlY2VpdmVkUmVxdWVzdHMoKS5zdWJzY3JpYmUodXNlcnMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlY2VpdmVkID0gdXNlcnM7XHJcbiAgICAgICAgICAgIHRoaXMuYW5ub3RhdGVVc2VycygpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGRvTm90UmVsb2FkVXNlcnMpIHtcclxuICAgICAgICAgICAgdGhpcy5mcmllbmRTZXJ2aWNlLmdldFVzZXJzKCkuc3Vic2NyaWJlKHVzZXJzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlcnMgPSB0aGlzLmluaXRVc2Vycyh1c2Vycyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFubm90YXRlVXNlcnMoKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5mcmllbmRTZXJ2aWNlLmdldEZyaWVuZHMoKS5zdWJzY3JpYmUodXNlcnMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZyaWVuZHMgPSB1c2VycztcclxuICAgICAgICAgICAgdGhpcy5hbm5vdGF0ZVVzZXJzKClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhbm5vdGF0ZVVzZXJzKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5mcmllbmRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJpZW5kcy5mb3JFYWNoKChmcmllbmQpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB1c2VyID0gdGhpcy5nZXRVc2VyTG9jYWxseShmcmllbmQuaWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLmlzRnJpZW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBlbmRpbmcuZm9yRWFjaCgocGVuZGluZykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdXNlciA9IHRoaXMuZ2V0VXNlckxvY2FsbHkocGVuZGluZy5pbnZpdGVlVXNlci5pZCk7XHJcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICB1c2VyLnJlcXVlc3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyogSU5WSVRBVElPTiBGT1IgVEhFIEFDVElWSVRZICovXHJcblxyXG4gICAgLy9pbnZpdCBhIGZyaWVuZCBmb3IgYW4gYWN0aXZpdHlcclxuICAgLy8gL2FjdGl2aXRpZXMvaW52aXRhdGlvbi9jcmVhdGUvOmFjdGl2aXR5SWQvOmludml0ZWVJZFxyXG4gICAgc2VuZEludml0YXRpb24odXNlcjogRnJpZW5kLGFyZ3M6IEV2ZW50RGF0YSk6IHZvaWQge1xyXG4gICAgICAgIHVzZXIuaW52aXRhdGlvblNoYXJlZD10cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlIGJ1dHRvbiBjb2xvciB0byByZWRcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGIgPSBhcmdzLm9iamVjdCBhcyBCdXR0b247ICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZyaWVuZCBidXR0b246IFwiICsgYXJncy5vYmplY3QpO1xyXG4gICAgICAgIGIuc2V0KCd0ZXh0JywgJ1BlbmRpbmcnKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIGRpYWxvZ3MuYWN0aW9uKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJDaG9vc2UgdGhlIGFjdGl2aXR5IHRvIHNoYXJlXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiSW52aXRlXCIsXHJcbiAgICAgICAgICAgIGFjdGlvbnM6IHRoaXMuaXRlbXMubWFwKGZ1bmN0aW9uKGVsKXtyZXR1cm4gZWwubmFtZX0pXHJcbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyByZXN1bHQ6IFwiICsgcmVzdWx0KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5pdGVtcylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXNbaV0ubmFtZSA9PSByZXN1bHQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJdGVtIG5hbWU6IFwiICsgdGhpcy5pdGVtc1tpXS5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5mcmllbmRTZXJ2aWNlLnNlbmRJbnZpdGF0aW9uKHRoaXMuaXRlbXNbaV0uYWN0aXZpdHlCbHVlcHJpbnRJZCx1c2VyLmlkKS5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pOyAgICAgIFxyXG4gICAgfVxyXG4gXHJcbiAgICAvL2FjY2VwdCB0aGUgaW52aXRhdGlvblxyXG4gICAgLy8vYWN0aXZpdGllcy9pbnZpdGF0aW9uLzppbnZpdGF0aW9uSWQvYWNjZXB0XHJcbiAgICBhY2NlcHRJbnZpdGF0aW9uKGludml0YXRpb25JZDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5mcmllbmRTZXJ2aWNlLmFjY2VwdEludml0YXRpb24oaW52aXRhdGlvbklkKS5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICAgIC8vZGVjbGluZSB0aGUgaW52aXRhdGlvbiAgIFxyXG4gICAgLy8vYWN0aXZpdGllcy9pbnZpdGF0aW9uLzppbnZpdGF0aW9uSWQvZGVjbGluZVxyXG4gICAgZGVjbGluZUluaXZpdGF0aW9uKGluaXZpdGF0aW9uSWQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZnJpZW5kU2VydmljZS5kZWNsaW5lSW52aXRhdGlvbihpbml2aXRhdGlvbklkKS5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY3Rpdml0aWVzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXRlbVNlcnZpY2UuZ2V0QWN0aXZpdGllcygpLnN1YnNjcmliZShhY3Rpdml0aWVzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtcyA9IGFjdGl2aXRpZXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxufVxyXG4iXX0=