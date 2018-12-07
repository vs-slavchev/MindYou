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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELCtDQUE2QztBQUM3QywwQ0FBeUM7QUFDekMsbURBQStDO0FBRS9DLHFEQUF1RDtBQUN2RCxtQ0FBcUM7QUFDckMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFRekQ7SUFLSSw4SUFBOEk7SUFDOUksaUhBQWlIO0lBQ2pILHdCQUFvQixXQUF3QixFQUFVLE1BQWM7UUFBaEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSjdELGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzVCLG1CQUFjLEdBQUMsRUFBRSxDQUFDO1FBSWQsZ0JBQWdCO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixRQUFRLENBQUMsWUFBWSxDQUFDO1lBQ2xCLG9HQUFvRztZQUNwRyxZQUFZLEVBQUUsS0FBSztTQUN0QixDQUFDLENBQUMsSUFBSSxDQUNILFVBQVUsS0FBSztZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDbEQsQ0FBQyxFQUNELFVBQVUsWUFBWTtZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixHQUFHLFlBQVksQ0FBQyxDQUFDO1FBQy9ELENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUdELHNDQUFhLEdBQWI7UUFBQSxpQkFHQztRQUZHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxVQUFVLEVBQXZCLENBQXVCLENBQUMsQ0FBQztRQUNsRixrRkFBa0Y7SUFDdEYsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDSSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQiwwQkFBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCx3Q0FBd0M7SUFDeEMsNENBQW1CLEdBQW5CO1FBQ0ksSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsRUFBRTtZQUMzQixtREFBbUQ7WUFDbkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDdkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFFbEUscURBQXFEO1lBQ3JELE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ1YsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsT0FBTyxFQUFFLG1EQUFtRDtnQkFDNUQsWUFBWSxFQUFFLFNBQVM7YUFDMUIsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDLENBQUM7WUFDSCw4Q0FBOEM7WUFDOUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLHlFQUF5RTtZQUN6RSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM3QjthQUNGO1lBQ0ssa0RBQWtEO1lBQ3ZELE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ1YsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsT0FBTyxFQUFFLG1EQUFtRDtnQkFDNUQsWUFBWSxFQUFFLFNBQVM7YUFDMUIsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDLENBQUM7U0FDTDtRQUNFLDBDQUEwQztRQUMxQyxJQUFJLENBQUMsY0FBYyxHQUFDLEVBQUUsQ0FBQztJQUUzQixDQUFDO0lBRUQsNENBQW1CLEdBQW5CO1FBQ0ksS0FBSyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUE5RVEsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDO1NBQzVCLENBQUM7eUNBUW1DLDBCQUFXLEVBQWtCLGVBQU07T0FQM0QsY0FBYyxDQWdGMUI7SUFBRCxxQkFBQztDQUFBLEFBaEZELElBZ0ZDO0FBaEZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcclxuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge0FwcFNldHRpbmdzfSBmcm9tIFwifi9hcHAvYXBwLXNldHRpbmdzXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ1dGlscy91dGlsc1wiO1xyXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9pdGVtLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgaXRlbXM6IEl0ZW1bXTtcclxuICAgIHJlcG9uc2U6IGFueTtcclxuICAgIHB1YmxpYyBib3R0b21CYXJTaG93ID0gdHJ1ZTtcclxuICAgIGN1c3RvbUFjdGl2aXR5PVwiXCI7XHJcbiAgICAvLyBUaGlzIHBhdHRlcm4gbWFrZXMgdXNlIG9mIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGltcGxlbWVudGF0aW9uIHRvIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgRnJpZW5kU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy5cclxuICAgIC8vIEFuZ3VsYXIga25vd3MgYWJvdXQgdGhpcyBzZXJ2aWNlIGJlY2F1c2UgaXQgaXMgaW5jbHVkZWQgaW4geW91ciBhcHDigJlzIG1haW4gTmdNb2R1bGUsIGRlZmluZWQgaW4gYXBwLm1vZHVsZS50cy5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgLy8gYm90dG9tQmFyU2hvd1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSXRlbXMgYXJlIGxvYWRpbmcuLi5cIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDdXN0b20gYWN0aXZpdHlcIisgdGhpcy5jdXN0b21BY3Rpdml0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5nZXRBY3Rpdml0aWVzKCk7XHJcbiAgICAgICAgZmlyZWJhc2UuZ2V0QXV0aFRva2VuKHtcclxuICAgICAgICAgICAgLy8gZGVmYXVsdCBmYWxzZSwgbm90IHJlY29tbWVuZGVkIHRvIHNldCB0byB0cnVlIGJ5IEZpcmViYXNlIGJ1dCBleHBvc2VkIGZvciB7Tn0gZGV2cyBub25ldGhlbGVzcyA6KVxyXG4gICAgICAgICAgICBmb3JjZVJlZnJlc2g6IGZhbHNlXHJcbiAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF1dGggdG9rZW4gcmV0cmlldmVkOiBcIiArIHRva2VuKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdXRoIHRva2VuIHJldHJpZXZhbCBlcnJvcjogXCIgKyBlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0QWN0aXZpdGllcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLml0ZW1TZXJ2aWNlLmdldEFjdGl2aXRpZXMoKS5zdWJzY3JpYmUoYWN0aXZpdGllcyA9PiB0aGlzLml0ZW1zID0gYWN0aXZpdGllcyk7XHJcbiAgICAgICAgLy8gdGhpcy5pdGVtU2VydmljZS5jcmVhdGVBY2NvdW50KCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHRoaXMucmVwb25zZSA9IHJlc3BvbnNlKVxyXG4gICAgfVxyXG5cclxuICAgIG9uVGFwTG9nb3V0KCk6IHZvaWQge1xyXG4gICAgICAgIGZpcmViYXNlLmxvZ291dCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9nb3V0IGRvbmVcIik7XHJcbiAgICAgICAgQXBwU2V0dGluZ3MuVE9LRU4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBjdXN0b20gYWN0aXZpdHlcclxuICAgIG9uVGFwQ3JlYXRlQWN0aXZpdHkoKTogdm9pZHtcclxuICAgICAgICBpZiAodGhpcy5jdXN0b21BY3Rpdml0eSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIC8vIE1ha2UgYSBQT1NUIHJlcXVlc3QgdG8gY3JlYXRlIGEgY3VzdG9tIGFjdGl2aXR5IFxyXG4gICAgICAgICAgICB0aGlzLml0ZW1TZXJ2aWNlLmNyZWF0ZUN1c3RvbUFjdGl2aXR5KHRoaXMuY3VzdG9tQWN0aXZpdHkpLnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgdGhlIGN1c3RvbSBhY3Rpdml0eSBcIiArIHRoaXMuY3VzdG9tQWN0aXZpdHkpO1xyXG5cclxuICAgICAgICAgICAgLy8gRGlzcGxheWluZyB0aGUgYWxlcnQgdGhhdCB0aGUgYWN0aXZpdHkgd2FzIGNyZWF0ZWRcclxuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBbGVydFwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3VyIGN1c3RvbSBhY3Rpdml0eSBoYXMgYmVlbiBhZGRlZCBzdWNjZXNzZnVsbHkhXCIsXHJcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiR290IGl0IVwiXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIE1ha2luZyB0aGUgUE9TVCByZXF1ZXN0IHRvIHJlZnJlc2ggdGhlIGxpc3RcclxuICAgICAgICAgICAgdGhpcy5nZXRBY3Rpdml0aWVzKCk7XHJcbiAgICAgICAgICAgIC8vIFJlbW92aW5nIHRoZSBrZXlib2FyZCBhZnRlciBwcmVzc2luZyB0aGUgXCJHb3QgaXQhXCIgYnV0dG9uIGluIHRoZSBhbGVydFxyXG4gICAgICAgICAgICB0aGlzLmRpc21pc3NTb2Z0S3llYm9hcmQoKTtcclxuICAgICAgICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICAgICAgIC8vIERpc3BsYXlpbmcgdGhlIGFsZXJ0IHRoYXQgdGhlIGFjdGl2aXR5IGlzIGVtcHR5XHJcbiAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkFsZXJ0XCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiUGxlYXNlIHByb3ZpZGUgdGhlIG5hbWUgZm9yIHlvdXIgY3VzdG9tIGFjdGl2aXR5IVwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiR290IGl0IVwiXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgfVxyXG4gICAgICAgIC8vIENsZWFyaW5nIHRoZSBjdXN0b20gYWN0aXZpdHkgdGV4dCBmaWVsZFxyXG4gICAgICAgIHRoaXMuY3VzdG9tQWN0aXZpdHk9XCJcIjtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBkaXNtaXNzU29mdEt5ZWJvYXJkKCkge1xyXG4gICAgICAgIHV0aWxzLmFkLmRpc21pc3NTb2Z0SW5wdXQoKTtcclxuICAgIH1cclxuICBcclxufVxyXG5cclxuIl19