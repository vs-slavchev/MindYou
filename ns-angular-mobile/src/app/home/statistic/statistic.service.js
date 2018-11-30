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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGlzdGljLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGF0aXN0aWMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2QkFBb0M7QUFDcEMsNENBQW9EO0FBQ3BELG1EQUErQztBQUUvQyw2Q0FBNkQ7QUFHN0QsSUFBTSxXQUFXLEdBQUc7SUFDaEIsT0FBTyxFQUFFLElBQUksa0JBQVcsQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDO0NBQ2pFLENBQUM7QUFHRjtJQUtJLDBCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBSDVCLFFBQUcsR0FBTSwwQkFBVyxDQUFDLE9BQU8sb0NBQWlDLENBQUMsQ0FBRSxpQkFBaUI7UUFJckYsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCx1Q0FBWSxHQUFaO1FBQ0ksSUFBSSxXQUFXLEdBQUcsRUFBQyxPQUFPLEVBQUUsSUFBSSxrQkFBVyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQjtnQkFDdkUsZUFBZSxFQUFFLDBCQUFXLENBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQzlDLE9BQU8sV0FBVyxDQUFBO0lBQ3RCLENBQUM7SUFFRCx3Q0FBYSxHQUFiO1FBQUEsaUJBT0M7UUFORyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUFXLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWMsS0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLDBCQUFXLENBQUMsS0FBSyxZQUFTLENBQUc7YUFDeEUsSUFBSSxDQUNELGVBQUcsQ0FBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLEtBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxFQUNqRCxzQkFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQ3BELENBQUM7SUFDVixDQUFDO0lBRU8sOEJBQUcsR0FBWCxVQUFZLE9BQWU7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBb0IsT0FBUyxDQUFDLENBQUM7UUFDM0MsMERBQTBEO0lBQzlELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLHNDQUFXLEdBQW5CLFVBQXVCLFNBQXVCLEVBQUUsTUFBVTtRQUExRCxpQkFZQztRQVpzQiwwQkFBQSxFQUFBLHVCQUF1QjtRQUMxQyxPQUFPLFVBQUMsS0FBVTtZQUVkLHdEQUF3RDtZQUN4RCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMseUJBQXlCO1lBRS9DLDhEQUE4RDtZQUM5RCxLQUFJLENBQUMsR0FBRyxDQUFJLFNBQVMsaUJBQVksS0FBSyxDQUFDLE9BQVMsQ0FBQyxDQUFDO1lBRWxELHlEQUF5RDtZQUN6RCxPQUFPLFNBQUUsQ0FBQyxNQUFXLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUM7SUFDTixDQUFDO0lBL0NRLGdCQUFnQjtRQUQ1QixpQkFBVSxFQUFFO3lDQU1pQixpQkFBVTtPQUwzQixnQkFBZ0IsQ0FpRDVCO0lBQUQsdUJBQUM7Q0FBQSxBQWpERCxJQWlEQztBQWpEWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7Y2F0Y2hFcnJvciwgbWFwLCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHtBcHBTZXR0aW5nc30gZnJvbSBcIn4vYXBwL2FwcC1zZXR0aW5nc1wiO1xyXG5cclxuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQge1N0YXRpc3RpY30gZnJvbSBcIn4vYXBwL2hvbWUvc3RhdGlzdGljL3N0YXRpc3RpY1wiO1xyXG5cclxuY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KVxyXG59O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3RhdGlzdGljU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSB1cmwgPSBgJHtBcHBTZXR0aW5ncy5BUElfVVJMfS9zdGF0aXN0aWNzL2hvdXJzLXBlci1hY3Rpdml0eS9gOyAgLy8gVVJMIHRvIHdlYiBhcGlcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2luaXQgYWN0aXZpdGllcyBzZXJ2aWNlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQXV0aFRva2VuKCkge1xyXG4gICAgICAgIGxldCBodHRwT3B0aW9ucyA9IHtoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IEFwcFNldHRpbmdzLlRPS0VOfSl9O1xyXG4gICAgICAgIHJldHVybiBodHRwT3B0aW9uc1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0YXRpc3RpY3MoKTogT2JzZXJ2YWJsZTxTdGF0aXN0aWNbXT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEFwcFNldHRpbmdzLkFQSV9VUkwsIHRoaXMuYWRkQXV0aFRva2VuKCkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFN0YXRpc3RpY1tdPihgJHt0aGlzLnVybH0ke0FwcFNldHRpbmdzLlRPS0VOfS9yZWNlbnRgLCApXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgdGFwKHN0YXRpc3RpY3MgPT4gdGhpcy5sb2coJ2ZldGNoZWQgc3RhdGlzdGljcycpKSxcclxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcignZ2V0QWN0aXZpdGllcycsIFtdKSlcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvZyhtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgQWN0aXZpdHlTZXJ2aWNlOiAke21lc3NhZ2V9YCk7XHJcbiAgICAgICAgLy8gdGhpcy5tZXNzYWdlU2VydmljZS5hZGQoYEFjdGl2aXR5U2VydmljZTogJHttZXNzYWdlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIEh0dHAgb3BlcmF0aW9uIHRoYXQgZmFpbGVkLlxyXG4gICAgICogTGV0IHRoZSBhcHAgY29udGludWUuXHJcbiAgICAgKiBAcGFyYW0gb3BlcmF0aW9uIC0gbmFtZSBvZiB0aGUgb3BlcmF0aW9uIHRoYXQgZmFpbGVkXHJcbiAgICAgKiBAcGFyYW0gcmVzdWx0IC0gb3B0aW9uYWwgdmFsdWUgdG8gcmV0dXJuIGFzIHRoZSBvYnNlcnZhYmxlIHJlc3VsdFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhhbmRsZUVycm9yPFQ+KG9wZXJhdGlvbiA9ICdvcGVyYXRpb24nLCByZXN1bHQ/OiBUKSB7XHJcbiAgICAgICAgcmV0dXJuIChlcnJvcjogYW55KTogT2JzZXJ2YWJsZTxUPiA9PiB7XHJcblxyXG4gICAgICAgICAgICAvLyBUT0RPOiBzZW5kIHRoZSBlcnJvciB0byByZW1vdGUgbG9nZ2luZyBpbmZyYXN0cnVjdHVyZVxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTsgLy8gbG9nIHRvIGNvbnNvbGUgaW5zdGVhZFxyXG5cclxuICAgICAgICAgICAgLy8gVE9ETzogYmV0dGVyIGpvYiBvZiB0cmFuc2Zvcm1pbmcgZXJyb3IgZm9yIHVzZXIgY29uc3VtcHRpb25cclxuICAgICAgICAgICAgdGhpcy5sb2coYCR7b3BlcmF0aW9ufSBmYWlsZWQ6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuXHJcbiAgICAgICAgICAgIC8vIExldCB0aGUgYXBwIGtlZXAgcnVubmluZyBieSByZXR1cm5pbmcgYW4gZW1wdHkgcmVzdWx0LlxyXG4gICAgICAgICAgICByZXR1cm4gb2YocmVzdWx0IGFzIFQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==