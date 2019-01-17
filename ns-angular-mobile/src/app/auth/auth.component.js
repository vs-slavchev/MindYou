"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_settings_1 = require("~/app/app-settings");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var headers_1 = require("~/app/shared/headers");
var dialogs = require("tns-core-modules/ui/dialogs");
var firebase = require("nativescript-plugin-firebase");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var AuthComponent = /** @class */ (function () {
    function AuthComponent(_router, httpClient, ngZone) {
        this._router = _router;
        this.httpClient = httpClient;
        this.ngZone = ngZone;
        this.url = app_settings_1.AppSettings.API_URL + "/users/create";
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent.prototype.onTapLogin = function () {
        var _this = this;
        // console.log("Facebook login");
        // console.log("Firebase " + firebase);
        console.log("TOKEN: " + app_settings_1.AppSettings.TOKEN);
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
                    if (!result) {
                        return;
                    }
                    var navigationExtras = {
                        queryParams: { page: "feeds" }
                    };
                    console.log('navigate to friends');
                    _this.ngZone.run(function () { return _this._router.navigate(['/home/friends'], navigationExtras); });
                });
            }
        }).then(function (instance) {
            console.log("firebase.init done");
            instance.login({
                type: instance.LoginType.FACEBOOK,
                // Optional
                facebookOptions: {
                    scope: ['public_profile', 'email']
                },
            }).then(function (result) {
                JSON.stringify(result);
                instance.getAuthToken({
                    // default false, not recommended to set to true by Firebase but exposed for {N} devs nonetheless :)
                    forceRefresh: false
                }).then(function (token) {
                    console.log("Auth token retrieved: " + token);
                    app_settings_1.AppSettings.TOKEN = token;
                    _this._router.navigate(['/home/items']);
                    var data = {
                        "id": token,
                        "name": result.name,
                        "device_token": app_settings_1.AppSettings.DEVICE_PUSH_TOKEN
                    };
                    console.log(data);
                    _this.httpClient.post(_this.url, data, headers_1.Headers.getAuthTokenHeaders()).subscribe();
                }, function (errorMessage) {
                    console.log("Auth token retrieval error: " + errorMessage);
                });
            }, function (errorMessage) {
                console.log(errorMessage);
            });
        }, function (error) {
            console.log("firebase.init error: " + error);
            firebase.login({
                type: firebase.LoginType.FACEBOOK,
                // Optional
                facebookOptions: {
                    scope: ['public_profile', 'email']
                },
            }).then(function (result) {
                JSON.stringify(result);
                firebase.getAuthToken({
                    // default false, not recommended to set to true by Firebase but exposed for {N} devs nonetheless :)
                    forceRefresh: false
                }).then(function (token) {
                    console.log("Auth token retrieved: " + token);
                    app_settings_1.AppSettings.TOKEN = token;
                    _this._router.navigate(['/home/items']);
                    var data = {
                        "id": token,
                        "name": result.name,
                        "device_token": app_settings_1.AppSettings.DEVICE_PUSH_TOKEN
                    };
                    console.log(data);
                    _this.httpClient.post(_this.url, data, headers_1.Headers.getAuthTokenHeaders()).subscribe();
                }, function (errorMessage) {
                    console.log("Auth token retrieval error: " + errorMessage);
                });
            }, function (errorMessage) {
                console.log(errorMessage);
            });
        });
    };
    AuthComponent = __decorate([
        core_1.Component({
            selector: 'ns-auth',
            templateUrl: './auth.component.html',
            styleUrls: ['./auth.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.Router, http_1.HttpClient, core_1.NgZone])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RDtBQUN4RCxtREFBK0M7QUFDL0MsMENBQXlEO0FBQ3pELDZDQUE2RDtBQUU3RCxnREFBNkM7QUFFN0MscURBQXVEO0FBRXZELElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQ3pELElBQU0sV0FBVyxHQUFHO0lBQ2hCLE9BQU8sRUFBRSxJQUFJLGtCQUFXLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQztDQUNqRSxDQUFDO0FBU0Y7SUFJSSx1QkFBbUIsT0FBZSxFQUFVLFVBQXNCLEVBQVUsTUFBYztRQUF2RSxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFGbEYsUUFBRyxHQUFNLDBCQUFXLENBQUMsT0FBTyxrQkFBZSxDQUFDO0lBR3BELENBQUM7SUFFRCxnQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELGtDQUFVLEdBQVY7UUFBQSxpQkFnSEM7UUE5R0csaUNBQWlDO1FBQ2pDLHVDQUF1QztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVUsMEJBQVcsQ0FBQyxLQUFPLENBQUMsQ0FBQztRQUUzQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ1Ysa0ZBQWtGO1lBQ2xGLDZCQUE2QjtZQUM3QixpQ0FBaUMsRUFBRSxJQUFJO1lBQ3ZDLHlCQUF5QixFQUFFLFVBQUMsT0FBZ0I7Z0JBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBVSxPQUFPLENBQUMsS0FBTyxDQUFDLENBQUM7Z0JBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBUyxPQUFPLENBQUMsSUFBTSxDQUFDLENBQUM7Z0JBQ3JDLDBFQUEwRTtnQkFDMUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBdUIsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFTLENBQUMsQ0FBQztnQkFFM0QsT0FBTyxDQUFDLE9BQU8sQ0FBQztvQkFDWixLQUFLLEVBQUUsWUFBVSxPQUFPLENBQUMsS0FBTztvQkFDaEMsT0FBTyxFQUFFLFdBQVMsT0FBTyxDQUFDLElBQU07b0JBQ2hDLFlBQVksRUFBRSxNQUFNO29CQUNwQixnQkFBZ0IsRUFBRSxRQUFRO2lCQUU3QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtvQkFDViw2QkFBNkI7b0JBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLENBQUM7b0JBQ3hDLElBQUksQ0FBQyxNQUFNLEVBQUU7d0JBQ1QsT0FBTztxQkFDVjtvQkFDRCxJQUFJLGdCQUFnQixHQUFxQjt3QkFDckMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtxQkFDakMsQ0FBQztvQkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7b0JBQ25DLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLEVBQTFELENBQTBELENBQUMsQ0FBQztnQkFFdEYsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1NBRUosQ0FBQyxDQUFDLElBQUksQ0FDSCxVQUFBLFFBQVE7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDbEMsUUFBUSxDQUFDLEtBQUssQ0FBQztnQkFDWCxJQUFJLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRO2dCQUNqQyxXQUFXO2dCQUNYLGVBQWUsRUFBRTtvQkFDYixLQUFLLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUM7aUJBQ3JDO2FBRUosQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07Z0JBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDdkIsUUFBUSxDQUFDLFlBQVksQ0FBQztvQkFDbEIsb0dBQW9HO29CQUNwRyxZQUFZLEVBQUUsS0FBSztpQkFDdEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQUs7b0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsR0FBRyxLQUFLLENBQUMsQ0FBQztvQkFDOUMsMEJBQVcsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO29CQUMxQixLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZDLElBQUksSUFBSSxHQUFHO3dCQUNQLElBQUksRUFBRSxLQUFLO3dCQUNYLE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSTt3QkFDbkIsY0FBYyxFQUFFLDBCQUFXLENBQUMsaUJBQWlCO3FCQUNoRCxDQUFDO29CQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2xCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLGlCQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNwRixDQUFDLEVBQ0QsVUFBVSxZQUFZO29CQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixHQUFHLFlBQVksQ0FBQyxDQUFDO2dCQUMvRCxDQUFDLENBQ0osQ0FBQztZQUNOLENBQUMsRUFDRCxVQUFVLFlBQVk7Z0JBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUNKLENBQUM7UUFDTixDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBd0IsS0FBTyxDQUFDLENBQUM7WUFDN0MsUUFBUSxDQUFDLEtBQUssQ0FBQztnQkFDWCxJQUFJLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRO2dCQUNqQyxXQUFXO2dCQUNYLGVBQWUsRUFBRTtvQkFDYixLQUFLLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUM7aUJBQ3JDO2FBRUosQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07Z0JBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDdkIsUUFBUSxDQUFDLFlBQVksQ0FBQztvQkFDbEIsb0dBQW9HO29CQUNwRyxZQUFZLEVBQUUsS0FBSztpQkFDdEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQUs7b0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsR0FBRyxLQUFLLENBQUMsQ0FBQztvQkFDOUMsMEJBQVcsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO29CQUMxQixLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZDLElBQUksSUFBSSxHQUFHO3dCQUNQLElBQUksRUFBRSxLQUFLO3dCQUNYLE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSTt3QkFDbkIsY0FBYyxFQUFFLDBCQUFXLENBQUMsaUJBQWlCO3FCQUNoRCxDQUFDO29CQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2xCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLGlCQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNwRixDQUFDLEVBQ0QsVUFBVSxZQUFZO29CQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixHQUFHLFlBQVksQ0FBQyxDQUFDO2dCQUMvRCxDQUFDLENBQ0osQ0FBQztZQUNOLENBQUMsRUFDRCxVQUFVLFlBQVk7Z0JBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUNKLENBQUM7UUFDTixDQUFDLENBQ0osQ0FBQztJQUVOLENBQUM7SUEzSFEsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUNuQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDdEIsQ0FBQzt5Q0FLOEIsZUFBTSxFQUFzQixpQkFBVSxFQUFrQixhQUFNO09BSmpGLGFBQWEsQ0E0SHpCO0lBQUQsb0JBQUM7Q0FBQSxBQTVIRCxJQTRIQztBQTVIWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE5nWm9uZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QXBwU2V0dGluZ3N9IGZyb20gXCJ+L2FwcC9hcHAtc2V0dGluZ3NcIjtcclxuaW1wb3J0IHtOYXZpZ2F0aW9uRXh0cmFzLCBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwSGVhZGVyc30gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcblxyXG5pbXBvcnQge0hlYWRlcnN9IGZyb20gXCJ+L2FwcC9zaGFyZWQvaGVhZGVyc1wiO1xyXG5pbXBvcnQge2ZpcmVzdG9yZSwgTWVzc2FnZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcblxyXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5jb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pXHJcbn07XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25zLWF1dGgnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2F1dGguY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vYXV0aC5jb21wb25lbnQuY3NzJ10sXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0aENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcHJpdmF0ZSB1cmwgPSBgJHtBcHBTZXR0aW5ncy5BUElfVVJMfS91c2Vycy9jcmVhdGVgO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblRhcExvZ2luKCk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkZhY2Vib29rIGxvZ2luXCIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRmlyZWJhc2UgXCIgKyBmaXJlYmFzZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFRPS0VOOiAke0FwcFNldHRpbmdzLlRPS0VOfWApO1xyXG5cclxuICAgICAgICBmaXJlYmFzZS5pbml0KHtcclxuICAgICAgICAgICAgLy8gT3B0aW9uYWxseSBwYXNzIGluIHByb3BlcnRpZXMgZm9yIGRhdGFiYXNlLCBhdXRoZW50aWNhdGlvbiBhbmQgY2xvdWQgbWVzc2FnaW5nLFxyXG4gICAgICAgICAgICAvLyBzZWUgdGhlaXIgcmVzcGVjdGl2ZSBkb2NzLlxyXG4gICAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uc1doZW5JbkZvcmVncm91bmQ6IHRydWUsXHJcbiAgICAgICAgICAgIG9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2s6IChtZXNzYWdlOiBNZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVGl0bGU6ICR7bWVzc2FnZS50aXRsZX1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBCb2R5OiAke21lc3NhZ2UuYm9keX1gKTtcclxuICAgICAgICAgICAgICAgIC8vIGlmIHlvdXIgc2VydmVyIHBhc3NlZCBhIGN1c3RvbSBwcm9wZXJ0eSBjYWxsZWQgJ3J1bm5pbmcnLCB0aGVuIGRvIHRoaXM6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVmFsdWUgb2YgJ3J1bm5pbmcnOiAke21lc3NhZ2UuZGF0YS5ydW5uaW5nfWApO1xyXG5cclxuICAgICAgICAgICAgICAgIGRpYWxvZ3MuY29uZmlybSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGBUaXRsZTogJHttZXNzYWdlLnRpdGxlfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYEJvZHk6ICR7bWVzc2FnZS5ib2R5fWAsXHJcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9wZW5cIixcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIG5ldXRyYWxCdXR0b25UZXh0OiBcIk5ldXRyYWwgdGV4dFwiXHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzdWx0IGFyZ3VtZW50IGlzIGJvb2xlYW5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyByZXN1bHQ6IFwiICsgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtczogeyBwYWdlOiBcImZlZWRzXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25hdmlnYXRlIHRvIGZyaWVuZHMnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2hvbWUvZnJpZW5kcyddLCBuYXZpZ2F0aW9uRXh0cmFzKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgaW5zdGFuY2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIik7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5sb2dpbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogaW5zdGFuY2UuTG9naW5UeXBlLkZBQ0VCT09LLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE9wdGlvbmFsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFjZWJvb2tPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlOiBbJ3B1YmxpY19wcm9maWxlJywgJ2VtYWlsJ11cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5nZXRBdXRoVG9rZW4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVmYXVsdCBmYWxzZSwgbm90IHJlY29tbWVuZGVkIHRvIHNldCB0byB0cnVlIGJ5IEZpcmViYXNlIGJ1dCBleHBvc2VkIGZvciB7Tn0gZGV2cyBub25ldGhlbGVzcyA6KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VSZWZyZXNoOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCh0b2tlbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXV0aCB0b2tlbiByZXRyaWV2ZWQ6IFwiICsgdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcFNldHRpbmdzLlRPS0VOID0gdG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2hvbWUvaXRlbXMnXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogdG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiByZXN1bHQubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXZpY2VfdG9rZW5cIjogQXBwU2V0dGluZ3MuREVWSUNFX1BVU0hfVE9LRU5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cENsaWVudC5wb3N0KHRoaXMudXJsLCBkYXRhLCBIZWFkZXJzLmdldEF1dGhUb2tlbkhlYWRlcnMoKSkuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXV0aCB0b2tlbiByZXRyaWV2YWwgZXJyb3I6IFwiICsgZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZmlyZWJhc2UuaW5pdCBlcnJvcjogJHtlcnJvcn1gKTtcclxuICAgICAgICAgICAgICAgIGZpcmViYXNlLmxvZ2luKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuRkFDRUJPT0ssXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gT3B0aW9uYWxcclxuICAgICAgICAgICAgICAgICAgICBmYWNlYm9va09wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU6IFsncHVibGljX3Byb2ZpbGUnLCAnZW1haWwnXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcmViYXNlLmdldEF1dGhUb2tlbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWZhdWx0IGZhbHNlLCBub3QgcmVjb21tZW5kZWQgdG8gc2V0IHRvIHRydWUgYnkgRmlyZWJhc2UgYnV0IGV4cG9zZWQgZm9yIHtOfSBkZXZzIG5vbmV0aGVsZXNzIDopXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZVJlZnJlc2g6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKHRva2VuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdXRoIHRva2VuIHJldHJpZXZlZDogXCIgKyB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwU2V0dGluZ3MuVE9LRU4gPSB0b2tlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvaG9tZS9pdGVtcyddKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiB0b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IHJlc3VsdC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRldmljZV90b2tlblwiOiBBcHBTZXR0aW5ncy5ERVZJQ0VfUFVTSF9UT0tFTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5odHRwQ2xpZW50LnBvc3QodGhpcy51cmwsIGRhdGEsIEhlYWRlcnMuZ2V0QXV0aFRva2VuSGVhZGVycygpKS5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdXRoIHRva2VuIHJldHJpZXZhbCBlcnJvcjogXCIgKyBlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuIl19