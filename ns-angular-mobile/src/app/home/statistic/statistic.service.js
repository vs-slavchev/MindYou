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
    // createAccount(): Observable<any> {
    //     return this.http.post(`${AppSettings.API_URL}/users/create`, {"id": AppSettings.TOKEN},
    //         this.addAuthToken());
    // }
    // getItemNo404<Data>(activityBlueprintId: number): Observable<Item> {
    //     const url = `${this.activitiesUrl}/${activityBlueprintId}`;
    //     return this.http.get<Item[]>(url)
    //         .pipe(
    //             map(items => items[0]), // returns a {0|1} element array
    //             tap(h => {
    //                 const outcome = h ? `fetched` : `did not find`;
    //                 this.log(`${outcome} activity id=${activityBlueprintId}`);
    //             }),
    //             catchError(this.handleError<Item>(`getItem id=${activityBlueprintId}`))
    //         );
    // }
    //
    // getItem(activityBlueprintId: number): Observable<Item> {
    //     const url = `${this.activitiesUrl}/${activityBlueprintId}`;
    //     return this.http.get<Item>(url).pipe(
    //         tap(_ => this.log(`fetched item id=${activityBlueprintId}`)),
    //         catchError(this.handleError<Item>(`getItem id=${activityBlueprintId}`))
    //     );
    // }
    //
    // stopActivity(activityBlueprintId: number): Observable<Item> {
    //     const url = `${this.activitiesUrl}/${AppSettings.TOKEN}/stop`;
    //     return this.http.get<Item>(url).pipe(
    //         tap(_ => this.log(`stopped activity id=${activityBlueprintId}`)),
    //         catchError(this.handleError<Item>(`stopActivity id=${activityBlueprintId}`))
    //     );
    // }
    //
    // startActivity (activity: any): Observable<any> {
    //     return this.http.post<any>(this.activitiesUrlStart, activity, httpOptions).pipe(
    //         tap((activity: any) => this.log(`started activity w/ id=${activity.activity_id}`)),
    //         catchError(this.handleError<any>('startActivity'))
    //     );
    // }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGlzdGljLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGF0aXN0aWMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2QkFBb0M7QUFDcEMsNENBQW9EO0FBQ3BELG1EQUErQztBQUUvQyw2Q0FBNkQ7QUFHN0QsSUFBTSxXQUFXLEdBQUc7SUFDaEIsT0FBTyxFQUFFLElBQUksa0JBQVcsQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDO0NBQ2pFLENBQUM7QUFHRjtJQUtJLDBCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBSDVCLFFBQUcsR0FBTSwwQkFBVyxDQUFDLE9BQU8sb0NBQWlDLENBQUMsQ0FBRSxpQkFBaUI7UUFJckYsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCx1Q0FBWSxHQUFaO1FBQ0ksSUFBSSxXQUFXLEdBQUcsRUFBQyxPQUFPLEVBQUUsSUFBSSxrQkFBVyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQjtnQkFDdkUsZUFBZSxFQUFFLDBCQUFXLENBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQzlDLE9BQU8sV0FBVyxDQUFBO0lBQ3RCLENBQUM7SUFFRCx3Q0FBYSxHQUFiO1FBQUEsaUJBT0M7UUFORyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUFXLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWMsS0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLDBCQUFXLENBQUMsS0FBSyxZQUFTLENBQUc7YUFDeEUsSUFBSSxDQUNELGVBQUcsQ0FBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLEtBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxFQUNqRCxzQkFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQ3BELENBQUM7SUFDVixDQUFDO0lBRUQscUNBQXFDO0lBQ3JDLDhGQUE4RjtJQUM5RixnQ0FBZ0M7SUFDaEMsSUFBSTtJQUVKLHNFQUFzRTtJQUN0RSxrRUFBa0U7SUFDbEUsd0NBQXdDO0lBQ3hDLGlCQUFpQjtJQUNqQix1RUFBdUU7SUFDdkUseUJBQXlCO0lBQ3pCLGtFQUFrRTtJQUNsRSw2RUFBNkU7SUFDN0Usa0JBQWtCO0lBQ2xCLHNGQUFzRjtJQUN0RixhQUFhO0lBQ2IsSUFBSTtJQUNKLEVBQUU7SUFDRiwyREFBMkQ7SUFDM0Qsa0VBQWtFO0lBQ2xFLDRDQUE0QztJQUM1Qyx3RUFBd0U7SUFDeEUsa0ZBQWtGO0lBQ2xGLFNBQVM7SUFDVCxJQUFJO0lBQ0osRUFBRTtJQUNGLGdFQUFnRTtJQUNoRSxxRUFBcUU7SUFDckUsNENBQTRDO0lBQzVDLDRFQUE0RTtJQUM1RSx1RkFBdUY7SUFDdkYsU0FBUztJQUNULElBQUk7SUFDSixFQUFFO0lBQ0YsbURBQW1EO0lBQ25ELHVGQUF1RjtJQUN2Riw4RkFBOEY7SUFDOUYsNkRBQTZEO0lBQzdELFNBQVM7SUFDVCxJQUFJO0lBRUksOEJBQUcsR0FBWCxVQUFZLE9BQWU7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBb0IsT0FBUyxDQUFDLENBQUM7UUFDM0MsMERBQTBEO0lBQzlELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLHNDQUFXLEdBQW5CLFVBQXVCLFNBQXVCLEVBQUUsTUFBVTtRQUExRCxpQkFZQztRQVpzQiwwQkFBQSxFQUFBLHVCQUF1QjtRQUMxQyxPQUFPLFVBQUMsS0FBVTtZQUVkLHdEQUF3RDtZQUN4RCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMseUJBQXlCO1lBRS9DLDhEQUE4RDtZQUM5RCxLQUFJLENBQUMsR0FBRyxDQUFJLFNBQVMsaUJBQVksS0FBSyxDQUFDLE9BQVMsQ0FBQyxDQUFDO1lBRWxELHlEQUF5RDtZQUN6RCxPQUFPLFNBQUUsQ0FBQyxNQUFXLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUM7SUFDTixDQUFDO0lBeEZRLGdCQUFnQjtRQUQ1QixpQkFBVSxFQUFFO3lDQU1pQixpQkFBVTtPQUwzQixnQkFBZ0IsQ0EwRjVCO0lBQUQsdUJBQUM7Q0FBQSxBQTFGRCxJQTBGQztBQTFGWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtjYXRjaEVycm9yLCBtYXAsIHRhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtBcHBTZXR0aW5nc30gZnJvbSBcIn4vYXBwL2FwcC1zZXR0aW5nc1wiO1xuXG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge1N0YXRpc3RpY30gZnJvbSBcIn4vYXBwL2hvbWUvc3RhdGlzdGljL3N0YXRpc3RpY1wiO1xuXG5jb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KVxufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0YXRpc3RpY1NlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSB1cmwgPSBgJHtBcHBTZXR0aW5ncy5BUElfVVJMfS9zdGF0aXN0aWNzL2hvdXJzLXBlci1hY3Rpdml0eS9gOyAgLy8gVVJMIHRvIHdlYiBhcGlcblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbml0IGFjdGl2aXRpZXMgc2VydmljZScpO1xuICAgIH1cblxuICAgIGFkZEF1dGhUb2tlbigpIHtcbiAgICAgICAgbGV0IGh0dHBPcHRpb25zID0ge2hlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IEFwcFNldHRpbmdzLlRPS0VOfSl9O1xuICAgICAgICByZXR1cm4gaHR0cE9wdGlvbnNcbiAgICB9XG5cbiAgICBnZXRTdGF0aXN0aWNzKCk6IE9ic2VydmFibGU8U3RhdGlzdGljW10+IHtcbiAgICAgICAgY29uc29sZS5sb2coQXBwU2V0dGluZ3MuQVBJX1VSTCwgdGhpcy5hZGRBdXRoVG9rZW4oKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFN0YXRpc3RpY1tdPihgJHt0aGlzLnVybH0ke0FwcFNldHRpbmdzLlRPS0VOfS9yZWNlbnRgLCApXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICB0YXAoc3RhdGlzdGljcyA9PiB0aGlzLmxvZygnZmV0Y2hlZCBzdGF0aXN0aWNzJykpLFxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcignZ2V0QWN0aXZpdGllcycsIFtdKSlcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gY3JlYXRlQWNjb3VudCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7QXBwU2V0dGluZ3MuQVBJX1VSTH0vdXNlcnMvY3JlYXRlYCwge1wiaWRcIjogQXBwU2V0dGluZ3MuVE9LRU59LFxuICAgIC8vICAgICAgICAgdGhpcy5hZGRBdXRoVG9rZW4oKSk7XG4gICAgLy8gfVxuXG4gICAgLy8gZ2V0SXRlbU5vNDA0PERhdGE+KGFjdGl2aXR5Qmx1ZXByaW50SWQ6IG51bWJlcik6IE9ic2VydmFibGU8SXRlbT4ge1xuICAgIC8vICAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmFjdGl2aXRpZXNVcmx9LyR7YWN0aXZpdHlCbHVlcHJpbnRJZH1gO1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxJdGVtW10+KHVybClcbiAgICAvLyAgICAgICAgIC5waXBlKFxuICAgIC8vICAgICAgICAgICAgIG1hcChpdGVtcyA9PiBpdGVtc1swXSksIC8vIHJldHVybnMgYSB7MHwxfSBlbGVtZW50IGFycmF5XG4gICAgLy8gICAgICAgICAgICAgdGFwKGggPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICBjb25zdCBvdXRjb21lID0gaCA/IGBmZXRjaGVkYCA6IGBkaWQgbm90IGZpbmRgO1xuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmxvZyhgJHtvdXRjb21lfSBhY3Rpdml0eSBpZD0ke2FjdGl2aXR5Qmx1ZXByaW50SWR9YCk7XG4gICAgLy8gICAgICAgICAgICAgfSksXG4gICAgLy8gICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yPEl0ZW0+KGBnZXRJdGVtIGlkPSR7YWN0aXZpdHlCbHVlcHJpbnRJZH1gKSlcbiAgICAvLyAgICAgICAgICk7XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gZ2V0SXRlbShhY3Rpdml0eUJsdWVwcmludElkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEl0ZW0+IHtcbiAgICAvLyAgICAgY29uc3QgdXJsID0gYCR7dGhpcy5hY3Rpdml0aWVzVXJsfS8ke2FjdGl2aXR5Qmx1ZXByaW50SWR9YDtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8SXRlbT4odXJsKS5waXBlKFxuICAgIC8vICAgICAgICAgdGFwKF8gPT4gdGhpcy5sb2coYGZldGNoZWQgaXRlbSBpZD0ke2FjdGl2aXR5Qmx1ZXByaW50SWR9YCkpLFxuICAgIC8vICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yPEl0ZW0+KGBnZXRJdGVtIGlkPSR7YWN0aXZpdHlCbHVlcHJpbnRJZH1gKSlcbiAgICAvLyAgICAgKTtcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyBzdG9wQWN0aXZpdHkoYWN0aXZpdHlCbHVlcHJpbnRJZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxJdGVtPiB7XG4gICAgLy8gICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYWN0aXZpdGllc1VybH0vJHtBcHBTZXR0aW5ncy5UT0tFTn0vc3RvcGA7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEl0ZW0+KHVybCkucGlwZShcbiAgICAvLyAgICAgICAgIHRhcChfID0+IHRoaXMubG9nKGBzdG9wcGVkIGFjdGl2aXR5IGlkPSR7YWN0aXZpdHlCbHVlcHJpbnRJZH1gKSksXG4gICAgLy8gICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3I8SXRlbT4oYHN0b3BBY3Rpdml0eSBpZD0ke2FjdGl2aXR5Qmx1ZXByaW50SWR9YCkpXG4gICAgLy8gICAgICk7XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gc3RhcnRBY3Rpdml0eSAoYWN0aXZpdHk6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHRoaXMuYWN0aXZpdGllc1VybFN0YXJ0LCBhY3Rpdml0eSwgaHR0cE9wdGlvbnMpLnBpcGUoXG4gICAgLy8gICAgICAgICB0YXAoKGFjdGl2aXR5OiBhbnkpID0+IHRoaXMubG9nKGBzdGFydGVkIGFjdGl2aXR5IHcvIGlkPSR7YWN0aXZpdHkuYWN0aXZpdHlfaWR9YCkpLFxuICAgIC8vICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yPGFueT4oJ3N0YXJ0QWN0aXZpdHknKSlcbiAgICAvLyAgICAgKTtcbiAgICAvLyB9XG5cbiAgICBwcml2YXRlIGxvZyhtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS5sb2coYEFjdGl2aXR5U2VydmljZTogJHttZXNzYWdlfWApO1xuICAgICAgICAvLyB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZChgQWN0aXZpdHlTZXJ2aWNlOiAke21lc3NhZ2V9YCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIEh0dHAgb3BlcmF0aW9uIHRoYXQgZmFpbGVkLlxuICAgICAqIExldCB0aGUgYXBwIGNvbnRpbnVlLlxuICAgICAqIEBwYXJhbSBvcGVyYXRpb24gLSBuYW1lIG9mIHRoZSBvcGVyYXRpb24gdGhhdCBmYWlsZWRcbiAgICAgKiBAcGFyYW0gcmVzdWx0IC0gb3B0aW9uYWwgdmFsdWUgdG8gcmV0dXJuIGFzIHRoZSBvYnNlcnZhYmxlIHJlc3VsdFxuICAgICAqL1xuICAgIHByaXZhdGUgaGFuZGxlRXJyb3I8VD4ob3BlcmF0aW9uID0gJ29wZXJhdGlvbicsIHJlc3VsdD86IFQpIHtcbiAgICAgICAgcmV0dXJuIChlcnJvcjogYW55KTogT2JzZXJ2YWJsZTxUPiA9PiB7XG5cbiAgICAgICAgICAgIC8vIFRPRE86IHNlbmQgdGhlIGVycm9yIHRvIHJlbW90ZSBsb2dnaW5nIGluZnJhc3RydWN0dXJlXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTsgLy8gbG9nIHRvIGNvbnNvbGUgaW5zdGVhZFxuXG4gICAgICAgICAgICAvLyBUT0RPOiBiZXR0ZXIgam9iIG9mIHRyYW5zZm9ybWluZyBlcnJvciBmb3IgdXNlciBjb25zdW1wdGlvblxuICAgICAgICAgICAgdGhpcy5sb2coYCR7b3BlcmF0aW9ufSBmYWlsZWQ6ICR7ZXJyb3IubWVzc2FnZX1gKTtcblxuICAgICAgICAgICAgLy8gTGV0IHRoZSBhcHAga2VlcCBydW5uaW5nIGJ5IHJldHVybmluZyBhbiBlbXB0eSByZXN1bHQuXG4gICAgICAgICAgICByZXR1cm4gb2YocmVzdWx0IGFzIFQpO1xuICAgICAgICB9O1xuICAgIH1cblxufVxuIl19