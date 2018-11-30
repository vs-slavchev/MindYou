"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var app_settings_1 = require("~/app/app-settings");
var http_1 = require("@angular/common/http");
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
        return this.http.get("" + this.url + app_settings_1.AppSettings.TOKEN + "/recent")
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGlzdGljLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGF0aXN0aWMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2QkFBb0M7QUFDcEMsNENBQW9EO0FBQ3BELG1EQUErQztBQUUvQyw2Q0FBNkQ7QUFHN0QsSUFBTSxXQUFXLEdBQUc7SUFDaEIsT0FBTyxFQUFFLElBQUksa0JBQVcsQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDO0NBQ2pFLENBQUM7QUFHRjtJQUtJLDBCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBSDVCLFFBQUcsR0FBTSwwQkFBVyxDQUFDLE9BQU8sb0NBQWlDLENBQUMsQ0FBRSxpQkFBaUI7UUFJckYsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCx1Q0FBWSxHQUFaO1FBQ0ksSUFBSSxXQUFXLEdBQUcsRUFBQyxPQUFPLEVBQUUsSUFBSSxrQkFBVyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQjtnQkFDdkUsZUFBZSxFQUFFLDBCQUFXLENBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQzlDLE9BQU8sV0FBVyxDQUFBO0lBQ3RCLENBQUM7SUFFRCx3Q0FBYSxHQUFiO1FBQUEsaUJBT0M7UUFORyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUFXLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWMsS0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLDBCQUFXLENBQUMsS0FBSyxZQUFTLENBQUc7YUFDeEUsSUFBSSxDQUNELGVBQUcsQ0FBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLEtBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxFQUNqRCxzQkFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQ3BELENBQUM7SUFDVixDQUFDO0lBRU8sOEJBQUcsR0FBWCxVQUFZLE9BQWU7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBb0IsT0FBUyxDQUFDLENBQUM7UUFDM0MsMERBQTBEO0lBQzlELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLHNDQUFXLEdBQW5CLFVBQXVCLFNBQXVCLEVBQUUsTUFBVTtRQUExRCxpQkFZQztRQVpzQiwwQkFBQSxFQUFBLHVCQUF1QjtRQUMxQyxPQUFPLFVBQUMsS0FBVTtZQUVkLHdEQUF3RDtZQUN4RCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMseUJBQXlCO1lBRS9DLDhEQUE4RDtZQUM5RCxLQUFJLENBQUMsR0FBRyxDQUFJLFNBQVMsaUJBQVksS0FBSyxDQUFDLE9BQVMsQ0FBQyxDQUFDO1lBRWxELHlEQUF5RDtZQUN6RCxPQUFPLFNBQUUsQ0FBQyxNQUFXLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUM7SUFDTixDQUFDO0lBL0NRLGdCQUFnQjtRQUQ1QixpQkFBVSxFQUFFO3lDQU1pQixpQkFBVTtPQUwzQixnQkFBZ0IsQ0FpRDVCO0lBQUQsdUJBQUM7Q0FBQSxBQWpERCxJQWlEQztBQWpEWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtjYXRjaEVycm9yLCBtYXAsIHRhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtBcHBTZXR0aW5nc30gZnJvbSBcIn4vYXBwL2FwcC1zZXR0aW5nc1wiO1xuXG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge1N0YXRpc3RpY30gZnJvbSBcIn4vYXBwL2hvbWUvc3RhdGlzdGljL3N0YXRpc3RpY1wiO1xuXG5jb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KVxufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0YXRpc3RpY1NlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSB1cmwgPSBgJHtBcHBTZXR0aW5ncy5BUElfVVJMfS9zdGF0aXN0aWNzL2hvdXJzLXBlci1hY3Rpdml0eS9gOyAgLy8gVVJMIHRvIHdlYiBhcGlcblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbml0IGFjdGl2aXRpZXMgc2VydmljZScpO1xuICAgIH1cblxuICAgIGFkZEF1dGhUb2tlbigpIHtcbiAgICAgICAgbGV0IGh0dHBPcHRpb25zID0ge2hlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IEFwcFNldHRpbmdzLlRPS0VOfSl9O1xuICAgICAgICByZXR1cm4gaHR0cE9wdGlvbnNcbiAgICB9XG5cbiAgICBnZXRTdGF0aXN0aWNzKCk6IE9ic2VydmFibGU8U3RhdGlzdGljW10+IHtcbiAgICAgICAgY29uc29sZS5sb2coQXBwU2V0dGluZ3MuQVBJX1VSTCwgdGhpcy5hZGRBdXRoVG9rZW4oKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFN0YXRpc3RpY1tdPihgJHt0aGlzLnVybH0ke0FwcFNldHRpbmdzLlRPS0VOfS9yZWNlbnRgLCApXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICB0YXAoc3RhdGlzdGljcyA9PiB0aGlzLmxvZygnZmV0Y2hlZCBzdGF0aXN0aWNzJykpLFxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcignZ2V0QWN0aXZpdGllcycsIFtdKSlcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2cobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBY3Rpdml0eVNlcnZpY2U6ICR7bWVzc2FnZX1gKTtcbiAgICAgICAgLy8gdGhpcy5tZXNzYWdlU2VydmljZS5hZGQoYEFjdGl2aXR5U2VydmljZTogJHttZXNzYWdlfWApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBIdHRwIG9wZXJhdGlvbiB0aGF0IGZhaWxlZC5cbiAgICAgKiBMZXQgdGhlIGFwcCBjb250aW51ZS5cbiAgICAgKiBAcGFyYW0gb3BlcmF0aW9uIC0gbmFtZSBvZiB0aGUgb3BlcmF0aW9uIHRoYXQgZmFpbGVkXG4gICAgICogQHBhcmFtIHJlc3VsdCAtIG9wdGlvbmFsIHZhbHVlIHRvIHJldHVybiBhcyB0aGUgb2JzZXJ2YWJsZSByZXN1bHRcbiAgICAgKi9cbiAgICBwcml2YXRlIGhhbmRsZUVycm9yPFQ+KG9wZXJhdGlvbiA9ICdvcGVyYXRpb24nLCByZXN1bHQ/OiBUKSB7XG4gICAgICAgIHJldHVybiAoZXJyb3I6IGFueSk6IE9ic2VydmFibGU8VD4gPT4ge1xuXG4gICAgICAgICAgICAvLyBUT0RPOiBzZW5kIHRoZSBlcnJvciB0byByZW1vdGUgbG9nZ2luZyBpbmZyYXN0cnVjdHVyZVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7IC8vIGxvZyB0byBjb25zb2xlIGluc3RlYWRcblxuICAgICAgICAgICAgLy8gVE9ETzogYmV0dGVyIGpvYiBvZiB0cmFuc2Zvcm1pbmcgZXJyb3IgZm9yIHVzZXIgY29uc3VtcHRpb25cbiAgICAgICAgICAgIHRoaXMubG9nKGAke29wZXJhdGlvbn0gZmFpbGVkOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG5cbiAgICAgICAgICAgIC8vIExldCB0aGUgYXBwIGtlZXAgcnVubmluZyBieSByZXR1cm5pbmcgYW4gZW1wdHkgcmVzdWx0LlxuICAgICAgICAgICAgcmV0dXJuIG9mKHJlc3VsdCBhcyBUKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbn1cbiJdfQ==