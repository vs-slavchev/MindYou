"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var application_1 = require("application");
var app_settings_1 = require("~/app/app-settings");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.bottomBar = app_settings_1.AppSettings.showBottomBar;
        firebase.init({
        // Optionally pass in properties for database, authentication and cloud messaging,
        // see their respective docs.
        }).then(function (instance) {
            console.log("firebase.init done");
        }, function (error) {
            console.log("firebase.init error: " + error);
        });
    }
    AppComponent.prototype.onItemLoading = function (args) {
        if (application_1.ios) {
            var cell = args.ios;
            cell.selectionStyle = UITableViewCellSelectionStyle.UITableViewCellSelectionStyleNone;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            moduleId: module.id,
            templateUrl: "./app.component.html",
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFDeEMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFFekQsMkNBQWtDO0FBQ2xDLG1EQUE4QztBQVM5QztJQUVJO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRywwQkFBVyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ1Ysa0ZBQWtGO1FBQ2xGLDZCQUE2QjtTQUVoQyxDQUFDLENBQUMsSUFBSSxDQUNILFVBQUEsUUFBUTtZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUV0QyxDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBd0IsS0FBTyxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUVKLENBQUM7SUFDTixDQUFDO0lBRUQsb0NBQWEsR0FBYixVQUFjLElBQVM7UUFDbkIsSUFBSSxpQkFBRyxFQUFFO1lBQ0wsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUN0QixJQUFJLENBQUMsY0FBYyxHQUFHLDZCQUE2QixDQUFDLGlDQUFpQyxDQUFDO1NBQ3pGO0lBQ0wsQ0FBQztJQXpCUSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHNCQUFzQjtTQUN0QyxDQUFDOztPQUNXLFlBQVksQ0EyQnhCO0lBQUQsbUJBQUM7Q0FBQSxBQTNCRCxJQTJCQztBQTNCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcblxuaW1wb3J0IHsgaW9zIH0gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQge0FwcFNldHRpbmdzfSBmcm9tIFwifi9hcHAvYXBwLXNldHRpbmdzXCJcbmRlY2xhcmUgdmFyIFVJVGFibGVWaWV3Q2VsbFNlbGVjdGlvblN0eWxlO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hcHAuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgYm90dG9tQmFyOiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5ib3R0b21CYXIgPSBBcHBTZXR0aW5ncy5zaG93Qm90dG9tQmFyO1xuICAgICAgICBmaXJlYmFzZS5pbml0KHtcbiAgICAgICAgICAgIC8vIE9wdGlvbmFsbHkgcGFzcyBpbiBwcm9wZXJ0aWVzIGZvciBkYXRhYmFzZSwgYXV0aGVudGljYXRpb24gYW5kIGNsb3VkIG1lc3NhZ2luZyxcbiAgICAgICAgICAgIC8vIHNlZSB0aGVpciByZXNwZWN0aXZlIGRvY3MuXG5cbiAgICAgICAgfSkudGhlbihcbiAgICAgICAgICAgIGluc3RhbmNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZG9uZVwiKTtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZmlyZWJhc2UuaW5pdCBlcnJvcjogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvbkl0ZW1Mb2FkaW5nKGFyZ3M6IGFueSkge1xuICAgICAgICBpZiAoaW9zKSB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gYXJncy5pb3M7XG4gICAgICAgICAgICBjZWxsLnNlbGVjdGlvblN0eWxlID0gVUlUYWJsZVZpZXdDZWxsU2VsZWN0aW9uU3R5bGUuVUlUYWJsZVZpZXdDZWxsU2VsZWN0aW9uU3R5bGVOb25lO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=