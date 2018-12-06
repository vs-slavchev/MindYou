"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var router_1 = require("@angular/router");
var app_settings_1 = require("~/app/app-settings");
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
        this.itemService.createCustomActivity(this.customActivity).subscribe();
        console.log("This is the custom activity " + this.customActivity);
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService, router_1.Router])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELCtDQUE2QztBQUM3QywwQ0FBeUM7QUFDekMsbURBQStDO0FBSS9DLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBUXpEO0lBS0ksOElBQThJO0lBQzlJLGlIQUFpSDtJQUNqSCx3QkFBb0IsV0FBd0IsRUFBVSxNQUFjO1FBQWhELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUo3RCxrQkFBYSxHQUFHLElBQUksQ0FBQztRQUM1QixtQkFBYyxHQUFDLEVBQUUsQ0FBQztRQUlkLGdCQUFnQjtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsUUFBUSxDQUFDLFlBQVksQ0FBQztZQUNsQixvR0FBb0c7WUFDcEcsWUFBWSxFQUFFLEtBQUs7U0FDdEIsQ0FBQyxDQUFDLElBQUksQ0FDSCxVQUFVLEtBQUs7WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ2xELENBQUMsRUFDRCxVQUFVLFlBQVk7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsR0FBRyxZQUFZLENBQUMsQ0FBQztRQUMvRCxDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFHRCxzQ0FBYSxHQUFiO1FBQUEsaUJBR0M7UUFGRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUF2QixDQUF1QixDQUFDLENBQUM7UUFDbEYsa0ZBQWtGO0lBQ3RGLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0ksUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLDBCQUFXLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELHdDQUF3QztJQUN4Qyw0Q0FBbUIsR0FBbkI7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBNUNRLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7eUNBUW1DLDBCQUFXLEVBQWtCLGVBQU07T0FQM0QsY0FBYyxDQTZDMUI7SUFBRCxxQkFBQztDQUFBLEFBN0NELElBNkNDO0FBN0NZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7QXBwU2V0dGluZ3N9IGZyb20gXCJ+L2FwcC9hcHAtc2V0dGluZ3NcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIjtcblxuXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpdGVtczogSXRlbVtdO1xuICAgIHJlcG9uc2U6IGFueTtcbiAgICBwdWJsaWMgYm90dG9tQmFyU2hvdyA9IHRydWU7XG4gICAgY3VzdG9tQWN0aXZpdHk9XCJcIjtcbiAgICAvLyBUaGlzIHBhdHRlcm4gbWFrZXMgdXNlIG9mIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGltcGxlbWVudGF0aW9uIHRvIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgRnJpZW5kU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy5cbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgLy8gYm90dG9tQmFyU2hvd1xuICAgICAgICBjb25zb2xlLmxvZyhcIkl0ZW1zIGFyZSBsb2FkaW5nLi4uXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkN1c3RvbSBhY3Rpdml0eVwiKyB0aGlzLmN1c3RvbUFjdGl2aXR5KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nZXRBY3Rpdml0aWVzKCk7XG4gICAgICAgIGZpcmViYXNlLmdldEF1dGhUb2tlbih7XG4gICAgICAgICAgICAvLyBkZWZhdWx0IGZhbHNlLCBub3QgcmVjb21tZW5kZWQgdG8gc2V0IHRvIHRydWUgYnkgRmlyZWJhc2UgYnV0IGV4cG9zZWQgZm9yIHtOfSBkZXZzIG5vbmV0aGVsZXNzIDopXG4gICAgICAgICAgICBmb3JjZVJlZnJlc2g6IGZhbHNlXG4gICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF1dGggdG9rZW4gcmV0cmlldmVkOiBcIiArIHRva2VuKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdXRoIHRva2VuIHJldHJpZXZhbCBlcnJvcjogXCIgKyBlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuXG4gICAgZ2V0QWN0aXZpdGllcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtU2VydmljZS5nZXRBY3Rpdml0aWVzKCkuc3Vic2NyaWJlKGFjdGl2aXRpZXMgPT4gdGhpcy5pdGVtcyA9IGFjdGl2aXRpZXMpO1xuICAgICAgICAvLyB0aGlzLml0ZW1TZXJ2aWNlLmNyZWF0ZUFjY291bnQoKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4gdGhpcy5yZXBvbnNlID0gcmVzcG9uc2UpXG4gICAgfVxuXG4gICAgb25UYXBMb2dvdXQoKTogdm9pZCB7XG4gICAgICAgIGZpcmViYXNlLmxvZ291dCgpO1xuICAgICAgICBBcHBTZXR0aW5ncy5UT0tFTiA9IG51bGw7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xuICAgIH1cblxuICAgIC8vIE1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBjdXN0b20gYWN0aXZpdHlcbiAgICBvblRhcENyZWF0ZUFjdGl2aXR5KCk6IHZvaWR7XG4gICAgICAgIHRoaXMuaXRlbVNlcnZpY2UuY3JlYXRlQ3VzdG9tQWN0aXZpdHkodGhpcy5jdXN0b21BY3Rpdml0eSkuc3Vic2NyaWJlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBpcyB0aGUgY3VzdG9tIGFjdGl2aXR5IFwiICsgdGhpcy5jdXN0b21BY3Rpdml0eSk7XG4gICAgfVxufVxuXG4iXX0=