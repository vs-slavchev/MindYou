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
        this.suggestedActivityId = -1;
        this.bottomBarShow = true;
        this.customActivity = "";
        // bottomBarShow
        console.log("Items are loading...");
        console.log("Custom activity" + this.customActivity);
        //setting the visibility of the timer to false
        this.isVisible = false;
    }
    ItemsComponent.prototype.helloWorld = function () {
        return "Hi world!";
    };
    ItemsComponent.prototype.initRunningActivity = function () {
        var _this = this;
        // selectItemAt
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
            for (var i = 0; i < _this.items.length; i++) {
                var item = _this.items[i];
                var dataItem = new DataItem_1.DataItem(i, item.activityBlueprintId, 0, item.name, null, null, item.name, null, false, null, null, null, null, false);
                if (item.activityBlueprintId == _this.suggestedActivityId) {
                    dataItem.suggested = true;
                }
                _this._dataItems.push(dataItem);
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStFO0FBRy9FLCtDQUE2QztBQUM3QywwQ0FBeUQ7QUFDekQsbURBQStDO0FBQy9DLHNEQUE0RDtBQUM1RCxxREFBdUQ7QUFDdkQsbUNBQXFDO0FBRXJDLDJFQUF1RTtBQUN2RSxxREFBa0Q7QUFFbEQsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFTekQ7SUFvQkksOElBQThJO0lBQzlJLGlIQUFpSDtJQUNqSCx3QkFBb0IsV0FBd0IsRUFBVSxNQUFjLEVBQVUsS0FBcUI7UUFBL0UsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFuQjNGLHdCQUFtQixHQUFHLENBQUMsQ0FBQyxDQUFDO1FBSTFCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzVCLG1CQUFjLEdBQUMsRUFBRSxDQUFDO1FBZWQsZ0JBQWdCO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVwRCw4Q0FBOEM7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUVELG1DQUFVLEdBQVY7UUFDSSxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDO0lBRUQsNENBQW1CLEdBQW5CO1FBQUEsaUJBU0M7UUFSRyxlQUFlO1FBQ2YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxRQUFhO1lBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLFFB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Q0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3pFLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBRXZCLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDVixLQUFLLEVBQUUsT0FBTztZQUNkLE9BQU8sRUFBRSw2REFBNkQsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU87WUFDN0ksWUFBWSxFQUFFLFNBQVM7U0FDMUIsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUExTVE7UUFBUixZQUFLLEVBQUU7O2dEQUFZO0lBWlgsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDO1NBQzVCLENBQUM7eUNBdUJtQywwQkFBVyxFQUFrQixlQUFNLEVBQWlCLHVCQUFjO09BdEIxRixjQUFjLENBdU4xQjtJQUFELHFCQUFDO0NBQUEsQUF2TkQsSUF1TkM7QUF2Tlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XHJcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7QXBwU2V0dGluZ3N9IGZyb20gXCJ+L2FwcC9hcHAtc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgUGFnZSwgQ29sb3IgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ1dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSwgUmFkTGlzdFZpZXcgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZUFycmF5fSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcclxuaW1wb3J0IHtEYXRhSXRlbX0gZnJvbSBcIn4vYXBwL2hvbWUvaXRlbS9EYXRhSXRlbVwiO1xyXG5pbXBvcnQge3RvcG1vc3R9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCI7XHJcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9pdGVtLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHByaXZhdGUgcmFkTGlzdFZpZXc6IFJhZExpc3RWaWV3O1xyXG4gICAgcHJpdmF0ZSBzdWdnZXN0ZWRBY3Rpdml0eUlkID0gLTE7XHJcblxyXG4gICAgcHVibGljIGl0ZW1zOiBJdGVtW107XHJcbiAgICByZXBvbnNlOiBhbnk7XHJcbiAgICBwdWJsaWMgYm90dG9tQmFyU2hvdyA9IHRydWU7XHJcbiAgICBjdXN0b21BY3Rpdml0eT1cIlwiO1xyXG4gICAgaXNWaXNpYmxlOiBhbnk7XHJcbiAgICBwcml2YXRlIF9kYXRhSXRlbXM6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT47XHJcblxyXG4gICAgQElucHV0KCkgaXRlbTogSXRlbTtcclxuICAgIHB1YmxpYyB0aW1lckVuYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgc2Vjb25kOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgc2Vjb25kczogbnVtYmVyO1xyXG4gICAgcHVibGljIG1pbnV0ZXM6IG51bWJlcjtcclxuICAgIHB1YmxpYyBob3VyczogbnVtYmVyO1xyXG4gICAgcHVibGljIGlkO1xyXG5cclxuICAgIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBGcmllbmRTZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLlxyXG4gICAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSwgZGVmaW5lZCBpbiBhcHAubW9kdWxlLnRzLlxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XHJcbiAgICAgICAgLy8gYm90dG9tQmFyU2hvd1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSXRlbXMgYXJlIGxvYWRpbmcuLi5cIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDdXN0b20gYWN0aXZpdHlcIisgdGhpcy5jdXN0b21BY3Rpdml0eSk7XHJcbiAgICAgICBcclxuICAgICAgICAvL3NldHRpbmcgdGhlIHZpc2liaWxpdHkgb2YgdGhlIHRpbWVyIHRvIGZhbHNlXHJcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSBmYWxzZTsgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaGVsbG9Xb3JsZCgpOiBTdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcIkhpIHdvcmxkIVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRSdW5uaW5nQWN0aXZpdHkoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gc2VsZWN0SXRlbUF0XHJcbiAgICAgICAgdGhpcy5pdGVtU2VydmljZS5nZXRBY3Rpdml0eSgpLnN1YnNjcmliZSgoYWN0aXZpdHk6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpdml0eSk7XHJcbiAgICAgICAgICAgIGlmICghYWN0aXZpdHkpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kcyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gYWN0aXZpdHkudGltZV9zdGFydDtcclxuICAgICAgICAgICAgdGhpcy50aW1lckVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9kYXRhSXRlbXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPigpO1xyXG4gICAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIC8vIERlZmF1bHRzIHRvIDAgaWYgbm8gcXVlcnkgcGFyYW0gcHJvdmlkZWQuXHJcbiAgICAgICAgICAgIGlmIChcInBhZ2VcIiBpbiBwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQWN0aXZhdGUgYWN0aXZpdHkgb24gaW5pdCBmcm9tIHBhcmFtXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocGFyYW1zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3VnZ2VzdGVkQWN0aXZpdHlJZCA9IHBhcmFtc1tcInBhZ2VcIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5nZXRBY3Rpdml0aWVzKCk7XHJcbiAgICAgICAgZmlyZWJhc2UuZ2V0QXV0aFRva2VuKHtcclxuICAgICAgICAgICAgLy8gZGVmYXVsdCBmYWxzZSwgbm90IHJlY29tbWVuZGVkIHRvIHNldCB0byB0cnVlIGJ5IEZpcmViYXNlIGJ1dCBleHBvc2VkIGZvciB7Tn0gZGV2cyBub25ldGhlbGVzcyA6KVxyXG4gICAgICAgICAgICBmb3JjZVJlZnJlc2g6IGZhbHNlXHJcbiAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF1dGggdG9rZW4gcmV0cmlldmVkOiBcIiArIHRva2VuKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdXRoIHRva2VuIHJldHJpZXZhbCBlcnJvcjogXCIgKyBlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lckVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlY29uZHMgPSAwO1xyXG4gICAgICAgIHRoaXMuZ2V0SXRlbSgpO1xyXG4gICAgICAgIHRoaXMuaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyRW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWNvbmRzICs9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlY29uZCA9IHRoaXMuc2Vjb25kcyAlIDYwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5taW51dGVzID0gTWF0aC5mbG9vcih0aGlzLnNlY29uZHMgLyA2MCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvdXJzID0gTWF0aC5mbG9vcih0aGlzLnNlY29uZHMgLyAzNjAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZUFjdGl2aXR5KGlkOiBudW1iZXIpIHtcclxuICAgICAgICAvLyBBY3RpdmF0aW5nIGFjdGl2aXR5XHJcbiAgICAgICAgY29uc29sZS5sb2coYEFjdGl2YXRpbmcgYWN0aXZpdHkgJHtpZH1gKTtcclxuICAgICAgICAvLyBUT0RPOiBhY3RpdmF0ZSBhY3Rpdml0eVxyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW0oKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgaWQgPSArdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJyk7XHJcbiAgICAgICAgdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtKGlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW0gPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5pdGVtLnRpbWUgPSAwO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY3Rpdml0aWVzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXRlbVNlcnZpY2UuZ2V0QWN0aXZpdGllcygpLnN1YnNjcmliZShhY3Rpdml0aWVzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtcyA9IGFjdGl2aXRpZXM7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLml0ZW1zW2ldO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGFJdGVtID0gbmV3IERhdGFJdGVtKGksIGl0ZW0uYWN0aXZpdHlCbHVlcHJpbnRJZCwgMCwgaXRlbS5uYW1lLCBudWxsLCBudWxsLCBpdGVtLm5hbWUsIG51bGwsIGZhbHNlLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5hY3Rpdml0eUJsdWVwcmludElkID09IHRoaXMuc3VnZ2VzdGVkQWN0aXZpdHlJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFJdGVtLnN1Z2dlc3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhSXRlbXMucHVzaChkYXRhSXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuaW5pdFJ1bm5pbmdBY3Rpdml0eSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHRoaXMuaXRlbVNlcnZpY2UuY3JlYXRlQWNjb3VudCgpLnN1YnNjcmliZShyZXNwb25zZSA9PiB0aGlzLnJlcG9uc2UgPSByZXNwb25zZSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXQgbXlGaWx0ZXJpbmdGdW5jKCk6IChpdGVtOiBhbnkpID0+IGJvb2xlYW4ge1xyXG4gICAgLy8gICAgIHJldHVybiAoaXRlbTogRGF0YUl0ZW0pID0+IHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuIGl0ZW0uaXRlbU5hbWUuaW5jbHVkZXMoXCJTcGVjaWFsIEl0ZW1cIik7XHJcbiAgICAvLyAgICAgfTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBvblRhcExvZ291dCgpOiB2b2lkIHtcclxuICAgICAgICBmaXJlYmFzZS5sb2dvdXQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkxvZ291dCBkb25lXCIpO1xyXG4gICAgICAgIEFwcFNldHRpbmdzLlRPS0VOID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2QgdGhhdCBjcmVhdGVzIGEgY3VzdG9tIGFjdGl2aXR5XHJcbiAgICBvblRhcENyZWF0ZUFjdGl2aXR5KCk6IHZvaWR7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tQWN0aXZpdHkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAvLyBNYWtlIGEgUE9TVCByZXF1ZXN0IHRvIGNyZWF0ZSBhIGN1c3RvbSBhY3Rpdml0eSBcclxuICAgICAgICAgICAgdGhpcy5pdGVtU2VydmljZS5jcmVhdGVDdXN0b21BY3Rpdml0eSh0aGlzLmN1c3RvbUFjdGl2aXR5KS5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIGlzIHRoZSBjdXN0b20gYWN0aXZpdHkgXCIgKyB0aGlzLmN1c3RvbUFjdGl2aXR5KTtcclxuXHJcbiAgICAgICAgICAgIC8vIERpc3BsYXlpbmcgdGhlIGFsZXJ0IHRoYXQgdGhlIGFjdGl2aXR5IHdhcyBjcmVhdGVkXHJcbiAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQWxlcnRcIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiWW91ciBjdXN0b20gYWN0aXZpdHkgaGFzIGJlZW4gYWRkZWQgc3VjY2Vzc2Z1bGx5IVwiLFxyXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkdvdCBpdCFcIlxyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBNYWtpbmcgdGhlIFBPU1QgcmVxdWVzdCB0byByZWZyZXNoIHRoZSBsaXN0XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0QWN0aXZpdGllcygpO1xyXG4gICAgICAgICAgICAvLyBSZW1vdmluZyB0aGUga2V5Ym9hcmQgYWZ0ZXIgcHJlc3NpbmcgdGhlIFwiR290IGl0IVwiIGJ1dHRvbiBpbiB0aGUgYWxlcnRcclxuICAgICAgICAgICAgdGhpcy5kaXNtaXNzU29mdEt5ZWJvYXJkKCk7XHJcbiAgICAgICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAvLyBEaXNwbGF5aW5nIHRoZSBhbGVydCB0aGF0IHRoZSBhY3Rpdml0eSBpcyBlbXB0eVxyXG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJBbGVydFwiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBwcm92aWRlIHRoZSBuYW1lIGZvciB5b3VyIGN1c3RvbSBhY3Rpdml0eSFcIixcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkdvdCBpdCFcIlxyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgIH1cclxuICAgICAgICAvLyBDbGVhcmluZyB0aGUgY3VzdG9tIGFjdGl2aXR5IHRleHQgZmllbGRcclxuICAgICAgICB0aGlzLmN1c3RvbUFjdGl2aXR5PVwiXCI7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kIHRvIGhpZGUgdGhlIGtleWJvYXJkXHJcbiAgICBkaXNtaXNzU29mdEt5ZWJvYXJkKCkge1xyXG4gICAgICAgIHV0aWxzLmFkLmRpc21pc3NTb2Z0SW5wdXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2QgZm9yIHNlbGVjdGVkIGl0ZW0gLT4gY2hhbmdlIGNvbG9yIHRvIG9yYW5nZSB3aGVuIHNlbGVjdGVkIGFuZCBzdGFydCB0aGUgYWN0aXZpdHlcclxuICAgIHB1YmxpYyBvbkl0ZW1TZWxlY3RlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkl0ZW0gaXMgc2VsZWN0ZWRcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQXJncyBpbmRleCBcIiArIGFyZ3MuaW5kZXgpO1xyXG5cclxuICAgICAgLy8gQXNzaWduIHRoZSB0aGUgc2VsZWN0ZWQgaXRlbSBmcm9tIHRoZSByYWRMaXN0VmlldyB0byB0aGUgKClJbnB1dCBpdGVtXHJcbiAgICAgIHRoaXMuaXRlbSA9IHRoaXMuaXRlbXNbYXJncy5pbmRleF07XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLml0ZW0pO1xyXG4gICBcclxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIGNvbG9yIG9mIHRoZSBzZWxlY3RlZCBpdGVtIHRvIG9yYW5nZS5cclxuICAgICAgYXJncy52aWV3LmJhY2tncm91bmRDb2xvciA9IG5ldyBDb2xvcihcIiNGRjc4MTZcIik7ICBcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiU3RhcnQgdGltZXJcIik7XHJcbiAgICAgIGlmICghdGhpcy5zZWNvbmRzKSB7XHJcbiAgICAgICAgICB0aGlzLnNlY29uZHMgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuaXRlbVNlcnZpY2Uuc3RhcnRBY3Rpdml0eSh7XHJcbiAgICAgICAgICBcImFjdGl2aXR5X2lkXCI6IHRoaXMuaXRlbS5hY3Rpdml0eUJsdWVwcmludElkLCBcInVzZXJfaWRcIjogQXBwU2V0dGluZ3MuVE9LRU59KS5zdWJzY3JpYmUoKTtcclxuICAgICAgIHRoaXMudGltZXJFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2QgZm9yIGRlc2VsZWN0aW5nIHRoZSBpdGVtIC0gPiBjaGFuZ2UgY29sb3IgdG8gd2hpdGUgd2hlbiBkZXNlbGVjdCBhbmQgc3RvcCB0aGUgYWN0aXZpdHlcclxuICAgIHB1YmxpYyBvbkl0ZW1EZXNlbGVjdGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJdGVtIGlzIGRlc2VsZWN0ZWRcIik7XHJcblxyXG4gICAgICAgICAvLyBBc3NpZ24gdGhlIHRoZSBzZWxlY3RlZCBpdGVtIGZyb20gdGhlIHJhZExpc3RWaWV3IHRvIHRoZSAoKUlucHV0IGl0ZW1cclxuICAgICAgICAgdGhpcy5pdGVtID0gdGhpcy5pdGVtc1thcmdzLmluZGV4XTtcclxuXHJcbiAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIGNvbG9yIG9mIHRoZSBkZXNlbGVjdGVkIGl0ZW0gdG8gd2hpdGUuXHJcbiAgICAgICAgYXJncy52aWV3LmJhY2tncm91bmRDb2xvciA9IG5ldyBDb2xvcihcIiNmZmZmZmZcIik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3RvcCB0aW1lclwiKTtcclxuICAgICAgICB0aGlzLml0ZW1TZXJ2aWNlLnN0b3BBY3Rpdml0eSh0aGlzLml0ZW0uYWN0aXZpdHlCbHVlcHJpbnRJZCkuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgdGhpcy50aW1lckVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiQWxlcnRcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJUaGUgYWN0aXZpdHkgaGFzIGJlZW4gc3RvcHBlbiEgVGltZSBzcGVudCBvbiB0aGUgYWN0aXZpdHk6IFwiICsgdGhpcy5ob3VycyArIFwiIGggXCIgKyB0aGlzLm1pbnV0ZXMgKyBcIiBtaW4gXCIgKyB0aGlzLnNlY29uZHMgKyBcIiBzZWMuXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJHb3QgaXQhXCJcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gXHJcbn1cclxuIl19