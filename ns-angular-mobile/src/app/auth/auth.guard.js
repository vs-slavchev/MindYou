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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsMENBQStHO0FBQy9HLG1EQUErQztBQUMvQyx1RUFBdUU7QUFFdkUsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFJekQ7SUFFSSxtQkFBb0IsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFBSSxDQUFDO0lBRWhDLHdDQUFvQixHQUE1QjtRQUNJLFFBQVEsQ0FBQyxZQUFZLENBQUM7WUFDbEIsb0dBQW9HO1lBQ3BHLFlBQVksRUFBRSxLQUFLO1NBQ3RCLENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBVSxLQUFLO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUM5QyxPQUFPLDBCQUFXLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNyQyxDQUFDLEVBQ0QsVUFBVSxZQUFZO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEdBQUcsWUFBWSxDQUFDLENBQUM7WUFDM0QsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQyxDQUNKLENBQUM7UUFFRixPQUFPLDBCQUFXLENBQUMsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFTyw0QkFBUSxHQUFoQjtRQUNJLElBQUksMEJBQVcsQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO1lBQUUsT0FBTywwQkFBVyxDQUFDLEtBQUssQ0FBQTtTQUFFO1FBRTNELE9BQU8sSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVPLG1DQUFlLEdBQXZCO1FBQ0ksT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUssK0JBQVcsR0FBakIsVUFBa0IsS0FBNkIsRUFBRSxLQUEwQjs7O2dCQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7Z0JBQ3RDLDZGQUE2RjtnQkFFN0YsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRTtvQkFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNsQyxzQkFBTyxLQUFLLEVBQUM7aUJBQ2hCO2dCQUNELHNCQUFPLElBQUksRUFBQzs7O0tBRWY7SUFDSyxvQ0FBZ0IsR0FBdEIsVUFBdUIsS0FBNkIsRUFBRSxLQUEwQjs7O2dCQUM1RSxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7Z0JBRTNDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDbEMsc0JBQU8sS0FBSyxFQUFDO2lCQUNoQjtnQkFDRCxzQkFBTyxJQUFJLEVBQUM7OztLQUNmO0lBbkRRLFNBQVM7UUFEckIsaUJBQVUsRUFBRTt5Q0FHb0IsZUFBTTtPQUYxQixTQUFTLENBcURyQjtJQUFELGdCQUFDO0NBQUEsQUFyREQsSUFxREM7QUFyRFksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIENhbkFjdGl2YXRlLCBSb3V0ZXIsIFJvdXRlclN0YXRlU25hcHNob3QsIFVybFNlZ21lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0FwcFNldHRpbmdzfSBmcm9tIFwifi9hcHAvYXBwLXNldHRpbmdzXCI7XG4vLyBpbXBvcnQgeyBDb29raWVTZXJ2aWNlLCBDb29raWVPcHRpb25zIH0gZnJvbSBcImFuZ3VsYXIyLWNvb2tpZS9jb3JlXCI7XG5cbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7IH1cblxuICAgIHByaXZhdGUgZ2V0VG9rZW5Gcm9tRmlyZWJhc2UoKTogc3RyaW5nIHtcbiAgICAgICAgZmlyZWJhc2UuZ2V0QXV0aFRva2VuKHtcbiAgICAgICAgICAgIC8vIGRlZmF1bHQgZmFsc2UsIG5vdCByZWNvbW1lbmRlZCB0byBzZXQgdG8gdHJ1ZSBieSBGaXJlYmFzZSBidXQgZXhwb3NlZCBmb3Ige059IGRldnMgbm9uZXRoZWxlc3MgOilcbiAgICAgICAgICAgIGZvcmNlUmVmcmVzaDogZmFsc2VcbiAgICAgICAgfSkudGhlbihcbiAgICAgICAgICAgIGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXV0aCB0b2tlbiByZXRyaWV2ZWQ6IFwiICsgdG9rZW4pO1xuICAgICAgICAgICAgICAgIHJldHVybiBBcHBTZXR0aW5ncy5UT0tFTiA9IHRva2VuO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF1dGggdG9rZW4gcmV0cmlldmFsIGVycm9yOiBcIiArIGVycm9yTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIEFwcFNldHRpbmdzLlRPS0VOO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0VG9rZW4oKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKEFwcFNldHRpbmdzLlRPS0VOICE9IG51bGwpIHsgcmV0dXJuIEFwcFNldHRpbmdzLlRPS0VOIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRUb2tlbkZyb21GaXJlYmFzZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNBdXRoZW50aWNhdGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKHRoaXMuZ2V0VG9rZW4oKSAhPSBudWxsKTtcbiAgICB9XG5cbiAgICBhc3luYyBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJhdXRoIGd1YXJkIGNhbkFjdGl2YXRlXCIpO1xuICAgICAgICAvLyBhd2FpdCB0aGlzLnByb2ZpbGVTZXJ2aWNlLmdldCgpLnRvUHJvbWlzZSgpLnRoZW4ocHJvZmlsZSA9PiB0aGlzLnV0aWxzLlByb2ZpbGUgPSBwcm9maWxlKTtcblxuICAgICAgICBpZiAoIXRoaXMuaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIH1cbiAgICBhc3luYyBjYW5BY3RpdmF0ZUNoaWxkKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImF1dGggZ3VhcmQgY2FuQWN0aXZhdGVDaGlsZFwiKTtcblxuICAgICAgICBpZiAoIXRoaXMuaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbn1cbiJdfQ==