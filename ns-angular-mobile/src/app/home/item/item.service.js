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
var ItemService = /** @class */ (function () {
    function ItemService(http) {
        this.http = http;
        this.activitiesUrl = app_settings_1.AppSettings.API_URL + "/activities"; // URL to web api
        // private activitiesUrl = `${AppSettings.API_URL}/activity`;  // URL to web api
        this.activitiesUrlTop = this.activitiesUrl + "/top/10"; // URL to web api
        this.activitiesUrlStart = this.activitiesUrl + "/start"; // URL to web api
        console.log('init activities service');
    }
    ItemService.prototype.addAuthToken = function () {
        var httpOptions = { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json',
                'Authorization': app_settings_1.AppSettings.TOKEN }) };
        return httpOptions;
    };
    ItemService.prototype.getActivities = function () {
        var _this = this;
        console.log(app_settings_1.AppSettings.API_URL, this.addAuthToken());
        return this.http.get(this.activitiesUrlTop)
            .pipe(operators_1.tap(function (activities) { return _this.log('fetched activities'); }), operators_1.catchError(this.handleError('getActivities', [])));
    };
    ItemService.prototype.createAccount = function () {
        return this.http.post(app_settings_1.AppSettings.API_URL + "/users/create", { "id": app_settings_1.AppSettings.TOKEN }, this.addAuthToken());
    };
    ItemService.prototype.getItemNo404 = function (activityBlueprintId) {
        var _this = this;
        var url = this.activitiesUrl + "/" + activityBlueprintId;
        return this.http.get(url)
            .pipe(operators_1.map(function (items) { return items[0]; }), // returns a {0|1} element array
        operators_1.tap(function (h) {
            var outcome = h ? "fetched" : "did not find";
            _this.log(outcome + " activity id=" + activityBlueprintId);
        }), operators_1.catchError(this.handleError("getItem id=" + activityBlueprintId)));
    };
    ItemService.prototype.getItem = function (activityBlueprintId) {
        var _this = this;
        var url = this.activitiesUrl + "/" + activityBlueprintId;
        return this.http.get(url).pipe(operators_1.tap(function (_) { return _this.log("fetched item id=" + activityBlueprintId); }), operators_1.catchError(this.handleError("getItem id=" + activityBlueprintId)));
    };
    ItemService.prototype.stopActivity = function (activityBlueprintId) {
        var _this = this;
        var url = this.activitiesUrl + "/" + app_settings_1.AppSettings.USER_ID + "/stop";
        return this.http.get(url).pipe(operators_1.tap(function (_) { return _this.log("stopped activity id=" + activityBlueprintId); }), operators_1.catchError(this.handleError("stopActivity id=" + activityBlueprintId)));
    };
    ItemService.prototype.startActivity = function (activity) {
        var _this = this;
        return this.http.post(this.activitiesUrlStart, activity, httpOptions).pipe(operators_1.tap(function (activity) { return _this.log("started activity w/ id=" + activity.activity_id); }), operators_1.catchError(this.handleError('startActivity')));
    };
    ItemService.prototype.log = function (message) {
        console.log("ActivityService: " + message);
        // this.messageService.add(`ActivityService: ${message}`);
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    ItemService.prototype.handleError = function (operation, result) {
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
    ItemService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ItemService);
    return ItemService;
}());
exports.ItemService = ItemService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZCQUFvQztBQUNwQyw0Q0FBb0Q7QUFDcEQsbURBQStDO0FBSS9DLDZDQUE2RDtBQUU3RCxJQUFNLFdBQVcsR0FBRztJQUNoQixPQUFPLEVBQUUsSUFBSSxrQkFBVyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUM7Q0FDakUsQ0FBQztBQUdGO0lBUUkscUJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFONUIsa0JBQWEsR0FBTSwwQkFBVyxDQUFDLE9BQU8sZ0JBQWEsQ0FBQyxDQUFFLGlCQUFpQjtRQUMvRSxnRkFBZ0Y7UUFDeEUscUJBQWdCLEdBQU0sSUFBSSxDQUFDLGFBQWEsWUFBUyxDQUFDLENBQUUsaUJBQWlCO1FBQ3JFLHVCQUFrQixHQUFNLElBQUksQ0FBQyxhQUFhLFdBQVEsQ0FBQyxDQUFFLGlCQUFpQjtRQUkxRSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELGtDQUFZLEdBQVo7UUFDSSxJQUFJLFdBQVcsR0FBRyxFQUFDLE9BQU8sRUFBRSxJQUFJLGtCQUFXLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCO2dCQUN2RSxlQUFlLEVBQUUsMEJBQVcsQ0FBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFDOUMsT0FBTyxXQUFXLENBQUE7SUFDdEIsQ0FBQztJQUVELG1DQUFhLEdBQWI7UUFBQSxpQkFPQztRQU5HLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDdEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUyxJQUFJLENBQUMsZ0JBQWdCLENBQUc7YUFDaEQsSUFB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R0FBWCxVQUFZLE9BQWU7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBb0IsT0FBUyxDQUFDLENBQUM7UUFDM0MsMERBQTBEO0lBQzlELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLGlDQUFXLEdBQW5CLFVBQXVCLFNBQXVCLEVBQUUsTUFBVTtRQUExRCxpQkFZQztRQVpzQiwwQkFBQSxFQUFBLHVCQUF1QjtRQUMxQyxPQUFPLFVBQUMsS0FBVTtZQUVkLHdEQUF3RDtZQUN4RCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMseUJBQXlCO1lBRS9DLDhEQUE4RDtZQUM5RCxLQUFJLENBQUMsR0FBRyxDQUFJLFNBQVMsaUJBQVksS0FBSyxDQUFDLE9BQVMsQ0FBQyxDQUFDO1lBRWxELHlEQUF5RDtZQUN6RCxPQUFPLFNBQUUsQ0FBQyxNQUFXLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUM7SUFDTixDQUFDO0lBM0ZRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FTaUIsaUJBQVU7T0FSM0IsV0FBVyxDQTZGdkI7SUFBRCxrQkFBQztDQUFBLEFBN0ZELElBNkZDO0FBN0ZZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge09ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7Y2F0Y2hFcnJvciwgbWFwLCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7QXBwU2V0dGluZ3N9IGZyb20gXCJ+L2FwcC9hcHAtc2V0dGluZ3NcIjtcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcblxuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5jb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KVxufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEl0ZW1TZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgYWN0aXZpdGllc1VybCA9IGAke0FwcFNldHRpbmdzLkFQSV9VUkx9L2FjdGl2aXRpZXNgOyAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgICAvLyBwcml2YXRlIGFjdGl2aXRpZXNVcmwgPSBgJHtBcHBTZXR0aW5ncy5BUElfVVJMfS9hY3Rpdml0eWA7ICAvLyBVUkwgdG8gd2ViIGFwaVxuICAgIHByaXZhdGUgYWN0aXZpdGllc1VybFRvcCA9IGAke3RoaXMuYWN0aXZpdGllc1VybH0vdG9wLzEwYDsgIC8vIFVSTCB0byB3ZWIgYXBpXG4gICAgcHJpdmF0ZSBhY3Rpdml0aWVzVXJsU3RhcnQgPSBgJHt0aGlzLmFjdGl2aXRpZXNVcmx9L3N0YXJ0YDsgIC8vIFVSTCB0byB3ZWIgYXBpXG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xuICAgICAgICBjb25zb2xlLmxvZygnaW5pdCBhY3Rpdml0aWVzIHNlcnZpY2UnKTtcbiAgICB9XG5cbiAgICBhZGRBdXRoVG9rZW4oKSB7XG4gICAgICAgIGxldCBodHRwT3B0aW9ucyA9IHtoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBBcHBTZXR0aW5ncy5UT0tFTn0pfTtcbiAgICAgICAgcmV0dXJuIGh0dHBPcHRpb25zXG4gICAgfVxuXG4gICAgZ2V0QWN0aXZpdGllcygpOiBPYnNlcnZhYmxlPEl0ZW1bXT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhBcHBTZXR0aW5ncy5BUElfVVJMLCB0aGlzLmFkZEF1dGhUb2tlbigpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8SXRlbVtdPih0aGlzLmFjdGl2aXRpZXNVcmxUb3AsIClcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIHRhcChhY3Rpdml0aWVzID0+IHRoaXMubG9nKCdmZXRjaGVkIGFjdGl2aXRpZXMnKSksXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKCdnZXRBY3Rpdml0aWVzJywgW10pKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjcmVhdGVBY2NvdW50KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHtBcHBTZXR0aW5ncy5BUElfVVJMfS91c2Vycy9jcmVhdGVgLCB7XCJpZFwiOiBBcHBTZXR0aW5ncy5UT0tFTn0sXG4gICAgICAgICAgICB0aGlzLmFkZEF1dGhUb2tlbigpKVxuICAgIH1cblxuICAgIGdldEl0ZW1ObzQwNDxEYXRhPihhY3Rpdml0eUJsdWVwcmludElkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEl0ZW0+IHtcbiAgICAgICAgY29uc3QgdXJsID0gYCR7dGhpcy5hY3Rpdml0aWVzVXJsfS8ke2FjdGl2aXR5Qmx1ZXByaW50SWR9YDtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8SXRlbVtdPih1cmwpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICBtYXAoaXRlbXMgPT4gaXRlbXNbMF0pLCAvLyByZXR1cm5zIGEgezB8MX0gZWxlbWVudCBhcnJheVxuICAgICAgICAgICAgICAgIHRhcChoID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3V0Y29tZSA9IGggPyBgZmV0Y2hlZGAgOiBgZGlkIG5vdCBmaW5kYDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2coYCR7b3V0Y29tZX0gYWN0aXZpdHkgaWQ9JHthY3Rpdml0eUJsdWVwcmludElkfWApO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcjxJdGVtPihgZ2V0SXRlbSBpZD0ke2FjdGl2aXR5Qmx1ZXByaW50SWR9YCkpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIGdldEl0ZW0oYWN0aXZpdHlCbHVlcHJpbnRJZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxJdGVtPiB7XG4gICAgICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYWN0aXZpdGllc1VybH0vJHthY3Rpdml0eUJsdWVwcmludElkfWA7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEl0ZW0+KHVybCkucGlwZShcbiAgICAgICAgICAgIHRhcChfID0+IHRoaXMubG9nKGBmZXRjaGVkIGl0ZW0gaWQ9JHthY3Rpdml0eUJsdWVwcmludElkfWApKSxcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcjxJdGVtPihgZ2V0SXRlbSBpZD0ke2FjdGl2aXR5Qmx1ZXByaW50SWR9YCkpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RvcEFjdGl2aXR5KGFjdGl2aXR5Qmx1ZXByaW50SWQ6IG51bWJlcik6IE9ic2VydmFibGU8SXRlbT4ge1xuICAgICAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmFjdGl2aXRpZXNVcmx9LyR7QXBwU2V0dGluZ3MuVVNFUl9JRH0vc3RvcGA7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEl0ZW0+KHVybCkucGlwZShcbiAgICAgICAgICAgIHRhcChfID0+IHRoaXMubG9nKGBzdG9wcGVkIGFjdGl2aXR5IGlkPSR7YWN0aXZpdHlCbHVlcHJpbnRJZH1gKSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3I8SXRlbT4oYHN0b3BBY3Rpdml0eSBpZD0ke2FjdGl2aXR5Qmx1ZXByaW50SWR9YCkpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhcnRBY3Rpdml0eSAoYWN0aXZpdHk6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHRoaXMuYWN0aXZpdGllc1VybFN0YXJ0LCBhY3Rpdml0eSwgaHR0cE9wdGlvbnMpLnBpcGUoXG4gICAgICAgICAgICB0YXAoKGFjdGl2aXR5OiBhbnkpID0+IHRoaXMubG9nKGBzdGFydGVkIGFjdGl2aXR5IHcvIGlkPSR7YWN0aXZpdHkuYWN0aXZpdHlfaWR9YCkpLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yPGFueT4oJ3N0YXJ0QWN0aXZpdHknKSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvZyhtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS5sb2coYEFjdGl2aXR5U2VydmljZTogJHttZXNzYWdlfWApO1xuICAgICAgICAvLyB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZChgQWN0aXZpdHlTZXJ2aWNlOiAke21lc3NhZ2V9YCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIEh0dHAgb3BlcmF0aW9uIHRoYXQgZmFpbGVkLlxuICAgICAqIExldCB0aGUgYXBwIGNvbnRpbnVlLlxuICAgICAqIEBwYXJhbSBvcGVyYXRpb24gLSBuYW1lIG9mIHRoZSBvcGVyYXRpb24gdGhhdCBmYWlsZWRcbiAgICAgKiBAcGFyYW0gcmVzdWx0IC0gb3B0aW9uYWwgdmFsdWUgdG8gcmV0dXJuIGFzIHRoZSBvYnNlcnZhYmxlIHJlc3VsdFxuICAgICAqL1xuICAgIHByaXZhdGUgaGFuZGxlRXJyb3I8VD4ob3BlcmF0aW9uID0gJ29wZXJhdGlvbicsIHJlc3VsdD86IFQpIHtcbiAgICAgICAgcmV0dXJuIChlcnJvcjogYW55KTogT2JzZXJ2YWJsZTxUPiA9PiB7XG5cbiAgICAgICAgICAgIC8vIFRPRE86IHNlbmQgdGhlIGVycm9yIHRvIHJlbW90ZSBsb2dnaW5nIGluZnJhc3RydWN0dXJlXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTsgLy8gbG9nIHRvIGNvbnNvbGUgaW5zdGVhZFxuXG4gICAgICAgICAgICAvLyBUT0RPOiBiZXR0ZXIgam9iIG9mIHRyYW5zZm9ybWluZyBlcnJvciBmb3IgdXNlciBjb25zdW1wdGlvblxuICAgICAgICAgICAgdGhpcy5sb2coYCR7b3BlcmF0aW9ufSBmYWlsZWQ6ICR7ZXJyb3IubWVzc2FnZX1gKTtcblxuICAgICAgICAgICAgLy8gTGV0IHRoZSBhcHAga2VlcCBydW5uaW5nIGJ5IHJldHVybmluZyBhbiBlbXB0eSByZXN1bHQuXG4gICAgICAgICAgICByZXR1cm4gb2YocmVzdWx0IGFzIFQpO1xuICAgICAgICB9O1xuICAgIH1cblxufVxuIl19