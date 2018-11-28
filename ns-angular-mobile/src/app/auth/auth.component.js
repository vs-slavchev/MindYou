"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_settings_1 = require("~/app/app-settings");
var router_1 = require("@angular/router");
var firebase = require("nativescript-plugin-firebase");
var AuthComponent = /** @class */ (function () {
    function AuthComponent(_router) {
        this._router = _router;
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
        __metadata("design:paramtypes", [router_1.Router])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUNoRCxtREFBK0M7QUFDL0MsMENBQXVDO0FBRXZDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBUXpEO0lBRUksdUJBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO0lBQ2xDLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksa0JBQWtCO1FBQ2xCLDhIQUE4SDtRQUM5SCw2RkFBNkY7UUFDN0YsK0JBQStCO1FBQy9CLG1HQUFtRztRQUNuRyx1QkFBdUI7UUFDdkIsWUFBWTtRQUNaLFFBQVE7UUFDUixNQUFNO0lBQ1YsQ0FBQztJQUVELGtDQUFVLEdBQVY7UUFBQSxpQkF3Q0M7UUF2Q0QsdUJBQXVCO1FBQ3ZCLHlDQUF5QztRQUN6QyxpR0FBaUc7UUFDakcsbUNBQW1DO1FBQ25DLHVEQUF1RDtRQUN2RCw4REFBOEQ7UUFDOUQsMkJBQTJCO1FBQ2YsSUFBSTtRQUNSLEtBQUs7UUFDTCxnQkFBZ0I7UUFDcEIsTUFBTTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM5QiwyQ0FBMkM7UUFDM0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNYLElBQUksRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVE7WUFDakMsV0FBVztZQUNYLGVBQWUsRUFBRTtnQkFDYixLQUFLLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUM7YUFDckM7U0FFSixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkIsUUFBUSxDQUFDLFlBQVksQ0FBQztnQkFDbEIsb0dBQW9HO2dCQUNwRyxZQUFZLEVBQUUsS0FBSzthQUN0QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBSztnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixHQUFHLEtBQUssQ0FBQyxDQUFDO2dCQUM5QywwQkFBVyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQzFCLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUMzQyxDQUFDLEVBQ0QsVUFBVSxZQUFZO2dCQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixHQUFHLFlBQVksQ0FBQyxDQUFDO1lBQy9ELENBQUMsQ0FDSixDQUFDO1FBQ04sQ0FBQyxFQUNELFVBQVUsWUFBWTtZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQXpEUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ25DLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUN0QixDQUFDO3lDQUc4QixlQUFNO09BRnpCLGFBQWEsQ0EwRHpCO0lBQUQsb0JBQUM7Q0FBQSxBQTFERCxJQTBEQztBQTFEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBcHBTZXR0aW5nc30gZnJvbSBcIn4vYXBwL2FwcC1zZXR0aW5nc1wiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICducy1hdXRoJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXV0aC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYXV0aC5jb21wb25lbnQuY3NzJ10sXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgQXV0aENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgX3JvdXRlcjogUm91dGVyKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIC8vIGZpcmViYXNlLmluaXQoe1xuICAgICAgICAvLyAgICAgb25BdXRoU3RhdGVDaGFuZ2VkOiBmdW5jdGlvbihkYXRhKSB7IC8vIG9wdGlvbmFsIGJ1dCB1c2VmdWwgdG8gaW1tZWRpYXRlbHkgcmUtbG9nb24gdGhlIHVzZXIgd2hlbiBoZSByZS12aXNpdHMgeW91ciBhcHBcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmxvZ2dlZEluID8gXCJMb2dnZWQgaW4gdG8gZmlyZWJhc2VcIiA6IFwiTG9nZ2VkIG91dCBmcm9tIGZpcmViYXNlXCIpO1xuICAgICAgICAvLyAgICAgICAgIGlmIChkYXRhLmxvZ2dlZEluKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXNlcidzIGVtYWlsIGFkZHJlc3M6IFwiICsgKGRhdGEudXNlci5lbWFpbCA/IGRhdGEudXNlci5lbWFpbCA6IFwiTi9BXCIpKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgX3JvdXRlci5cbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0pO1xuICAgIH1cblxuICAgIG9uVGFwTG9naW4oKTogdm9pZCB7XG4gICAgLy8gICAgIHZhciBsaXN0ZW5lciA9IHtcbiAgICAvLyAgICAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZCgoZGF0YSkgPT4ge1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEubG9nZ2VkSW4gPyBcIkxvZ2dlZCBpbiB0byBmaXJlYmFzZVwiIDogXCJMb2dnZWQgb3V0IGZyb20gZmlyZWJhc2VcIik7XG4gICAgLy8gICAgICAgICAgICAgaWYgKGRhdGEubG9nZ2VkSW4pIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIGluZm9cIiwgZGF0YS51c2VyKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgZmlyZWJhc2UucmVtb3ZlQXV0aFN0YXRlTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLl9yb1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAvLyB0aGlzQXJnOiB0aGlzXG4gICAgICAgIC8vIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZhY2Vib29rIGxvZ2luXCIpO1xuICAgICAgICAvLyBmaXJlYmFzZS5hZGRBdXRoU3RhdGVMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICAgIGZpcmViYXNlLmxvZ2luKHtcbiAgICAgICAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5GQUNFQk9PSyxcbiAgICAgICAgICAgIC8vIE9wdGlvbmFsXG4gICAgICAgICAgICBmYWNlYm9va09wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBzY29wZTogWydwdWJsaWNfcHJvZmlsZScsICdlbWFpbCddXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgZmlyZWJhc2UuZ2V0QXV0aFRva2VuKHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZGVmYXVsdCBmYWxzZSwgbm90IHJlY29tbWVuZGVkIHRvIHNldCB0byB0cnVlIGJ5IEZpcmViYXNlIGJ1dCBleHBvc2VkIGZvciB7Tn0gZGV2cyBub25ldGhlbGVzcyA6KVxuICAgICAgICAgICAgICAgICAgICBmb3JjZVJlZnJlc2g6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSkudGhlbigodG9rZW4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXV0aCB0b2tlbiByZXRyaWV2ZWQ6IFwiICsgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwU2V0dGluZ3MuVE9LRU4gPSB0b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9ob21lL2l0ZW1zJ10pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF1dGggdG9rZW4gcmV0cmlldmFsIGVycm9yOiBcIiArIGVycm9yTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==