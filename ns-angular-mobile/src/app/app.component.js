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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFDeEMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFFekQsMkNBQWtDO0FBQ2xDLG1EQUE4QztBQVM5QztJQUVJO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRywwQkFBVyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ1Ysa0ZBQWtGO1FBQ2xGLDZCQUE2QjtTQUVoQyxDQUFDLENBQUMsSUFBSSxDQUNILFVBQUEsUUFBUTtZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUV0QyxDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBd0IsS0FBTyxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUVKLENBQUM7SUFDTixDQUFDO0lBRUQsb0NBQWEsR0FBYixVQUFjLElBQVM7UUFDbkIsSUFBSSxpQkFBRyxFQUFFO1lBQ0wsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUN0QixJQUFJLENBQUMsY0FBYyxHQUFHLDZCQUE2QixDQUFDLGlDQUFpQyxDQUFDO1NBQ3pGO0lBQ0wsQ0FBQztJQXpCUSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHNCQUFzQjtTQUN0QyxDQUFDOztPQUNXLFlBQVksQ0EyQnhCO0lBQUQsbUJBQUM7Q0FBQSxBQTNCRCxJQTJCQztBQTNCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5cclxuaW1wb3J0IHsgaW9zIH0gZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7QXBwU2V0dGluZ3N9IGZyb20gXCJ+L2FwcC9hcHAtc2V0dGluZ3NcIlxyXG5kZWNsYXJlIHZhciBVSVRhYmxlVmlld0NlbGxTZWxlY3Rpb25TdHlsZTtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYXBwLmNvbXBvbmVudC5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gICAgcHVibGljIGJvdHRvbUJhcjogYm9vbGVhbjtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLmJvdHRvbUJhciA9IEFwcFNldHRpbmdzLnNob3dCb3R0b21CYXI7XHJcbiAgICAgICAgZmlyZWJhc2UuaW5pdCh7XHJcbiAgICAgICAgICAgIC8vIE9wdGlvbmFsbHkgcGFzcyBpbiBwcm9wZXJ0aWVzIGZvciBkYXRhYmFzZSwgYXV0aGVudGljYXRpb24gYW5kIGNsb3VkIG1lc3NhZ2luZyxcclxuICAgICAgICAgICAgLy8gc2VlIHRoZWlyIHJlc3BlY3RpdmUgZG9jcy5cclxuXHJcbiAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgaW5zdGFuY2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIik7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZmlyZWJhc2UuaW5pdCBlcnJvcjogJHtlcnJvcn1gKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkl0ZW1Mb2FkaW5nKGFyZ3M6IGFueSkge1xyXG4gICAgICAgIGlmIChpb3MpIHtcclxuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGFyZ3MuaW9zO1xyXG4gICAgICAgICAgICBjZWxsLnNlbGVjdGlvblN0eWxlID0gVUlUYWJsZVZpZXdDZWxsU2VsZWN0aW9uU3R5bGUuVUlUYWJsZVZpZXdDZWxsU2VsZWN0aW9uU3R5bGVOb25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19