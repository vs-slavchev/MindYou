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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELCtDQUE2QztBQUM3QywwQ0FBeUM7QUFDekMsbURBQStDO0FBRy9DLHFEQUF1RDtBQUV2RCxtQ0FBcUM7QUFHckMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFTekQ7SUFLSSw4SUFBOEk7SUFDOUksaUhBQWlIO0lBQ2pILHdCQUFvQixXQUF3QixFQUFVLE1BQWM7UUFBaEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSjdELGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzVCLG1CQUFjLEdBQUMsRUFBRSxDQUFDO1FBSWQsZ0JBQWdCO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixRQUFRLENBQUMsWUFBWSxDQUFDO1lBQ2xCLG9HQUFvRztZQUNwRyxZQUFZLEVBQUUsS0FBSztTQUN0QixDQUFDLENBQUMsSUFBSSxDQUNILFVBQVUsS0FBSztZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDbEQsQ0FBQyxFQUNELFVBQVUsWUFBWTtZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixHQUFHLFlBQVksQ0FBQyxDQUFDO1FBQy9ELENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUdELHNDQUFhLEdBQWI7UUFBQSxpQkFHQztRQUZHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxVQUFVLEVBQXZCLENBQXVCLENBQUMsQ0FBQztRQUNsRixrRkFBa0Y7SUFDdEYsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDSSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQiwwQkFBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCx3Q0FBd0M7SUFDeEMsNENBQW1CLEdBQW5CO1FBQ0ksbURBQW1EO1FBQ25ELElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3ZFLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRWxFLHFEQUFxRDtRQUNyRCxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ1YsS0FBSyxFQUFFLE9BQU87WUFDZCxPQUFPLEVBQUUsbURBQW1EO1lBQzVELFlBQVksRUFBRSxTQUFTO1NBQzFCLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFFSCwwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLGNBQWMsR0FBQyxFQUFFLENBQUM7UUFDdkIsOENBQThDO1FBQzlDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQix5RUFBeUU7UUFDekUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELDRDQUFtQixHQUFuQjtRQUNJLEtBQUssQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBbEVRLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLFlBQVksQ0FBQztTQUM1QixDQUFDO3lDQVFtQywwQkFBVyxFQUFrQixlQUFNO09BUDNELGNBQWMsQ0FvRTFCO0lBQUQscUJBQUM7Q0FBQSxBQXBFRCxJQW9FQztBQXBFWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XHJcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtBcHBTZXR0aW5nc30gZnJvbSBcIn4vYXBwL2FwcC1zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuXHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ1dGlscy91dGlsc1wiO1xyXG5cclxuXHJcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9pdGVtLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgaXRlbXM6IEl0ZW1bXTtcclxuICAgIHJlcG9uc2U6IGFueTtcclxuICAgIHB1YmxpYyBib3R0b21CYXJTaG93ID0gdHJ1ZTtcclxuICAgIGN1c3RvbUFjdGl2aXR5PVwiXCI7XHJcbiAgICAvLyBUaGlzIHBhdHRlcm4gbWFrZXMgdXNlIG9mIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGltcGxlbWVudGF0aW9uIHRvIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgRnJpZW5kU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy5cclxuICAgIC8vIEFuZ3VsYXIga25vd3MgYWJvdXQgdGhpcyBzZXJ2aWNlIGJlY2F1c2UgaXQgaXMgaW5jbHVkZWQgaW4geW91ciBhcHDigJlzIG1haW4gTmdNb2R1bGUsIGRlZmluZWQgaW4gYXBwLm1vZHVsZS50cy5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgLy8gYm90dG9tQmFyU2hvd1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSXRlbXMgYXJlIGxvYWRpbmcuLi5cIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDdXN0b20gYWN0aXZpdHlcIisgdGhpcy5jdXN0b21BY3Rpdml0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5nZXRBY3Rpdml0aWVzKCk7XHJcbiAgICAgICAgZmlyZWJhc2UuZ2V0QXV0aFRva2VuKHtcclxuICAgICAgICAgICAgLy8gZGVmYXVsdCBmYWxzZSwgbm90IHJlY29tbWVuZGVkIHRvIHNldCB0byB0cnVlIGJ5IEZpcmViYXNlIGJ1dCBleHBvc2VkIGZvciB7Tn0gZGV2cyBub25ldGhlbGVzcyA6KVxyXG4gICAgICAgICAgICBmb3JjZVJlZnJlc2g6IGZhbHNlXHJcbiAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF1dGggdG9rZW4gcmV0cmlldmVkOiBcIiArIHRva2VuKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdXRoIHRva2VuIHJldHJpZXZhbCBlcnJvcjogXCIgKyBlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0QWN0aXZpdGllcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLml0ZW1TZXJ2aWNlLmdldEFjdGl2aXRpZXMoKS5zdWJzY3JpYmUoYWN0aXZpdGllcyA9PiB0aGlzLml0ZW1zID0gYWN0aXZpdGllcyk7XHJcbiAgICAgICAgLy8gdGhpcy5pdGVtU2VydmljZS5jcmVhdGVBY2NvdW50KCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHRoaXMucmVwb25zZSA9IHJlc3BvbnNlKVxyXG4gICAgfVxyXG5cclxuICAgIG9uVGFwTG9nb3V0KCk6IHZvaWQge1xyXG4gICAgICAgIGZpcmViYXNlLmxvZ291dCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9nb3V0IGRvbmVcIik7XHJcbiAgICAgICAgQXBwU2V0dGluZ3MuVE9LRU4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBjdXN0b20gYWN0aXZpdHlcclxuICAgIG9uVGFwQ3JlYXRlQWN0aXZpdHkoKTogdm9pZHtcclxuICAgICAgICAvLyBNYWtlIGEgUE9TVCByZXF1ZXN0IHRvIGNyZWF0ZSBhIGN1c3RvbSBhY3Rpdml0eSBcclxuICAgICAgICB0aGlzLml0ZW1TZXJ2aWNlLmNyZWF0ZUN1c3RvbUFjdGl2aXR5KHRoaXMuY3VzdG9tQWN0aXZpdHkpLnN1YnNjcmliZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBpcyB0aGUgY3VzdG9tIGFjdGl2aXR5IFwiICsgdGhpcy5jdXN0b21BY3Rpdml0eSk7XHJcblxyXG4gICAgICAgIC8vIERpc3BsYXlpbmcgdGhlIGFsZXJ0IHRoYXQgdGhlIGFjdGl2aXR5IHdhcyBjcmVhdGVkXHJcbiAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkFsZXJ0XCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91ciBjdXN0b20gYWN0aXZpdHkgaGFzIGJlZW4gYWRkZWQgc3VjY2Vzc2Z1bGx5IVwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiR290IGl0IVwiXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIENsZWFyaW5nIHRoZSBjdXN0b20gYWN0aXZpdHkgdGV4dCBmaWVsZFxyXG4gICAgICAgIHRoaXMuY3VzdG9tQWN0aXZpdHk9XCJcIjtcclxuICAgICAgICAvLyBNYWtpbmcgdGhlIFBPU1QgcmVxdWVzdCB0byByZWZyZXNoIHRoZSBsaXN0XHJcbiAgICAgICAgdGhpcy5nZXRBY3Rpdml0aWVzKCk7XHJcbiAgICAgICAgLy8gUmVtb3ZpbmcgdGhlIGtleWJvYXJkIGFmdGVyIHByZXNzaW5nIHRoZSBcIkdvdCBpdCFcIiBidXR0b24gaW4gdGhlIGFsZXJ0XHJcbiAgICAgICAgdGhpcy5kaXNtaXNzU29mdEt5ZWJvYXJkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzbWlzc1NvZnRLeWVib2FyZCgpIHtcclxuICAgICAgICB1dGlscy5hZC5kaXNtaXNzU29mdElucHV0KCk7XHJcbiAgICB9XHJcbiAgXHJcbn1cclxuXHJcbiJdfQ==