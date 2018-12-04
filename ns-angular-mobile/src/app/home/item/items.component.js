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
        app_settings_1.AppSettings.TOKEN = null;
        this.router.navigate(['/login']);
    };
    // Method that creates a custom activity
    ItemsComponent.prototype.onTapCreateActivity = function () {
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
        // Clearing the custom activity text field
        this.customActivity = "";
        // Making the POST request to refresh the list
        this.getActivities();
        // Removing the keyboard after pressing the "Got it!" button in the alert
        this.dismissSoftKyeboard();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELCtDQUE2QztBQUM3QywwQ0FBeUM7QUFDekMsbURBQStDO0FBRy9DLHFEQUF1RDtBQUV2RCxtQ0FBcUM7QUFHckMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFTekQ7SUFLSSw4SUFBOEk7SUFDOUksaUhBQWlIO0lBQ2pILHdCQUFvQixXQUF3QixFQUFVLE1BQWM7UUFBaEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSjdELGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzVCLG1CQUFjLEdBQUMsRUFBRSxDQUFDO1FBSWQsZ0JBQWdCO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixRQUFRLENBQUMsWUFBWSxDQUFDO1lBQ2xCLG9HQUFvRztZQUNwRyxZQUFZLEVBQUUsS0FBSztTQUN0QixDQUFDLENBQUMsSUFBSSxDQUNILFVBQVUsS0FBSztZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDbEQsQ0FBQyxFQUNELFVBQVUsWUFBWTtZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixHQUFHLFlBQVksQ0FBQyxDQUFDO1FBQy9ELENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUdELHNDQUFhLEdBQWI7UUFBQSxpQkFHQztRQUZHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxVQUFVLEVBQXZCLENBQXVCLENBQUMsQ0FBQztRQUNsRixrRkFBa0Y7SUFDdEYsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDSSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsMEJBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsd0NBQXdDO0lBQ3hDLDRDQUFtQixHQUFuQjtRQUNJLG1EQUFtRDtRQUNuRCxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVsRSxxREFBcUQ7UUFDckQsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNWLEtBQUssRUFBRSxPQUFPO1lBQ2QsT0FBTyxFQUFFLG1EQUFtRDtZQUM1RCxZQUFZLEVBQUUsU0FBUztTQUMxQixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO1FBRUgsMENBQTBDO1FBQzFDLElBQUksQ0FBQyxjQUFjLEdBQUMsRUFBRSxDQUFDO1FBQ3ZCLDhDQUE4QztRQUM5QyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIseUVBQXlFO1FBQ3pFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCw0Q0FBbUIsR0FBbkI7UUFDSSxLQUFLLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQWpFUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQUM7U0FDNUIsQ0FBQzt5Q0FRbUMsMEJBQVcsRUFBa0IsZUFBTTtPQVAzRCxjQUFjLENBbUUxQjtJQUFELHFCQUFDO0NBQUEsQUFuRUQsSUFtRUM7QUFuRVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xyXG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuL2l0ZW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7QXBwU2V0dGluZ3N9IGZyb20gXCJ+L2FwcC9hcHAtc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcblxyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidXRpbHMvdXRpbHNcIjtcclxuXHJcblxyXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vaXRlbS5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGl0ZW1zOiBJdGVtW107XHJcbiAgICByZXBvbnNlOiBhbnk7XHJcbiAgICBwdWJsaWMgYm90dG9tQmFyU2hvdyA9IHRydWU7XHJcbiAgICBjdXN0b21BY3Rpdml0eT1cIlwiO1xyXG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEZyaWVuZFNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuXHJcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIC8vIGJvdHRvbUJhclNob3dcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkl0ZW1zIGFyZSBsb2FkaW5nLi4uXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ3VzdG9tIGFjdGl2aXR5XCIrIHRoaXMuY3VzdG9tQWN0aXZpdHkpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZ2V0QWN0aXZpdGllcygpO1xyXG4gICAgICAgIGZpcmViYXNlLmdldEF1dGhUb2tlbih7XHJcbiAgICAgICAgICAgIC8vIGRlZmF1bHQgZmFsc2UsIG5vdCByZWNvbW1lbmRlZCB0byBzZXQgdG8gdHJ1ZSBieSBGaXJlYmFzZSBidXQgZXhwb3NlZCBmb3Ige059IGRldnMgbm9uZXRoZWxlc3MgOilcclxuICAgICAgICAgICAgZm9yY2VSZWZyZXNoOiBmYWxzZVxyXG4gICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdXRoIHRva2VuIHJldHJpZXZlZDogXCIgKyB0b2tlbik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXV0aCB0b2tlbiByZXRyaWV2YWwgZXJyb3I6IFwiICsgZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldEFjdGl2aXRpZXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pdGVtU2VydmljZS5nZXRBY3Rpdml0aWVzKCkuc3Vic2NyaWJlKGFjdGl2aXRpZXMgPT4gdGhpcy5pdGVtcyA9IGFjdGl2aXRpZXMpO1xyXG4gICAgICAgIC8vIHRoaXMuaXRlbVNlcnZpY2UuY3JlYXRlQWNjb3VudCgpLnN1YnNjcmliZShyZXNwb25zZSA9PiB0aGlzLnJlcG9uc2UgPSByZXNwb25zZSlcclxuICAgIH1cclxuXHJcbiAgICBvblRhcExvZ291dCgpOiB2b2lkIHtcclxuICAgICAgICBmaXJlYmFzZS5sb2dvdXQoKTtcclxuICAgICAgICBBcHBTZXR0aW5ncy5UT0tFTiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kIHRoYXQgY3JlYXRlcyBhIGN1c3RvbSBhY3Rpdml0eVxyXG4gICAgb25UYXBDcmVhdGVBY3Rpdml0eSgpOiB2b2lke1xyXG4gICAgICAgIC8vIE1ha2UgYSBQT1NUIHJlcXVlc3QgdG8gY3JlYXRlIGEgY3VzdG9tIGFjdGl2aXR5IFxyXG4gICAgICAgIHRoaXMuaXRlbVNlcnZpY2UuY3JlYXRlQ3VzdG9tQWN0aXZpdHkodGhpcy5jdXN0b21BY3Rpdml0eSkuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIGlzIHRoZSBjdXN0b20gYWN0aXZpdHkgXCIgKyB0aGlzLmN1c3RvbUFjdGl2aXR5KTtcclxuXHJcbiAgICAgICAgLy8gRGlzcGxheWluZyB0aGUgYWxlcnQgdGhhdCB0aGUgYWN0aXZpdHkgd2FzIGNyZWF0ZWRcclxuICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiQWxlcnRcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJZb3VyIGN1c3RvbSBhY3Rpdml0eSBoYXMgYmVlbiBhZGRlZCBzdWNjZXNzZnVsbHkhXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJHb3QgaXQhXCJcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQ2xlYXJpbmcgdGhlIGN1c3RvbSBhY3Rpdml0eSB0ZXh0IGZpZWxkXHJcbiAgICAgICAgdGhpcy5jdXN0b21BY3Rpdml0eT1cIlwiO1xyXG4gICAgICAgIC8vIE1ha2luZyB0aGUgUE9TVCByZXF1ZXN0IHRvIHJlZnJlc2ggdGhlIGxpc3RcclxuICAgICAgICB0aGlzLmdldEFjdGl2aXRpZXMoKTtcclxuICAgICAgICAvLyBSZW1vdmluZyB0aGUga2V5Ym9hcmQgYWZ0ZXIgcHJlc3NpbmcgdGhlIFwiR290IGl0IVwiIGJ1dHRvbiBpbiB0aGUgYWxlcnRcclxuICAgICAgICB0aGlzLmRpc21pc3NTb2Z0S3llYm9hcmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNtaXNzU29mdEt5ZWJvYXJkKCkge1xyXG4gICAgICAgIHV0aWxzLmFkLmRpc21pc3NTb2Z0SW5wdXQoKTtcclxuICAgIH1cclxuICBcclxufVxyXG5cclxuIl19