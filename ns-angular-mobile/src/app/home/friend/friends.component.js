"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var friend_service_1 = require("./friend.service");
var FriendsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the FriendService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function FriendsComponent(friendService) {
        this.friendService = friendService;
        this.tabSelectedIndex = 0;
        // this.tabSelectedIndexResult = "Profile Tab (tabSelectedIndex = 0 )";
    }
    FriendsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.friendService.getPendingRequests().subscribe(function (users) { return _this.pending = users; });
        this.friendService.getReceivedRequests().subscribe(function (users) { return _this.received = users; });
        this.friendService.getUsers().subscribe(function (users) { return _this.users = users; });
        this.friendService.getFriends().subscribe(function (users) { return _this.friends = users; });
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
                // this.tabSelectedIndexResult = "Profile Tab (tabSelectedIndex = 0 )";
            }
            else if (newIndex === 1) {
                // this.tabSelectedIndexResult = "Stats Tab (tabSelectedIndex = 1 )";
            }
            else if (newIndex === 2) {
                // this.tabSelectedIndexResult = "Settings Tab (tabSelectedIndex = 2 )";
            }
            // alert(`Selected index has changed ( Old index: ${args.oldIndex} New index: ${args.newIndex} )`)
            //     .then(() => {
            //         console.log("Dialog closed!");
            //     });
        }
    };
    FriendsComponent.prototype.searchUser = function (name) {
        var _this = this;
        this.friendService.searchUser(name).subscribe(function (users) { return _this.users = users; });
    };
    FriendsComponent = __decorate([
        core_1.Component({
            selector: "ns-statistics",
            moduleId: module.id,
            templateUrl: "./friends.component.html",
        }),
        __metadata("design:paramtypes", [friend_service_1.FriendService])
    ], FriendsComponent);
    return FriendsComponent;
}());
exports.FriendsComponent = FriendsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJpZW5kcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmcmllbmRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQU1sRCxtREFBaUQ7QUFRakQ7SUFVSSw4SUFBOEk7SUFDOUksaUhBQWlIO0lBQ2pILDBCQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLHVFQUF1RTtJQUMzRSxDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxFQUFwQixDQUFvQixDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxFQUFyQixDQUFxQixDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLEVBQXBCLENBQW9CLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRU0sbUNBQVEsR0FBZixVQUFnQixJQUFJO1FBQ2hCLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkMsb0RBQW9EO1FBQ3BELElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFTSx3Q0FBYSxHQUFwQixVQUFxQixJQUFJO1FBQ3JCLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELG9DQUFTLEdBQVQ7UUFDSSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztTQUM3QjthQUFNLElBQUksSUFBSSxDQUFDLGdCQUFnQixLQUFLLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1NBQzdCO2FBQU0sSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7U0FDN0I7SUFDTCxDQUFDO0lBRUQsbURBQW1EO0lBQ25ELGlEQUFzQixHQUF0QixVQUF1QixJQUFtQztRQUN0RCxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDdEIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvQixJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQUU7Z0JBQ2hCLHVFQUF1RTthQUMxRTtpQkFBTSxJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQUU7Z0JBQ3ZCLHFFQUFxRTthQUN4RTtpQkFBTSxJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQUU7Z0JBQ3ZCLHdFQUF3RTthQUMzRTtZQUNELGtHQUFrRztZQUNsRyxvQkFBb0I7WUFDcEIseUNBQXlDO1lBQ3pDLFVBQVU7U0FDYjtJQUNMLENBQUM7SUFFRCxxQ0FBVSxHQUFWLFVBQVcsSUFBWTtRQUF2QixpQkFFQztRQURHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFsQixDQUFrQixDQUFDLENBQUM7SUFDL0UsQ0FBQztJQW5FUSxnQkFBZ0I7UUFMNUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1NBQzFDLENBQUM7eUNBYXFDLDhCQUFhO09BWnZDLGdCQUFnQixDQW9FNUI7SUFBRCx1QkFBQztDQUFBLEFBcEVELElBb0VDO0FBcEVZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGFsZXJ0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItdmlld1wiO1xuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2VhcmNoLWJhclwiO1xuXG5pbXBvcnQgeyBGcmllbmQgfSBmcm9tIFwiLi9mcmllbmRcIjtcbmltcG9ydCB7IEZyaWVuZFNlcnZpY2UgfSBmcm9tIFwiLi9mcmllbmQuc2VydmljZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLXN0YXRpc3RpY3NcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZnJpZW5kcy5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBGcmllbmRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICB1c2VyczogRnJpZW5kW107XG4gICAgZnJpZW5kczogRnJpZW5kW107XG4gICAgcGVuZGluZzogRnJpZW5kW107XG4gICAgcmVjZWl2ZWQ6IEZyaWVuZFtdO1xuICAgIHB1YmxpYyB0YWJTZWxlY3RlZEluZGV4OiBudW1iZXI7XG4gICAgcHVibGljIHRhYlNlbGVjdGVkSW5kZXhSZXN1bHQ6IHN0cmluZztcbiAgICBwdWJsaWMgc2VhcmNoUGhyYXNlOiBzdHJpbmc7XG5cblxuICAgIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBGcmllbmRTZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLlxuICAgIC8vIEFuZ3VsYXIga25vd3MgYWJvdXQgdGhpcyBzZXJ2aWNlIGJlY2F1c2UgaXQgaXMgaW5jbHVkZWQgaW4geW91ciBhcHDigJlzIG1haW4gTmdNb2R1bGUsIGRlZmluZWQgaW4gYXBwLm1vZHVsZS50cy5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZyaWVuZFNlcnZpY2U6IEZyaWVuZFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gMDtcbiAgICAgICAgLy8gdGhpcy50YWJTZWxlY3RlZEluZGV4UmVzdWx0ID0gXCJQcm9maWxlIFRhYiAodGFiU2VsZWN0ZWRJbmRleCA9IDAgKVwiO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZyaWVuZFNlcnZpY2UuZ2V0UGVuZGluZ1JlcXVlc3RzKCkuc3Vic2NyaWJlKHVzZXJzID0+IHRoaXMucGVuZGluZyA9IHVzZXJzKTtcbiAgICAgICAgdGhpcy5mcmllbmRTZXJ2aWNlLmdldFJlY2VpdmVkUmVxdWVzdHMoKS5zdWJzY3JpYmUodXNlcnMgPT4gdGhpcy5yZWNlaXZlZCA9IHVzZXJzKTtcbiAgICAgICAgdGhpcy5mcmllbmRTZXJ2aWNlLmdldFVzZXJzKCkuc3Vic2NyaWJlKHVzZXJzID0+IHRoaXMudXNlcnMgPSB1c2Vycyk7XG4gICAgICAgIHRoaXMuZnJpZW5kU2VydmljZS5nZXRGcmllbmRzKCkuc3Vic2NyaWJlKHVzZXJzID0+IHRoaXMuZnJpZW5kcyA9IHVzZXJzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25TdWJtaXQoYXJncykge1xuICAgICAgICBsZXQgc2VhcmNoQmFyID0gPFNlYXJjaEJhcj5hcmdzLm9iamVjdDtcbiAgICAgICAgLy8gYWxlcnQoXCJZb3UgYXJlIHNlYXJjaGluZyBmb3IgXCIgKyBzZWFyY2hCYXIudGV4dCk7XG4gICAgICAgIHRoaXMuc2VhcmNoVXNlcihzZWFyY2hCYXIudGV4dCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VhcmNoQmFyIHRleHQhIFNlYXJjaDogXCIgKyBzZWFyY2hCYXIudGV4dCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uVGV4dENoYW5nZWQoYXJncykge1xuICAgICAgICBsZXQgc2VhcmNoQmFyID0gPFNlYXJjaEJhcj5hcmdzLm9iamVjdDtcbiAgICAgICAgY29uc29sZS5sb2coXCJTZWFyY2hCYXIgdGV4dCBjaGFuZ2VkISBOZXcgdmFsdWU6IFwiICsgc2VhcmNoQmFyLnRleHQpO1xuICAgICAgICB0aGlzLnNlYXJjaFVzZXIoc2VhcmNoQmFyLnRleHQpO1xuICAgIH1cblxuICAgIGNoYW5nZVRhYigpIHtcbiAgICAgICAgaWYgKHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gMTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRhYlNlbGVjdGVkSW5kZXggPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50YWJTZWxlY3RlZEluZGV4ID09PSAyKSB7XG4gICAgICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZGlzcGxheWluZyB0aGUgb2xkIGFuZCBuZXcgVGFiVmlldyBzZWxlY3RlZEluZGV4XG4gICAgb25TZWxlY3RlZEluZGV4Q2hhbmdlZChhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSkge1xuICAgICAgICBpZiAoYXJncy5vbGRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gYXJncy5uZXdJbmRleDtcbiAgICAgICAgICAgIGlmIChuZXdJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMudGFiU2VsZWN0ZWRJbmRleFJlc3VsdCA9IFwiUHJvZmlsZSBUYWIgKHRhYlNlbGVjdGVkSW5kZXggPSAwIClcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3SW5kZXggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnRhYlNlbGVjdGVkSW5kZXhSZXN1bHQgPSBcIlN0YXRzIFRhYiAodGFiU2VsZWN0ZWRJbmRleCA9IDEgKVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdJbmRleCA9PT0gMikge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMudGFiU2VsZWN0ZWRJbmRleFJlc3VsdCA9IFwiU2V0dGluZ3MgVGFiICh0YWJTZWxlY3RlZEluZGV4ID0gMiApXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhbGVydChgU2VsZWN0ZWQgaW5kZXggaGFzIGNoYW5nZWQgKCBPbGQgaW5kZXg6ICR7YXJncy5vbGRJbmRleH0gTmV3IGluZGV4OiAke2FyZ3MubmV3SW5kZXh9IClgKVxuICAgICAgICAgICAgLy8gICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcbiAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlYXJjaFVzZXIobmFtZTogU3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZnJpZW5kU2VydmljZS5zZWFyY2hVc2VyKG5hbWUpLnN1YnNjcmliZSh1c2VycyA9PiB0aGlzLnVzZXJzID0gdXNlcnMpO1xuICAgIH1cbn1cbiJdfQ==