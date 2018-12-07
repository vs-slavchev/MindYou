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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQVFoRDtJQUVJO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxnQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxJQUFZO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQWlCLElBQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFaUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ25DLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUN0QixDQUFDOztPQUNXLGFBQWEsQ0FhekI7SUFBRCxvQkFBQztDQUFBLEFBYkQsSUFhQztBQWJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbnMtaG9tZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkhvbWUgY29tcG9uZW50IGlzIGxvYWRpbmcuLi5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRhYlNlbGVjdGVkKGFyZ3M6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGB0YWIgc2VsZWN0ZWQ6ICR7YXJnc31gKTtcclxuICAgIH1cclxufVxyXG4iXX0=