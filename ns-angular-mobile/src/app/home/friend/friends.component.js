"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var friend_service_1 = require("./friend.service");
var FriendsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the FriendService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function FriendsComponent(friendService) {
        this.friendService = friendService;
        this.tabSelectedIndex = 0;
        this.tabSelectedIndexResult = "Profile Tab (tabSelectedIndex = 0 )";
    }
    FriendsComponent.prototype.ngOnInit = function () {
        this.users = this.friendService.getItems();
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
            dialogs_1.alert("Selected index has changed ( Old index: " + args.oldIndex + " New index: " + args.newIndex + " )")
                .then(function () {
                console.log("Dialog closed!");
            });
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJpZW5kcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmcmllbmRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCx1REFBb0Q7QUFJcEQsbURBQWlEO0FBUWpEO0lBTUksOElBQThJO0lBQzlJLGlIQUFpSDtJQUNqSCwwQkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsc0JBQXNCLEdBQUcscUNBQXFDLENBQUM7SUFDeEUsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVELG9DQUFTLEdBQVQ7UUFDSSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztTQUM3QjthQUFNLElBQUksSUFBSSxDQUFDLGdCQUFnQixLQUFLLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1NBQzdCO2FBQU0sSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7U0FDN0I7SUFDTCxDQUFDO0lBRUQsbURBQW1EO0lBQ25ELGlEQUFzQixHQUF0QixVQUF1QixJQUFtQztRQUN0RCxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDdEIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvQixJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxxQ0FBcUMsQ0FBQzthQUN2RTtpQkFBTSxJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxtQ0FBbUMsQ0FBQzthQUNyRTtpQkFBTSxJQUFJLFFBQVEsS0FBSyxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxzQ0FBc0MsQ0FBQzthQUN4RTtZQUNELGVBQUssQ0FBQyw2Q0FBMkMsSUFBSSxDQUFDLFFBQVEsb0JBQWUsSUFBSSxDQUFDLFFBQVEsT0FBSSxDQUFDO2lCQUMxRixJQUFJLENBQUM7Z0JBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUFDO1NBQ1Y7SUFDTCxDQUFDO0lBM0NRLGdCQUFnQjtRQUw1QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7U0FDMUMsQ0FBQzt5Q0FTcUMsOEJBQWE7T0FSdkMsZ0JBQWdCLENBNEM1QjtJQUFELHVCQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7QUE1Q1ksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBhbGVydCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItdmlld1wiO1xyXG5cclxuaW1wb3J0IHsgRnJpZW5kIH0gZnJvbSBcIi4vZnJpZW5kXCI7XHJcbmltcG9ydCB7IEZyaWVuZFNlcnZpY2UgfSBmcm9tIFwiLi9mcmllbmQuc2VydmljZVwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtc3RhdGlzdGljc1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZnJpZW5kcy5jb21wb25lbnQuaHRtbFwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRnJpZW5kc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICB1c2VyczogRnJpZW5kW107XHJcbiAgICBwdWJsaWMgdGFiU2VsZWN0ZWRJbmRleDogbnVtYmVyO1xyXG4gICAgcHVibGljIHRhYlNlbGVjdGVkSW5kZXhSZXN1bHQ6IHN0cmluZztcclxuXHJcblxyXG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEZyaWVuZFNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuXHJcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZyaWVuZFNlcnZpY2U6IEZyaWVuZFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleFJlc3VsdCA9IFwiUHJvZmlsZSBUYWIgKHRhYlNlbGVjdGVkSW5kZXggPSAwIClcIjtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVzZXJzID0gdGhpcy5mcmllbmRTZXJ2aWNlLmdldEl0ZW1zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlVGFiKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRhYlNlbGVjdGVkSW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gMTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAyO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50YWJTZWxlY3RlZEluZGV4ID09PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGRpc3BsYXlpbmcgdGhlIG9sZCBhbmQgbmV3IFRhYlZpZXcgc2VsZWN0ZWRJbmRleFxyXG4gICAgb25TZWxlY3RlZEluZGV4Q2hhbmdlZChhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSkge1xyXG4gICAgICAgIGlmIChhcmdzLm9sZEluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IGFyZ3MubmV3SW5kZXg7XHJcbiAgICAgICAgICAgIGlmIChuZXdJbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YWJTZWxlY3RlZEluZGV4UmVzdWx0ID0gXCJQcm9maWxlIFRhYiAodGFiU2VsZWN0ZWRJbmRleCA9IDAgKVwiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5ld0luZGV4ID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXhSZXN1bHQgPSBcIlN0YXRzIFRhYiAodGFiU2VsZWN0ZWRJbmRleCA9IDEgKVwiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5ld0luZGV4ID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXhSZXN1bHQgPSBcIlNldHRpbmdzIFRhYiAodGFiU2VsZWN0ZWRJbmRleCA9IDIgKVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFsZXJ0KGBTZWxlY3RlZCBpbmRleCBoYXMgY2hhbmdlZCAoIE9sZCBpbmRleDogJHthcmdzLm9sZEluZGV4fSBOZXcgaW5kZXg6ICR7YXJncy5uZXdJbmRleH0gKWApXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=