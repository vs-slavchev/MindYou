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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZCQUFvQztBQUNwQyw0Q0FBb0Q7QUFHcEQsbURBQWlEO0FBRWpELDZDQUE2RDtBQUU3RCxJQUFNLFdBQVcsR0FBRztJQUNoQixPQUFPLEVBQUUsSUFBSSxrQkFBVyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUM7Q0FDakUsQ0FBQztBQUdGO0lBUUkscUJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFONUIsa0JBQWEsR0FBTSwwQkFBVyxDQUFDLE9BQU8sZ0JBQWEsQ0FBQyxDQUFFLGlCQUFpQjtRQUMvRSxnRkFBZ0Y7UUFDeEUscUJBQWdCLEdBQU0sSUFBSSxDQUFDLGFBQWEsWUFBUyxDQUFDLENBQUUsaUJBQWlCO1FBQ3JFLHVCQUFrQixHQUFNLElBQUksQ0FBQyxhQUFhLFdBQVEsQ0FBQyxDQUFFLGlCQUFpQjtRQUkxRSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELGtDQUFZLEdBQVo7UUFDSSxJQUFJLFdBQVcsR0FBRyxFQUFDLE9BQU8sRUFBRSxJQUFJLGtCQUFXLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCO2dCQUN2RSxlQUFlLEVBQUUsMEJBQVcsQ0FBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFDOUMsT0FBTyxXQUFXLENBQUE7SUFDdEIsQ0FBQztJQUVELG1DQUFhLEdBQWI7UUFBQSxpQkFPQztRQU5HLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDdEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUyxJQUFJLENBQUMsZ0JBQWdCLENBQUc7YUFDaEQsSUFB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R0FBWCxVQUFZLE9BQWU7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBb0IsT0FBUyxDQUFDLENBQUM7UUFDM0MsMERBQTBEO0lBQzlELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLGlDQUFXLEdBQW5CLFVBQXVCLFNBQXVCLEVBQUUsTUFBVTtRQUExRCxpQkFZQztRQVpzQiwwQkFBQSxFQUFBLHVCQUF1QjtRQUMxQyxPQUFPLFVBQUMsS0FBVTtZQUVkLHdEQUF3RDtZQUN4RCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMseUJBQXlCO1lBRS9DLDhEQUE4RDtZQUM5RCxLQUFJLENBQUMsR0FBRyxDQUFJLFNBQVMsaUJBQVksS0FBSyxDQUFDLE9BQVMsQ0FBQyxDQUFDO1lBRWxELHlEQUF5RDtZQUN6RCxPQUFPLFNBQUUsQ0FBQyxNQUFXLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUM7SUFDTixDQUFDO0lBM0ZRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FTaUIsaUJBQVU7T0FSM0IsV0FBVyxDQTZGdkI7SUFBRCxrQkFBQztDQUFBLEFBN0ZELElBNkZDO0FBN0ZZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge09ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7Y2F0Y2hFcnJvciwgbWFwLCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB7IEFwcFNldHRpbmdzIH0gZnJvbSBcIn4vYXBwL2FwcC1zZXR0aW5nc1wiO1xuXG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pXG59O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSXRlbVNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBhY3Rpdml0aWVzVXJsID0gYCR7QXBwU2V0dGluZ3MuQVBJX1VSTH0vYWN0aXZpdGllc2A7ICAvLyBVUkwgdG8gd2ViIGFwaVxuICAgIC8vIHByaXZhdGUgYWN0aXZpdGllc1VybCA9IGAke0FwcFNldHRpbmdzLkFQSV9VUkx9L2FjdGl2aXR5YDsgIC8vIFVSTCB0byB3ZWIgYXBpXG4gICAgcHJpdmF0ZSBhY3Rpdml0aWVzVXJsVG9wID0gYCR7dGhpcy5hY3Rpdml0aWVzVXJsfS90b3AvMTBgOyAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgICBwcml2YXRlIGFjdGl2aXRpZXNVcmxTdGFydCA9IGAke3RoaXMuYWN0aXZpdGllc1VybH0vc3RhcnRgOyAgLy8gVVJMIHRvIHdlYiBhcGlcblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbml0IGFjdGl2aXRpZXMgc2VydmljZScpO1xuICAgIH1cblxuICAgIGFkZEF1dGhUb2tlbigpIHtcbiAgICAgICAgbGV0IGh0dHBPcHRpb25zID0ge2hlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IEFwcFNldHRpbmdzLlRPS0VOfSl9O1xuICAgICAgICByZXR1cm4gaHR0cE9wdGlvbnNcbiAgICB9XG5cbiAgICBnZXRBY3Rpdml0aWVzKCk6IE9ic2VydmFibGU8SXRlbVtdPiB7XG4gICAgICAgIGNvbnNvbGUubG9nKEFwcFNldHRpbmdzLkFQSV9VUkwsIHRoaXMuYWRkQXV0aFRva2VuKCkpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxJdGVtW10+KHRoaXMuYWN0aXZpdGllc1VybFRvcCwgKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgdGFwKGFjdGl2aXRpZXMgPT4gdGhpcy5sb2coJ2ZldGNoZWQgYWN0aXZpdGllcycpKSxcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IoJ2dldEFjdGl2aXRpZXMnLCBbXSkpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIGNyZWF0ZUFjY291bnQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke0FwcFNldHRpbmdzLkFQSV9VUkx9L3VzZXJzL2NyZWF0ZWAsIHtcImlkXCI6IEFwcFNldHRpbmdzLlRPS0VOfSxcbiAgICAgICAgICAgIHRoaXMuYWRkQXV0aFRva2VuKCkpXG4gICAgfVxuXG4gICAgZ2V0SXRlbU5vNDA0PERhdGE+KGFjdGl2aXR5Qmx1ZXByaW50SWQ6IG51bWJlcik6IE9ic2VydmFibGU8SXRlbT4ge1xuICAgICAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmFjdGl2aXRpZXNVcmx9LyR7YWN0aXZpdHlCbHVlcHJpbnRJZH1gO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxJdGVtW10+KHVybClcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIG1hcChpdGVtcyA9PiBpdGVtc1swXSksIC8vIHJldHVybnMgYSB7MHwxfSBlbGVtZW50IGFycmF5XG4gICAgICAgICAgICAgICAgdGFwKGggPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvdXRjb21lID0gaCA/IGBmZXRjaGVkYCA6IGBkaWQgbm90IGZpbmRgO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZyhgJHtvdXRjb21lfSBhY3Rpdml0eSBpZD0ke2FjdGl2aXR5Qmx1ZXByaW50SWR9YCk7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yPEl0ZW0+KGBnZXRJdGVtIGlkPSR7YWN0aXZpdHlCbHVlcHJpbnRJZH1gKSlcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0SXRlbShhY3Rpdml0eUJsdWVwcmludElkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEl0ZW0+IHtcbiAgICAgICAgY29uc3QgdXJsID0gYCR7dGhpcy5hY3Rpdml0aWVzVXJsfS8ke2FjdGl2aXR5Qmx1ZXByaW50SWR9YDtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8SXRlbT4odXJsKS5waXBlKFxuICAgICAgICAgICAgdGFwKF8gPT4gdGhpcy5sb2coYGZldGNoZWQgaXRlbSBpZD0ke2FjdGl2aXR5Qmx1ZXByaW50SWR9YCkpLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yPEl0ZW0+KGBnZXRJdGVtIGlkPSR7YWN0aXZpdHlCbHVlcHJpbnRJZH1gKSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdG9wQWN0aXZpdHkoYWN0aXZpdHlCbHVlcHJpbnRJZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxJdGVtPiB7XG4gICAgICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYWN0aXZpdGllc1VybH0vJHtBcHBTZXR0aW5ncy5VU0VSX0lEfS9zdG9wYDtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8SXRlbT4odXJsKS5waXBlKFxuICAgICAgICAgICAgdGFwKF8gPT4gdGhpcy5sb2coYHN0b3BwZWQgYWN0aXZpdHkgaWQ9JHthY3Rpdml0eUJsdWVwcmludElkfWApKSxcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcjxJdGVtPihgc3RvcEFjdGl2aXR5IGlkPSR7YWN0aXZpdHlCbHVlcHJpbnRJZH1gKSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGFydEFjdGl2aXR5IChhY3Rpdml0eTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4odGhpcy5hY3Rpdml0aWVzVXJsU3RhcnQsIGFjdGl2aXR5LCBodHRwT3B0aW9ucykucGlwZShcbiAgICAgICAgICAgIHRhcCgoYWN0aXZpdHk6IGFueSkgPT4gdGhpcy5sb2coYHN0YXJ0ZWQgYWN0aXZpdHkgdy8gaWQ9JHthY3Rpdml0eS5hY3Rpdml0eV9pZH1gKSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3I8YW55Pignc3RhcnRBY3Rpdml0eScpKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9nKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBjb25zb2xlLmxvZyhgQWN0aXZpdHlTZXJ2aWNlOiAke21lc3NhZ2V9YCk7XG4gICAgICAgIC8vIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKGBBY3Rpdml0eVNlcnZpY2U6ICR7bWVzc2FnZX1gKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgSHR0cCBvcGVyYXRpb24gdGhhdCBmYWlsZWQuXG4gICAgICogTGV0IHRoZSBhcHAgY29udGludWUuXG4gICAgICogQHBhcmFtIG9wZXJhdGlvbiAtIG5hbWUgb2YgdGhlIG9wZXJhdGlvbiB0aGF0IGZhaWxlZFxuICAgICAqIEBwYXJhbSByZXN1bHQgLSBvcHRpb25hbCB2YWx1ZSB0byByZXR1cm4gYXMgdGhlIG9ic2VydmFibGUgcmVzdWx0XG4gICAgICovXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcjxUPihvcGVyYXRpb24gPSAnb3BlcmF0aW9uJywgcmVzdWx0PzogVCkge1xuICAgICAgICByZXR1cm4gKGVycm9yOiBhbnkpOiBPYnNlcnZhYmxlPFQ+ID0+IHtcblxuICAgICAgICAgICAgLy8gVE9ETzogc2VuZCB0aGUgZXJyb3IgdG8gcmVtb3RlIGxvZ2dpbmcgaW5mcmFzdHJ1Y3R1cmVcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpOyAvLyBsb2cgdG8gY29uc29sZSBpbnN0ZWFkXG5cbiAgICAgICAgICAgIC8vIFRPRE86IGJldHRlciBqb2Igb2YgdHJhbnNmb3JtaW5nIGVycm9yIGZvciB1c2VyIGNvbnN1bXB0aW9uXG4gICAgICAgICAgICB0aGlzLmxvZyhgJHtvcGVyYXRpb259IGZhaWxlZDogJHtlcnJvci5tZXNzYWdlfWApO1xuXG4gICAgICAgICAgICAvLyBMZXQgdGhlIGFwcCBrZWVwIHJ1bm5pbmcgYnkgcmV0dXJuaW5nIGFuIGVtcHR5IHJlc3VsdC5cbiAgICAgICAgICAgIHJldHVybiBvZihyZXN1bHQgYXMgVCk7XG4gICAgICAgIH07XG4gICAgfVxuXG59XG4iXX0=