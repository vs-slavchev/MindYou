"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var http_1 = require("@angular/common/http");
var app_settings_1 = require("~/app/app-settings");
var headers_1 = require("~/app/shared/headers");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var FriendService = /** @class */ (function () {
    // private items = new Array<Friend>(
    //     { id: 1, name: "user 1", role: "Goalkeeper" },
    //     { id: 3, name: "user 2", role: "Defender" },
    //     { id: 4, name: "user 3", role: "Midfielder" },
    //     { id: 5, name: "user 4", role: "Midfielder" },
    //     { id: 6, name: "user 5", role: "Midfielder" },
    // );
    function FriendService(http) {
        this.http = http;
        this.url = app_settings_1.AppSettings.API_URL + "/users";
        this.urlFriends = app_settings_1.AppSettings.API_URL + "/friendships";
    }
    FriendService.prototype.getUsers = function () {
        var _this = this;
        return this.http.get(this.url)
            .pipe(operators_1.tap(function (users) { return _this.log('fetched friends'); }), operators_1.catchError(this.handleError('getFriends', [])));
    };
    FriendService.prototype.getFriends = function () {
        var _this = this;
        return this.http.get(this.urlFriends, headers_1.Headers.getAuthTokenHeaders())
            .pipe(operators_1.tap(function (users) { return _this.log('fetched friends'); }), operators_1.catchError(this.handleError('getFriends', [])));
    };
    FriendService.prototype.getPendingRequests = function () {
        var _this = this;
        // /friendships/123/sentRequests
        return this.http.get(this.urlFriends + "/" + app_settings_1.AppSettings.TOKEN + "/sentRequests", headers_1.Headers.getAuthTokenHeaders())
            .pipe(operators_1.tap(function (users) { return _this.log('fetched friends'); }), operators_1.catchError(this.handleError('getFriends', [])));
    };
    FriendService.prototype.getReceivedRequests = function () {
        var _this = this;
        // /friendships/123/receivedRequests
        return this.http.get(this.urlFriends + "/" + app_settings_1.AppSettings.TOKEN + "/receivedRequests", headers_1.Headers.getAuthTokenHeaders())
            .pipe(operators_1.tap(function (users) { return _this.log('fetched friends'); }), operators_1.catchError(this.handleError('getFriends', [])));
    };
    FriendService.prototype.searchUser = function (name) {
        var _this = this;
        return this.http.get(this.url + "/search?name=" + name)
            .pipe(operators_1.tap(function (users) { return _this.log('fetched activities'); }), operators_1.catchError(this.handleError('getActivities', [])));
    };
    // getItem(id: number): Observable<Friend> {
    //     return this.http.get<Friend>(`${this.url}/${id}`)
    //         .pipe(
    //             tap(users => this.log('fetched firend')),
    //             catchError(this.handleError('getItem', {}))
    //         );
    // }
    FriendService.prototype.getItem = function (id) {
        var _this = this;
        var url = this.url + "/" + id;
        console.log(url);
        return this.http.get(url).pipe(operators_1.tap(function (_) { return _this.log("fetched friend id=" + id); }), operators_1.catchError(this.handleError("getFriend id=" + id)));
    };
    FriendService.prototype.addFriend = function (userId) {
        var _this = this;
        console.log(userId);
        return this.http.post(this.urlFriends + "/invite/" + userId, {}, headers_1.Headers.getAuthTokenHeaders()).pipe(operators_1.tap(function (friend) { return _this.log("friend w/ id=" + userId); }), operators_1.catchError(this.handleError('addFriend')));
    };
    FriendService.prototype.acceptFriendResuest = function (friendshipId) {
        var _this = this;
        // /friendships/123/accept/321
        return this.http.put(this.urlFriends + "/" + friendshipId + "/accept/" + app_settings_1.AppSettings.TOKEN, {}, headers_1.Headers.getAuthTokenHeaders()).pipe(operators_1.tap(function (friend) { return _this.log("friend w/ id=" + friendshipId); }), operators_1.catchError(this.handleError('addFriend')));
    };
    FriendService.prototype.declineFriendResuest = function (friendshipId) {
        var _this = this;
        // /friendships/123/decline/321
        return this.http.put(this.urlFriends + "/" + friendshipId + "/decline/" + app_settings_1.AppSettings.TOKEN, {}, headers_1.Headers.getAuthTokenHeaders()).pipe(operators_1.tap(function (friend) { return _this.log("friend w/ id=" + friendshipId); }), operators_1.catchError(this.handleError('addFriend')));
    };
    FriendService.prototype.log = function (message) {
        console.log("ActivityService: " + message);
        // this.messageService.add(`ActivityService: ${message}`);
    };
    FriendService.prototype.handleError = function (operation, result) {
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
    FriendService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], FriendService);
    return FriendService;
}());
exports.FriendService = FriendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJpZW5kLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmcmllbmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2QkFBb0M7QUFDcEMsNENBQW9EO0FBSXBELDZDQUE2RDtBQUM3RCxtREFBK0M7QUFFL0MsZ0RBQTZDO0FBRzdDLElBQU0sV0FBVyxHQUFHO0lBQ2hCLE9BQU8sRUFBRSxJQUFJLGtCQUFXLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQztDQUNqRSxDQUFDO0FBR0Y7SUFLSSxxQ0FBcUM7SUFDckMscURBQXFEO0lBQ3JELG1EQUFtRDtJQUNuRCxxREFBcUQ7SUFDckQscURBQXFEO0lBQ3JELHFEQUFxRDtJQUNyRCxLQUFLO0lBRUwsdUJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFYNUIsUUFBRyxHQUFNLDBCQUFXLENBQUMsT0FBTyxXQUFRLENBQUM7UUFDckMsZUFBVSxHQUFNLDBCQUFXLENBQUMsT0FBTyxpQkFBYyxDQUFDO0lBVW5CLENBQUM7SUFFeEMsZ0NBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEcsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDO2FBQ25DLElBQUksQ0FDRCxlQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEVBQTNCLENBQTJCLENBQUMsRUFDekMsc0JBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUNqRCxDQUFDO0lBQ1YsQ0FBQztJQUVELGtDQUFVLEdBQVY7UUFBQSxpQkFNQztRQUxHLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVcsSUFBSSxDQUFDLFVBQVUsRUFBRSxpQkFBTyxDQUFDLG1CQUFtQixFQUFFLENBQUM7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QUMsR0FBRyxDQUFDLHNCQUFvQixPQUFTLENBQUMsQ0FBQztRQUMzQywwREFBMEQ7SUFDOUQsQ0FBQztJQUVPLG1DQUFXLEdBQW5CLFVBQXVCLFNBQXVCLEVBQUUsTUFBVTtRQUExRCxpQkFZQztRQVpzQiwwQkFBQSxFQUFBLHVCQUF1QjtRQUMxQyxPQUFPLFVBQUMsS0FBVTtZQUVkLHdEQUF3RDtZQUN4RCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMseUJBQXlCO1lBRS9DLDhEQUE4RDtZQUM5RCxLQUFJLENBQUMsR0FBRyxDQUFJLFNBQVMsaUJBQVksS0FBSyxDQUFDLE9BQVMsQ0FBQyxDQUFDO1lBRWxELHlEQUF5RDtZQUN6RCxPQUFPLFNBQUUsQ0FBQyxNQUFXLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUM7SUFDTixDQUFDO0lBbkhRLGFBQWE7UUFEekIsaUJBQVUsRUFBRTt5Q0FjaUIsaUJBQVU7T0FiM0IsYUFBYSxDQW9IekI7SUFBRCxvQkFBQztDQUFBLEFBcEhELElBb0hDO0FBcEhZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge2NhdGNoRXJyb3IsIG1hcCwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBGcmllbmQgfSBmcm9tIFwiLi9mcmllbmRcIjtcclxuXHJcbmltcG9ydCB7SHR0cENsaWVudCwgSHR0cEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHtBcHBTZXR0aW5nc30gZnJvbSBcIn4vYXBwL2FwcC1zZXR0aW5nc1wiO1xyXG5cclxuaW1wb3J0IHtIZWFkZXJzfSBmcm9tIFwifi9hcHAvc2hhcmVkL2hlYWRlcnNcIjtcclxuaW1wb3J0IHtGcmllbmRzaGlwfSBmcm9tIFwifi9hcHAvaG9tZS9mcmllbmQvZnJpZW5kc2hpcFwiO1xyXG5cclxuY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KVxyXG59O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRnJpZW5kU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSB1cmwgPSBgJHtBcHBTZXR0aW5ncy5BUElfVVJMfS91c2Vyc2A7XHJcbiAgICBwcml2YXRlIHVybEZyaWVuZHMgPSBgJHtBcHBTZXR0aW5ncy5BUElfVVJMfS9mcmllbmRzaGlwc2A7XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBpdGVtcyA9IG5ldyBBcnJheTxGcmllbmQ+KFxyXG4gICAgLy8gICAgIHsgaWQ6IDEsIG5hbWU6IFwidXNlciAxXCIsIHJvbGU6IFwiR29hbGtlZXBlclwiIH0sXHJcbiAgICAvLyAgICAgeyBpZDogMywgbmFtZTogXCJ1c2VyIDJcIiwgcm9sZTogXCJEZWZlbmRlclwiIH0sXHJcbiAgICAvLyAgICAgeyBpZDogNCwgbmFtZTogXCJ1c2VyIDNcIiwgcm9sZTogXCJNaWRmaWVsZGVyXCIgfSxcclxuICAgIC8vICAgICB7IGlkOiA1LCBuYW1lOiBcInVzZXIgNFwiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiB9LFxyXG4gICAgLy8gICAgIHsgaWQ6IDYsIG5hbWU6IFwidXNlciA1XCIsIHJvbGU6IFwiTWlkZmllbGRlclwiIH0sXHJcbiAgICAvLyApO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cclxuXHJcbiAgICBnZXRVc2VycygpOiBPYnNlcnZhYmxlPEZyaWVuZFtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RnJpZW5kW10+KHRoaXMudXJsKVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIHRhcCh1c2VycyA9PiB0aGlzLmxvZygnZmV0Y2hlZCBmcmllbmRzJykpLFxyXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKCdnZXRGcmllbmRzJywgW10pKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZyaWVuZHMoKTogT2JzZXJ2YWJsZTxGcmllbmRbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEZyaWVuZFtdPih0aGlzLnVybEZyaWVuZHMsIEhlYWRlcnMuZ2V0QXV0aFRva2VuSGVhZGVycygpKVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIHRhcCh1c2VycyA9PiB0aGlzLmxvZygnZmV0Y2hlZCBmcmllbmRzJykpLFxyXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKCdnZXRGcmllbmRzJywgW10pKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBlbmRpbmdSZXF1ZXN0cygpOiBPYnNlcnZhYmxlPEZyaWVuZHNoaXBbXT4ge1xyXG4gICAgICAgIC8vIC9mcmllbmRzaGlwcy8xMjMvc2VudFJlcXVlc3RzXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RnJpZW5kc2hpcFtdPihgJHt0aGlzLnVybEZyaWVuZHN9LyR7QXBwU2V0dGluZ3MuVE9LRU59L3NlbnRSZXF1ZXN0c2AsIEhlYWRlcnMuZ2V0QXV0aFRva2VuSGVhZGVycygpKVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIHRhcCh1c2VycyA9PiB0aGlzLmxvZygnZmV0Y2hlZCBmcmllbmRzJykpLFxyXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKCdnZXRGcmllbmRzJywgW10pKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJlY2VpdmVkUmVxdWVzdHMoKTogT2JzZXJ2YWJsZTxGcmllbmRzaGlwW10+IHtcclxuICAgICAgICAvLyAvZnJpZW5kc2hpcHMvMTIzL3JlY2VpdmVkUmVxdWVzdHNcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxGcmllbmRzaGlwW10+KGAke3RoaXMudXJsRnJpZW5kc30vJHtBcHBTZXR0aW5ncy5UT0tFTn0vcmVjZWl2ZWRSZXF1ZXN0c2AsIEhlYWRlcnMuZ2V0QXV0aFRva2VuSGVhZGVycygpKVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIHRhcCh1c2VycyA9PiB0aGlzLmxvZygnZmV0Y2hlZCBmcmllbmRzJykpLFxyXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKCdnZXRGcmllbmRzJywgW10pKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNlYXJjaFVzZXIobmFtZTogU3RyaW5nKTogT2JzZXJ2YWJsZTxGcmllbmRbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEZyaWVuZFtdPihgJHt0aGlzLnVybH0vc2VhcmNoP25hbWU9JHtuYW1lfWApXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgdGFwKHVzZXJzID0+IHRoaXMubG9nKCdmZXRjaGVkIGFjdGl2aXRpZXMnKSksXHJcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IoJ2dldEFjdGl2aXRpZXMnLCBbXSkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0SXRlbShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxGcmllbmQ+IHtcclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxGcmllbmQ+KGAke3RoaXMudXJsfS8ke2lkfWApXHJcbiAgICAvLyAgICAgICAgIC5waXBlKFxyXG4gICAgLy8gICAgICAgICAgICAgdGFwKHVzZXJzID0+IHRoaXMubG9nKCdmZXRjaGVkIGZpcmVuZCcpKSxcclxuICAgIC8vICAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcignZ2V0SXRlbScsIHt9KSlcclxuICAgIC8vICAgICAgICAgKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBnZXRJdGVtKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEZyaWVuZD4ge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGAke3RoaXMudXJsfS8ke2lkfWA7XHJcbiAgICAgICAgY29uc29sZS5sb2codXJsKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxGcmllbmQ+KHVybCkucGlwZShcclxuICAgICAgICAgICAgdGFwKF8gPT4gdGhpcy5sb2coYGZldGNoZWQgZnJpZW5kIGlkPSR7aWR9YCkpLFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3I8RnJpZW5kPihgZ2V0RnJpZW5kIGlkPSR7aWR9YCkpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRGcmllbmQodXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJJZCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4oYCR7dGhpcy51cmxGcmllbmRzfS9pbnZpdGUvJHt1c2VySWR9YCwge30sIEhlYWRlcnMuZ2V0QXV0aFRva2VuSGVhZGVycygpKS5waXBlKFxyXG4gICAgICAgICAgICB0YXAoKGZyaWVuZDogYW55KSA9PiB0aGlzLmxvZyhgZnJpZW5kIHcvIGlkPSR7dXNlcklkfWApKSxcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yPGFueT4oJ2FkZEZyaWVuZCcpKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgYWNjZXB0RnJpZW5kUmVzdWVzdChmcmllbmRzaGlwSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgLy8gL2ZyaWVuZHNoaXBzLzEyMy9hY2NlcHQvMzIxXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8YW55PihgJHt0aGlzLnVybEZyaWVuZHN9LyR7ZnJpZW5kc2hpcElkfS9hY2NlcHQvJHtBcHBTZXR0aW5ncy5UT0tFTn1gLCB7fSwgSGVhZGVycy5nZXRBdXRoVG9rZW5IZWFkZXJzKCkpLnBpcGUoXHJcbiAgICAgICAgICAgIHRhcCgoZnJpZW5kOiBhbnkpID0+IHRoaXMubG9nKGBmcmllbmQgdy8gaWQ9JHtmcmllbmRzaGlwSWR9YCkpLFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3I8YW55PignYWRkRnJpZW5kJykpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWNsaW5lRnJpZW5kUmVzdWVzdChmcmllbmRzaGlwSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgLy8gL2ZyaWVuZHNoaXBzLzEyMy9kZWNsaW5lLzMyMVxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0PGFueT4oYCR7dGhpcy51cmxGcmllbmRzfS8ke2ZyaWVuZHNoaXBJZH0vZGVjbGluZS8ke0FwcFNldHRpbmdzLlRPS0VOfWAsIHt9LCBIZWFkZXJzLmdldEF1dGhUb2tlbkhlYWRlcnMoKSkucGlwZShcclxuICAgICAgICAgICAgdGFwKChmcmllbmQ6IGFueSkgPT4gdGhpcy5sb2coYGZyaWVuZCB3LyBpZD0ke2ZyaWVuZHNoaXBJZH1gKSksXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcjxhbnk+KCdhZGRGcmllbmQnKSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9nKG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBBY3Rpdml0eVNlcnZpY2U6ICR7bWVzc2FnZX1gKTtcclxuICAgICAgICAvLyB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZChgQWN0aXZpdHlTZXJ2aWNlOiAke21lc3NhZ2V9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcjxUPihvcGVyYXRpb24gPSAnb3BlcmF0aW9uJywgcmVzdWx0PzogVCkge1xyXG4gICAgICAgIHJldHVybiAoZXJyb3I6IGFueSk6IE9ic2VydmFibGU8VD4gPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gVE9ETzogc2VuZCB0aGUgZXJyb3IgdG8gcmVtb3RlIGxvZ2dpbmcgaW5mcmFzdHJ1Y3R1cmVcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7IC8vIGxvZyB0byBjb25zb2xlIGluc3RlYWRcclxuXHJcbiAgICAgICAgICAgIC8vIFRPRE86IGJldHRlciBqb2Igb2YgdHJhbnNmb3JtaW5nIGVycm9yIGZvciB1c2VyIGNvbnN1bXB0aW9uXHJcbiAgICAgICAgICAgIHRoaXMubG9nKGAke29wZXJhdGlvbn0gZmFpbGVkOiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcblxyXG4gICAgICAgICAgICAvLyBMZXQgdGhlIGFwcCBrZWVwIHJ1bm5pbmcgYnkgcmV0dXJuaW5nIGFuIGVtcHR5IHJlc3VsdC5cclxuICAgICAgICAgICAgcmV0dXJuIG9mKHJlc3VsdCBhcyBUKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==