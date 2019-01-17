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
    ItemsComponent.prototype.helloWorld = function () {
        return "Davaaaj!";
    };
    ItemsComponent.prototype.initRunningActivity = function () {
        var _this = this;
        this.itemService.getActivity().subscribe(function (activity) {
            console.log(activity);
            if (!activity) {
                return;
            }
            _this.seconds = new Date().getTime() - activity.time_start;
            _this.timerEnabled = true;
            _this.isVisible = true;
        });
    };
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
                _this.second = _this.seconds % 60;
                _this.minutes = Math.floor(_this.seconds / 60);
                _this.hours = Math.floor(_this.seconds / 3600);
            }
        }, 1000);
        this.route.queryParams.subscribe(function (params) {
            // Defaults to 0 if no query param provided.
            if ("page" in params) {
                console.log("Activate activity on init from param");
                console.log(params);
                _this.activateActivity(params["page"]);
            }
        });
    };
    ItemsComponent.prototype.activateActivity = function (id) {
        // Activating activity
        console.log("Activating activity " + id);
        // TODO: activate activity
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
        this.itemService.getActivities().subscribe(function (activities) {
            _this.items = activities;
            _this.initRunningActivity();
        });
        // this.itemService.createAccount().subscribe(response => this.reponse = response)
    };
    //testing function
    // helloWorld(): String {
    //     return 'Hello world!';
    //   }
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
        console.log("Args index " + args.index);
        // Assign the the selected item from the radListView to the ()Input item
        this.item = this.items[args.index];
        console.log(this.item);
        // Changing the color of the selected item to orange.
        args.view.backgroundColor = new page_1.Color("#FF7816");
        console.log("Start timer");
        if (!this.seconds) {
            this.seconds = 0;
        }
        this.itemService.startActivity({
            "activity_id": this.item.activityBlueprintId, "user_id": app_settings_1.AppSettings.TOKEN
        }).subscribe();
        this.timerEnabled = true;
        this.isVisible = true;
    };
    // Method for deselecting the item - > change color to white when deselect and stop the activity
    ItemsComponent.prototype.onItemDeselected = function (args) {
        console.log("Item is deselected");
        // Assign the the selected item from the radListView to the ()Input item
        this.item = this.items[args.index];
        // Changing the color of the deselected item to white.
        args.view.backgroundColor = new page_1.Color("#ffffff");
        console.log("Stop timer");
        this.itemService.stopActivity(this.item.activityBlueprintId).subscribe();
        this.timerEnabled = false;
        this.isVisible = false;
        dialogs.alert({
            title: "Alert",
            message: "The activity has been stoppen! Time spent on the activity: " + this.hours + " h " + this.minutes + " min " + this.second + " sec.",
            okButtonText: "Got it!"
        }).then(function () {
            console.log("Dialog closed!");
        });
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
        __metadata("design:paramtypes", [item_service_1.ItemService, router_1.Router, router_1.ActivatedRoute])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStFO0FBRy9FLCtDQUE2QztBQUM3QywwQ0FBeUQ7QUFDekQsbURBQStDO0FBQy9DLHNEQUE0RDtBQUM1RCxxREFBdUQ7QUFDdkQsbUNBQXFDO0FBRXJDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBU3pEO0lBZUksOElBQThJO0lBQzlJLGlIQUFpSDtJQUNqSCx3QkFBb0IsV0FBd0IsRUFBVSxNQUFjLEVBQVUsS0FBcUI7UUFBL0UsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFkNUYsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDNUIsbUJBQWMsR0FBQyxFQUFFLENBQUM7UUFjZCxnQkFBZ0I7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXBELDhDQUE4QztRQUM5QyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQsbUNBQVUsR0FBVjtRQUNJLE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7SUFFRCw0Q0FBbUIsR0FBbkI7UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUMsUUFBYTtZQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQUUsT0FBTzthQUFFO1lBQzFCLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxP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QUFpQix1QkFBYztPQWpCMUYsY0FBYyxDQXVNMUI7SUFBRCxxQkFBQztDQUFBLEFBdk1ELElBdU1DO0FBdk1ZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xyXG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuL2l0ZW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge0FwcFNldHRpbmdzfSBmcm9tIFwifi9hcHAvYXBwLXNldHRpbmdzXCI7XHJcbmltcG9ydCB7IFBhZ2UsIENvbG9yIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidXRpbHMvdXRpbHNcIjtcclxuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiO1xyXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vaXRlbS5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBpdGVtczogSXRlbVtdO1xyXG4gICAgcmVwb25zZTogYW55O1xyXG4gICAgcHVibGljIGJvdHRvbUJhclNob3cgPSB0cnVlO1xyXG4gICAgY3VzdG9tQWN0aXZpdHk9XCJcIjtcclxuICAgIGlzVmlzaWJsZTogYW55O1xyXG5cclxuICAgIEBJbnB1dCgpIGl0ZW06IEl0ZW07XHJcbiAgICBwdWJsaWMgdGltZXJFbmFibGVkOiBib29sZWFuO1xyXG4gICAgcHVibGljIHNlY29uZDogbnVtYmVyO1xyXG4gICAgcHVibGljIHNlY29uZHM6IG51bWJlcjtcclxuICAgIHB1YmxpYyBtaW51dGVzOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaG91cnM6IG51bWJlcjtcclxuICAgIHB1YmxpYyBpZDtcclxuXHJcbiAgICAvLyBUaGlzIHBhdHRlcm4gbWFrZXMgdXNlIG9mIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGltcGxlbWVudGF0aW9uIHRvIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgRnJpZW5kU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy5cclxuICAgIC8vIEFuZ3VsYXIga25vd3MgYWJvdXQgdGhpcyBzZXJ2aWNlIGJlY2F1c2UgaXQgaXMgaW5jbHVkZWQgaW4geW91ciBhcHDigJlzIG1haW4gTmdNb2R1bGUsIGRlZmluZWQgaW4gYXBwLm1vZHVsZS50cy5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG4gICAgICAgIC8vIGJvdHRvbUJhclNob3dcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkl0ZW1zIGFyZSBsb2FkaW5nLi4uXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ3VzdG9tIGFjdGl2aXR5XCIrIHRoaXMuY3VzdG9tQWN0aXZpdHkpO1xyXG4gICAgICAgXHJcbiAgICAgICAgLy9zZXR0aW5nIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSB0aW1lciB0byBmYWxzZVxyXG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gZmFsc2U7ICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGhlbGxvV29ybGQoKTogU3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJEYXZhYWFqIVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRSdW5uaW5nQWN0aXZpdHkoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pdGVtU2VydmljZS5nZXRBY3Rpdml0eSgpLnN1YnNjcmliZSgoYWN0aXZpdHk6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpdml0eSk7XHJcbiAgICAgICAgICAgIGlmICghYWN0aXZpdHkpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kcyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gYWN0aXZpdHkudGltZV9zdGFydDtcclxuICAgICAgICAgICAgdGhpcy50aW1lckVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5nZXRBY3Rpdml0aWVzKCk7XHJcbiAgICAgICAgZmlyZWJhc2UuZ2V0QXV0aFRva2VuKHtcclxuICAgICAgICAgICAgLy8gZGVmYXVsdCBmYWxzZSwgbm90IHJlY29tbWVuZGVkIHRvIHNldCB0byB0cnVlIGJ5IEZpcmViYXNlIGJ1dCBleHBvc2VkIGZvciB7Tn0gZGV2cyBub25ldGhlbGVzcyA6KVxyXG4gICAgICAgICAgICBmb3JjZVJlZnJlc2g6IGZhbHNlXHJcbiAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF1dGggdG9rZW4gcmV0cmlldmVkOiBcIiArIHRva2VuKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdXRoIHRva2VuIHJldHJpZXZhbCBlcnJvcjogXCIgKyBlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lckVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlY29uZHMgPSAwO1xyXG4gICAgICAgIHRoaXMuZ2V0SXRlbSgpO1xyXG4gICAgICAgIHRoaXMuaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyRW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWNvbmRzICs9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlY29uZCA9IHRoaXMuc2Vjb25kcyAlIDYwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5taW51dGVzID0gTWF0aC5mbG9vcih0aGlzLnNlY29uZHMgLyA2MCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvdXJzID0gTWF0aC5mbG9vcih0aGlzLnNlY29uZHMgLyAzNjAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG5cclxuICAgICAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICAvLyBEZWZhdWx0cyB0byAwIGlmIG5vIHF1ZXJ5IHBhcmFtIHByb3ZpZGVkLlxyXG4gICAgICAgICAgICBpZiAoXCJwYWdlXCIgaW4gcGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFjdGl2YXRlIGFjdGl2aXR5IG9uIGluaXQgZnJvbSBwYXJhbVwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2YXRlQWN0aXZpdHkocGFyYW1zW1wicGFnZVwiXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZUFjdGl2aXR5KGlkOiBudW1iZXIpIHtcclxuICAgICAgICAvLyBBY3RpdmF0aW5nIGFjdGl2aXR5XHJcbiAgICAgICAgY29uc29sZS5sb2coYEFjdGl2YXRpbmcgYWN0aXZpdHkgJHtpZH1gKTtcclxuICAgICAgICAvLyBUT0RPOiBhY3RpdmF0ZSBhY3Rpdml0eVxyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW0oKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgaWQgPSArdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJyk7XHJcbiAgICAgICAgdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtKGlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW0gPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5pdGVtLnRpbWUgPSAwO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY3Rpdml0aWVzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXRlbVNlcnZpY2UuZ2V0QWN0aXZpdGllcygpLnN1YnNjcmliZShhY3Rpdml0aWVzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtcyA9IGFjdGl2aXRpZXM7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdFJ1bm5pbmdBY3Rpdml0eSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHRoaXMuaXRlbVNlcnZpY2UuY3JlYXRlQWNjb3VudCgpLnN1YnNjcmliZShyZXNwb25zZSA9PiB0aGlzLnJlcG9uc2UgPSByZXNwb25zZSlcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIC8vdGVzdGluZyBmdW5jdGlvblxyXG4gICAgLy8gaGVsbG9Xb3JsZCgpOiBTdHJpbmcge1xyXG4gICAgLy8gICAgIHJldHVybiAnSGVsbG8gd29ybGQhJztcclxuICAgIC8vICAgfVxyXG5cclxuICAgIG9uVGFwTG9nb3V0KCk6IHZvaWQge1xyXG4gICAgICAgIGZpcmViYXNlLmxvZ291dCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9nb3V0IGRvbmVcIik7XHJcbiAgICAgICAgQXBwU2V0dGluZ3MuVE9LRU4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBjdXN0b20gYWN0aXZpdHlcclxuICAgIG9uVGFwQ3JlYXRlQWN0aXZpdHkoKTogdm9pZHtcclxuICAgICAgICBpZiAodGhpcy5jdXN0b21BY3Rpdml0eSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIC8vIE1ha2UgYSBQT1NUIHJlcXVlc3QgdG8gY3JlYXRlIGEgY3VzdG9tIGFjdGl2aXR5IFxyXG4gICAgICAgICAgICB0aGlzLml0ZW1TZXJ2aWNlLmNyZWF0ZUN1c3RvbUFjdGl2aXR5KHRoaXMuY3VzdG9tQWN0aXZpdHkpLnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgdGhlIGN1c3RvbSBhY3Rpdml0eSBcIiArIHRoaXMuY3VzdG9tQWN0aXZpdHkpO1xyXG5cclxuICAgICAgICAgICAgLy8gRGlzcGxheWluZyB0aGUgYWxlcnQgdGhhdCB0aGUgYWN0aXZpdHkgd2FzIGNyZWF0ZWRcclxuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBbGVydFwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3VyIGN1c3RvbSBhY3Rpdml0eSBoYXMgYmVlbiBhZGRlZCBzdWNjZXNzZnVsbHkhXCIsXHJcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiR290IGl0IVwiXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIE1ha2luZyB0aGUgUE9TVCByZXF1ZXN0IHRvIHJlZnJlc2ggdGhlIGxpc3RcclxuICAgICAgICAgICAgdGhpcy5nZXRBY3Rpdml0aWVzKCk7XHJcbiAgICAgICAgICAgIC8vIFJlbW92aW5nIHRoZSBrZXlib2FyZCBhZnRlciBwcmVzc2luZyB0aGUgXCJHb3QgaXQhXCIgYnV0dG9uIGluIHRoZSBhbGVydFxyXG4gICAgICAgICAgICB0aGlzLmRpc21pc3NTb2Z0S3llYm9hcmQoKTtcclxuICAgICAgICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICAgICAgIC8vIERpc3BsYXlpbmcgdGhlIGFsZXJ0IHRoYXQgdGhlIGFjdGl2aXR5IGlzIGVtcHR5XHJcbiAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkFsZXJ0XCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiUGxlYXNlIHByb3ZpZGUgdGhlIG5hbWUgZm9yIHlvdXIgY3VzdG9tIGFjdGl2aXR5IVwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiR290IGl0IVwiXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgfVxyXG4gICAgICAgIC8vIENsZWFyaW5nIHRoZSBjdXN0b20gYWN0aXZpdHkgdGV4dCBmaWVsZFxyXG4gICAgICAgIHRoaXMuY3VzdG9tQWN0aXZpdHk9XCJcIjtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2QgdG8gaGlkZSB0aGUga2V5Ym9hcmRcclxuICAgIGRpc21pc3NTb2Z0S3llYm9hcmQoKSB7XHJcbiAgICAgICAgdXRpbHMuYWQuZGlzbWlzc1NvZnRJbnB1dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZCBmb3Igc2VsZWN0ZWQgaXRlbSAtPiBjaGFuZ2UgY29sb3IgdG8gb3JhbmdlIHdoZW4gc2VsZWN0ZWQgYW5kIHN0YXJ0IHRoZSBhY3Rpdml0eVxyXG4gICAgcHVibGljIG9uSXRlbVNlbGVjdGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiSXRlbSBpcyBzZWxlY3RlZFwiKTtcclxuICAgICAgY29uc29sZS5sb2coXCJBcmdzIGluZGV4IFwiICsgYXJncy5pbmRleCk7XHJcblxyXG4gICAgICAvLyBBc3NpZ24gdGhlIHRoZSBzZWxlY3RlZCBpdGVtIGZyb20gdGhlIHJhZExpc3RWaWV3IHRvIHRoZSAoKUlucHV0IGl0ZW1cclxuICAgICAgdGhpcy5pdGVtID0gdGhpcy5pdGVtc1thcmdzLmluZGV4XTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuaXRlbSk7XHJcbiAgIFxyXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgY29sb3Igb2YgdGhlIHNlbGVjdGVkIGl0ZW0gdG8gb3JhbmdlLlxyXG4gICAgICBhcmdzLnZpZXcuYmFja2dyb3VuZENvbG9yID0gbmV3IENvbG9yKFwiI0ZGNzgxNlwiKTsgIFxyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJTdGFydCB0aW1lclwiKTtcclxuICAgICAgaWYgKCF0aGlzLnNlY29uZHMpIHtcclxuICAgICAgICAgIHRoaXMuc2Vjb25kcyA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5pdGVtU2VydmljZS5zdGFydEFjdGl2aXR5KHtcclxuICAgICAgICAgIFwiYWN0aXZpdHlfaWRcIjogdGhpcy5pdGVtLmFjdGl2aXR5Qmx1ZXByaW50SWQsIFwidXNlcl9pZFwiOiBBcHBTZXR0aW5ncy5UT0tFTn0pLnN1YnNjcmliZSgpO1xyXG4gICAgICAgdGhpcy50aW1lckVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgdGhpcy5pc1Zpc2libGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZCBmb3IgZGVzZWxlY3RpbmcgdGhlIGl0ZW0gLSA+IGNoYW5nZSBjb2xvciB0byB3aGl0ZSB3aGVuIGRlc2VsZWN0IGFuZCBzdG9wIHRoZSBhY3Rpdml0eVxyXG4gICAgcHVibGljIG9uSXRlbURlc2VsZWN0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkl0ZW0gaXMgZGVzZWxlY3RlZFwiKTtcclxuXHJcbiAgICAgICAgIC8vIEFzc2lnbiB0aGUgdGhlIHNlbGVjdGVkIGl0ZW0gZnJvbSB0aGUgcmFkTGlzdFZpZXcgdG8gdGhlICgpSW5wdXQgaXRlbVxyXG4gICAgICAgICB0aGlzLml0ZW0gPSB0aGlzLml0ZW1zW2FyZ3MuaW5kZXhdO1xyXG5cclxuICAgICAgICAvLyBDaGFuZ2luZyB0aGUgY29sb3Igb2YgdGhlIGRlc2VsZWN0ZWQgaXRlbSB0byB3aGl0ZS5cclxuICAgICAgICBhcmdzLnZpZXcuYmFja2dyb3VuZENvbG9yID0gbmV3IENvbG9yKFwiI2ZmZmZmZlwiKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTdG9wIHRpbWVyXCIpO1xyXG4gICAgICAgIHRoaXMuaXRlbVNlcnZpY2Uuc3RvcEFjdGl2aXR5KHRoaXMuaXRlbS5hY3Rpdml0eUJsdWVwcmludElkKS5zdWJzY3JpYmUoKTtcclxuICAgICAgICB0aGlzLnRpbWVyRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJBbGVydFwiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlRoZSBhY3Rpdml0eSBoYXMgYmVlbiBzdG9wcGVuISBUaW1lIHNwZW50IG9uIHRoZSBhY3Rpdml0eTogXCIgKyB0aGlzLmhvdXJzICsgXCIgaCBcIiArIHRoaXMubWludXRlcyArIFwiIG1pbiBcIiArIHRoaXMuc2Vjb25kICsgXCIgc2VjLlwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiR290IGl0IVwiXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IFxyXG59XHJcblxyXG5cclxuIl19