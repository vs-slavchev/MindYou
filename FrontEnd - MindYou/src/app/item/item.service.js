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
    }
    ItemService.prototype.getActivities = function () {
        var _this = this;
        return this.http.get(this.activitiesUrlTop)
            .pipe(operators_1.tap(function (activities) { return _this.log('fetched activities'); }), operators_1.catchError(this.handleError('getActivities', [])));
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
        var url = this.activitiesUrl + "/stop?user_id" + activityBlueprintId;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZCQUFvQztBQUNwQyw0Q0FBb0Q7QUFHcEQsbURBQWlEO0FBRWpELDZDQUE2RDtBQUU3RCxJQUFNLFdBQVcsR0FBRztJQUNoQixPQUFPLEVBQUUsSUFBSSxrQkFBVyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUM7Q0FDakUsQ0FBQztBQUdGO0lBT0kscUJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFMNUIsa0JBQWEsR0FBTSwwQkFBVyxDQUFDLE9BQU8sZ0JBQWEsQ0FBQyxDQUFFLGlCQUFpQjtRQUMvRSxnRkFBZ0Y7UUFDeEUscUJBQWdCLEdBQU0sSUFBSSxDQUFDLGFBQWEsWUFBUyxDQUFDLENBQUUsaUJBQWlCO1FBQ3JFLHVCQUFrQixHQUFNLElBQUksQ0FBQyxhQUFhLFdBQVEsQ0FBQyxDQUFFLGlCQUFpQjtJQUV2QyxDQUFDO0lBRXhDLG1DQUFhLEdBQWI7UUFBQSxpQkFNQztRQUxHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7YUFDOUMsSUFBSSxDQUNELGVBQUcsQ0FBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLEtBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxFQUNqRCxzQkFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQ3BELENBQUM7SUFDVixDQUFDO0lBR0Qsa0NBQVksR0FBWixVQUFtQixtQkFBMkI7UUFBOUMsaUJBV0M7UUFWRyxJQUFNLEdBQUcsR0FBTSxJQUFJLENBQUMsYUFBYSxTQUFJLG1CQUFxQixDQUFDO1FBQzNELE1BQU0sQ0FBQyxJQUFJLENBQUMs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QUFFO3lDQVFpQixpQkFBVTtPQVAzQixXQUFXLENBK0V2QjtJQUFELGtCQUFDO0NBQUEsQUEvRUQsSUErRUM7QUEvRVksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtjYXRjaEVycm9yLCBtYXAsIHRhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgQXBwU2V0dGluZ3MgfSBmcm9tIFwifi9hcHAvYXBwLXNldHRpbmdzXCI7XG5cbmltcG9ydCB7SHR0cENsaWVudCwgSHR0cEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSlcbn07XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJdGVtU2VydmljZSB7XG5cbiAgICBwcml2YXRlIGFjdGl2aXRpZXNVcmwgPSBgJHtBcHBTZXR0aW5ncy5BUElfVVJMfS9hY3Rpdml0aWVzYDsgIC8vIFVSTCB0byB3ZWIgYXBpXG4gICAgLy8gcHJpdmF0ZSBhY3Rpdml0aWVzVXJsID0gYCR7QXBwU2V0dGluZ3MuQVBJX1VSTH0vYWN0aXZpdHlgOyAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgICBwcml2YXRlIGFjdGl2aXRpZXNVcmxUb3AgPSBgJHt0aGlzLmFjdGl2aXRpZXNVcmx9L3RvcC8xMGA7ICAvLyBVUkwgdG8gd2ViIGFwaVxuICAgIHByaXZhdGUgYWN0aXZpdGllc1VybFN0YXJ0ID0gYCR7dGhpcy5hY3Rpdml0aWVzVXJsfS9zdGFydGA7ICAvLyBVUkwgdG8gd2ViIGFwaVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gICAgZ2V0QWN0aXZpdGllcygpOiBPYnNlcnZhYmxlPEl0ZW1bXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxJdGVtW10+KHRoaXMuYWN0aXZpdGllc1VybFRvcClcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIHRhcChhY3Rpdml0aWVzID0+IHRoaXMubG9nKCdmZXRjaGVkIGFjdGl2aXRpZXMnKSksXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKCdnZXRBY3Rpdml0aWVzJywgW10pKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cblxuICAgIGdldEl0ZW1ObzQwNDxEYXRhPihhY3Rpdml0eUJsdWVwcmludElkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEl0ZW0+IHtcbiAgICAgICAgY29uc3QgdXJsID0gYCR7dGhpcy5hY3Rpdml0aWVzVXJsfS8ke2FjdGl2aXR5Qmx1ZXByaW50SWR9YDtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8SXRlbVtdPih1cmwpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICBtYXAoaXRlbXMgPT4gaXRlbXNbMF0pLCAvLyByZXR1cm5zIGEgezB8MX0gZWxlbWVudCBhcnJheVxuICAgICAgICAgICAgICAgIHRhcChoID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3V0Y29tZSA9IGggPyBgZmV0Y2hlZGAgOiBgZGlkIG5vdCBmaW5kYDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2coYCR7b3V0Y29tZX0gYWN0aXZpdHkgaWQ9JHthY3Rpdml0eUJsdWVwcmludElkfWApO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcjxJdGVtPihgZ2V0SXRlbSBpZD0ke2FjdGl2aXR5Qmx1ZXByaW50SWR9YCkpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIGdldEl0ZW0oYWN0aXZpdHlCbHVlcHJpbnRJZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxJdGVtPiB7XG4gICAgICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYWN0aXZpdGllc1VybH0vJHthY3Rpdml0eUJsdWVwcmludElkfWA7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEl0ZW0+KHVybCkucGlwZShcbiAgICAgICAgICAgIHRhcChfID0+IHRoaXMubG9nKGBmZXRjaGVkIGl0ZW0gaWQ9JHthY3Rpdml0eUJsdWVwcmludElkfWApKSxcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcjxJdGVtPihgZ2V0SXRlbSBpZD0ke2FjdGl2aXR5Qmx1ZXByaW50SWR9YCkpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RvcEFjdGl2aXR5KGFjdGl2aXR5Qmx1ZXByaW50SWQ6IG51bWJlcik6IE9ic2VydmFibGU8SXRlbT4ge1xuICAgICAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmFjdGl2aXRpZXNVcmx9L3N0b3A/dXNlcl9pZCR7YWN0aXZpdHlCbHVlcHJpbnRJZH1gO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxJdGVtPih1cmwpLnBpcGUoXG4gICAgICAgICAgICB0YXAoXyA9PiB0aGlzLmxvZyhgc3RvcHBlZCBhY3Rpdml0eSBpZD0ke2FjdGl2aXR5Qmx1ZXByaW50SWR9YCkpLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yPEl0ZW0+KGBzdG9wQWN0aXZpdHkgaWQ9JHthY3Rpdml0eUJsdWVwcmludElkfWApKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXJ0QWN0aXZpdHkgKGFjdGl2aXR5OiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih0aGlzLmFjdGl2aXRpZXNVcmxTdGFydCwgYWN0aXZpdHksIGh0dHBPcHRpb25zKS5waXBlKFxuICAgICAgICAgICAgdGFwKChhY3Rpdml0eTogYW55KSA9PiB0aGlzLmxvZyhgc3RhcnRlZCBhY3Rpdml0eSB3LyBpZD0ke2FjdGl2aXR5LmFjdGl2aXR5X2lkfWApKSxcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcjxhbnk+KCdzdGFydEFjdGl2aXR5JykpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2cobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBY3Rpdml0eVNlcnZpY2U6ICR7bWVzc2FnZX1gKTtcbiAgICAgICAgLy8gdGhpcy5tZXNzYWdlU2VydmljZS5hZGQoYEFjdGl2aXR5U2VydmljZTogJHttZXNzYWdlfWApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBIdHRwIG9wZXJhdGlvbiB0aGF0IGZhaWxlZC5cbiAgICAgKiBMZXQgdGhlIGFwcCBjb250aW51ZS5cbiAgICAgKiBAcGFyYW0gb3BlcmF0aW9uIC0gbmFtZSBvZiB0aGUgb3BlcmF0aW9uIHRoYXQgZmFpbGVkXG4gICAgICogQHBhcmFtIHJlc3VsdCAtIG9wdGlvbmFsIHZhbHVlIHRvIHJldHVybiBhcyB0aGUgb2JzZXJ2YWJsZSByZXN1bHRcbiAgICAgKi9cbiAgICBwcml2YXRlIGhhbmRsZUVycm9yPFQ+KG9wZXJhdGlvbiA9ICdvcGVyYXRpb24nLCByZXN1bHQ/OiBUKSB7XG4gICAgICAgIHJldHVybiAoZXJyb3I6IGFueSk6IE9ic2VydmFibGU8VD4gPT4ge1xuXG4gICAgICAgICAgICAvLyBUT0RPOiBzZW5kIHRoZSBlcnJvciB0byByZW1vdGUgbG9nZ2luZyBpbmZyYXN0cnVjdHVyZVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7IC8vIGxvZyB0byBjb25zb2xlIGluc3RlYWRcblxuICAgICAgICAgICAgLy8gVE9ETzogYmV0dGVyIGpvYiBvZiB0cmFuc2Zvcm1pbmcgZXJyb3IgZm9yIHVzZXIgY29uc3VtcHRpb25cbiAgICAgICAgICAgIHRoaXMubG9nKGAke29wZXJhdGlvbn0gZmFpbGVkOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG5cbiAgICAgICAgICAgIC8vIExldCB0aGUgYXBwIGtlZXAgcnVubmluZyBieSByZXR1cm5pbmcgYW4gZW1wdHkgcmVzdWx0LlxuICAgICAgICAgICAgcmV0dXJuIG9mKHJlc3VsdCBhcyBUKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbn1cbiJdfQ==