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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStFO0FBRy9FLCtDQUE2QztBQUM3QywwQ0FBeUM7QUFDekMsbURBQStDO0FBQy9DLHNEQUE0RDtBQUM1RCxxREFBdUQ7QUFDdkQsbUNBQXFDO0FBRXJDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBRXpELDBDQUFpRDtBQVFqRDtJQVlJLDhJQUE4STtJQUM5SSxpSEFBaUg7SUFDakgsd0JBQW9CLFdBQXdCLEVBQVUsTUFBYyxFQUFVLEtBQXFCO1FBQS9FLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBWDVGLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzVCLG1CQUFjLEdBQUMsRUFBRSxDQUFDO1FBV2QsZ0JBQWdCO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVwRCw4Q0FBOEM7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFBQSxpQkFzQkM7UUFyQkcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLFFBQVEsQ0FBQyxZQUFZLENBQUM7WUFDbEIsb0dBQW9HO1lBQ3BHLFlBQVksRUFBRSxLQUFLO1NBQ3RCLENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBVSxLQUFLO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUNsRCxDQUFDLEVBQ0QsVUFBVSxZQUFZO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEdBQUcsWUFBWSxDQUFDLENBQUM7UUFDL0QsQ0FBQyxDQUNKLENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsRUFBRSxHQUFHLFdBQVcsQ0FBQztZQUNsQixJQUFJLEtBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ25CLEtBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO2FBQ3JCO1FBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVELGdDQUFPLEdBQVA7UUFBQSxpQkFPQztRQU5HLElBQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7YUFDdkIsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUNaLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLHNCQUFzQjtRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxzQ0FBYSxHQUFiO1FBQUEsaUJBR0M7UUFGRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUF2QixDQUF1QixDQUFDLENBQUM7UUFDbEYsa0ZBQWtGO0lBQ3RGLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0ksUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0IsMEJBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsd0NBQXdDO0lBQ3hDLDRDQUFtQixHQUFuQjtRQUNJLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxFQUFFLEVBQUU7WUFDM0IsbURBQW1EO1lBQ25ELElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3ZFLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBRWxFLHFEQUFxRDtZQUNyRCxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUNWLEtBQUssRUFBRSxPQUFPO2dCQUNkLE9BQU8sRUFBRSxtREFBbUQ7Z0JBQzVELFlBQVksRUFBRSxTQUFTO2FBQzFCLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsOENBQThDO1lBQzlDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQix5RUFBeUU7WUFDekUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDN0I7YUFDRjtZQUNLLGtEQUFrRDtZQUN2RCxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUNWLEtBQUssRUFBRSxPQUFPO2dCQUNkLE9BQU8sRUFBRSxtREFBbUQ7Z0JBQzVELFlBQVksRUFBRSxTQUFTO2FBQzFCLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUFDO1NBQ0w7UUFDRSwwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLGNBQWMsR0FBQyxFQUFFLENBQUM7SUFFM0IsQ0FBQztJQUVELDhCQUE4QjtJQUM5Qiw0Q0FBbUIsR0FBbkI7UUFDSSxLQUFLLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELDBGQUEwRjtJQUNuRix1Q0FBYyxHQUFyQixVQUFzQixJQUF1QjtRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXhDLHdFQUF3RTtRQUN4RSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRW5DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZCLHFEQUFxRDtRQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLFlBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVqRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7U0FDcEI7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztZQUMzQixhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxTQUFTLEVBQUUsMEJBQVcsQ0FBQyxLQUFLO1NBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzVGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxnR0FBZ0c7SUFDekYseUNBQWdCLEdBQXZCLFVBQXdCLElBQXVCO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUVqQyx3RUFBd0U7UUFDeEUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVwQyxzREFBc0Q7UUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxZQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDekUsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQTFJUTtRQUFSLFlBQUssRUFBRTs7Z0RBQVk7SUFQWCxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQUM7U0FDNUIsQ0FBQzt5Q0FlbUMsMEJBQVcsRUFBa0IsZUFBTSxFQUFpQix1QkFBYztPQWQxRixjQUFjLENBa0oxQjtJQUFELHFCQUFDO0NBQUEsQUFsSkQsSUFrSkM7QUFsSlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XHJcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtBcHBTZXR0aW5nc30gZnJvbSBcIn4vYXBwL2FwcC1zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBQYWdlLCBDb2xvciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcInV0aWxzL3V0aWxzXCI7XHJcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIjtcclxuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuXHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9pdGVtLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgaXRlbXM6IEl0ZW1bXTtcclxuICAgIHJlcG9uc2U6IGFueTtcclxuICAgIHB1YmxpYyBib3R0b21CYXJTaG93ID0gdHJ1ZTtcclxuICAgIGN1c3RvbUFjdGl2aXR5PVwiXCI7XHJcbiAgICBpc1Zpc2libGU6IGFueTtcclxuXHJcbiAgICBASW5wdXQoKSBpdGVtOiBJdGVtO1xyXG4gICAgcHVibGljIHRpbWVyRW5hYmxlZDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBzZWNvbmRzOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaWQ7XHJcblxyXG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEZyaWVuZFNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuXHJcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcclxuICAgICAgICAvLyBib3R0b21CYXJTaG93XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJdGVtcyBhcmUgbG9hZGluZy4uLlwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkN1c3RvbSBhY3Rpdml0eVwiKyB0aGlzLmN1c3RvbUFjdGl2aXR5KTtcclxuICAgICAgIFxyXG4gICAgICAgIC8vc2V0dGluZyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgdGltZXIgdG8gZmFsc2VcclxuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlOyAgICAgICBcclxuICAgIH0gIFxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZ2V0QWN0aXZpdGllcygpO1xyXG4gICAgICAgIGZpcmViYXNlLmdldEF1dGhUb2tlbih7XHJcbiAgICAgICAgICAgIC8vIGRlZmF1bHQgZmFsc2UsIG5vdCByZWNvbW1lbmRlZCB0byBzZXQgdG8gdHJ1ZSBieSBGaXJlYmFzZSBidXQgZXhwb3NlZCBmb3Ige059IGRldnMgbm9uZXRoZWxlc3MgOilcclxuICAgICAgICAgICAgZm9yY2VSZWZyZXNoOiBmYWxzZVxyXG4gICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdXRoIHRva2VuIHJldHJpZXZlZDogXCIgKyB0b2tlbik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXV0aCB0b2tlbiByZXRyaWV2YWwgZXJyb3I6IFwiICsgZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXJFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWNvbmRzID0gMDtcclxuICAgICAgICB0aGlzLmdldEl0ZW0oKTtcclxuICAgICAgICB0aGlzLmlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lckVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Vjb25kcyArPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwMCk7ICAgICAgICAgICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBnZXRJdGVtKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGlkID0gK3RoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpO1xyXG4gICAgICAgIHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbShpZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtID0gaXRlbTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuaXRlbS50aW1lID0gMDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWN0aXZpdGllcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLml0ZW1TZXJ2aWNlLmdldEFjdGl2aXRpZXMoKS5zdWJzY3JpYmUoYWN0aXZpdGllcyA9PiB0aGlzLml0ZW1zID0gYWN0aXZpdGllcyk7XHJcbiAgICAgICAgLy8gdGhpcy5pdGVtU2VydmljZS5jcmVhdGVBY2NvdW50KCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHRoaXMucmVwb25zZSA9IHJlc3BvbnNlKVxyXG4gICAgfVxyXG5cclxuICAgIG9uVGFwTG9nb3V0KCk6IHZvaWQge1xyXG4gICAgICAgIGZpcmViYXNlLmxvZ291dCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9nb3V0IGRvbmVcIik7XHJcbiAgICAgICAgQXBwU2V0dGluZ3MuVE9LRU4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBjdXN0b20gYWN0aXZpdHlcclxuICAgIG9uVGFwQ3JlYXRlQWN0aXZpdHkoKTogdm9pZHtcclxuICAgICAgICBpZiAodGhpcy5jdXN0b21BY3Rpdml0eSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIC8vIE1ha2UgYSBQT1NUIHJlcXVlc3QgdG8gY3JlYXRlIGEgY3VzdG9tIGFjdGl2aXR5IFxyXG4gICAgICAgICAgICB0aGlzLml0ZW1TZXJ2aWNlLmNyZWF0ZUN1c3RvbUFjdGl2aXR5KHRoaXMuY3VzdG9tQWN0aXZpdHkpLnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgdGhlIGN1c3RvbSBhY3Rpdml0eSBcIiArIHRoaXMuY3VzdG9tQWN0aXZpdHkpO1xyXG5cclxuICAgICAgICAgICAgLy8gRGlzcGxheWluZyB0aGUgYWxlcnQgdGhhdCB0aGUgYWN0aXZpdHkgd2FzIGNyZWF0ZWRcclxuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBbGVydFwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3VyIGN1c3RvbSBhY3Rpdml0eSBoYXMgYmVlbiBhZGRlZCBzdWNjZXNzZnVsbHkhXCIsXHJcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiR290IGl0IVwiXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIE1ha2luZyB0aGUgUE9TVCByZXF1ZXN0IHRvIHJlZnJlc2ggdGhlIGxpc3RcclxuICAgICAgICAgICAgdGhpcy5nZXRBY3Rpdml0aWVzKCk7XHJcbiAgICAgICAgICAgIC8vIFJlbW92aW5nIHRoZSBrZXlib2FyZCBhZnRlciBwcmVzc2luZyB0aGUgXCJHb3QgaXQhXCIgYnV0dG9uIGluIHRoZSBhbGVydFxyXG4gICAgICAgICAgICB0aGlzLmRpc21pc3NTb2Z0S3llYm9hcmQoKTtcclxuICAgICAgICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICAgICAgIC8vIERpc3BsYXlpbmcgdGhlIGFsZXJ0IHRoYXQgdGhlIGFjdGl2aXR5IGlzIGVtcHR5XHJcbiAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkFsZXJ0XCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiUGxlYXNlIHByb3ZpZGUgdGhlIG5hbWUgZm9yIHlvdXIgY3VzdG9tIGFjdGl2aXR5IVwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiR290IGl0IVwiXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgfVxyXG4gICAgICAgIC8vIENsZWFyaW5nIHRoZSBjdXN0b20gYWN0aXZpdHkgdGV4dCBmaWVsZFxyXG4gICAgICAgIHRoaXMuY3VzdG9tQWN0aXZpdHk9XCJcIjtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2QgdG8gaGlkZSB0aGUga2V5Ym9hcmRcclxuICAgIGRpc21pc3NTb2Z0S3llYm9hcmQoKSB7XHJcbiAgICAgICAgdXRpbHMuYWQuZGlzbWlzc1NvZnRJbnB1dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZCBmb3Igc2VsZWN0ZWQgaXRlbSAtPiBjaGFuZ2UgY29sb3IgdG8gb3JhbmdlIHdoZW4gc2VsZWN0ZWQgYW5kIHN0YXJ0IHRoZSBhY3Rpdml0eVxyXG4gICAgcHVibGljIG9uSXRlbVNlbGVjdGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiSXRlbSBpcyBzZWxlY3RlZFwiKTtcclxuICAgICAgY29uc29sZS5sb2coXCJBcmdzIGluZGV4IFwiICsgYXJncy5pbmRleCk7XHJcblxyXG4gICAgICAvLyBBc3NpZ24gdGhlIHRoZSBzZWxlY3RlZCBpdGVtIGZyb20gdGhlIHJhZExpc3RWaWV3IHRvIHRoZSAoKUlucHV0IGl0ZW1cclxuICAgICAgdGhpcy5pdGVtID0gdGhpcy5pdGVtc1thcmdzLmluZGV4XTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuaXRlbSk7XHJcbiAgIFxyXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgY29sb3Igb2YgdGhlIHNlbGVjdGVkIGl0ZW0gdG8gb3JhbmdlLlxyXG4gICAgICBhcmdzLnZpZXcuYmFja2dyb3VuZENvbG9yID0gbmV3IENvbG9yKFwiI0ZGNzgxNlwiKTsgIFxyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJTdGFydCB0aW1lclwiKTtcclxuICAgICAgaWYgKCF0aGlzLnNlY29uZHMpIHtcclxuICAgICAgICAgIHRoaXMuc2Vjb25kcyA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5pdGVtU2VydmljZS5zdGFydEFjdGl2aXR5KHtcclxuICAgICAgICAgIFwiYWN0aXZpdHlfaWRcIjogdGhpcy5pdGVtLmFjdGl2aXR5Qmx1ZXByaW50SWQsIFwidXNlcl9pZFwiOiBBcHBTZXR0aW5ncy5UT0tFTn0pLnN1YnNjcmliZSgpO1xyXG4gICAgICAgdGhpcy50aW1lckVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgdGhpcy5pc1Zpc2libGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZCBmb3IgZGVzZWxlY3RpbmcgdGhlIGl0ZW0gLSA+IGNoYW5nZSBjb2xvciB0byB3aGl0ZSB3aGVuIGRlc2VsZWN0IGFuZCBzdG9wIHRoZSBhY3Rpdml0eVxyXG4gICAgcHVibGljIG9uSXRlbURlc2VsZWN0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkl0ZW0gaXMgZGVzZWxlY3RlZFwiKTtcclxuXHJcbiAgICAgICAgIC8vIEFzc2lnbiB0aGUgdGhlIHNlbGVjdGVkIGl0ZW0gZnJvbSB0aGUgcmFkTGlzdFZpZXcgdG8gdGhlICgpSW5wdXQgaXRlbVxyXG4gICAgICAgICB0aGlzLml0ZW0gPSB0aGlzLml0ZW1zW2FyZ3MuaW5kZXhdO1xyXG5cclxuICAgICAgICAvLyBDaGFuZ2luZyB0aGUgY29sb3Igb2YgdGhlIGRlc2VsZWN0ZWQgaXRlbSB0byB3aGl0ZS5cclxuICAgICAgICBhcmdzLnZpZXcuYmFja2dyb3VuZENvbG9yID0gbmV3IENvbG9yKFwiI2ZmZmZmZlwiKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTdG9wIHRpbWVyXCIpO1xyXG4gICAgICAgIHRoaXMuaXRlbVNlcnZpY2Uuc3RvcEFjdGl2aXR5KHRoaXMuaXRlbS5hY3Rpdml0eUJsdWVwcmludElkKS5zdWJzY3JpYmUoKTtcclxuICAgICAgICB0aGlzLnRpbWVyRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICB9IFxyXG59XHJcblxyXG5cclxuIl19