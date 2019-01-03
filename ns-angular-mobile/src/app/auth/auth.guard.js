"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_settings_1 = require("~/app/app-settings");
// import { CookieService, CookieOptions } from "angular2-cookie/core";
var firebase = require("nativescript-plugin-firebase");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(_router) {
        this._router = _router;
    }
    AuthGuard.prototype.getTokenFromFirebase = function () {
        firebase.getAuthToken({
            // default false, not recommended to set to true by Firebase but exposed for {N} devs nonetheless :)
            forceRefresh: false
        }).then(function (token) {
            console.log("Auth token retrieved: " + token);
            return app_settings_1.AppSettings.TOKEN = token;
        }, function (errorMessage) {
            console.log("Auth token retrieval error: " + errorMessage);
            return null;
        });
        return app_settings_1.AppSettings.TOKEN;
    };
    AuthGuard.prototype.getToken = function () {
        if (app_settings_1.AppSettings.TOKEN != null) {
            return app_settings_1.AppSettings.TOKEN;
        }
        return this.getTokenFromFirebase();
    };
    AuthGuard.prototype.isAuthenticated = function () {
        return (this.getToken() != null);
    };
    AuthGuard.prototype.canActivate = function (route, state) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("auth guard canActivate");
                // await this.profileService.get().toPromise().then(profile => this.utils.Profile = profile);
                if (!this.isAuthenticated()) {
                    this._router.navigate(['/login']);
                    return [2 /*return*/, false];
                }
                return [2 /*return*/, true];
            });
        });
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("auth guard canActivateChild");
                if (!this.isAuthenticated()) {
                    this._router.navigate(['/login']);
                    return [2 /*return*/, false];
                }
                return [2 /*return*/, true];
            });
        });
    };
    AuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsMENBQStHO0FBQy9HLG1EQUErQztBQUMvQyx1RUFBdUU7QUFFdkUsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFJekQ7SUFFSSxtQkFBb0IsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFBSSxDQUFDO0lBRWhDLHdDQUFvQixHQUE1QjtRQUNJLFFBQVEsQ0FBQyxZQUFZLENBQUM7WUFDbEIsb0dBQW9HO1lBQ3BHLFlBQVksRUFBRSxLQUFLO1NBQ3RCLENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBVSxLQUFLO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUM5QyxPQUFPLDBCQUFXLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNyQyxDQUFDLEVBQ0QsVUFBVSxZQUFZO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEdBQUcsWUFBWSxDQUFDLENBQUM7WUFDM0QsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQyxDQUNKLENBQUM7UUFFRixPQUFPLDBCQUFXLENBQUMsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFTyw0QkFBUSxHQUFoQjtRQUNJLElBQUksMEJBQVcsQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO1lBQUUsT0FBTywwQkFBVyxDQUFDLEtBQUssQ0FBQTtTQUFFO1FBRTNELE9BQU8sSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVPLG1DQUFlLEdBQXZCO1FBQ0ksT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUssK0JBQVcsR0FBakIsVUFBa0IsS0FBNkIsRUFBRSxLQUEwQjs7O2dCQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7Z0JBQ3RDLDZGQUE2RjtnQkFFN0YsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRTtvQkFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNsQyxzQkFBTyxLQUFLLEVBQUM7aUJBQ2hCO2dCQUNELHNCQUFPLElBQUksRUFBQzs7O0tBRWY7SUFDSyxvQ0FBZ0IsR0FBdEIsVUFBdUIsS0FBNkIsRUFBRSxLQUEwQjs7O2dCQUM1RSxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7Z0JBRTNDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDbEMsc0JBQU8sS0FBSyxFQUFDO2lCQUNoQjtnQkFDRCxzQkFBTyxJQUFJLEVBQUM7OztLQUNmO0lBbkRRLFNBQVM7UUFEckIsaUJBQVUsRUFBRTt5Q0FHb0IsZUFBTTtPQUYxQixTQUFTLENBcURyQjtJQUFELGdCQUFDO0NBQUEsQUFyREQsSUFxREM7QUFyRFksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgQ2FuQWN0aXZhdGUsIFJvdXRlciwgUm91dGVyU3RhdGVTbmFwc2hvdCwgVXJsU2VnbWVudCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtBcHBTZXR0aW5nc30gZnJvbSBcIn4vYXBwL2FwcC1zZXR0aW5nc1wiO1xyXG4vLyBpbXBvcnQgeyBDb29raWVTZXJ2aWNlLCBDb29raWVPcHRpb25zIH0gZnJvbSBcImFuZ3VsYXIyLWNvb2tpZS9jb3JlXCI7XHJcblxyXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikgeyB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRUb2tlbkZyb21GaXJlYmFzZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIGZpcmViYXNlLmdldEF1dGhUb2tlbih7XHJcbiAgICAgICAgICAgIC8vIGRlZmF1bHQgZmFsc2UsIG5vdCByZWNvbW1lbmRlZCB0byBzZXQgdG8gdHJ1ZSBieSBGaXJlYmFzZSBidXQgZXhwb3NlZCBmb3Ige059IGRldnMgbm9uZXRoZWxlc3MgOilcclxuICAgICAgICAgICAgZm9yY2VSZWZyZXNoOiBmYWxzZVxyXG4gICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdXRoIHRva2VuIHJldHJpZXZlZDogXCIgKyB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQXBwU2V0dGluZ3MuVE9LRU4gPSB0b2tlbjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdXRoIHRva2VuIHJldHJpZXZhbCBlcnJvcjogXCIgKyBlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gQXBwU2V0dGluZ3MuVE9LRU47XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRUb2tlbigpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmIChBcHBTZXR0aW5ncy5UT0tFTiAhPSBudWxsKSB7IHJldHVybiBBcHBTZXR0aW5ncy5UT0tFTiB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFRva2VuRnJvbUZpcmViYXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc0F1dGhlbnRpY2F0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmdldFRva2VuKCkgIT0gbnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhdXRoIGd1YXJkIGNhbkFjdGl2YXRlXCIpO1xyXG4gICAgICAgIC8vIGF3YWl0IHRoaXMucHJvZmlsZVNlcnZpY2UuZ2V0KCkudG9Qcm9taXNlKCkudGhlbihwcm9maWxlID0+IHRoaXMudXRpbHMuUHJvZmlsZSA9IHByb2ZpbGUpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNBdXRoZW50aWNhdGVkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgIH1cclxuICAgIGFzeW5jIGNhbkFjdGl2YXRlQ2hpbGQocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhdXRoIGd1YXJkIGNhbkFjdGl2YXRlQ2hpbGRcIik7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc0F1dGhlbnRpY2F0ZWQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==