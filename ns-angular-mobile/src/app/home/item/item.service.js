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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZCQUFvQztBQUNwQyw0Q0FBb0Q7QUFDcEQsbURBQStDO0FBSS9DLDZDQUE2RDtBQUU3RCxJQUFNLFdBQVcsR0FBRztJQUNoQixPQUFPLEVBQUUsSUFBSSxrQkFBVyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUM7Q0FDakUsQ0FBQztBQUdGO0lBUUkscUJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFONUIsa0JBQWEsR0FBTSwwQkFBVyxDQUFDLE9BQU8sZ0JBQWEsQ0FBQyxDQUFFLGlCQUFpQjtRQUMvRSxnRkFBZ0Y7UUFDeEUscUJBQWdCLEdBQU0sSUFBSSxDQUFDLGFBQWEsWUFBUyxDQUFDLENBQUUsaUJBQWlCO1FBQ3JFLHVCQUFrQixHQUFNLElBQUksQ0FBQyxhQUFhLFdBQVEsQ0FBQyxDQUFFLGlCQUFpQjtRQUkxRSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELGtDQUFZLEdBQVo7UUFDSSxJQUFJLFdBQVcsR0FBRyxFQUFDLE9BQU8sRUFBRSxJQUFJLGtCQUFXLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCO2dCQUN2RSxlQUFlLEVBQUUsMEJBQVcsQ0FBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFDOUMsT0FBTyxXQUFXLENBQUE7SUFDdEIsQ0FBQztJQUVELG1DQUFhLEdBQWI7UUFBQSxpQkFPQztRQU5HLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDdEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUyxJQUFJLENBQUMsZ0JBQWdCLENBQUc7YUFDaEQsSUFB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LFVBQXVCLFNBQXVCLEVBQUUsTUFBVTtRQUExRCxpQkFZQztRQVpzQiwwQkFBQSxFQUFBLHVCQUF1QjtRQUMxQyxPQUFPLFVBQUMsS0FBVTtZQUVkLHdEQUF3RDtZQUN4RCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMseUJBQXlCO1lBRS9DLDhEQUE4RDtZQUM5RCxLQUFJLENBQUMsR0FBRyxDQUFJLFNBQVMsaUJBQVksS0FBSyxDQUFDLE9BQVMsQ0FBQyxDQUFDO1lBRWxELHlEQUF5RDtZQUN6RCxPQUFPLFNBQUUsQ0FBQyxNQUFXLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUM7SUFDTixDQUFDO0lBM0ZRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FTaUIsaUJBQVU7T0FSM0IsV0FBVyxDQTZGdkI7SUFBRCxrQkFBQztDQUFBLEFBN0ZELElBNkZDO0FBN0ZZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge2NhdGNoRXJyb3IsIG1hcCwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7QXBwU2V0dGluZ3N9IGZyb20gXCJ+L2FwcC9hcHAtc2V0dGluZ3NcIjtcclxuXHJcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XHJcblxyXG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5jb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pXHJcbn07XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBJdGVtU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBhY3Rpdml0aWVzVXJsID0gYCR7QXBwU2V0dGluZ3MuQVBJX1VSTH0vYWN0aXZpdGllc2A7ICAvLyBVUkwgdG8gd2ViIGFwaVxyXG4gICAgLy8gcHJpdmF0ZSBhY3Rpdml0aWVzVXJsID0gYCR7QXBwU2V0dGluZ3MuQVBJX1VSTH0vYWN0aXZpdHlgOyAgLy8gVVJMIHRvIHdlYiBhcGlcclxuICAgIHByaXZhdGUgYWN0aXZpdGllc1VybFRvcCA9IGAke3RoaXMuYWN0aXZpdGllc1VybH0vdG9wLzEwYDsgIC8vIFVSTCB0byB3ZWIgYXBpXHJcbiAgICBwcml2YXRlIGFjdGl2aXRpZXNVcmxTdGFydCA9IGAke3RoaXMuYWN0aXZpdGllc1VybH0vc3RhcnRgOyAgLy8gVVJMIHRvIHdlYiBhcGlcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2luaXQgYWN0aXZpdGllcyBzZXJ2aWNlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQXV0aFRva2VuKCkge1xyXG4gICAgICAgIGxldCBodHRwT3B0aW9ucyA9IHtoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IEFwcFNldHRpbmdzLlRPS0VOfSl9O1xyXG4gICAgICAgIHJldHVybiBodHRwT3B0aW9uc1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFjdGl2aXRpZXMoKTogT2JzZXJ2YWJsZTxJdGVtW10+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhBcHBTZXR0aW5ncy5BUElfVVJMLCB0aGlzLmFkZEF1dGhUb2tlbigpKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxJdGVtW10+KHRoaXMuYWN0aXZpdGllc1VybFRvcCwgKVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIHRhcChhY3Rpdml0aWVzID0+IHRoaXMubG9nKCdmZXRjaGVkIGFjdGl2aXRpZXMnKSksXHJcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IoJ2dldEFjdGl2aXRpZXMnLCBbXSkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY3JlYXRlQWNjb3VudCgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHtBcHBTZXR0aW5ncy5BUElfVVJMfS91c2Vycy9jcmVhdGVgLCB7XCJpZFwiOiBBcHBTZXR0aW5ncy5UT0tFTn0sXHJcbiAgICAvLyAgICAgICAgIHRoaXMuYWRkQXV0aFRva2VuKCkpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGdldEl0ZW1ObzQwNDxEYXRhPihhY3Rpdml0eUJsdWVwcmludElkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEl0ZW0+IHtcclxuICAgICAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmFjdGl2aXRpZXNVcmx9LyR7YWN0aXZpdHlCbHVlcHJpbnRJZH1gO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEl0ZW1bXT4odXJsKVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIG1hcChpdGVtcyA9PiBpdGVtc1swXSksIC8vIHJldHVybnMgYSB7MHwxfSBlbGVtZW50IGFycmF5XHJcbiAgICAgICAgICAgICAgICB0YXAoaCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3V0Y29tZSA9IGggPyBgZmV0Y2hlZGAgOiBgZGlkIG5vdCBmaW5kYDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZyhgJHtvdXRjb21lfSBhY3Rpdml0eSBpZD0ke2FjdGl2aXR5Qmx1ZXByaW50SWR9YCk7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcjxJdGVtPihgZ2V0SXRlbSBpZD0ke2FjdGl2aXR5Qmx1ZXByaW50SWR9YCkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbShhY3Rpdml0eUJsdWVwcmludElkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEl0ZW0+IHtcclxuICAgICAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmFjdGl2aXRpZXNVcmx9LyR7YWN0aXZpdHlCbHVlcHJpbnRJZH1gO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEl0ZW0+KHVybCkucGlwZShcclxuICAgICAgICAgICAgdGFwKF8gPT4gdGhpcy5sb2coYGZldGNoZWQgaXRlbSBpZD0ke2FjdGl2aXR5Qmx1ZXByaW50SWR9YCkpLFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3I8SXRlbT4oYGdldEl0ZW0gaWQ9JHthY3Rpdml0eUJsdWVwcmludElkfWApKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcEFjdGl2aXR5KGFjdGl2aXR5Qmx1ZXByaW50SWQ6IG51bWJlcik6IE9ic2VydmFibGU8SXRlbT4ge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYWN0aXZpdGllc1VybH0vJHtBcHBTZXR0aW5ncy5UT0tFTn0vc3RvcGA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8SXRlbT4odXJsKS5waXBlKFxyXG4gICAgICAgICAgICB0YXAoXyA9PiB0aGlzLmxvZyhgc3RvcHBlZCBhY3Rpdml0eSBpZD0ke2FjdGl2aXR5Qmx1ZXByaW50SWR9YCkpLFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3I8SXRlbT4oYHN0b3BBY3Rpdml0eSBpZD0ke2FjdGl2aXR5Qmx1ZXByaW50SWR9YCkpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydEFjdGl2aXR5IChhY3Rpdml0eTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih0aGlzLmFjdGl2aXRpZXNVcmxTdGFydCwgYWN0aXZpdHksIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICAgICAgICB0YXAoKGFjdGl2aXR5OiBhbnkpID0+IHRoaXMubG9nKGBzdGFydGVkIGFjdGl2aXR5IHcvIGlkPSR7YWN0aXZpdHkuYWN0aXZpdHlfaWR9YCkpLFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3I8YW55Pignc3RhcnRBY3Rpdml0eScpKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2cobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYEFjdGl2aXR5U2VydmljZTogJHttZXNzYWdlfWApO1xyXG4gICAgICAgIC8vIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKGBBY3Rpdml0eVNlcnZpY2U6ICR7bWVzc2FnZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSBIdHRwIG9wZXJhdGlvbiB0aGF0IGZhaWxlZC5cclxuICAgICAqIExldCB0aGUgYXBwIGNvbnRpbnVlLlxyXG4gICAgICogQHBhcmFtIG9wZXJhdGlvbiAtIG5hbWUgb2YgdGhlIG9wZXJhdGlvbiB0aGF0IGZhaWxlZFxyXG4gICAgICogQHBhcmFtIHJlc3VsdCAtIG9wdGlvbmFsIHZhbHVlIHRvIHJldHVybiBhcyB0aGUgb2JzZXJ2YWJsZSByZXN1bHRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcjxUPihvcGVyYXRpb24gPSAnb3BlcmF0aW9uJywgcmVzdWx0PzogVCkge1xyXG4gICAgICAgIHJldHVybiAoZXJyb3I6IGFueSk6IE9ic2VydmFibGU8VD4gPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gVE9ETzogc2VuZCB0aGUgZXJyb3IgdG8gcmVtb3RlIGxvZ2dpbmcgaW5mcmFzdHJ1Y3R1cmVcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7IC8vIGxvZyB0byBjb25zb2xlIGluc3RlYWRcclxuXHJcbiAgICAgICAgICAgIC8vIFRPRE86IGJldHRlciBqb2Igb2YgdHJhbnNmb3JtaW5nIGVycm9yIGZvciB1c2VyIGNvbnN1bXB0aW9uXHJcbiAgICAgICAgICAgIHRoaXMubG9nKGAke29wZXJhdGlvbn0gZmFpbGVkOiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcblxyXG4gICAgICAgICAgICAvLyBMZXQgdGhlIGFwcCBrZWVwIHJ1bm5pbmcgYnkgcmV0dXJuaW5nIGFuIGVtcHR5IHJlc3VsdC5cclxuICAgICAgICAgICAgcmV0dXJuIG9mKHJlc3VsdCBhcyBUKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=