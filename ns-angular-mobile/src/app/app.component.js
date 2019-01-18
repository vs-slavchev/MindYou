"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var application_1 = require("application");
var app_settings_1 = require("~/app/app-settings");
var dialogs = require("tns-core-modules/ui/dialogs");
var router_1 = require("@angular/router");
var AppComponent = /** @class */ (function () {
    function AppComponent(_router, ngZone) {
        var _this = this;
        this._router = _router;
        this.ngZone = ngZone;
        this.counter = 16;
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
                var title = "You received a notification!";
                var body = "Do you want to open the feed?";
                if (message) {
                    if (message.title) {
                        title = message.title;
                    }
                    if (message.body) {
                        body = message.body;
                    }
                }
                dialogs.confirm({
                    title: "" + title,
                    message: "" + body,
                    okButtonText: "Open",
                    cancelButtonText: "Cancel",
                }).then(function (result) {
                    // result argument is boolean
                    console.log("Dialog result: " + result);
                    var navigationExtras = {
                        queryParams: { page: "feeds" }
                    };
                    console.log('navigate to friends');
                    _this.ngZone.run(function () { return _this._router.navigate(['/home/friends'], navigationExtras); });
                });
            }
        }).then(function (instance) {
            console.log("firebase.init done");
        }, function (error) {
            console.log("firebase.init error: " + error);
        });
    }
    Object.defineProperty(AppComponent.prototype, "message", {
        get: function () {
            if (this.counter > 0) {
                return this.counter + " taps left";
            }
            else {
                return "Hoorraaay! \nYou are ready to start building!";
            }
        },
        enumerable: true,
        configurable: true
    });
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
        __metadata("design:paramtypes", [router_1.Router, core_1.NgZone])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFDaEQsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFFekQsMkNBQWtDO0FBQ2xDLG1EQUE4QztBQUU5QyxxREFBdUQ7QUFDdkQsMENBQXlEO0FBU3pEO0lBRUksc0JBQXFCLE9BQWUsRUFBVSxNQUFjO1FBQTVELGlCQXNEQztRQXREb0IsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUF3RHJELFlBQU8sR0FBVyxFQUFFLENBQUM7UUF2RHhCLElBQUksQ0FBQyxTQUFTLEdBQUcsMEJBQVcsQ0FBQyxhQUFhLENBQUM7UUFDM0MsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBYTtZQUM5QywrQkFBK0I7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBdUIsS0FBTyxDQUFDLENBQUM7WUFDNUMsMEJBQVcsQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7UUFDSCxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ1Ysa0ZBQWtGO1lBQ2xGLDZCQUE2QjtZQUM3QixpQ0FBaUMsRUFBRSxJQUFJO1lBQ3ZDLHlCQUF5QixFQUFFLFVBQUMsT0FBZ0I7Z0JBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBVSxPQUFPLENBQUMsS0FBTyxDQUFDLENBQUM7Z0JBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBUyxPQUFPLENBQUMsSUFBTSxDQUFDLENBQUM7Z0JBQ3JDLDBFQUEwRTtnQkFDMUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBdUIsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFTLENBQUMsQ0FBQztnQkFDM0QsSUFBSSxLQUFLLEdBQUcsOEJBQThCLENBQUM7Z0JBQzNDLElBQUksSUFBSSxHQUFHLCtCQUErQixDQUFDO2dCQUUzQyxJQUFJLE9BQU8sRUFBRTtvQkFDVCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7d0JBQ2YsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7cUJBQ3pCO29CQUNELElBQUksT0FBTyxDQUFDLElBQUksRUFBRTt3QkFDZCxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztxQkFDdkI7aUJBQ0o7Z0JBRUQsT0FBTyxDQUFDLE9BQU8sQ0FBQztvQkFDWixLQUFLLEVBQUUsS0FBRyxLQUFPO29CQUNqQixPQUFPLEVBQUUsS0FBRyxJQUFNO29CQUNsQixZQUFZLEVBQUUsTUFBTTtvQkFDcEIsZ0JBQWdCLEVBQUUsUUFBUTtpQkFFN0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07b0JBQ1YsNkJBQTZCO29CQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxDQUFDO29CQUN4QyxJQUFJLGdCQUFnQixHQUFxQjt3QkFDckMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtxQkFDakMsQ0FBQztvQkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7b0JBQ25DLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLEVBQTFELENBQTBELENBQUMsQ0FBQztnQkFDdEYsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1NBQ0osQ0FBQyxDQUFDLElBQUksQ0FDSCxVQUFBLFFBQVE7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFFdEMsQ0FBQyxFQUNELFVBQUEsS0FBSztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQXdCLEtBQU8sQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FFSixDQUFDO0lBQ04sQ0FBQztJQUlELHNCQUFXLGlDQUFPO2FBQWxCO1lBQ0ksSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRTtnQkFDbEIsT0FBTyxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQzthQUN0QztpQkFBTTtnQkFDSCxPQUFPLCtDQUErQyxDQUFDO2FBQzFEO1FBQ0wsQ0FBQzs7O09BQUE7SUFFRCxvQ0FBYSxHQUFiLFVBQWMsSUFBUztRQUNuQixJQUFJLGlCQUFHLEVBQUU7WUFDTCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxjQUFjLEdBQUcsNkJBQTZCLENBQUMsaUNBQWlDLENBQUM7U0FDekY7SUFDTCxDQUFDO0lBekVRLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsc0JBQXNCO1NBQ3RDLENBQUM7eUNBR2dDLGVBQU0sRUFBa0IsYUFBTTtPQUZuRCxZQUFZLENBMkV4QjtJQUFELG1CQUFDO0NBQUEsQUEzRUQsSUEyRUM7QUEzRVksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgTmdab25lfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5cclxuaW1wb3J0IHsgaW9zIH0gZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7QXBwU2V0dGluZ3N9IGZyb20gXCJ+L2FwcC9hcHAtc2V0dGluZ3NcIlxyXG5pbXBvcnQge01lc3NhZ2V9IGZyb20gXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQge05hdmlnYXRpb25FeHRyYXMsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5kZWNsYXJlIHZhciBVSVRhYmxlVmlld0NlbGxTZWxlY3Rpb25TdHlsZTtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYXBwLmNvbXBvbmVudC5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gICAgcHVibGljIGJvdHRvbUJhcjogYm9vbGVhbjtcclxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgICAgIHRoaXMuYm90dG9tQmFyID0gQXBwU2V0dGluZ3Muc2hvd0JvdHRvbUJhcjtcclxuICAgICAgICBmaXJlYmFzZS5nZXRDdXJyZW50UHVzaFRva2VuKCkudGhlbigodG9rZW46IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAvLyBtYXkgYmUgbnVsbCBpZiBub3Qga25vd24geWV0XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDdXJyZW50IHB1c2ggdG9rZW46ICR7dG9rZW59YCk7XHJcbiAgICAgICAgICAgIEFwcFNldHRpbmdzLkRFVklDRV9QVVNIX1RPS0VOID0gdG9rZW47XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZmlyZWJhc2UuaW5pdCh7XHJcbiAgICAgICAgICAgIC8vIE9wdGlvbmFsbHkgcGFzcyBpbiBwcm9wZXJ0aWVzIGZvciBkYXRhYmFzZSwgYXV0aGVudGljYXRpb24gYW5kIGNsb3VkIG1lc3NhZ2luZyxcclxuICAgICAgICAgICAgLy8gc2VlIHRoZWlyIHJlc3BlY3RpdmUgZG9jcy5cclxuICAgICAgICAgICAgc2hvd05vdGlmaWNhdGlvbnNXaGVuSW5Gb3JlZ3JvdW5kOiB0cnVlLFxyXG4gICAgICAgICAgICBvbk1lc3NhZ2VSZWNlaXZlZENhbGxiYWNrOiAobWVzc2FnZTogTWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFRpdGxlOiAke21lc3NhZ2UudGl0bGV9YCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgQm9keTogJHttZXNzYWdlLmJvZHl9YCk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiB5b3VyIHNlcnZlciBwYXNzZWQgYSBjdXN0b20gcHJvcGVydHkgY2FsbGVkICdydW5uaW5nJywgdGhlbiBkbyB0aGlzOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFZhbHVlIG9mICdydW5uaW5nJzogJHttZXNzYWdlLmRhdGEucnVubmluZ31gKTtcclxuICAgICAgICAgICAgICAgIGxldCB0aXRsZSA9IFwiWW91IHJlY2VpdmVkIGEgbm90aWZpY2F0aW9uIVwiO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJvZHkgPSBcIkRvIHlvdSB3YW50IHRvIG9wZW4gdGhlIGZlZWQ/XCI7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS50aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA9IG1lc3NhZ2UudGl0bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmJvZHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSA9IG1lc3NhZ2UuYm9keTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZGlhbG9ncy5jb25maXJtKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogYCR7dGl0bGV9YCxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBgJHtib2R5fWAsXHJcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9wZW5cIixcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIG5ldXRyYWxCdXR0b25UZXh0OiBcIk5ldXRyYWwgdGV4dFwiXHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzdWx0IGFyZ3VtZW50IGlzIGJvb2xlYW5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyByZXN1bHQ6IFwiICsgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHsgcGFnZTogXCJmZWVkc1wiIH1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCduYXZpZ2F0ZSB0byBmcmllbmRzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9ob21lL2ZyaWVuZHMnXSwgbmF2aWdhdGlvbkV4dHJhcykpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKFxyXG4gICAgICAgICAgICBpbnN0YW5jZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZG9uZVwiKTtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBmaXJlYmFzZS5pbml0IGVycm9yOiAke2Vycm9yfWApO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb3VudGVyOiBudW1iZXIgPSAxNjtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IG1lc3NhZ2UoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5jb3VudGVyID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb3VudGVyICsgXCIgdGFwcyBsZWZ0XCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiSG9vcnJhYWF5ISBcXG5Zb3UgYXJlIHJlYWR5IHRvIHN0YXJ0IGJ1aWxkaW5nIVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkl0ZW1Mb2FkaW5nKGFyZ3M6IGFueSkge1xyXG4gICAgICAgIGlmIChpb3MpIHtcclxuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGFyZ3MuaW9zO1xyXG4gICAgICAgICAgICBjZWxsLnNlbGVjdGlvblN0eWxlID0gVUlUYWJsZVZpZXdDZWxsU2VsZWN0aW9uU3R5bGUuVUlUYWJsZVZpZXdDZWxsU2VsZWN0aW9uU3R5bGVOb25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19