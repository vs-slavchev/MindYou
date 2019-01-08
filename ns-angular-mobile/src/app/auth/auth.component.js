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
        firebase.getCurrentPushToken().then(function (token) {
            // may be null if not known yet
            console.log("Current push token: " + token);
            app_settings_1.AppSettings.DEVICE_PUSH_TOKEN = token;
        });
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
                        "device_push_token": app_settings_1.AppSettings.DEVICE_PUSH_TOKEN
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
                        "device_push_token": app_settings_1.AppSettings.DEVICE_PUSH_TOKEN
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RDtBQUN4RCxtREFBK0M7QUFDL0MsMENBQXlEO0FBQ3pELDZDQUE2RDtBQUU3RCxnREFBNkM7QUFFN0MscURBQXVEO0FBRXZELElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQ3pELElBQU0sV0FBVyxHQUFHO0lBQ2hCLE9BQU8sRUFBRSxJQUFJLGtCQUFXLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQztDQUNqRSxDQUFDO0FBU0Y7SUFJSSx1QkFBbUIsT0FBZSxFQUFVLFVBQXNCLEVBQVUsTUFBYztRQUF2RSxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFGbEYsUUFBRyxHQUFNLDBCQUFXLENBQUMsT0FBTyxrQkFBZSxDQUFDO0lBR3BELENBQUM7SUFFRCxnQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELGtDQUFVLEdBQVY7UUFBQSxpQkFxSEM7UUFwSEcsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBYTtZQUM5QywrQkFBK0I7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBdUIsS0FBTyxDQUFDLENBQUM7WUFDNUMsMEJBQVcsQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7UUFFSCxpQ0FBaUM7UUFDakMsdUNBQXVDO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBVSwwQkFBVyxDQUFDLEtBQU8sQ0FBQyxDQUFDO1FBRTNDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDVixrRkFBa0Y7WUFDbEYsNkJBQTZCO1lBQzdCLGlDQUFpQyxFQUFFLElBQUk7WUFDdkMseUJBQXlCLEVBQUUsVUFBQyxPQUFnQjtnQkFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFVLE9BQU8sQ0FBQyxLQUFPLENBQUMsQ0FBQztnQkFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFTLE9BQU8sQ0FBQyxJQUFNLENBQUMsQ0FBQztnQkFDckMsMEVBQTBFO2dCQUMxRSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF1QixPQUFPLENBQUMsSUFBSSxDQUFDLE9BQVMsQ0FBQyxDQUFDO2dCQUUzRCxPQUFPLENBQUMsT0FBTyxDQUFDO29CQUNaLEtBQUssRUFBRSxZQUFVLE9BQU8sQ0FBQyxLQUFPO29CQUNoQyxPQUFPLEVBQUUsV0FBUyxPQUFPLENBQUMsSUFBTTtvQkFDaEMsWUFBWSxFQUFFLE1BQU07b0JBQ3BCLGdCQUFnQixFQUFFLFFBQVE7aUJBRTdCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO29CQUNWLDZCQUE2QjtvQkFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsQ0FBQztvQkFDeEMsSUFBSSxDQUFDLE1BQU0sRUFBRTt3QkFDVCxPQUFPO3FCQUNWO29CQUNELElBQUksZ0JBQWdCLEdBQXFCO3dCQUNyQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO3FCQUNqQyxDQUFDO29CQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztvQkFDbkMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsRUFBMUQsQ0FBMEQsQ0FBQyxDQUFDO2dCQUV0RixDQUFDLENBQUMsQ0FBQztZQUNQLENBQUM7U0FFSixDQUFDLENBQUMsSUFBSSxDQUNILFVBQUEsUUFBUTtZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDO2dCQUNYLElBQUksRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVE7Z0JBQ2pDLFdBQVc7Z0JBQ1gsZUFBZSxFQUFFO29CQUNiLEtBQUssRUFBRSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQztpQkFDckM7YUFFSixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtnQkFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN2QixRQUFRLENBQUMsWUFBWSxDQUFDO29CQUNsQixvR0FBb0c7b0JBQ3BHLFlBQVksRUFBRSxLQUFLO2lCQUN0QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBSztvQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixHQUFHLEtBQUssQ0FBQyxDQUFDO29CQUM5QywwQkFBVyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7b0JBQzFCLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxJQUFJLEdBQUc7d0JBQ1AsSUFBSSxFQUFFLEtBQUs7d0JBQ1gsTUFBTSxFQUFFLE1BQU0sQ0FBQyxJQUFJO3dCQUNuQixtQkFBbUIsRUFBRSwwQkFBVyxDQUFDLGlCQUFpQjtxQkFDckQsQ0FBQztvQkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNsQixLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxpQkFBTyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDcEYsQ0FBQyxFQUNELFVBQVUsWUFBWTtvQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsR0FBRyxZQUFZLENBQUMsQ0FBQztnQkFDL0QsQ0FBQyxDQUNKLENBQUM7WUFDTixDQUFDLEVBQ0QsVUFBVSxZQUFZO2dCQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FDSixDQUFDO1FBQ04sQ0FBQyxFQUNELFVBQUEsS0FBSztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQXdCLEtBQU8sQ0FBQyxDQUFDO1lBQzdDLFFBQVEsQ0FBQyxLQUFLLENBQUM7Z0JBQ1gsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUTtnQkFDakMsV0FBVztnQkFDWCxlQUFlLEVBQUU7b0JBQ2IsS0FBSyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDO2lCQUNyQzthQUVKLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO2dCQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZCLFFBQVEsQ0FBQyxZQUFZLENBQUM7b0JBQ2xCLG9HQUFvRztvQkFDcEcsWUFBWSxFQUFFLEtBQUs7aUJBQ3RCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFLO29CQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDLENBQUM7b0JBQzlDLDBCQUFXLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDMUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO29CQUN2QyxJQUFJLElBQUksR0FBRzt3QkFDUCxJQUFJLEVBQUUsS0FBSzt3QkFDWCxNQUFNLEVBQUUsTUFBTSxDQUFDLElBQUk7d0JBQ25CLG1CQUFtQixFQUFFLDBCQUFXLENBQUMsaUJBQWlCO3FCQUNyRCxDQUFDO29CQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2xCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLGlCQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNwRixDQUFDLEVBQ0QsVUFBVSxZQUFZO29CQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixHQUFHLFlBQVksQ0FBQyxDQUFDO2dCQUMvRCxDQUFDLENBQ0osQ0FBQztZQUNOLENBQUMsRUFDRCxVQUFVLFlBQVk7Z0JBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUNKLENBQUM7UUFDTixDQUFDLENBQ0osQ0FBQztJQUVOLENBQUM7SUFoSVEsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUNuQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDdEIsQ0FBQzt5Q0FLOEIsZUFBTSxFQUFzQixpQkFBVSxFQUFrQixhQUFNO09BSmpGLGFBQWEsQ0FpSXpCO0lBQUQsb0JBQUM7Q0FBQSxBQWpJRCxJQWlJQztBQWpJWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE5nWm9uZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QXBwU2V0dGluZ3N9IGZyb20gXCJ+L2FwcC9hcHAtc2V0dGluZ3NcIjtcclxuaW1wb3J0IHtOYXZpZ2F0aW9uRXh0cmFzLCBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwSGVhZGVyc30gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcblxyXG5pbXBvcnQge0hlYWRlcnN9IGZyb20gXCJ+L2FwcC9zaGFyZWQvaGVhZGVyc1wiO1xyXG5pbXBvcnQge2ZpcmVzdG9yZSwgTWVzc2FnZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcblxyXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5jb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pXHJcbn07XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25zLWF1dGgnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2F1dGguY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vYXV0aC5jb21wb25lbnQuY3NzJ10sXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0aENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcHJpdmF0ZSB1cmwgPSBgJHtBcHBTZXR0aW5ncy5BUElfVVJMfS91c2Vycy9jcmVhdGVgO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblRhcExvZ2luKCk6IHZvaWQge1xyXG4gICAgICAgIGZpcmViYXNlLmdldEN1cnJlbnRQdXNoVG9rZW4oKS50aGVuKCh0b2tlbjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIG1heSBiZSBudWxsIGlmIG5vdCBrbm93biB5ZXRcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEN1cnJlbnQgcHVzaCB0b2tlbjogJHt0b2tlbn1gKTtcclxuICAgICAgICAgICAgQXBwU2V0dGluZ3MuREVWSUNFX1BVU0hfVE9LRU4gPSB0b2tlbjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJGYWNlYm9vayBsb2dpblwiKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkZpcmViYXNlIFwiICsgZmlyZWJhc2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBUT0tFTjogJHtBcHBTZXR0aW5ncy5UT0tFTn1gKTtcclxuXHJcbiAgICAgICAgZmlyZWJhc2UuaW5pdCh7XHJcbiAgICAgICAgICAgIC8vIE9wdGlvbmFsbHkgcGFzcyBpbiBwcm9wZXJ0aWVzIGZvciBkYXRhYmFzZSwgYXV0aGVudGljYXRpb24gYW5kIGNsb3VkIG1lc3NhZ2luZyxcclxuICAgICAgICAgICAgLy8gc2VlIHRoZWlyIHJlc3BlY3RpdmUgZG9jcy5cclxuICAgICAgICAgICAgc2hvd05vdGlmaWNhdGlvbnNXaGVuSW5Gb3JlZ3JvdW5kOiB0cnVlLFxyXG4gICAgICAgICAgICBvbk1lc3NhZ2VSZWNlaXZlZENhbGxiYWNrOiAobWVzc2FnZTogTWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFRpdGxlOiAke21lc3NhZ2UudGl0bGV9YCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgQm9keTogJHttZXNzYWdlLmJvZHl9YCk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiB5b3VyIHNlcnZlciBwYXNzZWQgYSBjdXN0b20gcHJvcGVydHkgY2FsbGVkICdydW5uaW5nJywgdGhlbiBkbyB0aGlzOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFZhbHVlIG9mICdydW5uaW5nJzogJHttZXNzYWdlLmRhdGEucnVubmluZ31gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkaWFsb2dzLmNvbmZpcm0oe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBgVGl0bGU6ICR7bWVzc2FnZS50aXRsZX1gLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBCb2R5OiAke21lc3NhZ2UuYm9keX1gLFxyXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPcGVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyBuZXV0cmFsQnV0dG9uVGV4dDogXCJOZXV0cmFsIHRleHRcIlxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlc3VsdCBhcmd1bWVudCBpcyBib29sZWFuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHsgcGFnZTogXCJmZWVkc1wiIH1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCduYXZpZ2F0ZSB0byBmcmllbmRzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9ob21lL2ZyaWVuZHMnXSwgbmF2aWdhdGlvbkV4dHJhcykpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgIGluc3RhbmNlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBkb25lXCIpO1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UubG9naW4oe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGluc3RhbmNlLkxvZ2luVHlwZS5GQUNFQk9PSyxcclxuICAgICAgICAgICAgICAgICAgICAvLyBPcHRpb25hbFxyXG4gICAgICAgICAgICAgICAgICAgIGZhY2Vib29rT3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZTogWydwdWJsaWNfcHJvZmlsZScsICdlbWFpbCddXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuZ2V0QXV0aFRva2VuKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlZmF1bHQgZmFsc2UsIG5vdCByZWNvbW1lbmRlZCB0byBzZXQgdG8gdHJ1ZSBieSBGaXJlYmFzZSBidXQgZXhwb3NlZCBmb3Ige059IGRldnMgbm9uZXRoZWxlc3MgOilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlUmVmcmVzaDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbigodG9rZW4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF1dGggdG9rZW4gcmV0cmlldmVkOiBcIiArIHRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHBTZXR0aW5ncy5UT0tFTiA9IHRva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9ob21lL2l0ZW1zJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IHRva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogcmVzdWx0Lm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGV2aWNlX3B1c2hfdG9rZW5cIjogQXBwU2V0dGluZ3MuREVWSUNFX1BVU0hfVE9LRU5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cENsaWVudC5wb3N0KHRoaXMudXJsLCBkYXRhLCBIZWFkZXJzLmdldEF1dGhUb2tlbkhlYWRlcnMoKSkuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXV0aCB0b2tlbiByZXRyaWV2YWwgZXJyb3I6IFwiICsgZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZmlyZWJhc2UuaW5pdCBlcnJvcjogJHtlcnJvcn1gKTtcclxuICAgICAgICAgICAgICAgIGZpcmViYXNlLmxvZ2luKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuRkFDRUJPT0ssXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gT3B0aW9uYWxcclxuICAgICAgICAgICAgICAgICAgICBmYWNlYm9va09wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU6IFsncHVibGljX3Byb2ZpbGUnLCAnZW1haWwnXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcmViYXNlLmdldEF1dGhUb2tlbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWZhdWx0IGZhbHNlLCBub3QgcmVjb21tZW5kZWQgdG8gc2V0IHRvIHRydWUgYnkgRmlyZWJhc2UgYnV0IGV4cG9zZWQgZm9yIHtOfSBkZXZzIG5vbmV0aGVsZXNzIDopXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZVJlZnJlc2g6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKHRva2VuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdXRoIHRva2VuIHJldHJpZXZlZDogXCIgKyB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwU2V0dGluZ3MuVE9LRU4gPSB0b2tlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvaG9tZS9pdGVtcyddKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiB0b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IHJlc3VsdC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRldmljZV9wdXNoX3Rva2VuXCI6IEFwcFNldHRpbmdzLkRFVklDRV9QVVNIX1RPS0VOXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmh0dHBDbGllbnQucG9zdCh0aGlzLnVybCwgZGF0YSwgSGVhZGVycy5nZXRBdXRoVG9rZW5IZWFkZXJzKCkpLnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF1dGggdG9rZW4gcmV0cmlldmFsIGVycm9yOiBcIiArIGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=