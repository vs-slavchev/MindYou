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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZCQUFvQztBQUNwQyw0Q0FBb0Q7QUFDcEQsbURBQStDO0FBSS9DLDZDQUE2RDtBQUU3RCxnREFBNkM7QUFFN0MsSUFBTSxXQUFXLEdBQUc7SUFDaEIsT0FBTyxFQUFFLElBQUksa0JBQVcsQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDO0NBQ2pFLENBQUM7QUFHRjtJQVFJLHFCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBTjVCLGtCQUFhLEdBQU0sMEJBQVcsQ0FBQyxPQUFPLGdCQUFhLENBQUMsQ0FBRSxpQkFBaUI7UUFDL0UsZ0ZBQWdGO1FBQ3hFLHFCQUFnQixHQUFNLElBQUksQ0FBQyxhQUFhLGFBQVUsQ0FBQyxDQUFFLGlCQUFpQjtRQUN0RSx1QkFBa0IsR0FBTSxJQUFJLENBQUMsYUFBYSxXQUFRLENBQUMsQ0FBRSxpQkFBaUI7UUFDdEUsNkJBQXdCLEdBQU0sSUFBSSxDQUFDLGFBQWEsWUFBUyxDQUFDLENBQUUsaUJBQWlCO1FBR2pGLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsbUNBQWEsR0FBYjtRQUFBLGlCQU9DO1FBTkcsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBVyxDQUFDLE9BQU8sRUFBRSxpQkFBTyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQztRQUNoRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFTLElBQUksQ0FBQyxnQkFBZ0IsQ0FBRzthQUNoRCxJQUFJLENBQ0QsZUFBRyxDQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxFQUE5QixDQUE4QixDQUFDLEVBQ2pELHNCQUFVLENBQUMs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QztDQUFBLEFBcEdELElBb0dDO0FBcEdZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge2NhdGNoRXJyb3IsIG1hcCwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7QXBwU2V0dGluZ3N9IGZyb20gXCJ+L2FwcC9hcHAtc2V0dGluZ3NcIjtcclxuXHJcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XHJcblxyXG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5pbXBvcnQge0hlYWRlcnN9IGZyb20gXCJ+L2FwcC9zaGFyZWQvaGVhZGVyc1wiO1xyXG5cclxuY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KVxyXG59O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSXRlbVNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgYWN0aXZpdGllc1VybCA9IGAke0FwcFNldHRpbmdzLkFQSV9VUkx9L2FjdGl2aXRpZXNgOyAgLy8gVVJMIHRvIHdlYiBhcGlcclxuICAgIC8vIHByaXZhdGUgYWN0aXZpdGllc1VybCA9IGAke0FwcFNldHRpbmdzLkFQSV9VUkx9L2FjdGl2aXR5YDsgIC8vIFVSTCB0byB3ZWIgYXBpXHJcbiAgICBwcml2YXRlIGFjdGl2aXRpZXNVcmxUb3AgPSBgJHt0aGlzLmFjdGl2aXRpZXNVcmx9L3RvcC8xMDBgOyAgLy8gVVJMIHRvIHdlYiBhcGlcclxuICAgIHByaXZhdGUgYWN0aXZpdGllc1VybFN0YXJ0ID0gYCR7dGhpcy5hY3Rpdml0aWVzVXJsfS9zdGFydGA7ICAvLyBVUkwgdG8gd2ViIGFwaVxyXG4gICAgcHJpdmF0ZSBhY3Rpdml0aWVzVXJsU3RhcnRDdXN0b20gPSBgJHt0aGlzLmFjdGl2aXRpZXNVcmx9L2NyZWF0ZWA7ICAvLyBVUkwgdG8gd2ViIGFwaVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbml0IGFjdGl2aXRpZXMgc2VydmljZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFjdGl2aXRpZXMoKTogT2JzZXJ2YWJsZTxJdGVtW10+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhBcHBTZXR0aW5ncy5BUElfVVJMLCBIZWFkZXJzLmdldEF1dGhUb2tlbkhlYWRlcnMoKSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8SXRlbVtdPih0aGlzLmFjdGl2aXRpZXNVcmxUb3AsIClcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICB0YXAoYWN0aXZpdGllcyA9PiB0aGlzLmxvZygnZmV0Y2hlZCBhY3Rpdml0aWVzJykpLFxyXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKCdnZXRBY3Rpdml0aWVzJywgW10pKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG1ldGhvZCB0aGF0IG1ha2VzIHRoZSBQT1NUIHJlcXVlc3QgdG8gY3JlYXRlIGEgY3VzdG9tIGFjdGl2aXR5XHJcbiAgICBjcmVhdGVDdXN0b21BY3Rpdml0eShhY3Rpdml0eTogYW55KTogT2JzZXJ2YWJsZTxhbnk+e1xyXG4gICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogYWN0aXZpdHlcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFjdGl2aXRpZXNVcmxTdGFydEN1c3RvbSwgZGF0YSwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgICAgICAgIHRhcCgoYWN0aXZpdHk6IGFueSkgPT4gdGhpcy5sb2coYGNyZWF0ZWQgY3VzdG9tIGFjdGl2aXR5YCkpLFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3I8YW55PignY3JlYXRlQ3VzdG9tQWN0aXZpdHknKSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFjdGl2aXR5KCk6IE9ic2VydmFibGU8YW55PntcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLmFjdGl2aXRpZXNVcmx9L2FjdGl2YXRlZGAsIEhlYWRlcnMuZ2V0QXV0aFRva2VuSGVhZGVycygpKS5waXBlKFxyXG4gICAgICAgICAgICB0YXAoKGFjdGl2aXR5OiBhbnkpID0+IHt0aGlzLmxvZyhhY3Rpdml0eSl9KSxcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yPGFueT4oJ2dldEFjdGl2aXR5JykpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJdGVtTm80MDQ8RGF0YT4oYWN0aXZpdHlCbHVlcHJpbnRJZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxJdGVtPiB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYCR7dGhpcy5hY3Rpdml0aWVzVXJsfS8ke2FjdGl2aXR5Qmx1ZXByaW50SWR9YDtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxJdGVtW10+KHVybClcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICBtYXAoaXRlbXMgPT4gaXRlbXNbMF0pLCAvLyByZXR1cm5zIGEgezB8MX0gZWxlbWVudCBhcnJheVxyXG4gICAgICAgICAgICAgICAgdGFwKGggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG91dGNvbWUgPSBoID8gYGZldGNoZWRgIDogYGRpZCBub3QgZmluZGA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2coYCR7b3V0Y29tZX0gYWN0aXZpdHkgaWQ9JHthY3Rpdml0eUJsdWVwcmludElkfWApO1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3I8SXRlbT4oYGdldEl0ZW0gaWQ9JHthY3Rpdml0eUJsdWVwcmludElkfWApKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW0oYWN0aXZpdHlCbHVlcHJpbnRJZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxJdGVtPiB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYCR7dGhpcy5hY3Rpdml0aWVzVXJsfS8ke2FjdGl2aXR5Qmx1ZXByaW50SWR9YDtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxJdGVtPih1cmwpLnBpcGUoXHJcbiAgICAgICAgICAgIHRhcChfID0+IHRoaXMubG9nKGBmZXRjaGVkIGl0ZW0gaWQ9JHthY3Rpdml0eUJsdWVwcmludElkfWApKSxcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yPEl0ZW0+KGBnZXRJdGVtIGlkPSR7YWN0aXZpdHlCbHVlcHJpbnRJZH1gKSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3BBY3Rpdml0eShhY3Rpdml0eUJsdWVwcmludElkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEl0ZW0+IHtcclxuICAgICAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmFjdGl2aXRpZXNVcmx9L3N0b3BgO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEl0ZW0+KHVybCwgSGVhZGVycy5nZXRBdXRoVG9rZW5IZWFkZXJzKCkpLnBpcGUoXHJcbiAgICAgICAgICAgIHRhcChfID0+IHRoaXMubG9nKGBzdG9wcGVkIGFjdGl2aXR5IGlkPSR7YWN0aXZpdHlCbHVlcHJpbnRJZH1gKSksXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcjxJdGVtPihgc3RvcEFjdGl2aXR5IGlkPSR7YWN0aXZpdHlCbHVlcHJpbnRJZH1gKSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0QWN0aXZpdHkgKGFjdGl2aXR5OiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KGAke3RoaXMuYWN0aXZpdGllc1VybH0vJHthY3Rpdml0eS5hY3Rpdml0eV9pZH0vc3RhcnRgLCB7fSwgSGVhZGVycy5nZXRBdXRoVG9rZW5IZWFkZXJzKCkpLnBpcGUoXHJcbiAgICAgICAgICAgIHRhcCgoYWN0aXZpdHk6IGFueSkgPT4gdGhpcy5sb2coYHN0YXJ0ZWQgYWN0aXZpdHkgdy8gaWQ9JHthY3Rpdml0eS5hY3Rpdml0eV9pZH1gKSksXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcjxhbnk+KCdzdGFydEFjdGl2aXR5JykpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvZyhtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgQWN0aXZpdHlTZXJ2aWNlOiAke21lc3NhZ2V9YCk7XHJcbiAgICAgICAgLy8gdGhpcy5tZXNzYWdlU2VydmljZS5hZGQoYEFjdGl2aXR5U2VydmljZTogJHttZXNzYWdlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIEh0dHAgb3BlcmF0aW9uIHRoYXQgZmFpbGVkLlxyXG4gICAgICogTGV0IHRoZSBhcHAgY29udGludWUuXHJcbiAgICAgKiBAcGFyYW0gb3BlcmF0aW9uIC0gbmFtZSBvZiB0aGUgb3BlcmF0aW9uIHRoYXQgZmFpbGVkXHJcbiAgICAgKiBAcGFyYW0gcmVzdWx0IC0gb3B0aW9uYWwgdmFsdWUgdG8gcmV0dXJuIGFzIHRoZSBvYnNlcnZhYmxlIHJlc3VsdFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhhbmRsZUVycm9yPFQ+KG9wZXJhdGlvbiA9ICdvcGVyYXRpb24nLCByZXN1bHQ/OiBUKSB7XHJcbiAgICAgICAgcmV0dXJuIChlcnJvcjogYW55KTogT2JzZXJ2YWJsZTxUPiA9PiB7XHJcblxyXG4gICAgICAgICAgICAvLyBUT0RPOiBzZW5kIHRoZSBlcnJvciB0byByZW1vdGUgbG9nZ2luZyBpbmZyYXN0cnVjdHVyZVxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTsgLy8gbG9nIHRvIGNvbnNvbGUgaW5zdGVhZFxyXG5cclxuICAgICAgICAgICAgLy8gVE9ETzogYmV0dGVyIGpvYiBvZiB0cmFuc2Zvcm1pbmcgZXJyb3IgZm9yIHVzZXIgY29uc3VtcHRpb25cclxuICAgICAgICAgICAgdGhpcy5sb2coYCR7b3BlcmF0aW9ufSBmYWlsZWQ6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuXHJcbiAgICAgICAgICAgIC8vIExldCB0aGUgYXBwIGtlZXAgcnVubmluZyBieSByZXR1cm5pbmcgYW4gZW1wdHkgcmVzdWx0LlxyXG4gICAgICAgICAgICByZXR1cm4gb2YocmVzdWx0IGFzIFQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==