"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var router_1 = require("@angular/router");
var app_settings_1 = require("~/app/app-settings");
var page_1 = require("tns-core-modules/ui/page/page");
var dialogs = require("tns-core-modules/ui/dialogs");
var utils = require("utils/utils");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var DataItem_1 = require("~/app/home/item/DataItem");
var firebase = require("nativescript-plugin-firebase");
var ItemsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the FriendService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ItemsComponent(itemService, router, route) {
        this.itemService = itemService;
        this.router = router;
        this.route = route;
        this.suggestedActivityId = 5;
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
        this._dataItems = new observable_array_1.ObservableArray();
        this.route.queryParams.subscribe(function (params) {
            // Defaults to 0 if no query param provided.
            if ("page" in params) {
                // console.log("Activate activity on init from param");
                // console.log(params);
                _this.suggestedActivityId = params["page"];
            }
        });
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
    // get myFilteringFunc(): (item: any) => boolean {
    //     return (item: DataItem) => {
    //         return item.itemName.includes("Special Item");
    //     };
    // }
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
            message: "The activity has been stoppen! Time spent on the activity: " + this.hours + " h " + this.minutes + " min " + this.seconds + " sec.",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStFO0FBRy9FLCtDQUE2QztBQUM3QywwQ0FBeUQ7QUFDekQsbURBQStDO0FBQy9DLHNEQUE0RDtBQUM1RCxxREFBdUQ7QUFDdkQsbUNBQXFDO0FBRXJDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBU3pEO0lBZUksOElBQThJO0lBQzlJLGlIQUFpSDtJQUNqSCx3QkFBb0IsV0FBd0IsRUFBVSxNQUFjLEVBQVUsS0FBcUI7UUFBL0UsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFkNUYsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDNUIsbUJBQWMsR0FBQyxFQUFFLENBQUM7UUFjZCxnQkFBZ0I7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXBELDhDQUE4QztRQUM5QyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQsbUNBQVUsR0FBVjtRQUNJLE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7SUFFRCw0Q0FBbUIsR0FBbkI7UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUMsUUFBYTtZQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQUUsT0FBTzthQUFFO1lBQzFCLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxP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TUQsSUFnTUM7QUFoTVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XHJcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7QXBwU2V0dGluZ3N9IGZyb20gXCJ+L2FwcC9hcHAtc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgUGFnZSwgQ29sb3IgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ1dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSwgUmFkTGlzdFZpZXcgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCI7XHJcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9pdGVtLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIGl0ZW1zOiBJdGVtW107XHJcbiAgICByZXBvbnNlOiBhbnk7XHJcbiAgICBwdWJsaWMgYm90dG9tQmFyU2hvdyA9IHRydWU7XHJcbiAgICBjdXN0b21BY3Rpdml0eT1cIlwiO1xyXG4gICAgaXNWaXNpYmxlOiBhbnk7XHJcblxyXG4gICAgQElucHV0KCkgaXRlbTogSXRlbTtcclxuICAgIHB1YmxpYyB0aW1lckVuYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgc2Vjb25kOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgc2Vjb25kczogbnVtYmVyO1xyXG4gICAgcHVibGljIG1pbnV0ZXM6IG51bWJlcjtcclxuICAgIHB1YmxpYyBob3VyczogbnVtYmVyO1xyXG4gICAgcHVibGljIGlkO1xyXG5cclxuICAgIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBGcmllbmRTZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLlxyXG4gICAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSwgZGVmaW5lZCBpbiBhcHAubW9kdWxlLnRzLlxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XHJcbiAgICAgICAgLy8gYm90dG9tQmFyU2hvd1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSXRlbXMgYXJlIGxvYWRpbmcuLi5cIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDdXN0b20gYWN0aXZpdHlcIisgdGhpcy5jdXN0b21BY3Rpdml0eSk7XHJcbiAgICAgICBcclxuICAgICAgICAvL3NldHRpbmcgdGhlIHZpc2liaWxpdHkgb2YgdGhlIHRpbWVyIHRvIGZhbHNlXHJcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSBmYWxzZTsgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaGVsbG9Xb3JsZCgpOiBTdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcIkRhdmFhYWohXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFJ1bm5pbmdBY3Rpdml0eSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLml0ZW1TZXJ2aWNlLmdldEFjdGl2aXR5KCkuc3Vic2NyaWJlKChhY3Rpdml0eTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGl2aXR5KTtcclxuICAgICAgICAgICAgaWYgKCFhY3Rpdml0eSkgeyByZXR1cm47IH1cclxuICAgICAgICAgICAgdGhpcy5zZWNvbmRzID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBhY3Rpdml0eS50aW1lX3N0YXJ0O1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZ2V0QWN0aXZpdGllcygpO1xyXG4gICAgICAgIGZpcmViYXNlLmdldEF1dGhUb2tlbih7XHJcbiAgICAgICAgICAgIC8vIGRlZmF1bHQgZmFsc2UsIG5vdCByZWNvbW1lbmRlZCB0byBzZXQgdG8gdHJ1ZSBieSBGaXJlYmFzZSBidXQgZXhwb3NlZCBmb3Ige059IGRldnMgbm9uZXRoZWxlc3MgOilcclxuICAgICAgICAgICAgZm9yY2VSZWZyZXNoOiBmYWxzZVxyXG4gICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdXRoIHRva2VuIHJldHJpZXZlZDogXCIgKyB0b2tlbik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXV0aCB0b2tlbiByZXRyaWV2YWwgZXJyb3I6IFwiICsgZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXJFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWNvbmRzID0gMDtcclxuICAgICAgICB0aGlzLmdldEl0ZW0oKTtcclxuICAgICAgICB0aGlzLmlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lckVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Vjb25kcyArPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWNvbmQgPSB0aGlzLnNlY29uZHMgJSA2MDtcclxuICAgICAgICAgICAgICAgIHRoaXMubWludXRlcyA9IE1hdGguZmxvb3IodGhpcy5zZWNvbmRzIC8gNjApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ob3VycyA9IE1hdGguZmxvb3IodGhpcy5zZWNvbmRzIC8gMzYwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMDAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgLy8gRGVmYXVsdHMgdG8gMCBpZiBubyBxdWVyeSBwYXJhbSBwcm92aWRlZC5cclxuICAgICAgICAgICAgaWYgKFwicGFnZVwiIGluIHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBY3RpdmF0ZSBhY3Rpdml0eSBvbiBpbml0IGZyb20gcGFyYW1cIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZUFjdGl2aXR5KHBhcmFtc1tcInBhZ2VcIl0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGVBY3Rpdml0eShpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gQWN0aXZhdGluZyBhY3Rpdml0eVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBBY3RpdmF0aW5nIGFjdGl2aXR5ICR7aWR9YCk7XHJcbiAgICAgICAgLy8gVE9ETzogYWN0aXZhdGUgYWN0aXZpdHlcclxuICAgIH1cclxuXHJcbiAgICBnZXRJdGVtKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGlkID0gK3RoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpO1xyXG4gICAgICAgIHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbShpZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtID0gaXRlbTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuaXRlbS50aW1lID0gMDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWN0aXZpdGllcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLml0ZW1TZXJ2aWNlLmdldEFjdGl2aXRpZXMoKS5zdWJzY3JpYmUoYWN0aXZpdGllcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBhY3Rpdml0aWVzO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRSdW5uaW5nQWN0aXZpdHkoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyB0aGlzLml0ZW1TZXJ2aWNlLmNyZWF0ZUFjY291bnQoKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4gdGhpcy5yZXBvbnNlID0gcmVzcG9uc2UpXHJcbiAgICB9XHJcblxyXG4gICAgb25UYXBMb2dvdXQoKTogdm9pZCB7XHJcbiAgICAgICAgZmlyZWJhc2UubG9nb3V0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2dvdXQgZG9uZVwiKTtcclxuICAgICAgICBBcHBTZXR0aW5ncy5UT0tFTiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kIHRoYXQgY3JlYXRlcyBhIGN1c3RvbSBhY3Rpdml0eVxyXG4gICAgb25UYXBDcmVhdGVBY3Rpdml0eSgpOiB2b2lke1xyXG4gICAgICAgIGlmICh0aGlzLmN1c3RvbUFjdGl2aXR5ICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgLy8gTWFrZSBhIFBPU1QgcmVxdWVzdCB0byBjcmVhdGUgYSBjdXN0b20gYWN0aXZpdHkgXHJcbiAgICAgICAgICAgIHRoaXMuaXRlbVNlcnZpY2UuY3JlYXRlQ3VzdG9tQWN0aXZpdHkodGhpcy5jdXN0b21BY3Rpdml0eSkuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBpcyB0aGUgY3VzdG9tIGFjdGl2aXR5IFwiICsgdGhpcy5jdXN0b21BY3Rpdml0eSk7XHJcblxyXG4gICAgICAgICAgICAvLyBEaXNwbGF5aW5nIHRoZSBhbGVydCB0aGF0IHRoZSBhY3Rpdml0eSB3YXMgY3JlYXRlZFxyXG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFsZXJ0XCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdXIgY3VzdG9tIGFjdGl2aXR5IGhhcyBiZWVuIGFkZGVkIHN1Y2Nlc3NmdWxseSFcIixcclxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJHb3QgaXQhXCJcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gTWFraW5nIHRoZSBQT1NUIHJlcXVlc3QgdG8gcmVmcmVzaCB0aGUgbGlzdFxyXG4gICAgICAgICAgICB0aGlzLmdldEFjdGl2aXRpZXMoKTtcclxuICAgICAgICAgICAgLy8gUmVtb3ZpbmcgdGhlIGtleWJvYXJkIGFmdGVyIHByZXNzaW5nIHRoZSBcIkdvdCBpdCFcIiBidXR0b24gaW4gdGhlIGFsZXJ0XHJcbiAgICAgICAgICAgIHRoaXMuZGlzbWlzc1NvZnRLeWVib2FyZCgpO1xyXG4gICAgICAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgICAgICAgLy8gRGlzcGxheWluZyB0aGUgYWxlcnQgdGhhdCB0aGUgYWN0aXZpdHkgaXMgZW1wdHlcclxuICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiQWxlcnRcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJQbGVhc2UgcHJvdmlkZSB0aGUgbmFtZSBmb3IgeW91ciBjdXN0b20gYWN0aXZpdHkhXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJHb3QgaXQhXCJcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcclxuICAgICAgICB9KTtcclxuICAgICB9XHJcbiAgICAgICAgLy8gQ2xlYXJpbmcgdGhlIGN1c3RvbSBhY3Rpdml0eSB0ZXh0IGZpZWxkXHJcbiAgICAgICAgdGhpcy5jdXN0b21BY3Rpdml0eT1cIlwiO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZCB0byBoaWRlIHRoZSBrZXlib2FyZFxyXG4gICAgZGlzbWlzc1NvZnRLeWVib2FyZCgpIHtcclxuICAgICAgICB1dGlscy5hZC5kaXNtaXNzU29mdElucHV0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kIGZvciBzZWxlY3RlZCBpdGVtIC0+IGNoYW5nZSBjb2xvciB0byBvcmFuZ2Ugd2hlbiBzZWxlY3RlZCBhbmQgc3RhcnQgdGhlIGFjdGl2aXR5XHJcbiAgICBwdWJsaWMgb25JdGVtU2VsZWN0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJJdGVtIGlzIHNlbGVjdGVkXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkFyZ3MgaW5kZXggXCIgKyBhcmdzLmluZGV4KTtcclxuXHJcbiAgICAgIC8vIEFzc2lnbiB0aGUgdGhlIHNlbGVjdGVkIGl0ZW0gZnJvbSB0aGUgcmFkTGlzdFZpZXcgdG8gdGhlICgpSW5wdXQgaXRlbVxyXG4gICAgICB0aGlzLml0ZW0gPSB0aGlzLml0ZW1zW2FyZ3MuaW5kZXhdO1xyXG5cclxuICAgICAgY29uc29sZS5sb2codGhpcy5pdGVtKTtcclxuICAgXHJcbiAgICAgIC8vIENoYW5naW5nIHRoZSBjb2xvciBvZiB0aGUgc2VsZWN0ZWQgaXRlbSB0byBvcmFuZ2UuXHJcbiAgICAgIGFyZ3Mudmlldy5iYWNrZ3JvdW5kQ29sb3IgPSBuZXcgQ29sb3IoXCIjRkY3ODE2XCIpOyAgXHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcIlN0YXJ0IHRpbWVyXCIpO1xyXG4gICAgICBpZiAoIXRoaXMuc2Vjb25kcykge1xyXG4gICAgICAgICAgdGhpcy5zZWNvbmRzID0gMDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLml0ZW1TZXJ2aWNlLnN0YXJ0QWN0aXZpdHkoe1xyXG4gICAgICAgICAgXCJhY3Rpdml0eV9pZFwiOiB0aGlzLml0ZW0uYWN0aXZpdHlCbHVlcHJpbnRJZCwgXCJ1c2VyX2lkXCI6IEFwcFNldHRpbmdzLlRPS0VOfSkuc3Vic2NyaWJlKCk7XHJcbiAgICAgICB0aGlzLnRpbWVyRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kIGZvciBkZXNlbGVjdGluZyB0aGUgaXRlbSAtID4gY2hhbmdlIGNvbG9yIHRvIHdoaXRlIHdoZW4gZGVzZWxlY3QgYW5kIHN0b3AgdGhlIGFjdGl2aXR5XHJcbiAgICBwdWJsaWMgb25JdGVtRGVzZWxlY3RlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSXRlbSBpcyBkZXNlbGVjdGVkXCIpO1xyXG5cclxuICAgICAgICAgLy8gQXNzaWduIHRoZSB0aGUgc2VsZWN0ZWQgaXRlbSBmcm9tIHRoZSByYWRMaXN0VmlldyB0byB0aGUgKClJbnB1dCBpdGVtXHJcbiAgICAgICAgIHRoaXMuaXRlbSA9IHRoaXMuaXRlbXNbYXJncy5pbmRleF07XHJcblxyXG4gICAgICAgIC8vIENoYW5naW5nIHRoZSBjb2xvciBvZiB0aGUgZGVzZWxlY3RlZCBpdGVtIHRvIHdoaXRlLlxyXG4gICAgICAgIGFyZ3Mudmlldy5iYWNrZ3JvdW5kQ29sb3IgPSBuZXcgQ29sb3IoXCIjZmZmZmZmXCIpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlN0b3AgdGltZXJcIik7XHJcbiAgICAgICAgdGhpcy5pdGVtU2VydmljZS5zdG9wQWN0aXZpdHkodGhpcy5pdGVtLmFjdGl2aXR5Qmx1ZXByaW50SWQpLnN1YnNjcmliZSgpO1xyXG4gICAgICAgIHRoaXMudGltZXJFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkFsZXJ0XCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiVGhlIGFjdGl2aXR5IGhhcyBiZWVuIHN0b3BwZW4hIFRpbWUgc3BlbnQgb24gdGhlIGFjdGl2aXR5OiBcIiArIHRoaXMuaG91cnMgKyBcIiBoIFwiICsgdGhpcy5taW51dGVzICsgXCIgbWluIFwiICsgdGhpcy5zZWNvbmRzICsgXCIgc2VjLlwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiR290IGl0IVwiXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IFxyXG59XHJcblxyXG5cclxuIl19