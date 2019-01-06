"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var app_settings_1 = require("~/app/app-settings");
var http_1 = require("@angular/common/http");
var headers_1 = require("~/app/shared/headers");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var StatisticService = /** @class */ (function () {
    function StatisticService(http) {
        this.http = http;
        this.url = app_settings_1.AppSettings.API_URL + "/statistics/hours-per-activity/"; // URL to web api
        console.log('init activities service');
    }
    StatisticService.prototype.addAuthToken = function () {
        var httpOptions = { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json',
                'Authorization': app_settings_1.AppSettings.TOKEN }) };
        return httpOptions;
    };
    StatisticService.prototype.getStatistics = function () {
        var _this = this;
        console.log(app_settings_1.AppSettings.API_URL, this.addAuthToken());
        // return this.http.get<Statistic[]>(`${this.url}${AppSettings.TOKEN}/recent`, )
        return this.http.get(this.url + "week", headers_1.Headers.getAuthTokenHeaders())
            .pipe(operators_1.tap(function (statistics) { return _this.log('fetched statistics'); }), operators_1.catchError(this.handleError('getActivities', [])));
    };
    StatisticService.prototype.log = function (message) {
        console.log("ActivityService: " + message);
        // this.messageService.add(`ActivityService: ${message}`);
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    StatisticService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return rxjs_1.of(result);
        };
    };
    StatisticService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], StatisticService);
    return StatisticService;
}());
exports.StatisticService = StatisticService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGlzdGljLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGF0aXN0aWMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2QkFBb0M7QUFDcEMsNENBQW9EO0FBQ3BELG1EQUErQztBQUUvQyw2Q0FBNkQ7QUFFN0QsZ0RBQTZDO0FBRTdDLElBQU0sV0FBVyxHQUFHO0lBQ2hCLE9BQU8sRUFBRSxJQUFJLGtCQUFXLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQztDQUNqRSxDQUFDO0FBR0Y7SUFLSSwwQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUg1QixRQUFHLEdBQU0sMEJBQVcsQ0FBQyxPQUFPLG9DQUFpQyxDQUFDLENBQUUsaUJBQWlCO1FBSXJGLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsdUNBQVksR0FBWjtRQUNJLElBQUksV0FBVyxHQUFHLEVBQUMsT0FBTyxFQUFFLElBQUksa0JBQVcsQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ3ZFLGVBQWUsRUFBRSwwQkFBVyxDQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUM5QyxPQUFPLFdBQVcsQ0FBQTtJQUN0QixDQUFDO0lBRUQsd0NBQWEsR0FBYjtRQUFBLGlCQVFDO1FBUEcsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUN0RCxnRkFBZ0Y7UUFDaEYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBaUIsSUFBSSxDQUFDLEdBQUcsU0FBTSxFQUFFLGlCQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzthQUM5RSxJQUFJLENBQ0QsZUFBRyxDQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxFQUE5QixDQUE4QixDQUFDLEVBQ2pELHNCQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FDcEQsQ0FBQztJQUNWLENBQUM7SUFFTyw4QkFBRyxHQUFYLFVBQVksT0FBZTtRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFvQixPQUFTLENBQUMsQ0FBQztRQUMzQywwREFBMEQ7SUFDOUQsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ssc0NBQVcsR0FBbkIsVUFBdUIsU0FBdUIsRUFBRSxNQUFVO1FBQTFELGlCQVlDO1FBWnNCLDBCQUFBLEVBQUEsdUJBQXVCO1FBQzFDLE9BQU8sVUFBQyxLQUFVO1lBRWQsd0RBQXdEO1lBQ3hELE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyx5QkFBeUI7WUFFL0MsOERBQThEO1lBQzlELEtBQUksQ0FBQyxHQUFHLENBQUksU0FBUyxpQkFBWSxLQUFLLENBQUMsT0FBUyxDQUFDLENBQUM7WUFFbEQseURBQXlEO1lBQ3pELE9BQU8sU0FBRSxDQUFDLE1BQVcsQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQztJQUNOLENBQUM7SUFoRFEsZ0JBQWdCO1FBRDVCLGlCQUFVLEVBQUU7eUNBTWlCLGlCQUFVO09BTDNCLGdCQUFnQixDQWtENUI7SUFBRCx1QkFBQztDQUFBLEFBbERELElBa0RDO0FBbERZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge09ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtjYXRjaEVycm9yLCBtYXAsIHRhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQge0FwcFNldHRpbmdzfSBmcm9tIFwifi9hcHAvYXBwLXNldHRpbmdzXCI7XHJcblxyXG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7U3RhdGlzdGljfSBmcm9tIFwifi9hcHAvaG9tZS9zdGF0aXN0aWMvc3RhdGlzdGljXCI7XHJcbmltcG9ydCB7SGVhZGVyc30gZnJvbSBcIn4vYXBwL3NoYXJlZC9oZWFkZXJzXCI7XHJcblxyXG5jb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pXHJcbn07XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTdGF0aXN0aWNTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIHVybCA9IGAke0FwcFNldHRpbmdzLkFQSV9VUkx9L3N0YXRpc3RpY3MvaG91cnMtcGVyLWFjdGl2aXR5L2A7ICAvLyBVUkwgdG8gd2ViIGFwaVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaW5pdCBhY3Rpdml0aWVzIHNlcnZpY2UnKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRBdXRoVG9rZW4oKSB7XHJcbiAgICAgICAgbGV0IGh0dHBPcHRpb25zID0ge2hlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogQXBwU2V0dGluZ3MuVE9LRU59KX07XHJcbiAgICAgICAgcmV0dXJuIGh0dHBPcHRpb25zXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RhdGlzdGljcygpOiBPYnNlcnZhYmxlPFN0YXRpc3RpY1tdPiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coQXBwU2V0dGluZ3MuQVBJX1VSTCwgdGhpcy5hZGRBdXRoVG9rZW4oKSk7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQ8U3RhdGlzdGljW10+KGAke3RoaXMudXJsfSR7QXBwU2V0dGluZ3MuVE9LRU59L3JlY2VudGAsIClcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxTdGF0aXN0aWNbXT4oYCR7dGhpcy51cmx9d2Vla2AsIEhlYWRlcnMuZ2V0QXV0aFRva2VuSGVhZGVycygpKVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIHRhcChzdGF0aXN0aWNzID0+IHRoaXMubG9nKCdmZXRjaGVkIHN0YXRpc3RpY3MnKSksXHJcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IoJ2dldEFjdGl2aXRpZXMnLCBbXSkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2cobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYEFjdGl2aXR5U2VydmljZTogJHttZXNzYWdlfWApO1xyXG4gICAgICAgIC8vIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKGBBY3Rpdml0eVNlcnZpY2U6ICR7bWVzc2FnZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSBIdHRwIG9wZXJhdGlvbiB0aGF0IGZhaWxlZC5cclxuICAgICAqIExldCB0aGUgYXBwIGNvbnRpbnVlLlxyXG4gICAgICogQHBhcmFtIG9wZXJhdGlvbiAtIG5hbWUgb2YgdGhlIG9wZXJhdGlvbiB0aGF0IGZhaWxlZFxyXG4gICAgICogQHBhcmFtIHJlc3VsdCAtIG9wdGlvbmFsIHZhbHVlIHRvIHJldHVybiBhcyB0aGUgb2JzZXJ2YWJsZSByZXN1bHRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcjxUPihvcGVyYXRpb24gPSAnb3BlcmF0aW9uJywgcmVzdWx0PzogVCkge1xyXG4gICAgICAgIHJldHVybiAoZXJyb3I6IGFueSk6IE9ic2VydmFibGU8VD4gPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gVE9ETzogc2VuZCB0aGUgZXJyb3IgdG8gcmVtb3RlIGxvZ2dpbmcgaW5mcmFzdHJ1Y3R1cmVcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7IC8vIGxvZyB0byBjb25zb2xlIGluc3RlYWRcclxuXHJcbiAgICAgICAgICAgIC8vIFRPRE86IGJldHRlciBqb2Igb2YgdHJhbnNmb3JtaW5nIGVycm9yIGZvciB1c2VyIGNvbnN1bXB0aW9uXHJcbiAgICAgICAgICAgIHRoaXMubG9nKGAke29wZXJhdGlvbn0gZmFpbGVkOiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcblxyXG4gICAgICAgICAgICAvLyBMZXQgdGhlIGFwcCBrZWVwIHJ1bm5pbmcgYnkgcmV0dXJuaW5nIGFuIGVtcHR5IHJlc3VsdC5cclxuICAgICAgICAgICAgcmV0dXJuIG9mKHJlc3VsdCBhcyBUKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=