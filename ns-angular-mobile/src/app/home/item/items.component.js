"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var router_1 = require("@angular/router");
var app_settings_1 = require("~/app/app-settings");
var dialogs = require("tns-core-modules/ui/dialogs");
var utils = require("utils/utils");
var firebase = require("nativescript-plugin-firebase");
var ItemsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the FriendService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ItemsComponent(itemService, router) {
        this.itemService = itemService;
        this.router = router;
        this.bottomBarShow = true;
        this.customActivity = "";
        // bottomBarShow
        console.log("Items are loading...");
        console.log("Custom activity" + this.customActivity);
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.getActivities();
        firebase.getAuthToken({
            // default false, not recommended to set to true by Firebase but exposed for {N} devs nonetheless :)
            forceRefresh: false
        }).then(function (token) {
            console.log("Auth token retrieved: " + token);
        }, function (errorMessage) {
            console.log("Auth token retrieval error: " + errorMessage);
        });
    };
    ItemsComponent.prototype.getActivities = function () {
        var _this = this;
        this.itemService.getActivities().subscribe(function (activities) { return _this.items = activities; });
        // this.itemService.createAccount().subscribe(response => this.reponse = response)
    };
    ItemsComponent.prototype.onTapLogout = function () {
        firebase.logout();
        console.log("Logout done");
        app_settings_1.AppSettings.TOKEN = null;
        this.router.navigate(['/login']);
    };
    // Method that creates a custom activity
    ItemsComponent.prototype.onTapCreateActivity = function () {
        if (this.customActivity != "") {
            // Make a POST request to create a custom activity 
            this.itemService.createCustomActivity(this.customActivity).subscribe();
            console.log("This is the custom activity " + this.customActivity);
            // Displaying the alert that the activity was created
            dialogs.alert({
                title: "Alert",
                message: "Your custom activity has been added successfully!",
                okButtonText: "Got it!"
            }).then(function () {
                console.log("Dialog closed!");
            });
            // Making the POST request to refresh the list
            this.getActivities();
            // Removing the keyboard after pressing the "Got it!" button in the alert
            this.dismissSoftKyeboard();
        }
        else {
            // Displaying the alert that the activity is empty
            dialogs.alert({
                title: "Alert",
                message: "Please provide the name for your custom activity!",
                okButtonText: "Got it!"
            }).then(function () {
                console.log("Dialog closed!");
            });
        }
        // Clearing the custom activity text field
        this.customActivity = "";
    };
    ItemsComponent.prototype.dismissSoftKyeboard = function () {
        utils.ad.dismissSoftInput();
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
            styleUrls: ["./item.css"]
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService, router_1.Router])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELCtDQUE2QztBQUM3QywwQ0FBeUM7QUFDekMsbURBQStDO0FBRS9DLHFEQUF1RDtBQUN2RCxtQ0FBcUM7QUFDckMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFRekQ7SUFLSSw4SUFBOEk7SUFDOUksaUhBQWlIO0lBQ2pILHdCQUFvQixXQUF3QixFQUFVLE1BQWM7UUFBaEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSjdELGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzVCLG1CQUFjLEdBQUMsRUFBRSxDQUFDO1FBSWQsZ0JBQWdCO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixRQUFRLENBQUMsWUFBWSxDQUFDO1lBQ2xCLG9HQUFvRztZQUNwRyxZQUFZLEVBQUUsS0FBSztTQUN0QixDQUFDLENBQUMsSUFBSSxDQUNILFVBQVUsS0FBSztZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDbEQsQ0FBQyxFQUNELFVBQVUsWUFBWTtZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixHQUFHLFlBQVksQ0FBQyxDQUFDO1FBQy9ELENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUdELHNDQUFhLEdBQWI7UUFBQSxpQkFHQztRQUZHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxVQUFVLEVBQXZCLENBQXVCLENBQUMsQ0FBQztRQUNsRixrRkFBa0Y7SUFDdEYsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDSSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQiwwQkFBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCx3Q0FBd0M7SUFDeEMsNENBQW1CLEdBQW5CO1FBQ0ksSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsRUFBRTtZQUMzQixtREFBbUQ7WUFDbkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDdkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFFbEUscURBQXFEO1lBQ3JELE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ1YsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsT0FBTyxFQUFFLG1EQUFtRDtnQkFDNUQsWUFBWSxFQUFFLFNBQVM7YUFDMUIsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDLENBQUM7WUFDSCw4Q0FBOEM7WUFDOUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLHlFQUF5RTtZQUN6RSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM3QjthQUNGO1lBQ0ssa0RBQWtEO1lBQ3ZELE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ1YsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsT0FBTyxFQUFFLG1EQUFtRDtnQkFDNUQsWUFBWSxFQUFFLFNBQVM7YUFDMUIsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDLENBQUM7U0FDTDtRQUNFLDBDQUEwQztRQUMxQyxJQUFJLENBQUMsY0FBYyxHQUFDLEVBQUUsQ0FBQztJQUUzQixDQUFDO0lBRUQsNENBQW1CLEdBQW5CO1FBQ0ksS0FBSyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUE5RVEsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDO1NBQzVCLENBQUM7eUNBUW1DLDBCQUFXLEVBQWtCLGVBQU07T0FQM0QsY0FBYyxDQWdGMUI7SUFBRCxxQkFBQztDQUFBLEFBaEZELElBZ0ZDO0FBaEZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7QXBwU2V0dGluZ3N9IGZyb20gXCJ+L2FwcC9hcHAtc2V0dGluZ3NcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcInV0aWxzL3V0aWxzXCI7XG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9pdGVtLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaXRlbXM6IEl0ZW1bXTtcbiAgICByZXBvbnNlOiBhbnk7XG4gICAgcHVibGljIGJvdHRvbUJhclNob3cgPSB0cnVlO1xuICAgIGN1c3RvbUFjdGl2aXR5PVwiXCI7XG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEZyaWVuZFNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuXG4gICAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSwgZGVmaW5lZCBpbiBhcHAubW9kdWxlLnRzLlxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIC8vIGJvdHRvbUJhclNob3dcbiAgICAgICAgY29uc29sZS5sb2coXCJJdGVtcyBhcmUgbG9hZGluZy4uLlwiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJDdXN0b20gYWN0aXZpdHlcIisgdGhpcy5jdXN0b21BY3Rpdml0eSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2V0QWN0aXZpdGllcygpO1xuICAgICAgICBmaXJlYmFzZS5nZXRBdXRoVG9rZW4oe1xuICAgICAgICAgICAgLy8gZGVmYXVsdCBmYWxzZSwgbm90IHJlY29tbWVuZGVkIHRvIHNldCB0byB0cnVlIGJ5IEZpcmViYXNlIGJ1dCBleHBvc2VkIGZvciB7Tn0gZGV2cyBub25ldGhlbGVzcyA6KVxuICAgICAgICAgICAgZm9yY2VSZWZyZXNoOiBmYWxzZVxuICAgICAgICB9KS50aGVuKFxuICAgICAgICAgICAgZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdXRoIHRva2VuIHJldHJpZXZlZDogXCIgKyB0b2tlbik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXV0aCB0b2tlbiByZXRyaWV2YWwgZXJyb3I6IFwiICsgZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cblxuICAgIGdldEFjdGl2aXRpZXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbVNlcnZpY2UuZ2V0QWN0aXZpdGllcygpLnN1YnNjcmliZShhY3Rpdml0aWVzID0+IHRoaXMuaXRlbXMgPSBhY3Rpdml0aWVzKTtcbiAgICAgICAgLy8gdGhpcy5pdGVtU2VydmljZS5jcmVhdGVBY2NvdW50KCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHRoaXMucmVwb25zZSA9IHJlc3BvbnNlKVxuICAgIH1cblxuICAgIG9uVGFwTG9nb3V0KCk6IHZvaWQge1xuICAgICAgICBmaXJlYmFzZS5sb2dvdXQoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2dvdXQgZG9uZVwiKTtcbiAgICAgICAgQXBwU2V0dGluZ3MuVE9LRU4gPSBudWxsO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcbiAgICB9XG5cbiAgICAvLyBNZXRob2QgdGhhdCBjcmVhdGVzIGEgY3VzdG9tIGFjdGl2aXR5XG4gICAgb25UYXBDcmVhdGVBY3Rpdml0eSgpOiB2b2lke1xuICAgICAgICBpZiAodGhpcy5jdXN0b21BY3Rpdml0eSAhPSBcIlwiKSB7XG4gICAgICAgICAgICAvLyBNYWtlIGEgUE9TVCByZXF1ZXN0IHRvIGNyZWF0ZSBhIGN1c3RvbSBhY3Rpdml0eSBcbiAgICAgICAgICAgIHRoaXMuaXRlbVNlcnZpY2UuY3JlYXRlQ3VzdG9tQWN0aXZpdHkodGhpcy5jdXN0b21BY3Rpdml0eSkuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgdGhlIGN1c3RvbSBhY3Rpdml0eSBcIiArIHRoaXMuY3VzdG9tQWN0aXZpdHkpO1xuXG4gICAgICAgICAgICAvLyBEaXNwbGF5aW5nIHRoZSBhbGVydCB0aGF0IHRoZSBhY3Rpdml0eSB3YXMgY3JlYXRlZFxuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQWxlcnRcIixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdXIgY3VzdG9tIGFjdGl2aXR5IGhhcyBiZWVuIGFkZGVkIHN1Y2Nlc3NmdWxseSFcIixcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiR290IGl0IVwiXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBNYWtpbmcgdGhlIFBPU1QgcmVxdWVzdCB0byByZWZyZXNoIHRoZSBsaXN0XG4gICAgICAgICAgICB0aGlzLmdldEFjdGl2aXRpZXMoKTtcbiAgICAgICAgICAgIC8vIFJlbW92aW5nIHRoZSBrZXlib2FyZCBhZnRlciBwcmVzc2luZyB0aGUgXCJHb3QgaXQhXCIgYnV0dG9uIGluIHRoZSBhbGVydFxuICAgICAgICAgICAgdGhpcy5kaXNtaXNzU29mdEt5ZWJvYXJkKCk7XG4gICAgICAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgICAgICAvLyBEaXNwbGF5aW5nIHRoZSBhbGVydCB0aGF0IHRoZSBhY3Rpdml0eSBpcyBlbXB0eVxuICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkFsZXJ0XCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBwcm92aWRlIHRoZSBuYW1lIGZvciB5b3VyIGN1c3RvbSBhY3Rpdml0eSFcIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJHb3QgaXQhXCJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xuICAgICAgICB9KTtcbiAgICAgfVxuICAgICAgICAvLyBDbGVhcmluZyB0aGUgY3VzdG9tIGFjdGl2aXR5IHRleHQgZmllbGRcbiAgICAgICAgdGhpcy5jdXN0b21BY3Rpdml0eT1cIlwiO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBkaXNtaXNzU29mdEt5ZWJvYXJkKCkge1xuICAgICAgICB1dGlscy5hZC5kaXNtaXNzU29mdElucHV0KCk7XG4gICAgfVxuICBcbn1cblxuIl19