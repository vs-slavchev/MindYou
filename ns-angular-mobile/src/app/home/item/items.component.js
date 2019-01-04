"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var router_1 = require("@angular/router");
var app_settings_1 = require("~/app/app-settings");
var page_1 = require("tns-core-modules/ui/page/page");
var dialogs = require("tns-core-modules/ui/dialogs");
var utils = require("utils/utils");
var firebase = require("nativescript-plugin-firebase");
var router_2 = require("@angular/router");
var ItemsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the FriendService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ItemsComponent(itemService, router, route) {
        this.itemService = itemService;
        this.router = router;
        this.route = route;
        this.bottomBarShow = true;
        this.customActivity = "";
        // bottomBarShow
        console.log("Items are loading...");
        console.log("Custom activity" + this.customActivity);
        //setting the visibility of the timer to false
        this.isVisible = false;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getActivities();
        firebase.getAuthToken({
            // default false, not recommended to set to true by Firebase but exposed for {N} devs nonetheless :)
            forceRefresh: false
        }).then(function (token) {
            console.log("Auth token retrieved: " + token);
        }, function (errorMessage) {
            console.log("Auth token retrieval error: " + errorMessage);
        });
        this.timerEnabled = false;
        this.seconds = 0;
        this.getItem();
        this.id = setInterval(function () {
            if (_this.timerEnabled) {
                _this.seconds += 1;
            }
        }, 1000);
    };
    ItemsComponent.prototype.getItem = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.itemService.getItem(id)
            .subscribe(function (item) {
            _this.item = item;
            // this.item.time = 0;
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
    // Method to hide the keyboard
    ItemsComponent.prototype.dismissSoftKyeboard = function () {
        utils.ad.dismissSoftInput();
    };
    // Method for selected item -> change color to orange when selected and start the activity
    ItemsComponent.prototype.onItemSelected = function (args) {
        console.log("Item is selected");
        // Changing the color of the selected item to orange.
        args.view.backgroundColor = new page_1.Color("#FF7816");
        console.log("Start timer");
        if (!this.seconds) {
            this.seconds = 0;
        }
        //   this.itemService.startActivity({
        //       "activity_id": this.item.activityBlueprintId, "user_id": AppSettings.TOKEN}).subscribe();
        this.timerEnabled = true;
        this.isVisible = true;
    };
    // Method for deselecting the item - > change color to white when deselect and stop the activity
    ItemsComponent.prototype.onItemDeselected = function (args) {
        console.log("Item is deselected");
        // Changing the color of the deselected item to white.
        args.view.backgroundColor = new page_1.Color("#ffffff");
        console.log("Stop timer");
        // this.itemService.stopActivity(this.item.activityBlueprintId).subscribe();
        this.timerEnabled = false;
        this.isVisible = false;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ItemsComponent.prototype, "item", void 0);
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
            styleUrls: ["./item.css"]
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService, router_1.Router, router_2.ActivatedRoute])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStFO0FBRy9FLCtDQUE2QztBQUM3QywwQ0FBeUM7QUFDekMsbURBQStDO0FBQy9DLHNEQUE0RDtBQUM1RCxxREFBdUQ7QUFDdkQsbUNBQXFDO0FBRXJDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBRXpELDBDQUFpRDtBQVFqRDtJQVlJLDhJQUE4STtJQUM5SSxpSEFBaUg7SUFDakgsd0JBQW9CLFdBQXdCLEVBQVUsTUFBYyxFQUFVLEtBQXFCO1FBQS9FLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBWDVGLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzVCLG1CQUFjLEdBQUMsRUFBRSxDQUFDO1FBV2QsZ0JBQWdCO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVwRCw4Q0FBOEM7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFBQSxpQkFzQkM7UUFyQkcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLFFBQVEsQ0FBQyxZQUFZLENBQUM7WUFDbEIsb0dBQW9HO1lBQ3BHLFlBQVksRUFBRSxLQUFLO1NBQ3RCLENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBVSxLQUFLO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUNsRCxDQUFDLEVBQ0QsVUFBVSxZQUFZO1lBQ2xCLE9BQU8sQ0FBQyxHQUFH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ZDFGLGNBQWMsQ0F5STFCO0lBQUQscUJBQUM7Q0FBQSxBQXpJRCxJQXlJQztBQXpJWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCxWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcclxuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge0FwcFNldHRpbmdzfSBmcm9tIFwifi9hcHAvYXBwLXNldHRpbmdzXCI7XHJcbmltcG9ydCB7IFBhZ2UsIENvbG9yIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidXRpbHMvdXRpbHNcIjtcclxuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiO1xyXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5cclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2l0ZW0uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBpdGVtczogSXRlbVtdO1xyXG4gICAgcmVwb25zZTogYW55O1xyXG4gICAgcHVibGljIGJvdHRvbUJhclNob3cgPSB0cnVlO1xyXG4gICAgY3VzdG9tQWN0aXZpdHk9XCJcIjtcclxuICAgIGlzVmlzaWJsZTogYW55O1xyXG5cclxuICAgIEBJbnB1dCgpIGl0ZW06IEl0ZW07XHJcbiAgICBwdWJsaWMgdGltZXJFbmFibGVkOiBib29sZWFuO1xyXG4gICAgcHVibGljIHNlY29uZHM6IG51bWJlcjtcclxuICAgIHB1YmxpYyBpZDtcclxuXHJcbiAgICAvLyBUaGlzIHBhdHRlcm4gbWFrZXMgdXNlIG9mIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGltcGxlbWVudGF0aW9uIHRvIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgRnJpZW5kU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy5cclxuICAgIC8vIEFuZ3VsYXIga25vd3MgYWJvdXQgdGhpcyBzZXJ2aWNlIGJlY2F1c2UgaXQgaXMgaW5jbHVkZWQgaW4geW91ciBhcHDigJlzIG1haW4gTmdNb2R1bGUsIGRlZmluZWQgaW4gYXBwLm1vZHVsZS50cy5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG4gICAgICAgIC8vIGJvdHRvbUJhclNob3dcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkl0ZW1zIGFyZSBsb2FkaW5nLi4uXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ3VzdG9tIGFjdGl2aXR5XCIrIHRoaXMuY3VzdG9tQWN0aXZpdHkpO1xyXG4gICAgICAgXHJcbiAgICAgICAgLy9zZXR0aW5nIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSB0aW1lciB0byBmYWxzZVxyXG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gZmFsc2U7ICAgICAgIFxyXG4gICAgfSAgXHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5nZXRBY3Rpdml0aWVzKCk7XHJcbiAgICAgICAgZmlyZWJhc2UuZ2V0QXV0aFRva2VuKHtcclxuICAgICAgICAgICAgLy8gZGVmYXVsdCBmYWxzZSwgbm90IHJlY29tbWVuZGVkIHRvIHNldCB0byB0cnVlIGJ5IEZpcmViYXNlIGJ1dCBleHBvc2VkIGZvciB7Tn0gZGV2cyBub25ldGhlbGVzcyA6KVxyXG4gICAgICAgICAgICBmb3JjZVJlZnJlc2g6IGZhbHNlXHJcbiAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF1dGggdG9rZW4gcmV0cmlldmVkOiBcIiArIHRva2VuKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdXRoIHRva2VuIHJldHJpZXZhbCBlcnJvcjogXCIgKyBlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lckVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlY29uZHMgPSAwO1xyXG4gICAgICAgIHRoaXMuZ2V0SXRlbSgpO1xyXG4gICAgICAgIHRoaXMuaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyRW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWNvbmRzICs9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMDAwKTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW0oKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgaWQgPSArdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJyk7XHJcbiAgICAgICAgdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtKGlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW0gPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5pdGVtLnRpbWUgPSAwO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY3Rpdml0aWVzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXRlbVNlcnZpY2UuZ2V0QWN0aXZpdGllcygpLnN1YnNjcmliZShhY3Rpdml0aWVzID0+IHRoaXMuaXRlbXMgPSBhY3Rpdml0aWVzKTtcclxuICAgICAgICAvLyB0aGlzLml0ZW1TZXJ2aWNlLmNyZWF0ZUFjY291bnQoKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4gdGhpcy5yZXBvbnNlID0gcmVzcG9uc2UpXHJcbiAgICB9XHJcblxyXG4gICAgb25UYXBMb2dvdXQoKTogdm9pZCB7XHJcbiAgICAgICAgZmlyZWJhc2UubG9nb3V0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2dvdXQgZG9uZVwiKTtcclxuICAgICAgICBBcHBTZXR0aW5ncy5UT0tFTiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kIHRoYXQgY3JlYXRlcyBhIGN1c3RvbSBhY3Rpdml0eVxyXG4gICAgb25UYXBDcmVhdGVBY3Rpdml0eSgpOiB2b2lke1xyXG4gICAgICAgIGlmICh0aGlzLmN1c3RvbUFjdGl2aXR5ICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgLy8gTWFrZSBhIFBPU1QgcmVxdWVzdCB0byBjcmVhdGUgYSBjdXN0b20gYWN0aXZpdHkgXHJcbiAgICAgICAgICAgIHRoaXMuaXRlbVNlcnZpY2UuY3JlYXRlQ3VzdG9tQWN0aXZpdHkodGhpcy5jdXN0b21BY3Rpdml0eSkuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBpcyB0aGUgY3VzdG9tIGFjdGl2aXR5IFwiICsgdGhpcy5jdXN0b21BY3Rpdml0eSk7XHJcblxyXG4gICAgICAgICAgICAvLyBEaXNwbGF5aW5nIHRoZSBhbGVydCB0aGF0IHRoZSBhY3Rpdml0eSB3YXMgY3JlYXRlZFxyXG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFsZXJ0XCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdXIgY3VzdG9tIGFjdGl2aXR5IGhhcyBiZWVuIGFkZGVkIHN1Y2Nlc3NmdWxseSFcIixcclxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJHb3QgaXQhXCJcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gTWFraW5nIHRoZSBQT1NUIHJlcXVlc3QgdG8gcmVmcmVzaCB0aGUgbGlzdFxyXG4gICAgICAgICAgICB0aGlzLmdldEFjdGl2aXRpZXMoKTtcclxuICAgICAgICAgICAgLy8gUmVtb3ZpbmcgdGhlIGtleWJvYXJkIGFmdGVyIHByZXNzaW5nIHRoZSBcIkdvdCBpdCFcIiBidXR0b24gaW4gdGhlIGFsZXJ0XHJcbiAgICAgICAgICAgIHRoaXMuZGlzbWlzc1NvZnRLeWVib2FyZCgpO1xyXG4gICAgICAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgICAgICAgLy8gRGlzcGxheWluZyB0aGUgYWxlcnQgdGhhdCB0aGUgYWN0aXZpdHkgaXMgZW1wdHlcclxuICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiQWxlcnRcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJQbGVhc2UgcHJvdmlkZSB0aGUgbmFtZSBmb3IgeW91ciBjdXN0b20gYWN0aXZpdHkhXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJHb3QgaXQhXCJcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcclxuICAgICAgICB9KTtcclxuICAgICB9XHJcbiAgICAgICAgLy8gQ2xlYXJpbmcgdGhlIGN1c3RvbSBhY3Rpdml0eSB0ZXh0IGZpZWxkXHJcbiAgICAgICAgdGhpcy5jdXN0b21BY3Rpdml0eT1cIlwiO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZCB0byBoaWRlIHRoZSBrZXlib2FyZFxyXG4gICAgZGlzbWlzc1NvZnRLeWVib2FyZCgpIHtcclxuICAgICAgICB1dGlscy5hZC5kaXNtaXNzU29mdElucHV0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kIGZvciBzZWxlY3RlZCBpdGVtIC0+IGNoYW5nZSBjb2xvciB0byBvcmFuZ2Ugd2hlbiBzZWxlY3RlZCBhbmQgc3RhcnQgdGhlIGFjdGl2aXR5XHJcbiAgICBwdWJsaWMgb25JdGVtU2VsZWN0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJJdGVtIGlzIHNlbGVjdGVkXCIpO1xyXG5cclxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIGNvbG9yIG9mIHRoZSBzZWxlY3RlZCBpdGVtIHRvIG9yYW5nZS5cclxuICAgICAgYXJncy52aWV3LmJhY2tncm91bmRDb2xvciA9IG5ldyBDb2xvcihcIiNGRjc4MTZcIik7ICBcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiU3RhcnQgdGltZXJcIik7XHJcbiAgICAgIGlmICghdGhpcy5zZWNvbmRzKSB7XHJcbiAgICAgICAgICB0aGlzLnNlY29uZHMgPSAwO1xyXG4gICAgICB9XHJcbiAgICAvLyAgIHRoaXMuaXRlbVNlcnZpY2Uuc3RhcnRBY3Rpdml0eSh7XHJcbiAgICAvLyAgICAgICBcImFjdGl2aXR5X2lkXCI6IHRoaXMuaXRlbS5hY3Rpdml0eUJsdWVwcmludElkLCBcInVzZXJfaWRcIjogQXBwU2V0dGluZ3MuVE9LRU59KS5zdWJzY3JpYmUoKTtcclxuICAgICAgIHRoaXMudGltZXJFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2QgZm9yIGRlc2VsZWN0aW5nIHRoZSBpdGVtIC0gPiBjaGFuZ2UgY29sb3IgdG8gd2hpdGUgd2hlbiBkZXNlbGVjdCBhbmQgc3RvcCB0aGUgYWN0aXZpdHlcclxuICAgIHB1YmxpYyBvbkl0ZW1EZXNlbGVjdGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJdGVtIGlzIGRlc2VsZWN0ZWRcIik7XHJcblxyXG4gICAgICAgIC8vIENoYW5naW5nIHRoZSBjb2xvciBvZiB0aGUgZGVzZWxlY3RlZCBpdGVtIHRvIHdoaXRlLlxyXG4gICAgICAgIGFyZ3Mudmlldy5iYWNrZ3JvdW5kQ29sb3IgPSBuZXcgQ29sb3IoXCIjZmZmZmZmXCIpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlN0b3AgdGltZXJcIik7XHJcbiAgICAgICAgLy8gdGhpcy5pdGVtU2VydmljZS5zdG9wQWN0aXZpdHkodGhpcy5pdGVtLmFjdGl2aXR5Qmx1ZXByaW50SWQpLnN1YnNjcmliZSgpO1xyXG4gICAgICAgIHRoaXMudGltZXJFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSBmYWxzZTtcclxuICAgIH0gXHJcbn1cclxuXHJcbiJdfQ==