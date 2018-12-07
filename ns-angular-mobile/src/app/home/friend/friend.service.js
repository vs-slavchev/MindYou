"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var http_1 = require("@angular/common/http");
var app_settings_1 = require("~/app/app-settings");
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
        return this.http.get(this.urlFriends + "/" + app_settings_1.AppSettings.TOKEN)
            .pipe(operators_1.tap(function (users) { return _this.log('fetched friends'); }), operators_1.catchError(this.handleError('getFriends', [])));
    };
    FriendService.prototype.getPendingRequests = function () {
        var _this = this;
        // /friendships/123/sentRequests
        return this.http.get(this.urlFriends + "/" + app_settings_1.AppSettings.TOKEN + "/sentRequests")
            .pipe(operators_1.tap(function (users) { return _this.log('fetched friends'); }), operators_1.catchError(this.handleError('getFriends', [])));
    };
    FriendService.prototype.getReceivedRequests = function () {
        var _this = this;
        // /friendships/123/receivedRequests
        return this.http.get(this.urlFriends + "/" + app_settings_1.AppSettings.TOKEN + "/receivedRequests")
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
    FriendService.prototype.addFriend = function (friend) {
        var _this = this;
        return this.http.post(this.urlFriends + "/create", friend, httpOptions).pipe(operators_1.tap(function (friend) { return _this.log("friend w/ id=" + friend.friend_id); }), operators_1.catchError(this.handleError('addFriend')));
    };
    FriendService.prototype.acceptFriendResuest = function (friendshipId) {
        var _this = this;
        // /friendships/123/accept/321
        return this.http.put(this.urlFriends + "/" + friendshipId + "/accept/" + app_settings_1.AppSettings.TOKEN, {}, httpOptions).pipe(operators_1.tap(function (friend) { return _this.log("friend w/ id=" + friendshipId); }), operators_1.catchError(this.handleError('addFriend')));
    };
    FriendService.prototype.declineFriendResuest = function (friendshipId) {
        var _this = this;
        // /friendships/123/decline/321
        return this.http.put(this.urlFriends + "/" + friendshipId + "/decline/" + app_settings_1.AppSettings.TOKEN, {}, httpOptions).pipe(operators_1.tap(function (friend) { return _this.log("friend w/ id=" + friendshipId); }), operators_1.catchError(this.handleError('addFriend')));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJpZW5kLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmcmllbmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2QkFBb0M7QUFDcEMsNENBQW9EO0FBSXBELDZDQUE2RDtBQUM3RCxtREFBK0M7QUFFL0MsSUFBTSxXQUFXLEdBQUc7SUFDaEIsT0FBTyxFQUFFLElBQUksa0JBQVcsQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDO0NBQ2pFLENBQUM7QUFHRjtJQUtJLHFDQUFxQztJQUNyQyxxREFBcUQ7SUFDckQsbURBQW1EO0lBQ25ELHFEQUFxRDtJQUNyRCxxREFBcUQ7SUFDckQscURBQXFEO0lBQ3JELEtBQUs7SUFFTCx1QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQVg1QixRQUFHLEdBQU0sMEJBQVcsQ0FBQyxPQUFPLFdBQVEsQ0FBQztRQUNyQyxlQUFVLEdBQU0sMEJBQVcsQ0FBQyxPQUFPLGlCQUFjLENBQUM7SUFVbkIsQ0FBQztJQUV4QyxnQ0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMRyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFXLElBQUksQ0FBQyxHQUFHLENBQUc7YUFDckMsSUFBSSxDQUNELGVBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxFQUN6QyxzQkFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQ2pELENBQUM7SUFDVixDQUFDO0lBRUQsa0NBQVUsR0FBVjtRQUFBLGlCQU1DO1FBTEcsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBYyxJQUFJLENBQUMsVUFBVSxTQUFJLDBCQUFXLENBQUMsS0FBTyxDQUFDO2FBQ3BFLElBQUksQ0FDRCxlQUFH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Q3hELE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyx5QkFBeUI7WUFFL0MsOERBQThEO1lBQzlELEtBQUksQ0FBQyxHQUFHLENBQUksU0FBUyxpQkFBWSxLQUFLLENBQUMsT0FBUyxDQUFDLENBQUM7WUFFbEQseURBQXlEO1lBQ3pELE9BQU8sU0FBRSxDQUFDLE1BQVcsQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQztJQUNOLENBQUM7SUFsSFEsYUFBYTtRQUR6QixpQkFBVSxFQUFFO3lDQWNpQixpQkFBVTtPQWIzQixhQUFhLENBbUh6QjtJQUFELG9CQUFDO0NBQUEsQUFuSEQsSUFtSEM7QUFuSFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtjYXRjaEVycm9yLCBtYXAsIHRhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBGcmllbmQgfSBmcm9tIFwiLi9mcmllbmRcIjtcblxuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtBcHBTZXR0aW5nc30gZnJvbSBcIn4vYXBwL2FwcC1zZXR0aW5nc1wiO1xuXG5jb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KVxufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZyaWVuZFNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSB1cmwgPSBgJHtBcHBTZXR0aW5ncy5BUElfVVJMfS91c2Vyc2A7XG4gICAgcHJpdmF0ZSB1cmxGcmllbmRzID0gYCR7QXBwU2V0dGluZ3MuQVBJX1VSTH0vZnJpZW5kc2hpcHNgO1xuXG4gICAgLy8gcHJpdmF0ZSBpdGVtcyA9IG5ldyBBcnJheTxGcmllbmQ+KFxuICAgIC8vICAgICB7IGlkOiAxLCBuYW1lOiBcInVzZXIgMVwiLCByb2xlOiBcIkdvYWxrZWVwZXJcIiB9LFxuICAgIC8vICAgICB7IGlkOiAzLCBuYW1lOiBcInVzZXIgMlwiLCByb2xlOiBcIkRlZmVuZGVyXCIgfSxcbiAgICAvLyAgICAgeyBpZDogNCwgbmFtZTogXCJ1c2VyIDNcIiwgcm9sZTogXCJNaWRmaWVsZGVyXCIgfSxcbiAgICAvLyAgICAgeyBpZDogNSwgbmFtZTogXCJ1c2VyIDRcIiwgcm9sZTogXCJNaWRmaWVsZGVyXCIgfSxcbiAgICAvLyAgICAgeyBpZDogNiwgbmFtZTogXCJ1c2VyIDVcIiwgcm9sZTogXCJNaWRmaWVsZGVyXCIgfSxcbiAgICAvLyApO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gICAgZ2V0VXNlcnMoKTogT2JzZXJ2YWJsZTxGcmllbmRbXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxGcmllbmRbXT4odGhpcy51cmwsIClcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIHRhcCh1c2VycyA9PiB0aGlzLmxvZygnZmV0Y2hlZCBmcmllbmRzJykpLFxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcignZ2V0RnJpZW5kcycsIFtdKSlcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0RnJpZW5kcygpOiBPYnNlcnZhYmxlPEZyaWVuZFtdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEZyaWVuZFtdPihgJHt0aGlzLnVybEZyaWVuZHN9LyR7QXBwU2V0dGluZ3MuVE9LRU59YClcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIHRhcCh1c2VycyA9PiB0aGlzLmxvZygnZmV0Y2hlZCBmcmllbmRzJykpLFxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcignZ2V0RnJpZW5kcycsIFtdKSlcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0UGVuZGluZ1JlcXVlc3RzKCk6IE9ic2VydmFibGU8RnJpZW5kW10+IHtcbiAgICAgICAgLy8gL2ZyaWVuZHNoaXBzLzEyMy9zZW50UmVxdWVzdHNcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RnJpZW5kW10+KGAke3RoaXMudXJsRnJpZW5kc30vJHtBcHBTZXR0aW5ncy5UT0tFTn0vc2VudFJlcXVlc3RzYClcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIHRhcCh1c2VycyA9PiB0aGlzLmxvZygnZmV0Y2hlZCBmcmllbmRzJykpLFxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcignZ2V0RnJpZW5kcycsIFtdKSlcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0UmVjZWl2ZWRSZXF1ZXN0cygpOiBPYnNlcnZhYmxlPEZyaWVuZFtdPiB7XG4gICAgICAgIC8vIC9mcmllbmRzaGlwcy8xMjMvcmVjZWl2ZWRSZXF1ZXN0c1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxGcmllbmRbXT4oYCR7dGhpcy51cmxGcmllbmRzfS8ke0FwcFNldHRpbmdzLlRPS0VOfS9yZWNlaXZlZFJlcXVlc3RzYClcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIHRhcCh1c2VycyA9PiB0aGlzLmxvZygnZmV0Y2hlZCBmcmllbmRzJykpLFxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcignZ2V0RnJpZW5kcycsIFtdKSlcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgc2VhcmNoVXNlcihuYW1lOiBTdHJpbmcpOiBPYnNlcnZhYmxlPEZyaWVuZFtdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEZyaWVuZFtdPihgJHt0aGlzLnVybH0vc2VhcmNoP25hbWU9JHtuYW1lfWApXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICB0YXAodXNlcnMgPT4gdGhpcy5sb2coJ2ZldGNoZWQgYWN0aXZpdGllcycpKSxcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IoJ2dldEFjdGl2aXRpZXMnLCBbXSkpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIGdldEl0ZW0oaWQ6IG51bWJlcik6IE9ic2VydmFibGU8RnJpZW5kPiB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEZyaWVuZD4oYCR7dGhpcy51cmx9LyR7aWR9YClcbiAgICAvLyAgICAgICAgIC5waXBlKFxuICAgIC8vICAgICAgICAgICAgIHRhcCh1c2VycyA9PiB0aGlzLmxvZygnZmV0Y2hlZCBmaXJlbmQnKSksXG4gICAgLy8gICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKCdnZXRJdGVtJywge30pKVxuICAgIC8vICAgICAgICAgKTtcbiAgICAvLyB9XG5cbiAgICBnZXRJdGVtKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEZyaWVuZD4ge1xuICAgICAgICBjb25zdCB1cmwgPSBgJHt0aGlzLnVybH0vJHtpZH1gO1xuICAgICAgICBjb25zb2xlLmxvZyh1cmwpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxGcmllbmQ+KHVybCkucGlwZShcbiAgICAgICAgICAgIHRhcChfID0+IHRoaXMubG9nKGBmZXRjaGVkIGZyaWVuZCBpZD0ke2lkfWApKSxcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcjxGcmllbmQ+KGBnZXRGcmllbmQgaWQ9JHtpZH1gKSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhZGRGcmllbmQoZnJpZW5kOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55PihgJHt0aGlzLnVybEZyaWVuZHN9L2NyZWF0ZWAsIGZyaWVuZCwgaHR0cE9wdGlvbnMpLnBpcGUoXG4gICAgICAgICAgICB0YXAoKGZyaWVuZDogYW55KSA9PiB0aGlzLmxvZyhgZnJpZW5kIHcvIGlkPSR7ZnJpZW5kLmZyaWVuZF9pZH1gKSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3I8YW55PignYWRkRnJpZW5kJykpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYWNjZXB0RnJpZW5kUmVzdWVzdChmcmllbmRzaGlwSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIC8vIC9mcmllbmRzaGlwcy8xMjMvYWNjZXB0LzMyMVxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxhbnk+KGAke3RoaXMudXJsRnJpZW5kc30vJHtmcmllbmRzaGlwSWR9L2FjY2VwdC8ke0FwcFNldHRpbmdzLlRPS0VOfWAsIHt9LCBodHRwT3B0aW9ucykucGlwZShcbiAgICAgICAgICAgIHRhcCgoZnJpZW5kOiBhbnkpID0+IHRoaXMubG9nKGBmcmllbmQgdy8gaWQ9JHtmcmllbmRzaGlwSWR9YCkpLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yPGFueT4oJ2FkZEZyaWVuZCcpKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGRlY2xpbmVGcmllbmRSZXN1ZXN0KGZyaWVuZHNoaXBJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgLy8gL2ZyaWVuZHNoaXBzLzEyMy9kZWNsaW5lLzMyMVxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxhbnk+KGAke3RoaXMudXJsRnJpZW5kc30vJHtmcmllbmRzaGlwSWR9L2RlY2xpbmUvJHtBcHBTZXR0aW5ncy5UT0tFTn1gLCB7fSwgaHR0cE9wdGlvbnMpLnBpcGUoXG4gICAgICAgICAgICB0YXAoKGZyaWVuZDogYW55KSA9PiB0aGlzLmxvZyhgZnJpZW5kIHcvIGlkPSR7ZnJpZW5kc2hpcElkfWApKSxcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcjxhbnk+KCdhZGRGcmllbmQnKSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvZyhtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS5sb2coYEFjdGl2aXR5U2VydmljZTogJHttZXNzYWdlfWApO1xuICAgICAgICAvLyB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZChgQWN0aXZpdHlTZXJ2aWNlOiAke21lc3NhZ2V9YCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcjxUPihvcGVyYXRpb24gPSAnb3BlcmF0aW9uJywgcmVzdWx0PzogVCkge1xuICAgICAgICByZXR1cm4gKGVycm9yOiBhbnkpOiBPYnNlcnZhYmxlPFQ+ID0+IHtcblxuICAgICAgICAgICAgLy8gVE9ETzogc2VuZCB0aGUgZXJyb3IgdG8gcmVtb3RlIGxvZ2dpbmcgaW5mcmFzdHJ1Y3R1cmVcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpOyAvLyBsb2cgdG8gY29uc29sZSBpbnN0ZWFkXG5cbiAgICAgICAgICAgIC8vIFRPRE86IGJldHRlciBqb2Igb2YgdHJhbnNmb3JtaW5nIGVycm9yIGZvciB1c2VyIGNvbnN1bXB0aW9uXG4gICAgICAgICAgICB0aGlzLmxvZyhgJHtvcGVyYXRpb259IGZhaWxlZDogJHtlcnJvci5tZXNzYWdlfWApO1xuXG4gICAgICAgICAgICAvLyBMZXQgdGhlIGFwcCBrZWVwIHJ1bm5pbmcgYnkgcmV0dXJuaW5nIGFuIGVtcHR5IHJlc3VsdC5cbiAgICAgICAgICAgIHJldHVybiBvZihyZXN1bHQgYXMgVCk7XG4gICAgICAgIH07XG4gICAgfVxufVxuIl19