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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUNoRCxtREFBK0M7QUFDL0MsMENBQXVDO0FBQ3ZDLDZDQUE2RDtBQUU3RCxnREFBNkM7QUFFN0MsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFDekQsSUFBTSxXQUFXLEdBQUc7SUFDaEIsT0FBTyxFQUFFLElBQUksa0JBQVcsQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDO0NBQ2pFLENBQUM7QUFTRjtJQUlJLHVCQUFtQixPQUFlLEVBQVUsVUFBc0I7UUFBL0MsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFGMUQsUUFBRyxHQUFNLDBCQUFXLENBQUMsT0FBTyxrQkFBZSxDQUFDO0lBR3BELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksa0JBQWtCO1FBQ2xCLDhIQUE4SDtRQUM5SCw2RkFBNkY7UUFDN0YsK0JBQStCO1FBQy9CLG1HQUFtRztRQUNuRyx1QkFBdUI7UUFDdkIsWUFBWTtRQUNaLFFBQVE7UUFDUixNQUFNO0lBQ1YsQ0FBQztJQUVELGtDQUFVLEdBQVY7UUFDQSx1QkFBdUI7UUFDdkIseUNBQXlDO1FBQ3pDLGlHQUFpRztRQUNqRyxtQ0FBbUM7UUFDbkMsdURBQXVEO1FBQ3ZELDhEQUE4RDtRQUM5RCwyQkFBMkI7UUFDZixJQUFJO1FBQ1IsS0FBSztRQUNMLGdCQUFnQjtRQUNwQixNQUFNO1FBWFYsaUJBNEdDO1FBL0ZHLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsQ0FBQztRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVUsMEJBQVcsQ0FBQyxLQUFPLENBQUMs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QUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDcEYsQ0FBQyxFQUNELFVBQVUsWUFBWTtvQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsR0FBRyxZQUFZLENBQUMsQ0FBQztnQkFDL0QsQ0FBQyxDQUNKLENBQUM7WUFDTixDQUFDLEVBQ0QsVUFBVSxZQUFZO2dCQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FDSixDQUFDO1FBQ04sQ0FBQyxDQUNKLENBQUM7UUFFRiwwQkFBMEI7UUFDMUIsMkdBQTJHO1FBQzNHLHlCQUF5QjtRQUN6Qix1QkFBdUI7UUFDdkIseURBQXlEO1FBQ3pELHFDQUFxQztRQUNyQyxTQUFTO1FBQ1QsZ0NBQWdDO1FBQ2hDLHNFQUFzRTtRQUN0RSxRQUFRO1FBQ1IsS0FBSztRQUVMLDJDQUEyQztJQUUvQyxDQUFDO0lBL0hRLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3RCLENBQUM7eUNBSzhCLGVBQU0sRUFBc0IsaUJBQVU7T0FKekQsYUFBYSxDQWdJekI7SUFBRCxvQkFBQztDQUFBLEFBaElELElBZ0lDO0FBaElZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QXBwU2V0dGluZ3N9IGZyb20gXCJ+L2FwcC9hcHAtc2V0dGluZ3NcIjtcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwSGVhZGVyc30gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcblxyXG5pbXBvcnQge0hlYWRlcnN9IGZyb20gXCJ+L2FwcC9zaGFyZWQvaGVhZGVyc1wiO1xyXG5cclxuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KVxyXG59O1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICducy1hdXRoJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9hdXRoLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2F1dGguY29tcG9uZW50LmNzcyddLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHByaXZhdGUgdXJsID0gYCR7QXBwU2V0dGluZ3MuQVBJX1VSTH0vdXNlcnMvY3JlYXRlYDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgX3JvdXRlcjogUm91dGVyLCBwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICAvLyBmaXJlYmFzZS5pbml0KHtcclxuICAgICAgICAvLyAgICAgb25BdXRoU3RhdGVDaGFuZ2VkOiBmdW5jdGlvbihkYXRhKSB7IC8vIG9wdGlvbmFsIGJ1dCB1c2VmdWwgdG8gaW1tZWRpYXRlbHkgcmUtbG9nb24gdGhlIHVzZXIgd2hlbiBoZSByZS12aXNpdHMgeW91ciBhcHBcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEubG9nZ2VkSW4gPyBcIkxvZ2dlZCBpbiB0byBmaXJlYmFzZVwiIDogXCJMb2dnZWQgb3V0IGZyb20gZmlyZWJhc2VcIik7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAoZGF0YS5sb2dnZWRJbikge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXNlcidzIGVtYWlsIGFkZHJlc3M6IFwiICsgKGRhdGEudXNlci5lbWFpbCA/IGRhdGEudXNlci5lbWFpbCA6IFwiTi9BXCIpKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBfcm91dGVyLlxyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25UYXBMb2dpbigpOiB2b2lkIHtcclxuICAgIC8vICAgICB2YXIgbGlzdGVuZXIgPSB7XHJcbiAgICAvLyAgICAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZCgoZGF0YSkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5sb2dnZWRJbiA/IFwiTG9nZ2VkIGluIHRvIGZpcmViYXNlXCIgOiBcIkxvZ2dlZCBvdXQgZnJvbSBmaXJlYmFzZVwiKTtcclxuICAgIC8vICAgICAgICAgICAgIGlmIChkYXRhLmxvZ2dlZEluKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIGluZm9cIiwgZGF0YS51c2VyKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICBmaXJlYmFzZS5yZW1vdmVBdXRoU3RhdGVMaXN0ZW5lcihsaXN0ZW5lcik7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5fcm9cclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gfSxcclxuICAgICAgICAgICAgLy8gdGhpc0FyZzogdGhpc1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmFjZWJvb2sgbG9naW5cIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGaXJlYmFzZSBcIiArIGZpcmViYXNlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgVE9LRU46ICR7QXBwU2V0dGluZ3MuVE9LRU59YCk7XHJcblxyXG4gICAgICAgIGZpcmViYXNlLmluaXQoe1xyXG4gICAgICAgICAgICAvLyBPcHRpb25hbGx5IHBhc3MgaW4gcHJvcGVydGllcyBmb3IgZGF0YWJhc2UsIGF1dGhlbnRpY2F0aW9uIGFuZCBjbG91ZCBtZXNzYWdpbmcsXHJcbiAgICAgICAgICAgIC8vIHNlZSB0aGVpciByZXNwZWN0aXZlIGRvY3MuXHJcblxyXG4gICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgIGluc3RhbmNlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBkb25lXCIpO1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UubG9naW4oe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGluc3RhbmNlLkxvZ2luVHlwZS5GQUNFQk9PSyxcclxuICAgICAgICAgICAgICAgICAgICAvLyBPcHRpb25hbFxyXG4gICAgICAgICAgICAgICAgICAgIGZhY2Vib29rT3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZTogWydwdWJsaWNfcHJvZmlsZScsICdlbWFpbCddXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuZ2V0QXV0aFRva2VuKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlZmF1bHQgZmFsc2UsIG5vdCByZWNvbW1lbmRlZCB0byBzZXQgdG8gdHJ1ZSBieSBGaXJlYmFzZSBidXQgZXhwb3NlZCBmb3Ige059IGRldnMgbm9uZXRoZWxlc3MgOilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlUmVmcmVzaDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbigodG9rZW4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF1dGggdG9rZW4gcmV0cmlldmVkOiBcIiArIHRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHBTZXR0aW5ncy5UT0tFTiA9IHRva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9ob21lL2l0ZW1zJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IHRva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogcmVzdWx0Lm5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cENsaWVudC5wb3N0KHRoaXMudXJsLCBkYXRhLCBIZWFkZXJzLmdldEF1dGhUb2tlbkhlYWRlcnMoKSkuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXV0aCB0b2tlbiByZXRyaWV2YWwgZXJyb3I6IFwiICsgZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZmlyZWJhc2UuaW5pdCBlcnJvcjogJHtlcnJvcn1gKTtcclxuICAgICAgICAgICAgICAgIGZpcmViYXNlLmxvZ2luKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuRkFDRUJPT0ssXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gT3B0aW9uYWxcclxuICAgICAgICAgICAgICAgICAgICBmYWNlYm9va09wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU6IFsncHVibGljX3Byb2ZpbGUnLCAnZW1haWwnXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcmViYXNlLmdldEF1dGhUb2tlbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWZhdWx0IGZhbHNlLCBub3QgcmVjb21tZW5kZWQgdG8gc2V0IHRvIHRydWUgYnkgRmlyZWJhc2UgYnV0IGV4cG9zZWQgZm9yIHtOfSBkZXZzIG5vbmV0aGVsZXNzIDopXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZVJlZnJlc2g6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKHRva2VuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdXRoIHRva2VuIHJldHJpZXZlZDogXCIgKyB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwU2V0dGluZ3MuVE9LRU4gPSB0b2tlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvaG9tZS9pdGVtcyddKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiB0b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IHJlc3VsdC5uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmh0dHBDbGllbnQucG9zdCh0aGlzLnVybCwgZGF0YSwgSGVhZGVycy5nZXRBdXRoVG9rZW5IZWFkZXJzKCkpLnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF1dGggdG9rZW4gcmV0cmlldmFsIGVycm9yOiBcIiArIGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIGZpcmViYXNlLmdldEF1dGhUb2tlbih7XHJcbiAgICAgICAgLy8gICAgIC8vIGRlZmF1bHQgZmFsc2UsIG5vdCByZWNvbW1lbmRlZCB0byBzZXQgdG8gdHJ1ZSBieSBGaXJlYmFzZSBidXQgZXhwb3NlZCBmb3Ige059IGRldnMgbm9uZXRoZWxlc3MgOilcclxuICAgICAgICAvLyAgICAgZm9yY2VSZWZyZXNoOiB0cnVlXHJcbiAgICAgICAgLy8gfSkudGhlbigodG9rZW4pID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiQXV0aCB0b2tlbiByZXRyaWV2ZWQ6IFwiICsgdG9rZW4pO1xyXG4gICAgICAgIC8vICAgICAgICAgQXBwU2V0dGluZ3MuVE9LRU4gPSB0b2tlbjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJBdXRoIHRva2VuIHJldHJpZXZhbCBlcnJvcjogXCIgKyBlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gKTtcclxuXHJcbiAgICAgICAgLy8gZmlyZWJhc2UuYWRkQXV0aFN0YXRlTGlzdGVuZXIobGlzdGVuZXIpO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuIl19