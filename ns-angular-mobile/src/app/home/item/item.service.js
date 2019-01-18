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
    ItemService.prototype.getActivities = function () {
        var _this = this;
        console.log(app_settings_1.AppSettings.API_URL, headers_1.Headers.getAuthTokenHeaders());
        return this.http.get(this.activitiesUrlTop)
            .pipe(operators_1.tap(function (activities) { return _this.log('fetched activities'); }), operators_1.catchError(this.handleError('getActivities', [])));
    };
    // _getActivities(): ObservableArray<Item> {
    //
    //
    //     console.log(AppSettings.API_URL, Headers.getAuthTokenHeaders());
    //     // return this.http.get<Item[]>(this.activitiesUrlTop, );
    //     return this.http.get<Item>(this.activitiesUrlTop, ).pipe(
    //             tap(activities => this.log('fetched activities')),
    //             catchError(this.handleError('getActivities', {}))
    //         );
    // }
    // method that makes the POST request to create a custom activity
    ItemService.prototype.createCustomActivity = function (activity) {
        var _this = this;
        var data = {
            "name": activity
        };
        return this.http.post(this.activitiesUrlStartCustom, data, httpOptions).pipe(operators_1.tap(function (activity) { return _this.log("created custom activity"); }), operators_1.catchError(this.handleError('createCustomActivity')));
    };
    ItemService.prototype.getActivity = function () {
        var _this = this;
        return this.http.get(this.activitiesUrl + "/activated", headers_1.Headers.getAuthTokenHeaders()).pipe(operators_1.tap(function (activity) { _this.log(activity); }), operators_1.catchError(this.handleError('getActivity')));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZCQUFvQztBQUNwQyw0Q0FBb0Q7QUFDcEQsbURBQStDO0FBSS9DLDZDQUE2RDtBQUU3RCxnREFBNkM7QUFHN0MsSUFBTSxXQUFXLEdBQUc7SUFDaEIsT0FBTyxFQUFFLElBQUksa0JBQVcsQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDO0NBQ2pFLENBQUM7QUFHRjtJQVFJLHFCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBTjVCLGtCQUFhLEdBQU0sMEJBQVcsQ0FBQyxPQUFPLGdCQUFhLENBQUMsQ0FBRSxpQkFBaUI7UUFDL0UsZ0ZBQWdGO1FBQ3hFLHFCQUFnQixHQUFNLElBQUksQ0FBQyxhQUFhLGFBQVUsQ0FBQyxDQUFFLGlCQUFpQjtRQUN0RSx1QkFBa0IsR0FBTSxJQUFJLENBQUMsYUFBYSxXQUFRLENBQUMsQ0FBRSxpQkFBaUI7UUFDdEUsNkJBQXdCLEdBQU0sSUFBSSxDQUFDLGFBQWEsWUFBUyxDQUFDLENBQUUsaUJBQWlCO1FBR2pGLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsbUNBQWEsR0FBYjtRQUFBLGlCQU9DO1FBTkcsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBVyxDQUFDLE9BQU8sRUFBRSxpQkFBTyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQztRQUNoRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFTLElBQUksQ0FBQyxnQkFBZ0IsQ0FBRzthQUNoRCxJQUFJLENBQ0QsZUFBRyxDQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxFQUE5QixDQUE4QixDQUFDLEVBQ2pELHNCQUFVLENBQUMs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QUFFLENBQUMsTUFBVyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQTdHUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBU2lCLGlCQUFVO09BUjNCLFdBQVcsQ0ErR3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQS9HRCxJQStHQztBQS9HWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge09ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtjYXRjaEVycm9yLCBtYXAsIHRhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQge0FwcFNldHRpbmdzfSBmcm9tIFwifi9hcHAvYXBwLXNldHRpbmdzXCI7XHJcblxyXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xyXG5cclxuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuaW1wb3J0IHtIZWFkZXJzfSBmcm9tIFwifi9hcHAvc2hhcmVkL2hlYWRlcnNcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlQXJyYXl9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xyXG5cclxuY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KVxyXG59O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSXRlbVNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgYWN0aXZpdGllc1VybCA9IGAke0FwcFNldHRpbmdzLkFQSV9VUkx9L2FjdGl2aXRpZXNgOyAgLy8gVVJMIHRvIHdlYiBhcGlcclxuICAgIC8vIHByaXZhdGUgYWN0aXZpdGllc1VybCA9IGAke0FwcFNldHRpbmdzLkFQSV9VUkx9L2FjdGl2aXR5YDsgIC8vIFVSTCB0byB3ZWIgYXBpXHJcbiAgICBwcml2YXRlIGFjdGl2aXRpZXNVcmxUb3AgPSBgJHt0aGlzLmFjdGl2aXRpZXNVcmx9L3RvcC8xMDBgOyAgLy8gVVJMIHRvIHdlYiBhcGlcclxuICAgIHByaXZhdGUgYWN0aXZpdGllc1VybFN0YXJ0ID0gYCR7dGhpcy5hY3Rpdml0aWVzVXJsfS9zdGFydGA7ICAvLyBVUkwgdG8gd2ViIGFwaVxyXG4gICAgcHJpdmF0ZSBhY3Rpdml0aWVzVXJsU3RhcnRDdXN0b20gPSBgJHt0aGlzLmFjdGl2aXRpZXNVcmx9L2NyZWF0ZWA7ICAvLyBVUkwgdG8gd2ViIGFwaVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbml0IGFjdGl2aXRpZXMgc2VydmljZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFjdGl2aXRpZXMoKTogT2JzZXJ2YWJsZTxJdGVtW10+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhBcHBTZXR0aW5ncy5BUElfVVJMLCBIZWFkZXJzLmdldEF1dGhUb2tlbkhlYWRlcnMoKSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8SXRlbVtdPih0aGlzLmFjdGl2aXRpZXNVcmxUb3AsIClcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICB0YXAoYWN0aXZpdGllcyA9PiB0aGlzLmxvZygnZmV0Y2hlZCBhY3Rpdml0aWVzJykpLFxyXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKCdnZXRBY3Rpdml0aWVzJywgW10pKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIF9nZXRBY3Rpdml0aWVzKCk6IE9ic2VydmFibGVBcnJheTxJdGVtPiB7XHJcbiAgICAvL1xyXG4gICAgLy9cclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhBcHBTZXR0aW5ncy5BUElfVVJMLCBIZWFkZXJzLmdldEF1dGhUb2tlbkhlYWRlcnMoKSk7XHJcbiAgICAvLyAgICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQ8SXRlbVtdPih0aGlzLmFjdGl2aXRpZXNVcmxUb3AsICk7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8SXRlbT4odGhpcy5hY3Rpdml0aWVzVXJsVG9wLCApLnBpcGUoXHJcbiAgICAvLyAgICAgICAgICAgICB0YXAoYWN0aXZpdGllcyA9PiB0aGlzLmxvZygnZmV0Y2hlZCBhY3Rpdml0aWVzJykpLFxyXG4gICAgLy8gICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKCdnZXRBY3Rpdml0aWVzJywge30pKVxyXG4gICAgLy8gICAgICAgICApO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIG1ldGhvZCB0aGF0IG1ha2VzIHRoZSBQT1NUIHJlcXVlc3QgdG8gY3JlYXRlIGEgY3VzdG9tIGFjdGl2aXR5XHJcbiAgICBjcmVhdGVDdXN0b21BY3Rpdml0eShhY3Rpdml0eTogYW55KTogT2JzZXJ2YWJsZTxhbnk+e1xyXG4gICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogYWN0aXZpdHlcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFjdGl2aXRpZXNVcmxTdGFydEN1c3RvbSwgZGF0YSwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgICAgICAgIHRhcCgoYWN0aXZpdHk6IGFueSkgPT4gdGhpcy5sb2coYGNyZWF0ZWQgY3VzdG9tIGFjdGl2aXR5YCkpLFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3I8YW55PignY3JlYXRlQ3VzdG9tQWN0aXZpdHknKSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFjdGl2aXR5KCk6IE9ic2VydmFibGU8YW55PntcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLmFjdGl2aXRpZXNVcmx9L2FjdGl2YXRlZGAsIEhlYWRlcnMuZ2V0QXV0aFRva2VuSGVhZGVycygpKS5waXBlKFxyXG4gICAgICAgICAgICB0YXAoKGFjdGl2aXR5OiBhbnkpID0+IHt0aGlzLmxvZyhhY3Rpdml0eSl9KSxcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yPGFueT4oJ2dldEFjdGl2aXR5JykpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJdGVtTm80MDQ8RGF0YT4oYWN0aXZpdHlCbHVlcHJpbnRJZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxJdGVtPiB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYCR7dGhpcy5hY3Rpdml0aWVzVXJsfS8ke2FjdGl2aXR5Qmx1ZXByaW50SWR9YDtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxJdGVtW10+KHVybClcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICBtYXAoaXRlbXMgPT4gaXRlbXNbMF0pLCAvLyByZXR1cm5zIGEgezB8MX0gZWxlbWVudCBhcnJheVxyXG4gICAgICAgICAgICAgICAgdGFwKGggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG91dGNvbWUgPSBoID8gYGZldGNoZWRgIDogYGRpZCBub3QgZmluZGA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2coYCR7b3V0Y29tZX0gYWN0aXZpdHkgaWQ9JHthY3Rpdml0eUJsdWVwcmludElkfWApO1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3I8SXRlbT4oYGdldEl0ZW0gaWQ9JHthY3Rpdml0eUJsdWVwcmludElkfWApKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW0oYWN0aXZpdHlCbHVlcHJpbnRJZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxJdGVtPiB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYCR7dGhpcy5hY3Rpdml0aWVzVXJsfS8ke2FjdGl2aXR5Qmx1ZXByaW50SWR9YDtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxJdGVtPih1cmwpLnBpcGUoXHJcbiAgICAgICAgICAgIHRhcChfID0+IHRoaXMubG9nKGBmZXRjaGVkIGl0ZW0gaWQ9JHthY3Rpdml0eUJsdWVwcmludElkfWApKSxcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yPEl0ZW0+KGBnZXRJdGVtIGlkPSR7YWN0aXZpdHlCbHVlcHJpbnRJZH1gKSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3BBY3Rpdml0eShhY3Rpdml0eUJsdWVwcmludElkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEl0ZW0+IHtcclxuICAgICAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmFjdGl2aXRpZXNVcmx9L3N0b3BgO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEl0ZW0+KHVybCwgSGVhZGVycy5nZXRBdXRoVG9rZW5IZWFkZXJzKCkpLnBpcGUoXHJcbiAgICAgICAgICAgIHRhcChfID0+IHRoaXMubG9nKGBzdG9wcGVkIGFjdGl2aXR5IGlkPSR7YWN0aXZpdHlCbHVlcHJpbnRJZH1gKSksXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcjxJdGVtPihgc3RvcEFjdGl2aXR5IGlkPSR7YWN0aXZpdHlCbHVlcHJpbnRJZH1gKSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0QWN0aXZpdHkgKGFjdGl2aXR5OiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KGAke3RoaXMuYWN0aXZpdGllc1VybH0vJHthY3Rpdml0eS5hY3Rpdml0eV9pZH0vc3RhcnRgLCB7fSwgSGVhZGVycy5nZXRBdXRoVG9rZW5IZWFkZXJzKCkpLnBpcGUoXHJcbiAgICAgICAgICAgIHRhcCgoYWN0aXZpdHk6IGFueSkgPT4gdGhpcy5sb2coYHN0YXJ0ZWQgYWN0aXZpdHkgdy8gaWQ9JHthY3Rpdml0eS5hY3Rpdml0eV9pZH1gKSksXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcjxhbnk+KCdzdGFydEFjdGl2aXR5JykpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvZyhtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgQWN0aXZpdHlTZXJ2aWNlOiAke21lc3NhZ2V9YCk7XHJcbiAgICAgICAgLy8gdGhpcy5tZXNzYWdlU2VydmljZS5hZGQoYEFjdGl2aXR5U2VydmljZTogJHttZXNzYWdlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIEh0dHAgb3BlcmF0aW9uIHRoYXQgZmFpbGVkLlxyXG4gICAgICogTGV0IHRoZSBhcHAgY29udGludWUuXHJcbiAgICAgKiBAcGFyYW0gb3BlcmF0aW9uIC0gbmFtZSBvZiB0aGUgb3BlcmF0aW9uIHRoYXQgZmFpbGVkXHJcbiAgICAgKiBAcGFyYW0gcmVzdWx0IC0gb3B0aW9uYWwgdmFsdWUgdG8gcmV0dXJuIGFzIHRoZSBvYnNlcnZhYmxlIHJlc3VsdFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhhbmRsZUVycm9yPFQ+KG9wZXJhdGlvbiA9ICdvcGVyYXRpb24nLCByZXN1bHQ/OiBUKSB7XHJcbiAgICAgICAgcmV0dXJuIChlcnJvcjogYW55KTogT2JzZXJ2YWJsZTxUPiA9PiB7XHJcblxyXG4gICAgICAgICAgICAvLyBUT0RPOiBzZW5kIHRoZSBlcnJvciB0byByZW1vdGUgbG9nZ2luZyBpbmZyYXN0cnVjdHVyZVxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTsgLy8gbG9nIHRvIGNvbnNvbGUgaW5zdGVhZFxyXG5cclxuICAgICAgICAgICAgLy8gVE9ETzogYmV0dGVyIGpvYiBvZiB0cmFuc2Zvcm1pbmcgZXJyb3IgZm9yIHVzZXIgY29uc3VtcHRpb25cclxuICAgICAgICAgICAgdGhpcy5sb2coYCR7b3BlcmF0aW9ufSBmYWlsZWQ6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuXHJcbiAgICAgICAgICAgIC8vIExldCB0aGUgYXBwIGtlZXAgcnVubmluZyBieSByZXR1cm5pbmcgYW4gZW1wdHkgcmVzdWx0LlxyXG4gICAgICAgICAgICByZXR1cm4gb2YocmVzdWx0IGFzIFQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==