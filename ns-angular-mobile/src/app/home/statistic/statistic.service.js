"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var app_settings_1 = require("~/app/app-settings");
var http_1 = require("@angular/common/http");
var headers_1 = require("~/app/shared/headers");
var StatisticService = /** @class */ (function () {
    function StatisticService(http) {
        this.http = http;
        this.url = app_settings_1.AppSettings.API_URL + "/statistics/hours-per-activity/"; // URL to web api
        console.log('init activities service');
    }
    StatisticService.prototype.getStatistics = function (period) {
        var _this = this;
        return this.http.get("" + this.url + period, headers_1.Headers.getAuthTokenHeaders())
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGlzdGljLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGF0aXN0aWMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2QkFBb0M7QUFDcEMsNENBQW9EO0FBQ3BELG1EQUErQztBQUUvQyw2Q0FBZ0Q7QUFFaEQsZ0RBQTZDO0FBSTdDO0lBS0ksMEJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFINUIsUUFBRyxHQUFNLDBCQUFXLENBQUMsT0FBTyxvQ0FBaUMsQ0FBQyxDQUFFLGlCQUFpQjtRQUlyRixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELHdDQUFhLEdBQWIsVUFBYyxNQUFjO1FBQTVCLGlCQU1DO1FBTEcsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBYyxLQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBUSxFQUFFLGlCQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzthQUNuRixJQUFJLENBQ0QsZUFBRyxDQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxFQUE5QixDQUE4QixDQUFDLEVBQ2pELHNCQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FDcEQsQ0FBQztJQUNWLENBQUM7SUFFTyw4QkFBRyxHQUFYLFVBQVksT0FBZTtRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFvQixPQUFTLENBQUMsQ0FBQztRQUMzQywwREFBMEQ7SUFDOUQsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ssc0NBQVcsR0FBbkIsVUFBdUIsU0FBdUIsRUFBRSxNQUFVO1FBQTFELGlCQVlDO1FBWnNCLDBCQUFBLEVBQUEsdUJBQXVCO1FBQzFDLE9BQU8sVUFBQyxLQUFVO1lBRWQsd0RBQXdEO1lBQ3hELE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyx5QkFBeUI7WUFFL0MsOERBQThEO1lBQzlELEtBQUksQ0FBQyxHQUFHLENBQUksU0FBUyxpQkFBWSxLQUFLLENBQUMsT0FBUyxDQUFDLENBQUM7WUFFbEQseURBQXlEO1lBQ3pELE9BQU8sU0FBRSxDQUFDLE1BQVcsQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQztJQUNOLENBQUM7SUF4Q1EsZ0JBQWdCO1FBRDVCLGlCQUFVLEVBQUU7eUNBTWlCLGlCQUFVO09BTDNCLGdCQUFnQixDQTBDNUI7SUFBRCx1QkFBQztDQUFBLEFBMUNELElBMENDO0FBMUNZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge09ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtjYXRjaEVycm9yLCBtYXAsIHRhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQge0FwcFNldHRpbmdzfSBmcm9tIFwifi9hcHAvYXBwLXNldHRpbmdzXCI7XHJcblxyXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHtTdGF0aXN0aWN9IGZyb20gXCJ+L2FwcC9ob21lL3N0YXRpc3RpYy9zdGF0aXN0aWNcIjtcclxuaW1wb3J0IHtIZWFkZXJzfSBmcm9tIFwifi9hcHAvc2hhcmVkL2hlYWRlcnNcIjtcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTdGF0aXN0aWNTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIHVybCA9IGAke0FwcFNldHRpbmdzLkFQSV9VUkx9L3N0YXRpc3RpY3MvaG91cnMtcGVyLWFjdGl2aXR5L2A7ICAvLyBVUkwgdG8gd2ViIGFwaVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaW5pdCBhY3Rpdml0aWVzIHNlcnZpY2UnKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdGF0aXN0aWNzKHBlcmlvZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxTdGF0aXN0aWNbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFN0YXRpc3RpY1tdPihgJHt0aGlzLnVybH0ke3BlcmlvZH1gLCBIZWFkZXJzLmdldEF1dGhUb2tlbkhlYWRlcnMoKSlcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICB0YXAoc3RhdGlzdGljcyA9PiB0aGlzLmxvZygnZmV0Y2hlZCBzdGF0aXN0aWNzJykpLFxyXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKCdnZXRBY3Rpdml0aWVzJywgW10pKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9nKG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBBY3Rpdml0eVNlcnZpY2U6ICR7bWVzc2FnZX1gKTtcclxuICAgICAgICAvLyB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZChgQWN0aXZpdHlTZXJ2aWNlOiAke21lc3NhZ2V9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGUgSHR0cCBvcGVyYXRpb24gdGhhdCBmYWlsZWQuXHJcbiAgICAgKiBMZXQgdGhlIGFwcCBjb250aW51ZS5cclxuICAgICAqIEBwYXJhbSBvcGVyYXRpb24gLSBuYW1lIG9mIHRoZSBvcGVyYXRpb24gdGhhdCBmYWlsZWRcclxuICAgICAqIEBwYXJhbSByZXN1bHQgLSBvcHRpb25hbCB2YWx1ZSB0byByZXR1cm4gYXMgdGhlIG9ic2VydmFibGUgcmVzdWx0XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3I8VD4ob3BlcmF0aW9uID0gJ29wZXJhdGlvbicsIHJlc3VsdD86IFQpIHtcclxuICAgICAgICByZXR1cm4gKGVycm9yOiBhbnkpOiBPYnNlcnZhYmxlPFQ+ID0+IHtcclxuXHJcbiAgICAgICAgICAgIC8vIFRPRE86IHNlbmQgdGhlIGVycm9yIHRvIHJlbW90ZSBsb2dnaW5nIGluZnJhc3RydWN0dXJlXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpOyAvLyBsb2cgdG8gY29uc29sZSBpbnN0ZWFkXHJcblxyXG4gICAgICAgICAgICAvLyBUT0RPOiBiZXR0ZXIgam9iIG9mIHRyYW5zZm9ybWluZyBlcnJvciBmb3IgdXNlciBjb25zdW1wdGlvblxyXG4gICAgICAgICAgICB0aGlzLmxvZyhgJHtvcGVyYXRpb259IGZhaWxlZDogJHtlcnJvci5tZXNzYWdlfWApO1xyXG5cclxuICAgICAgICAgICAgLy8gTGV0IHRoZSBhcHAga2VlcCBydW5uaW5nIGJ5IHJldHVybmluZyBhbiBlbXB0eSByZXN1bHQuXHJcbiAgICAgICAgICAgIHJldHVybiBvZihyZXN1bHQgYXMgVCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19