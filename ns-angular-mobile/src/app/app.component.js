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
        firebase.getCurrentPushToken().then(function (token) {
            // may be null if not known yet
            console.log("Current push token: " + token);
            app_settings_1.AppSettings.DEVICE_PUSH_TOKEN = token;
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFDeEMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFFekQsMkNBQWtDO0FBQ2xDLG1EQUE4QztBQUU5QyxxREFBdUQ7QUFTdkQ7SUFFSTtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsMEJBQVcsQ0FBQyxhQUFhLENBQUM7UUFDM0MsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBYTtZQUM5QywrQkFBK0I7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBdUIsS0FBTyxDQUFDLENBQUM7WUFDNUMsMEJBQVcsQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7UUFDSCxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ1Ysa0ZBQWtGO1lBQ2xGLDZCQUE2QjtZQUM3QixpQ0FBaUMsRUFBRSxJQUFJO1lBQ3ZDLHlCQUF5QixFQUFFLFVBQUMsT0FBZ0I7Z0JBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBVSxPQUFPLENBQUMsS0FBTyxDQUFDLENBQUM7Z0JBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBUyxPQUFPLENBQUMsSUFBTSxDQUFDLENBQUM7Z0JBQ3JDLDBFQUEwRTtnQkFDMUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBdUIsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFTLENBQUMsQ0FBQztnQkFFM0QsT0FBTyxDQUFDLE9BQU8sQ0FBQztvQkFDWixLQUFLLEVBQUUsWUFBVSxPQUFPLENBQUMsS0FBTztvQkFDaEMsT0FBTyxFQUFFLFdBQVMsT0FBTyxDQUFDLElBQU07b0JBQ2hDLFlBQVksRUFBRSxNQUFNO29CQUNwQixnQkFBZ0IsRUFBRSxRQUFRO2lCQUU3QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtvQkFDViw2QkFBNkI7b0JBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLENBQUM7Z0JBQzVDLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztTQUNKLENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBQSxRQUFRO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRXRDLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUF3QixLQUFPLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBRUosQ0FBQztJQUNOLENBQUM7SUFFRCxvQ0FBYSxHQUFiLFVBQWMsSUFBUztRQUNuQixJQUFJLGlCQUFHLEVBQUU7WUFDTCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxjQUFjLEdBQUcsNkJBQTZCLENBQUMsaUNBQWlDLENBQUM7U0FDekY7SUFDTCxDQUFDO0lBL0NRLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsc0JBQXNCO1NBQ3RDLENBQUM7O09BQ1csWUFBWSxDQWlEeEI7SUFBRCxtQkFBQztDQUFBLEFBakRELElBaURDO0FBakRZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcblxyXG5pbXBvcnQgeyBpb3MgfSBmcm9tIFwiYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHtBcHBTZXR0aW5nc30gZnJvbSBcIn4vYXBwL2FwcC1zZXR0aW5nc1wiXHJcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmRlY2xhcmUgdmFyIFVJVGFibGVWaWV3Q2VsbFNlbGVjdGlvblN0eWxlO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hcHAuY29tcG9uZW50Lmh0bWxcIixcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgYm90dG9tQmFyOiBib29sZWFuO1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMuYm90dG9tQmFyID0gQXBwU2V0dGluZ3Muc2hvd0JvdHRvbUJhcjtcclxuICAgICAgICBmaXJlYmFzZS5nZXRDdXJyZW50UHVzaFRva2VuKCkudGhlbigodG9rZW46IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAvLyBtYXkgYmUgbnVsbCBpZiBub3Qga25vd24geWV0XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDdXJyZW50IHB1c2ggdG9rZW46ICR7dG9rZW59YCk7XHJcbiAgICAgICAgICAgIEFwcFNldHRpbmdzLkRFVklDRV9QVVNIX1RPS0VOID0gdG9rZW47XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZmlyZWJhc2UuaW5pdCh7XHJcbiAgICAgICAgICAgIC8vIE9wdGlvbmFsbHkgcGFzcyBpbiBwcm9wZXJ0aWVzIGZvciBkYXRhYmFzZSwgYXV0aGVudGljYXRpb24gYW5kIGNsb3VkIG1lc3NhZ2luZyxcclxuICAgICAgICAgICAgLy8gc2VlIHRoZWlyIHJlc3BlY3RpdmUgZG9jcy5cclxuICAgICAgICAgICAgc2hvd05vdGlmaWNhdGlvbnNXaGVuSW5Gb3JlZ3JvdW5kOiB0cnVlLFxyXG4gICAgICAgICAgICBvbk1lc3NhZ2VSZWNlaXZlZENhbGxiYWNrOiAobWVzc2FnZTogTWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFRpdGxlOiAke21lc3NhZ2UudGl0bGV9YCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgQm9keTogJHttZXNzYWdlLmJvZHl9YCk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiB5b3VyIHNlcnZlciBwYXNzZWQgYSBjdXN0b20gcHJvcGVydHkgY2FsbGVkICdydW5uaW5nJywgdGhlbiBkbyB0aGlzOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFZhbHVlIG9mICdydW5uaW5nJzogJHttZXNzYWdlLmRhdGEucnVubmluZ31gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkaWFsb2dzLmNvbmZpcm0oe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBgVGl0bGU6ICR7bWVzc2FnZS50aXRsZX1gLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBCb2R5OiAke21lc3NhZ2UuYm9keX1gLFxyXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPcGVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyBuZXV0cmFsQnV0dG9uVGV4dDogXCJOZXV0cmFsIHRleHRcIlxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlc3VsdCBhcmd1bWVudCBpcyBib29sZWFuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgIGluc3RhbmNlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBkb25lXCIpO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGZpcmViYXNlLmluaXQgZXJyb3I6ICR7ZXJyb3J9YCk7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25JdGVtTG9hZGluZyhhcmdzOiBhbnkpIHtcclxuICAgICAgICBpZiAoaW9zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBhcmdzLmlvcztcclxuICAgICAgICAgICAgY2VsbC5zZWxlY3Rpb25TdHlsZSA9IFVJVGFibGVWaWV3Q2VsbFNlbGVjdGlvblN0eWxlLlVJVGFibGVWaWV3Q2VsbFNlbGVjdGlvblN0eWxlTm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==