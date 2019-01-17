"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_settings_1 = require("~/app/app-settings");
var router_1 = require("@angular/router");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var firebase = require("nativescript-plugin-firebase");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, _changeDetectionRef) {
        var _this = this;
        this.router = router;
        this._changeDetectionRef = _changeDetectionRef;
        console.log("Home component is loading...");
        // getting the Facebook profile picture, name and email of the current user for the drawer
        firebase.getCurrentUser()
            .then(function (user) {
            _this.userName = user.name;
            _this.userEmail = user.email;
            _this.userProfilePicture = user.profileImageURL;
        })
            .catch(function (error) { return console.log("Trouble in paradise: " + error); });
    }
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    HomeComponent.prototype.onCloseDrawerTap = function () {
        console.log("entered drawer");
        this.drawer.closeDrawer();
    };
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.tabSelected = function (args) {
        console.log("tab selected: " + args);
    };
    // Method to log out 
    HomeComponent.prototype.onTapLogout = function () {
        console.log("Entered to logout");
        firebase.logout();
        app_settings_1.AppSettings.TOKEN = null;
        this.router.navigate(['/login']);
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], HomeComponent.prototype, "drawerComponent", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'ns-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.Router, core_1.ChangeDetectorRef])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE4RjtBQUM5RixtREFBK0M7QUFDL0MsMENBQXlDO0FBQ3pDLDhEQUE0RTtBQUU1RSxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQVF6RDtJQU1JLHVCQUFvQixNQUFjLEVBQVUsbUJBQXNDO1FBQWxGLGlCQVdDO1FBWG1CLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO1FBQzlFLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUU1QywwRkFBMEY7UUFDMUYsUUFBUSxDQUFDLGNBQWMsRUFBRTthQUMxQixJQUFJLENBQUMsVUFBQyxJQUFJO1lBQ1QsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzFCLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUM1QixLQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUNqRCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxFQUE1QyxDQUE0QyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUtELHVDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO1FBQzlDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRU0sd0NBQWdCLEdBQXZCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELGdDQUFRLEdBQVIsY0FBYSxDQUFDO0lBRWQsbUNBQVcsR0FBWCxVQUFZLElBQVk7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBaUIsSUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELHFCQUFxQjtJQUNyQixtQ0FBVyxHQUFYO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQiwwQkFBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUF6QmtDO1FBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7a0NBQXlCLGdDQUFzQjswREFBQztJQW5CekUsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUNuQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDdEIsQ0FBQzt5Q0FPOEIsZUFBTSxFQUErQix3QkFBaUI7T0FOekUsYUFBYSxDQTZDekI7SUFBRCxvQkFBQztDQUFBLEFBN0NELElBNkNDO0FBN0NZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBcHBTZXR0aW5nc30gZnJvbSBcIn4vYXBwL2FwcC1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICducy1ob21lJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuY3NzJ10sXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XG5cbiAgICB1c2VyTmFtZTphbnk7XG4gICAgdXNlckVtYWlsOmFueTtcbiAgICB1c2VyUHJvZmlsZVBpY3R1cmU6YW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkhvbWUgY29tcG9uZW50IGlzIGxvYWRpbmcuLi5cIik7XG4gICAgICAgXG4gICAgICAgIC8vIGdldHRpbmcgdGhlIEZhY2Vib29rIHByb2ZpbGUgcGljdHVyZSwgbmFtZSBhbmQgZW1haWwgb2YgdGhlIGN1cnJlbnQgdXNlciBmb3IgdGhlIGRyYXdlclxuICAgICAgICBmaXJlYmFzZS5nZXRDdXJyZW50VXNlcigpXG4gICAgICAudGhlbigodXNlcikgPT57XG4gICAgICAgIHRoaXMudXNlck5hbWUgPSB1c2VyLm5hbWU7XG4gICAgICAgIHRoaXMudXNlckVtYWlsID0gdXNlci5lbWFpbDtcbiAgICAgICAgdGhpcy51c2VyUHJvZmlsZVBpY3R1cmUgPSB1c2VyLnByb2ZpbGVJbWFnZVVSTDtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coXCJUcm91YmxlIGluIHBhcmFkaXNlOiBcIiArIGVycm9yKSk7IFxuICAgIH1cblxuICAgIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkNsb3NlRHJhd2VyVGFwKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVudGVyZWQgZHJhd2VyXCIpO1xuICAgICAgICB0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkgeyB9XG5cbiAgICB0YWJTZWxlY3RlZChhcmdzOiBudW1iZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coYHRhYiBzZWxlY3RlZDogJHthcmdzfWApO1xuICAgIH1cblxuICAgIC8vIE1ldGhvZCB0byBsb2cgb3V0IFxuICAgIG9uVGFwTG9nb3V0KCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVudGVyZWQgdG8gbG9nb3V0XCIpO1xuICAgICAgICBmaXJlYmFzZS5sb2dvdXQoKTtcbiAgICAgICAgQXBwU2V0dGluZ3MuVE9LRU4gPSBudWxsO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcbiAgICB9XG59XG4iXX0=