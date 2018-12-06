"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_settings_1 = require("~/app/app-settings");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
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
        var _this = this;
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
        console.log("Facebook login");
        // firebase.addAuthStateListener(listener);
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
                _this.httpClient.post(_this.url, data, httpOptions).subscribe();
            }, function (errorMessage) {
                console.log("Auth token retrieval error: " + errorMessage);
            });
        }, function (errorMessage) {
            console.log(errorMessage);
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUNoRCxtREFBK0M7QUFDL0MsMENBQXVDO0FBQ3ZDLDZDQUE2RDtBQUU3RCxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUN6RCxJQUFNLFdBQVcsR0FBRztJQUNoQixPQUFPLEVBQUUsSUFBSSxrQkFBVyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUM7Q0FDakUsQ0FBQztBQVNGO0lBSUksdUJBQW1CLE9BQWUsRUFBVSxVQUFzQjtRQUEvQyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUYxRCxRQUFHLEdBQU0sMEJBQVcsQ0FBQyxPQUFPLGtCQUFlLENBQUM7SUFHcEQsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxrQkFBa0I7UUFDbEIsOEhBQThIO1FBQzlILDZGQUE2RjtRQUM3RiwrQkFBK0I7UUFDL0IsbUdBQW1HO1FBQ25HLHVCQUF1QjtRQUN2QixZQUFZO1FBQ1osUUFBUTtRQUNSLE1BQU07SUFDVixDQUFDO0lBRUQsa0NBQVUsR0FBVjtRQUFBLGlCQThDQztRQTdDRCx1QkFBdUI7UUFDdkIseUNBQXlDO1FBQ3pDLGlHQUFpRztRQUNqRyxtQ0FBbUM7UUFDbkMsdURBQXVEO1FBQ3ZELDhEQUE4RDtRQUM5RCwyQkFBMkI7UUFDZixJQUFJO1FBQ1IsS0FBSztRQUNMLGdCQUFnQjtRQUNwQixNQUFNO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlCLDJDQUEyQztRQUMzQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ1gsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUTtZQUNqQyxXQUFXO1lBQ1gsZUFBZSxFQUFFO2dCQUNiLEtBQUssRUFBRSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQzthQUNyQztTQUVKLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2QixRQUFRLENBQUMsWUFBWSxDQUFDO2dCQUNsQixvR0FBb0c7Z0JBQ3BHLFlBQVksRUFBRSxLQUFLO2FBQ3RCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFLO2dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDLENBQUM7Z0JBQzlDLDBCQUFXLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDMUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLElBQUksR0FBRztvQkFDUCxJQUFJLEVBQUUsS0FBSztvQkFDWCxNQUFNLEVBQUUsTUFBTSxDQUFDLElBQUk7aUJBQ3RCLENBQUM7Z0JBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbEUsQ0FBQyxFQUNELFVBQVUsWUFBWTtnQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsR0FBRyxZQUFZLENBQUMsQ0FBQztZQUMvRCxDQUFDLENBQ0osQ0FBQztRQUNOLENBQUMsRUFDRCxVQUFVLFlBQVk7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFqRVEsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUNuQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDdEIsQ0FBQzt5Q0FLOEIsZUFBTSxFQUFzQixpQkFBVTtPQUp6RCxhQUFhLENBa0V6QjtJQUFELG9CQUFDO0NBQUEsQUFsRUQsSUFrRUM7QUFsRVksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QXBwU2V0dGluZ3N9IGZyb20gXCJ+L2FwcC9hcHAtc2V0dGluZ3NcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBIZWFkZXJzfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcbmNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pXG59O1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbnMtYXV0aCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2F1dGguY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2F1dGguY29tcG9uZW50LmNzcyddLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHJpdmF0ZSB1cmwgPSBgJHtBcHBTZXR0aW5ncy5BUElfVVJMfS91c2Vycy9jcmVhdGVgO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50KSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIC8vIGZpcmViYXNlLmluaXQoe1xuICAgICAgICAvLyAgICAgb25BdXRoU3RhdGVDaGFuZ2VkOiBmdW5jdGlvbihkYXRhKSB7IC8vIG9wdGlvbmFsIGJ1dCB1c2VmdWwgdG8gaW1tZWRpYXRlbHkgcmUtbG9nb24gdGhlIHVzZXIgd2hlbiBoZSByZS12aXNpdHMgeW91ciBhcHBcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmxvZ2dlZEluID8gXCJMb2dnZWQgaW4gdG8gZmlyZWJhc2VcIiA6IFwiTG9nZ2VkIG91dCBmcm9tIGZpcmViYXNlXCIpO1xuICAgICAgICAvLyAgICAgICAgIGlmIChkYXRhLmxvZ2dlZEluKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXNlcidzIGVtYWlsIGFkZHJlc3M6IFwiICsgKGRhdGEudXNlci5lbWFpbCA/IGRhdGEudXNlci5lbWFpbCA6IFwiTi9BXCIpKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgX3JvdXRlci5cbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0pO1xuICAgIH1cblxuICAgIG9uVGFwTG9naW4oKTogdm9pZCB7XG4gICAgLy8gICAgIHZhciBsaXN0ZW5lciA9IHtcbiAgICAvLyAgICAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZCgoZGF0YSkgPT4ge1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEubG9nZ2VkSW4gPyBcIkxvZ2dlZCBpbiB0byBmaXJlYmFzZVwiIDogXCJMb2dnZWQgb3V0IGZyb20gZmlyZWJhc2VcIik7XG4gICAgLy8gICAgICAgICAgICAgaWYgKGRhdGEubG9nZ2VkSW4pIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIGluZm9cIiwgZGF0YS51c2VyKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgZmlyZWJhc2UucmVtb3ZlQXV0aFN0YXRlTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLl9yb1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAvLyB0aGlzQXJnOiB0aGlzXG4gICAgICAgIC8vIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZhY2Vib29rIGxvZ2luXCIpO1xuICAgICAgICAvLyBmaXJlYmFzZS5hZGRBdXRoU3RhdGVMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICAgIGZpcmViYXNlLmxvZ2luKHtcbiAgICAgICAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5GQUNFQk9PSyxcbiAgICAgICAgICAgIC8vIE9wdGlvbmFsXG4gICAgICAgICAgICBmYWNlYm9va09wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBzY29wZTogWydwdWJsaWNfcHJvZmlsZScsICdlbWFpbCddXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgZmlyZWJhc2UuZ2V0QXV0aFRva2VuKHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZGVmYXVsdCBmYWxzZSwgbm90IHJlY29tbWVuZGVkIHRvIHNldCB0byB0cnVlIGJ5IEZpcmViYXNlIGJ1dCBleHBvc2VkIGZvciB7Tn0gZGV2cyBub25ldGhlbGVzcyA6KVxuICAgICAgICAgICAgICAgICAgICBmb3JjZVJlZnJlc2g6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSkudGhlbigodG9rZW4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXV0aCB0b2tlbiByZXRyaWV2ZWQ6IFwiICsgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwU2V0dGluZ3MuVE9LRU4gPSB0b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9ob21lL2l0ZW1zJ10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiB0b2tlbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogcmVzdWx0Lm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cENsaWVudC5wb3N0KHRoaXMudXJsLCBkYXRhLCBodHRwT3B0aW9ucykuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXV0aCB0b2tlbiByZXRyaWV2YWwgZXJyb3I6IFwiICsgZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxufVxuXG4iXX0=