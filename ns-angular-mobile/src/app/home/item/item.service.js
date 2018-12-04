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
        this.activitiesUrlTop = this.activitiesUrl + "/top/100"; // URL to web api
        this.activitiesUrlStart = this.activitiesUrl + "/start"; // URL to web api
        this.activitiesUrlStartCustom = this.activitiesUrl + "/create"; // URL to web api
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
    // method that makes the POST request to create a custom activity
    ItemService.prototype.createCustomActivity = function (activity) {
        var _this = this;
        var data = {
            "name": activity
        };
        return this.http.post(this.activitiesUrlStartCustom, data, httpOptions).pipe(operators_1.tap(function (activity) { return _this.log("created custom activity"); }), operators_1.catchError(this.handleError('createCustomActivity')));
    };
    // createAccount(): Observable<any> {
    //     return this.http.post(`${AppSettings.API_URL}/users/create`, {"id": AppSettings.TOKEN},
    //         this.addAuthToken());
    // }
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
        var url = this.activitiesUrl + "/" + app_settings_1.AppSettings.TOKEN + "/stop";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZCQUFvQztBQUNwQyw0Q0FBb0Q7QUFDcEQsbURBQStDO0FBSS9DLDZDQUE2RDtBQUU3RCxJQUFNLFdBQVcsR0FBRztJQUNoQixPQUFPLEVBQUUsSUFBSSxrQkFBVyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUM7Q0FDakUsQ0FBQztBQUdGO0lBVUkscUJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFSNUIsa0JBQWEsR0FBTSwwQkFBVyxDQUFDLE9BQU8sZ0JBQWEsQ0FBQyxDQUFFLGlCQUFpQjtRQUMvRSxnRkFBZ0Y7UUFDeEUscUJBQWdCLEdBQU0sSUFBSSxDQUFDLGFBQWEsYUFBVSxDQUFDLENBQUUsaUJBQWlCO1FBQ3RFLHVCQUFrQixHQUFNLElBQUksQ0FBQyxhQUFhLFdBQVEsQ0FBQyxDQUFFLGlCQUFpQjtRQUN0RSw2QkFBd0IsR0FBTSxJQUFJLENBQUMsYUFBYSxZQUFTLENBQUMsQ0FBRSxpQkFBaUI7UUFLakYsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxrQ0FBWSxHQUFaO1FBQ0ksSUFBSSxXQUFXLEdBQUcsRUFBQyxPQUFPLEVBQUUsSUFBSSxrQkFBVyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQjtnQkFDdkUsZUFBZSxFQUFFLDBCQUFXLENBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQzlDLE9BQU8sV0FBVyxDQUFBO0lBQ3RCLENBQUM7SUFFRCxtQ0FBYSxHQUFiO1FBQUEsaUJBT0M7UUFORyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUFXLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELE9BQU8sSUFBSSxD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ZSxRQUFhO1FBQTVCLGlCQUtDO1FBSkcsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBTSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDM0UsZUFBRyxDQUFDLFVBQUMsUUFBYSxJQUFLLE9BQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyw0QkFBMEIsUUFBUSxDQUFDLFdBQWEsQ0FBQyxFQUExRCxDQUEwRCxDQUFDLEVBQ2xGLHNCQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBTSxlQUFlLENBQUMsQ0FBQyxDQUNyRCxDQUFDO0lBQ04sQ0FBQztJQUVPLHlCQUFHLEdBQVgsVUFBWSxPQUFlO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQW9CLE9BQVMsQ0FBQyxDQUFDO1FBQzNDLDBEQUEwRDtJQUM5RCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyxpQ0FBVyxHQUFuQixVQUF1QixTQUF1QixFQUFFLE1BQVU7UUFBMUQsaUJBWUM7UUFac0IsMEJBQUEsRUFBQSx1QkFBdUI7UUFDMUMsT0FBTyxVQUFDLEtBQVU7WUFFZCx3REFBd0Q7WUFDeEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLHlCQUF5QjtZQUUvQyw4REFBOEQ7WUFDOUQsS0FBSSxDQUFDLEdBQUcsQ0FBSSxTQUFTLGlCQUFZLEtBQUssQ0FBQyxPQUFTLENBQUMsQ0FBQztZQUVsRCx5REFBeUQ7WUFDekQsT0FBTyxTQUFFLENBQUMsTUFBVyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQXhHUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBV2lCLGlCQUFVO09BVjNCLFdBQVcsQ0EwR3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQTFHRCxJQTBHQztBQTFHWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge09ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtjYXRjaEVycm9yLCBtYXAsIHRhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQge0FwcFNldHRpbmdzfSBmcm9tIFwifi9hcHAvYXBwLXNldHRpbmdzXCI7XHJcblxyXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xyXG5cclxuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KVxyXG59O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSXRlbVNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgYWN0aXZpdGllc1VybCA9IGAke0FwcFNldHRpbmdzLkFQSV9VUkx9L2FjdGl2aXRpZXNgOyAgLy8gVVJMIHRvIHdlYiBhcGlcclxuICAgIC8vIHByaXZhdGUgYWN0aXZpdGllc1VybCA9IGAke0FwcFNldHRpbmdzLkFQSV9VUkx9L2FjdGl2aXR5YDsgIC8vIFVSTCB0byB3ZWIgYXBpXHJcbiAgICBwcml2YXRlIGFjdGl2aXRpZXNVcmxUb3AgPSBgJHt0aGlzLmFjdGl2aXRpZXNVcmx9L3RvcC8xMDBgOyAgLy8gVVJMIHRvIHdlYiBhcGlcclxuICAgIHByaXZhdGUgYWN0aXZpdGllc1VybFN0YXJ0ID0gYCR7dGhpcy5hY3Rpdml0aWVzVXJsfS9zdGFydGA7ICAvLyBVUkwgdG8gd2ViIGFwaVxyXG4gICAgcHJpdmF0ZSBhY3Rpdml0aWVzVXJsU3RhcnRDdXN0b20gPSBgJHt0aGlzLmFjdGl2aXRpZXNVcmx9L2NyZWF0ZWA7ICAvLyBVUkwgdG8gd2ViIGFwaVxyXG5cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2luaXQgYWN0aXZpdGllcyBzZXJ2aWNlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQXV0aFRva2VuKCkge1xyXG4gICAgICAgIGxldCBodHRwT3B0aW9ucyA9IHtoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IEFwcFNldHRpbmdzLlRPS0VOfSl9O1xyXG4gICAgICAgIHJldHVybiBodHRwT3B0aW9uc1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFjdGl2aXRpZXMoKTogT2JzZXJ2YWJsZTxJdGVtW10+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhBcHBTZXR0aW5ncy5BUElfVVJMLCB0aGlzLmFkZEF1dGhUb2tlbigpKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxJdGVtW10+KHRoaXMuYWN0aXZpdGllc1VybFRvcCwgKVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIHRhcChhY3Rpdml0aWVzID0+IHRoaXMubG9nKCdmZXRjaGVkIGFjdGl2aXRpZXMnKSksXHJcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IoJ2dldEFjdGl2aXRpZXMnLCBbXSkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbWV0aG9kIHRoYXQgbWFrZXMgdGhlIFBPU1QgcmVxdWVzdCB0byBjcmVhdGUgYSBjdXN0b20gYWN0aXZpdHlcclxuICAgIGNyZWF0ZUN1c3RvbUFjdGl2aXR5KGFjdGl2aXR5OiBhbnkpOiBPYnNlcnZhYmxlPGFueT57XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBhY3Rpdml0eVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYWN0aXZpdGllc1VybFN0YXJ0Q3VzdG9tLCBkYXRhLCBodHRwT3B0aW9ucykucGlwZShcclxuICAgICAgICAgICAgdGFwKChhY3Rpdml0eTogYW55KSA9PiB0aGlzLmxvZyhgY3JlYXRlZCBjdXN0b20gYWN0aXZpdHlgKSksXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcjxhbnk+KCdjcmVhdGVDdXN0b21BY3Rpdml0eScpKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY3JlYXRlQWNjb3VudCgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHtBcHBTZXR0aW5ncy5BUElfVVJMfS91c2Vycy9jcmVhdGVgLCB7XCJpZFwiOiBBcHBTZXR0aW5ncy5UT0tFTn0sXHJcbiAgICAvLyAgICAgICAgIHRoaXMuYWRkQXV0aFRva2VuKCkpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGdldEl0ZW1ObzQwNDxEYXRhPihhY3Rpdml0eUJsdWVwcmludElkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEl0ZW0+IHtcclxuICAgICAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmFjdGl2aXRpZXNVcmx9LyR7YWN0aXZpdHlCbHVlcHJpbnRJZH1gO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEl0ZW1bXT4odXJsKVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIG1hcChpdGVtcyA9PiBpdGVtc1swXSksIC8vIHJldHVybnMgYSB7MHwxfSBlbGVtZW50IGFycmF5XHJcbiAgICAgICAgICAgICAgICB0YXAoaCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3V0Y29tZSA9IGggPyBgZmV0Y2hlZGAgOiBgZGlkIG5vdCBmaW5kYDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZyhgJHtvdXRjb21lfSBhY3Rpdml0eSBpZD0ke2FjdGl2aXR5Qmx1ZXByaW50SWR9YCk7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcjxJdGVtPihgZ2V0SXRlbSBpZD0ke2FjdGl2aXR5Qmx1ZXByaW50SWR9YCkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbShhY3Rpdml0eUJsdWVwcmludElkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEl0ZW0+IHtcclxuICAgICAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmFjdGl2aXRpZXNVcmx9LyR7YWN0aXZpdHlCbHVlcHJpbnRJZH1gO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEl0ZW0+KHVybCkucGlwZShcclxuICAgICAgICAgICAgdGFwKF8gPT4gdGhpcy5sb2coYGZldGNoZWQgaXRlbSBpZD0ke2FjdGl2aXR5Qmx1ZXByaW50SWR9YCkpLFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3I8SXRlbT4oYGdldEl0ZW0gaWQ9JHthY3Rpdml0eUJsdWVwcmludElkfWApKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcEFjdGl2aXR5KGFjdGl2aXR5Qmx1ZXByaW50SWQ6IG51bWJlcik6IE9ic2VydmFibGU8SXRlbT4ge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYWN0aXZpdGllc1VybH0vJHtBcHBTZXR0aW5ncy5UT0tFTn0vc3RvcGA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8SXRlbT4odXJsKS5waXBlKFxyXG4gICAgICAgICAgICB0YXAoXyA9PiB0aGlzLmxvZyhgc3RvcHBlZCBhY3Rpdml0eSBpZD0ke2FjdGl2aXR5Qmx1ZXByaW50SWR9YCkpLFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3I8SXRlbT4oYHN0b3BBY3Rpdml0eSBpZD0ke2FjdGl2aXR5Qmx1ZXByaW50SWR9YCkpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydEFjdGl2aXR5IChhY3Rpdml0eTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih0aGlzLmFjdGl2aXRpZXNVcmxTdGFydCwgYWN0aXZpdHksIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICAgICAgICB0YXAoKGFjdGl2aXR5OiBhbnkpID0+IHRoaXMubG9nKGBzdGFydGVkIGFjdGl2aXR5IHcvIGlkPSR7YWN0aXZpdHkuYWN0aXZpdHlfaWR9YCkpLFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3I8YW55Pignc3RhcnRBY3Rpdml0eScpKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2cobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYEFjdGl2aXR5U2VydmljZTogJHttZXNzYWdlfWApO1xyXG4gICAgICAgIC8vIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKGBBY3Rpdml0eVNlcnZpY2U6ICR7bWVzc2FnZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSBIdHRwIG9wZXJhdGlvbiB0aGF0IGZhaWxlZC5cclxuICAgICAqIExldCB0aGUgYXBwIGNvbnRpbnVlLlxyXG4gICAgICogQHBhcmFtIG9wZXJhdGlvbiAtIG5hbWUgb2YgdGhlIG9wZXJhdGlvbiB0aGF0IGZhaWxlZFxyXG4gICAgICogQHBhcmFtIHJlc3VsdCAtIG9wdGlvbmFsIHZhbHVlIHRvIHJldHVybiBhcyB0aGUgb2JzZXJ2YWJsZSByZXN1bHRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcjxUPihvcGVyYXRpb24gPSAnb3BlcmF0aW9uJywgcmVzdWx0PzogVCkge1xyXG4gICAgICAgIHJldHVybiAoZXJyb3I6IGFueSk6IE9ic2VydmFibGU8VD4gPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gVE9ETzogc2VuZCB0aGUgZXJyb3IgdG8gcmVtb3RlIGxvZ2dpbmcgaW5mcmFzdHJ1Y3R1cmVcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7IC8vIGxvZyB0byBjb25zb2xlIGluc3RlYWRcclxuXHJcbiAgICAgICAgICAgIC8vIFRPRE86IGJldHRlciBqb2Igb2YgdHJhbnNmb3JtaW5nIGVycm9yIGZvciB1c2VyIGNvbnN1bXB0aW9uXHJcbiAgICAgICAgICAgIHRoaXMubG9nKGAke29wZXJhdGlvbn0gZmFpbGVkOiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcblxyXG4gICAgICAgICAgICAvLyBMZXQgdGhlIGFwcCBrZWVwIHJ1bm5pbmcgYnkgcmV0dXJuaW5nIGFuIGVtcHR5IHJlc3VsdC5cclxuICAgICAgICAgICAgcmV0dXJuIG9mKHJlc3VsdCBhcyBUKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=