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
        var url = this.activitiesUrl + "/stop";
        return this.http.get(url, headers_1.Headers.getAuthTokenHeaders()).pipe(operators_1.tap(function (_) { return _this.log("stopped activity id=" + activityBlueprintId); }), operators_1.catchError(this.handleError("stopActivity id=" + activityBlueprintId)));
    };
    ItemService.prototype.startActivity = function (activity) {
        var _this = this;
        return this.http.post(this.activitiesUrl + "/" + activity.activity_id + "/start", {}, headers_1.Headers.getAuthTokenHeaders()).pipe(operators_1.tap(function (activity) { return _this.log("started activity w/ id=" + activity.activity_id); }), operators_1.catchError(this.handleError('startActivity')));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZCQUFvQztBQUNwQyw0Q0FBb0Q7QUFDcEQsbURBQStDO0FBSS9DLDZDQUE2RDtBQUU3RCxnREFBNkM7QUFFN0MsSUFBTSxXQUFXLEdBQUc7SUFDaEIsT0FBTyxFQUFFLElBQUksa0JBQVcsQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDO0NBQ2pFLENBQUM7QUFHRjtJQVVJLHFCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBUjVCLGtCQUFhLEdBQU0sMEJBQVcsQ0FBQyxPQUFPLGdCQUFhLENBQUMsQ0FBRSxpQkFBaUI7UUFDL0UsZ0ZBQWdGO1FBQ3hFLHFCQUFnQixHQUFNLElBQUksQ0FBQyxhQUFhLGFBQVUsQ0FBQyxDQUFFLGlCQUFpQjtRQUN0RSx1QkFBa0IsR0FBTSxJQUFJLENBQUMsYUFBYSxXQUFRLENBQUMsQ0FBRSxpQkFBaUI7UUFDdEUsNkJBQXdCLEdBQU0sSUFBSSxDQUFDLGFBQWEsWUFBUyxDQUFDLENBQUUsaUJBQWlCO1FBS2pGLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsa0NBQVksR0FBWjtRQUNJLElBQUksV0FBVyxHQUFHLEVBQUMsT0FBTyxFQUFFLElBQUksa0JBQVcsQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ3ZFLGVBQWUsRUFBRSwwQkFBVyxDQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUM5QyxPQUFPLFdBQVcsQ0FBQTtJQUN0QixDQUFDO0lBRUQsbUNBQWEsR0FBYjtRQUFBLGlCQU9DO1FBTkcsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUN0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Y3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7Y2F0Y2hFcnJvciwgbWFwLCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHtBcHBTZXR0aW5nc30gZnJvbSBcIn4vYXBwL2FwcC1zZXR0aW5nc1wiO1xyXG5cclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcclxuXHJcbmltcG9ydCB7SHR0cENsaWVudCwgSHR0cEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbmltcG9ydCB7SGVhZGVyc30gZnJvbSBcIn4vYXBwL3NoYXJlZC9oZWFkZXJzXCI7XHJcblxyXG5jb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pXHJcbn07XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBJdGVtU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBhY3Rpdml0aWVzVXJsID0gYCR7QXBwU2V0dGluZ3MuQVBJX1VSTH0vYWN0aXZpdGllc2A7ICAvLyBVUkwgdG8gd2ViIGFwaVxyXG4gICAgLy8gcHJpdmF0ZSBhY3Rpdml0aWVzVXJsID0gYCR7QXBwU2V0dGluZ3MuQVBJX1VSTH0vYWN0aXZpdHlgOyAgLy8gVVJMIHRvIHdlYiBhcGlcclxuICAgIHByaXZhdGUgYWN0aXZpdGllc1VybFRvcCA9IGAke3RoaXMuYWN0aXZpdGllc1VybH0vdG9wLzEwMGA7ICAvLyBVUkwgdG8gd2ViIGFwaVxyXG4gICAgcHJpdmF0ZSBhY3Rpdml0aWVzVXJsU3RhcnQgPSBgJHt0aGlzLmFjdGl2aXRpZXNVcmx9L3N0YXJ0YDsgIC8vIFVSTCB0byB3ZWIgYXBpXHJcbiAgICBwcml2YXRlIGFjdGl2aXRpZXNVcmxTdGFydEN1c3RvbSA9IGAke3RoaXMuYWN0aXZpdGllc1VybH0vY3JlYXRlYDsgIC8vIFVSTCB0byB3ZWIgYXBpXHJcblxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaW5pdCBhY3Rpdml0aWVzIHNlcnZpY2UnKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRBdXRoVG9rZW4oKSB7XHJcbiAgICAgICAgbGV0IGh0dHBPcHRpb25zID0ge2hlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogQXBwU2V0dGluZ3MuVE9LRU59KX07XHJcbiAgICAgICAgcmV0dXJuIGh0dHBPcHRpb25zXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWN0aXZpdGllcygpOiBPYnNlcnZhYmxlPEl0ZW1bXT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEFwcFNldHRpbmdzLkFQSV9VUkwsIHRoaXMuYWRkQXV0aFRva2VuKCkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEl0ZW1bXT4odGhpcy5hY3Rpdml0aWVzVXJsVG9wLCApXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgdGFwKGFjdGl2aXRpZXMgPT4gdGhpcy5sb2coJ2ZldGNoZWQgYWN0aXZpdGllcycpKSxcclxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcignZ2V0QWN0aXZpdGllcycsIFtdKSlcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBtZXRob2QgdGhhdCBtYWtlcyB0aGUgUE9TVCByZXF1ZXN0IHRvIGNyZWF0ZSBhIGN1c3RvbSBhY3Rpdml0eVxyXG4gICAgY3JlYXRlQ3VzdG9tQWN0aXZpdHkoYWN0aXZpdHk6IGFueSk6IE9ic2VydmFibGU8YW55PntcclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IGFjdGl2aXR5XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hY3Rpdml0aWVzVXJsU3RhcnRDdXN0b20sIGRhdGEsIGh0dHBPcHRpb25zKS5waXBlKFxyXG4gICAgICAgICAgICB0YXAoKGFjdGl2aXR5OiBhbnkpID0+IHRoaXMubG9nKGBjcmVhdGVkIGN1c3RvbSBhY3Rpdml0eWApKSxcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yPGFueT4oJ2NyZWF0ZUN1c3RvbUFjdGl2aXR5JykpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjcmVhdGVBY2NvdW50KCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke0FwcFNldHRpbmdzLkFQSV9VUkx9L3VzZXJzL2NyZWF0ZWAsIHtcImlkXCI6IEFwcFNldHRpbmdzLlRPS0VOfSxcclxuICAgIC8vICAgICAgICAgdGhpcy5hZGRBdXRoVG9rZW4oKSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgZ2V0SXRlbU5vNDA0PERhdGE+KGFjdGl2aXR5Qmx1ZXByaW50SWQ6IG51bWJlcik6IE9ic2VydmFibGU8SXRlbT4ge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYWN0aXZpdGllc1VybH0vJHthY3Rpdml0eUJsdWVwcmludElkfWA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8SXRlbVtdPih1cmwpXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgbWFwKGl0ZW1zID0+IGl0ZW1zWzBdKSwgLy8gcmV0dXJucyBhIHswfDF9IGVsZW1lbnQgYXJyYXlcclxuICAgICAgICAgICAgICAgIHRhcChoID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvdXRjb21lID0gaCA/IGBmZXRjaGVkYCA6IGBkaWQgbm90IGZpbmRgO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nKGAke291dGNvbWV9IGFjdGl2aXR5IGlkPSR7YWN0aXZpdHlCbHVlcHJpbnRJZH1gKTtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yPEl0ZW0+KGBnZXRJdGVtIGlkPSR7YWN0aXZpdHlCbHVlcHJpbnRJZH1gKSlcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJdGVtKGFjdGl2aXR5Qmx1ZXByaW50SWQ6IG51bWJlcik6IE9ic2VydmFibGU8SXRlbT4ge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYWN0aXZpdGllc1VybH0vJHthY3Rpdml0eUJsdWVwcmludElkfWA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8SXRlbT4odXJsKS5waXBlKFxyXG4gICAgICAgICAgICB0YXAoXyA9PiB0aGlzLmxvZyhgZmV0Y2hlZCBpdGVtIGlkPSR7YWN0aXZpdHlCbHVlcHJpbnRJZH1gKSksXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcjxJdGVtPihgZ2V0SXRlbSBpZD0ke2FjdGl2aXR5Qmx1ZXByaW50SWR9YCkpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wQWN0aXZpdHkoYWN0aXZpdHlCbHVlcHJpbnRJZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxJdGVtPiB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYCR7dGhpcy5hY3Rpdml0aWVzVXJsfS9zdG9wYDtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxJdGVtPih1cmwsIEhlYWRlcnMuZ2V0QXV0aFRva2VuSGVhZGVycygpKS5waXBlKFxyXG4gICAgICAgICAgICB0YXAoXyA9PiB0aGlzLmxvZyhgc3RvcHBlZCBhY3Rpdml0eSBpZD0ke2FjdGl2aXR5Qmx1ZXByaW50SWR9YCkpLFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3I8SXRlbT4oYHN0b3BBY3Rpdml0eSBpZD0ke2FjdGl2aXR5Qmx1ZXByaW50SWR9YCkpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydEFjdGl2aXR5IChhY3Rpdml0eTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55PihgJHt0aGlzLmFjdGl2aXRpZXNVcmx9LyR7YWN0aXZpdHkuYWN0aXZpdHlfaWR9L3N0YXJ0YCwge30sIEhlYWRlcnMuZ2V0QXV0aFRva2VuSGVhZGVycygpKS5waXBlKFxyXG4gICAgICAgICAgICB0YXAoKGFjdGl2aXR5OiBhbnkpID0+IHRoaXMubG9nKGBzdGFydGVkIGFjdGl2aXR5IHcvIGlkPSR7YWN0aXZpdHkuYWN0aXZpdHlfaWR9YCkpLFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3I8YW55Pignc3RhcnRBY3Rpdml0eScpKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2cobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYEFjdGl2aXR5U2VydmljZTogJHttZXNzYWdlfWApO1xyXG4gICAgICAgIC8vIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKGBBY3Rpdml0eVNlcnZpY2U6ICR7bWVzc2FnZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSBIdHRwIG9wZXJhdGlvbiB0aGF0IGZhaWxlZC5cclxuICAgICAqIExldCB0aGUgYXBwIGNvbnRpbnVlLlxyXG4gICAgICogQHBhcmFtIG9wZXJhdGlvbiAtIG5hbWUgb2YgdGhlIG9wZXJhdGlvbiB0aGF0IGZhaWxlZFxyXG4gICAgICogQHBhcmFtIHJlc3VsdCAtIG9wdGlvbmFsIHZhbHVlIHRvIHJldHVybiBhcyB0aGUgb2JzZXJ2YWJsZSByZXN1bHRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcjxUPihvcGVyYXRpb24gPSAnb3BlcmF0aW9uJywgcmVzdWx0PzogVCkge1xyXG4gICAgICAgIHJldHVybiAoZXJyb3I6IGFueSk6IE9ic2VydmFibGU8VD4gPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gVE9ETzogc2VuZCB0aGUgZXJyb3IgdG8gcmVtb3RlIGxvZ2dpbmcgaW5mcmFzdHJ1Y3R1cmVcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7IC8vIGxvZyB0byBjb25zb2xlIGluc3RlYWRcclxuXHJcbiAgICAgICAgICAgIC8vIFRPRE86IGJldHRlciBqb2Igb2YgdHJhbnNmb3JtaW5nIGVycm9yIGZvciB1c2VyIGNvbnN1bXB0aW9uXHJcbiAgICAgICAgICAgIHRoaXMubG9nKGAke29wZXJhdGlvbn0gZmFpbGVkOiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcblxyXG4gICAgICAgICAgICAvLyBMZXQgdGhlIGFwcCBrZWVwIHJ1bm5pbmcgYnkgcmV0dXJuaW5nIGFuIGVtcHR5IHJlc3VsdC5cclxuICAgICAgICAgICAgcmV0dXJuIG9mKHJlc3VsdCBhcyBUKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=