"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var application_1 = require("application");
var app_settings_1 = require("~/app/app-settings");
var dialogs = require("tns-core-modules/ui/dialogs");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.bottomBar = app_settings_1.AppSettings.showBottomBar;
        firebase.init({
            // Optionally pass in properties for database, authentication and cloud messaging,
            // see their respective docs.
            showNotificationsWhenInForeground: true,
            onMessageReceivedCallback: function (message) {
                console.log("Title: " + message.title);
                console.log("Body: " + message.body);
                // if your server passed a custom property called 'running', then do this:
                console.log("Value of 'running': " + message.data.running);
                dialogs.confirm({
                    title: "Title: " + message.title,
                    message: "Body: " + message.body,
                    okButtonText: "Open",
                    cancelButtonText: "Cancel",
                }).then(function (result) {
                    // result argument is boolean
                    console.log("Dialog result: " + result);
                });
            }
        }).then(function (instance) {
            console.log("firebase.init done");
        }, function (error) {
            console.log("firebase.init error: " + error);
        });
        firebase.getCurrentPushToken().then(function (token) {
            // may be null if not known yet
            console.log("Current push token: " + token);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFDeEMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFFekQsMkNBQWtDO0FBQ2xDLG1EQUE4QztBQUU5QyxxREFBdUQ7QUFTdkQ7SUFFSTtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsMEJBQVcsQ0FBQyxhQUFhLENBQUM7UUFDM0MsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNWLGtGQUFrRjtZQUNsRiw2QkFBNkI7WUFDN0IsaUNBQWlDLEVBQUUsSUFBSTtZQUN2Qyx5QkFBeUIsRUFBRSxVQUFDLE9BQWdCO2dCQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVUsT0FBTyxDQUFDLEtBQU8sQ0FBQyxDQUFDO2dCQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVMsT0FBTyxDQUFDLElBQU0sQ0FBQyxDQUFDO2dCQUNyQywwRUFBMEU7Z0JBQzFFLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXVCLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBUyxDQUFDLENBQUM7Z0JBRTNELE9BQU8sQ0FBQyxPQUFPLENBQUM7b0JBQ1osS0FBSyxFQUFFLFlBQVUsT0FBTyxDQUFDLEtBQU87b0JBQ2hDLE9BQU8sRUFBRSxXQUFTLE9BQU8sQ0FBQyxJQUFNO29CQUNoQyxZQUFZLEVBQUUsTUFBTTtvQkFDcEIsZ0JBQWdCLEVBQUUsUUFBUTtpQkFFN0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07b0JBQ1YsNkJBQTZCO29CQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxDQUFDO2dCQUM1QyxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUM7U0FDSixDQUFDLENBQUMsSUFBSSxDQUNILFVBQUEsUUFBUTtZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUV0QyxDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBd0IsS0FBTyxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUVKLENBQUM7UUFDRixRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFhO1lBQzlDLCtCQUErQjtZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF1QixLQUFPLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxvQ0FBYSxHQUFiLFVBQWMsSUFBUztRQUNuQixJQUFJLGlCQUFHLEVBQUU7WUFDTCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxjQUFjLEdBQUcsNkJBQTZCLENBQUMsaUNBQWlDLENBQUM7U0FDekY7SUFDTCxDQUFDO0lBOUNRLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsc0JBQXNCO1NBQ3RDLENBQUM7O09BQ1csWUFBWSxDQWdEeEI7SUFBRCxtQkFBQztDQUFBLEFBaERELElBZ0RDO0FBaERZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcblxyXG5pbXBvcnQgeyBpb3MgfSBmcm9tIFwiYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHtBcHBTZXR0aW5nc30gZnJvbSBcIn4vYXBwL2FwcC1zZXR0aW5nc1wiXHJcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmRlY2xhcmUgdmFyIFVJVGFibGVWaWV3Q2VsbFNlbGVjdGlvblN0eWxlO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hcHAuY29tcG9uZW50Lmh0bWxcIixcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgYm90dG9tQmFyOiBib29sZWFuO1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMuYm90dG9tQmFyID0gQXBwU2V0dGluZ3Muc2hvd0JvdHRvbUJhcjtcclxuICAgICAgICBmaXJlYmFzZS5pbml0KHtcclxuICAgICAgICAgICAgLy8gT3B0aW9uYWxseSBwYXNzIGluIHByb3BlcnRpZXMgZm9yIGRhdGFiYXNlLCBhdXRoZW50aWNhdGlvbiBhbmQgY2xvdWQgbWVzc2FnaW5nLFxyXG4gICAgICAgICAgICAvLyBzZWUgdGhlaXIgcmVzcGVjdGl2ZSBkb2NzLlxyXG4gICAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uc1doZW5JbkZvcmVncm91bmQ6IHRydWUsXHJcbiAgICAgICAgICAgIG9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2s6IChtZXNzYWdlOiBNZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVGl0bGU6ICR7bWVzc2FnZS50aXRsZX1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBCb2R5OiAke21lc3NhZ2UuYm9keX1gKTtcclxuICAgICAgICAgICAgICAgIC8vIGlmIHlvdXIgc2VydmVyIHBhc3NlZCBhIGN1c3RvbSBwcm9wZXJ0eSBjYWxsZWQgJ3J1bm5pbmcnLCB0aGVuIGRvIHRoaXM6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVmFsdWUgb2YgJ3J1bm5pbmcnOiAke21lc3NhZ2UuZGF0YS5ydW5uaW5nfWApO1xyXG5cclxuICAgICAgICAgICAgICAgIGRpYWxvZ3MuY29uZmlybSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGBUaXRsZTogJHttZXNzYWdlLnRpdGxlfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYEJvZHk6ICR7bWVzc2FnZS5ib2R5fWAsXHJcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9wZW5cIixcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIG5ldXRyYWxCdXR0b25UZXh0OiBcIk5ldXRyYWwgdGV4dFwiXHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzdWx0IGFyZ3VtZW50IGlzIGJvb2xlYW5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyByZXN1bHQ6IFwiICsgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgaW5zdGFuY2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIik7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZmlyZWJhc2UuaW5pdCBlcnJvcjogJHtlcnJvcn1gKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgKTtcclxuICAgICAgICBmaXJlYmFzZS5nZXRDdXJyZW50UHVzaFRva2VuKCkudGhlbigodG9rZW46IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAvLyBtYXkgYmUgbnVsbCBpZiBub3Qga25vd24geWV0XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDdXJyZW50IHB1c2ggdG9rZW46ICR7dG9rZW59YCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25JdGVtTG9hZGluZyhhcmdzOiBhbnkpIHtcclxuICAgICAgICBpZiAoaW9zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBhcmdzLmlvcztcclxuICAgICAgICAgICAgY2VsbC5zZWxlY3Rpb25TdHlsZSA9IFVJVGFibGVWaWV3Q2VsbFNlbGVjdGlvblN0eWxlLlVJVGFibGVWaWV3Q2VsbFNlbGVjdGlvblN0eWxlTm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==