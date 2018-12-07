"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_settings_1 = require("~/app/app-settings");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var headers_1 = require("~/app/shared/headers");
var firebase = require("nativescript-plugin-firebase");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var AuthComponent = /** @class */ (function () {
    function AuthComponent(_router, httpClient) {
        this._router = _router;
        this.httpClient = httpClient;
        this.url = app_settings_1.AppSettings.API_URL + "/users/create";
    }
    AuthComponent.prototype.ngOnInit = function () {
        // firebase.init({
        //     onAuthStateChanged: function(data) { // optional but useful to immediately re-logon the user when he re-visits your app
        //         console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
        //         if (data.loggedIn) {
        //             console.log("user's email address: " + (data.user.email ? data.user.email : "N/A"));
        //             _router.
        //         }
        //     }
        // });
    };
    AuthComponent.prototype.onTapLogin = function () {
        //     var listener = {
        //         onAuthStateChanged((data) => {
        //             console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
        //             if (data.loggedIn) {
        //                 console.log("User info", data.user);
        //                 firebase.removeAuthStateListener(listener);
        //                 this._ro
        // }
        // },
        // thisArg: this
        // });
        var _this = this;
        console.log("Facebook login");
        console.log("Firebase " + firebase);
        console.log("TOKEN: " + app_settings_1.AppSettings.TOKEN);
        firebase.init({
        // Optionally pass in properties for database, authentication and cloud messaging,
        // see their respective docs.
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
                        "name": result.name
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
                        "name": result.name
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
        // firebase.getAuthToken({
        //     // default false, not recommended to set to true by Firebase but exposed for {N} devs nonetheless :)
        //     forceRefresh: true
        // }).then((token) => {
        //         console.log("Auth token retrieved: " + token);
        //         AppSettings.TOKEN = token;
        //     },
        //     function (errorMessage) {
        //         console.log("Auth token retrieval error: " + errorMessage);
        //     }
        // );
        // firebase.addAuthStateListener(listener);
    };
    AuthComponent = __decorate([
        core_1.Component({
            selector: 'ns-auth',
            templateUrl: './auth.component.html',
            styleUrls: ['./auth.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.Router, http_1.HttpClient])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUNoRCxtREFBK0M7QUFDL0MsMENBQXVDO0FBQ3ZDLDZDQUE2RDtBQUU3RCxnREFBNkM7QUFFN0MsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFDekQsSUFBTSxXQUFXLEdBQUc7SUFDaEIsT0FBTyxFQUFFLElBQUksa0JBQVcsQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDO0NBQ2pFLENBQUM7QUFTRjtJQUlJLHVCQUFtQixPQUFlLEVBQVUsVUFBc0I7UUFBL0MsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFGMUQsUUFBRyxHQUFNLDBCQUFXLENBQUMsT0FBTyxrQkFBZSxDQUFDO0lBR3BELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksa0JBQWtCO1FBQ2xCLDhIQUE4SDtRQUM5SCw2RkFBNkY7UUFDN0YsK0JBQStCO1FBQy9CLG1HQUFtRztRQUNuRyx1QkFBdUI7UUFDdkIsWUFBWTtRQUNaLFFBQVE7UUFDUixNQUFNO0lBQ1YsQ0FBQztJQUVELGtDQUFVLEdBQVY7UUFDQSx1QkFBdUI7UUFDdkIseUNBQXlDO1FBQ3pDLGlHQUFpRztRQUNqRyxtQ0FBbUM7UUFDbkMsdURBQXVEO1FBQ3ZELDhEQUE4RDtRQUM5RCwyQkFBMkI7UUFDZixJQUFJO1FBQ1IsS0FBSztRQUNMLGdCQUFnQjtRQUNwQixNQUFNO1FBWFYsaUJBNEdDO1FBL0ZHLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsQ0FBQztRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVUsMEJBQVcsQ0FBQyxLQUFPLENBQUMs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QUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDcEYsQ0FBQyxFQUNELFVBQVUsWUFBWTtvQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsR0FBRyxZQUFZLENBQUMsQ0FBQztnQkFDL0QsQ0FBQyxDQUNKLENBQUM7WUFDTixDQUFDLEVBQ0QsVUFBVSxZQUFZO2dCQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FDSixDQUFDO1FBQ04sQ0FBQyxDQUNKLENBQUM7UUFFRiwwQkFBMEI7UUFDMUIsMkdBQTJHO1FBQzNHLHlCQUF5QjtRQUN6Qix1QkFBdUI7UUFDdkIseURBQXlEO1FBQ3pELHFDQUFxQztRQUNyQyxTQUFTO1FBQ1QsZ0NBQWdDO1FBQ2hDLHNFQUFzRTtRQUN0RSxRQUFRO1FBQ1IsS0FBSztRQUVMLDJDQUEyQztJQUUvQyxDQUFDO0lBL0hRLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3RCLENBQUM7eUNBSzhCLGVBQU0sRUFBc0IsaUJBQVU7T0FKekQsYUFBYSxDQWdJekI7SUFBRCxvQkFBQztDQUFBLEFBaElELElBZ0lDO0FBaElZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FwcFNldHRpbmdzfSBmcm9tIFwifi9hcHAvYXBwLXNldHRpbmdzXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwSGVhZGVyc30gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5cbmltcG9ydCB7SGVhZGVyc30gZnJvbSBcIn4vYXBwL3NoYXJlZC9oZWFkZXJzXCI7XG5cbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5jb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KVxufTtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25zLWF1dGgnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hdXRoLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9hdXRoLmNvbXBvbmVudC5jc3MnXSxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHByaXZhdGUgdXJsID0gYCR7QXBwU2V0dGluZ3MuQVBJX1VSTH0vdXNlcnMvY3JlYXRlYDtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICAvLyBmaXJlYmFzZS5pbml0KHtcbiAgICAgICAgLy8gICAgIG9uQXV0aFN0YXRlQ2hhbmdlZDogZnVuY3Rpb24oZGF0YSkgeyAvLyBvcHRpb25hbCBidXQgdXNlZnVsIHRvIGltbWVkaWF0ZWx5IHJlLWxvZ29uIHRoZSB1c2VyIHdoZW4gaGUgcmUtdmlzaXRzIHlvdXIgYXBwXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZGF0YS5sb2dnZWRJbiA/IFwiTG9nZ2VkIGluIHRvIGZpcmViYXNlXCIgOiBcIkxvZ2dlZCBvdXQgZnJvbSBmaXJlYmFzZVwiKTtcbiAgICAgICAgLy8gICAgICAgICBpZiAoZGF0YS5sb2dnZWRJbikge1xuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIncyBlbWFpbCBhZGRyZXNzOiBcIiArIChkYXRhLnVzZXIuZW1haWwgPyBkYXRhLnVzZXIuZW1haWwgOiBcIk4vQVwiKSk7XG4gICAgICAgIC8vICAgICAgICAgICAgIF9yb3V0ZXIuXG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9KTtcbiAgICB9XG5cbiAgICBvblRhcExvZ2luKCk6IHZvaWQge1xuICAgIC8vICAgICB2YXIgbGlzdGVuZXIgPSB7XG4gICAgLy8gICAgICAgICBvbkF1dGhTdGF0ZUNoYW5nZWQoKGRhdGEpID0+IHtcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmxvZ2dlZEluID8gXCJMb2dnZWQgaW4gdG8gZmlyZWJhc2VcIiA6IFwiTG9nZ2VkIG91dCBmcm9tIGZpcmViYXNlXCIpO1xuICAgIC8vICAgICAgICAgICAgIGlmIChkYXRhLmxvZ2dlZEluKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBpbmZvXCIsIGRhdGEudXNlcik7XG4gICAgLy8gICAgICAgICAgICAgICAgIGZpcmViYXNlLnJlbW92ZUF1dGhTdGF0ZUxpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5fcm9cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgLy8gdGhpc0FyZzogdGhpc1xuICAgICAgICAvLyB9KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmFjZWJvb2sgbG9naW5cIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmlyZWJhc2UgXCIgKyBmaXJlYmFzZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBUT0tFTjogJHtBcHBTZXR0aW5ncy5UT0tFTn1gKTtcblxuICAgICAgICBmaXJlYmFzZS5pbml0KHtcbiAgICAgICAgICAgIC8vIE9wdGlvbmFsbHkgcGFzcyBpbiBwcm9wZXJ0aWVzIGZvciBkYXRhYmFzZSwgYXV0aGVudGljYXRpb24gYW5kIGNsb3VkIG1lc3NhZ2luZyxcbiAgICAgICAgICAgIC8vIHNlZSB0aGVpciByZXNwZWN0aXZlIGRvY3MuXG5cbiAgICAgICAgfSkudGhlbihcbiAgICAgICAgICAgIGluc3RhbmNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZG9uZVwiKTtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5sb2dpbih7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGluc3RhbmNlLkxvZ2luVHlwZS5GQUNFQk9PSyxcbiAgICAgICAgICAgICAgICAgICAgLy8gT3B0aW9uYWxcbiAgICAgICAgICAgICAgICAgICAgZmFjZWJvb2tPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZTogWydwdWJsaWNfcHJvZmlsZScsICdlbWFpbCddXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5nZXRBdXRoVG9rZW4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlZmF1bHQgZmFsc2UsIG5vdCByZWNvbW1lbmRlZCB0byBzZXQgdG8gdHJ1ZSBieSBGaXJlYmFzZSBidXQgZXhwb3NlZCBmb3Ige059IGRldnMgbm9uZXRoZWxlc3MgOilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZVJlZnJlc2g6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCh0b2tlbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF1dGggdG9rZW4gcmV0cmlldmVkOiBcIiArIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwU2V0dGluZ3MuVE9LRU4gPSB0b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2hvbWUvaXRlbXMnXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiB0b2tlbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiByZXN1bHQubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5odHRwQ2xpZW50LnBvc3QodGhpcy51cmwsIGRhdGEsIEhlYWRlcnMuZ2V0QXV0aFRva2VuSGVhZGVycygpKS5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdXRoIHRva2VuIHJldHJpZXZhbCBlcnJvcjogXCIgKyBlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZmlyZWJhc2UuaW5pdCBlcnJvcjogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgICAgICBmaXJlYmFzZS5sb2dpbih7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5GQUNFQk9PSyxcbiAgICAgICAgICAgICAgICAgICAgLy8gT3B0aW9uYWxcbiAgICAgICAgICAgICAgICAgICAgZmFjZWJvb2tPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZTogWydwdWJsaWNfcHJvZmlsZScsICdlbWFpbCddXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5nZXRBdXRoVG9rZW4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlZmF1bHQgZmFsc2UsIG5vdCByZWNvbW1lbmRlZCB0byBzZXQgdG8gdHJ1ZSBieSBGaXJlYmFzZSBidXQgZXhwb3NlZCBmb3Ige059IGRldnMgbm9uZXRoZWxlc3MgOilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZVJlZnJlc2g6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCh0b2tlbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF1dGggdG9rZW4gcmV0cmlldmVkOiBcIiArIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwU2V0dGluZ3MuVE9LRU4gPSB0b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2hvbWUvaXRlbXMnXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiB0b2tlbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiByZXN1bHQubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5odHRwQ2xpZW50LnBvc3QodGhpcy51cmwsIGRhdGEsIEhlYWRlcnMuZ2V0QXV0aFRva2VuSGVhZGVycygpKS5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdXRoIHRva2VuIHJldHJpZXZhbCBlcnJvcjogXCIgKyBlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIGZpcmViYXNlLmdldEF1dGhUb2tlbih7XG4gICAgICAgIC8vICAgICAvLyBkZWZhdWx0IGZhbHNlLCBub3QgcmVjb21tZW5kZWQgdG8gc2V0IHRvIHRydWUgYnkgRmlyZWJhc2UgYnV0IGV4cG9zZWQgZm9yIHtOfSBkZXZzIG5vbmV0aGVsZXNzIDopXG4gICAgICAgIC8vICAgICBmb3JjZVJlZnJlc2g6IHRydWVcbiAgICAgICAgLy8gfSkudGhlbigodG9rZW4pID0+IHtcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIkF1dGggdG9rZW4gcmV0cmlldmVkOiBcIiArIHRva2VuKTtcbiAgICAgICAgLy8gICAgICAgICBBcHBTZXR0aW5ncy5UT0tFTiA9IHRva2VuO1xuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIkF1dGggdG9rZW4gcmV0cmlldmFsIGVycm9yOiBcIiArIGVycm9yTWVzc2FnZSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICk7XG5cbiAgICAgICAgLy8gZmlyZWJhc2UuYWRkQXV0aFN0YXRlTGlzdGVuZXIobGlzdGVuZXIpO1xuXG4gICAgfVxufVxuXG4iXX0=