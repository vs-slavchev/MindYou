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
        this.urlInvitation = app_settings_1.AppSettings.API_URL + "/activities/invitation/create";
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
        return this.http.get(this.urlFriends + "/sentRequests", headers_1.Headers.getAuthTokenHeaders())
            .pipe(operators_1.tap(function (users) { return _this.log('fetched friends'); }), operators_1.catchError(this.handleError('getFriends', [])));
    };
    FriendService.prototype.getReceivedRequests = function () {
        var _this = this;
        // /friendships/123/receivedRequests
        return this.http.get(this.urlFriends + "/receivedRequests", headers_1.Headers.getAuthTokenHeaders())
            .pipe(operators_1.tap(function (users) { return _this.log('fetched friends'); }), operators_1.catchError(this.handleError('getFriends', [])));
    };
    FriendService.prototype.searchUser = function (name) {
        var _this = this;
        return this.http.get(this.url + "/search?name=" + name)
            .pipe(operators_1.tap(function (users) { return _this.log('fetched activities'); }), operators_1.catchError(this.handleError('getActivities', [])));
    };
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
    //send invitation for an activity
    // /activities/invitation/create/:activityId/:inviteeId
    FriendService.prototype.sendInvitation = function (activityId, inviteeId) {
        console.log("activityID " + activityId);
        return this.http.post(this.urlInvitation + "/" + activityId + "/" + inviteeId, {}, headers_1.Headers.getAuthTokenHeaders()).pipe(
        // tap((friend: any) => this.log(`friend w/ id=${userId}`)),
        operators_1.catchError(this.handleError('sendInvitation')));
    };
    FriendService.prototype.acceptFriendResuest = function (friendshipId) {
        var _this = this;
        // /friendships/123/accept/321
        return this.http.put(this.urlFriends + "/" + friendshipId + "/accept", {}, headers_1.Headers.getAuthTokenHeaders()).pipe(operators_1.tap(function (friend) { return _this.log("friend w/ id=" + friendshipId); }), operators_1.catchError(this.handleError('addFriend')));
    };
    FriendService.prototype.declineFriendResuest = function (friendshipId) {
        var _this = this;
        // /friendships/123/decline/321
        return this.http.delete(this.urlFriends + "/" + friendshipId + "/decline", headers_1.Headers.getAuthTokenHeaders()).pipe(operators_1.tap(function (friend) { return _this.log("friend w/ id=" + friendshipId); }), operators_1.catchError(this.handleError('addFriend')));
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
    FriendService.prototype.getSuggestion = function () {
        var _this = this;
        return this.http.get(app_settings_1.AppSettings.API_URL + "/statistics/suggestion", headers_1.Headers.getAuthTokenHeaders())
            .pipe(operators_1.tap(function (suggestions) { return _this.log('fetched suggestions'); }), operators_1.catchError(this.handleError('getSuggestions', {})));
    };
    FriendService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], FriendService);
    return FriendService;
}());
exports.FriendService = FriendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJpZW5kLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmcmllbmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2QkFBb0M7QUFDcEMsNENBQW9EO0FBSXBELDZDQUE2RDtBQUM3RCxtREFBK0M7QUFFL0MsZ0RBQTZDO0FBRzdDLElBQU0sV0FBVyxHQUFHO0lBQ2hCLE9BQU8sRUFBRSxJQUFJLGtCQUFXLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQztDQUNqRSxDQUFDO0FBR0Y7SUFNSSxxQ0FBcUM7SUFDckMscURBQXFEO0lBQ3JELG1EQUFtRDtJQUNuRCxxREFBcUQ7SUFDckQscURBQXFEO0lBQ3JELHFEQUFxRDtJQUNyRCxLQUFLO0lBRUwsdUJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFaNUIsUUFBRyxHQUFNLDBCQUFXLENBQUMsT0FBTyxXQUFRLENBQUM7UUFDckMsZUFBVSxHQUFNLDBCQUFXLENBQUMsT0FBTyxpQkFBYyxDQUFDO1FBQ2xELGtCQUFhLEdBQU0sMEJBQVcsQ0FBQyxPQUFPLGtDQUErQixDQUFDO0lBVXZDLENBQUM7SUFFeEMsZ0NBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEcsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDO2FBQ25DLElBQUksQ0FDRCxlQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEVBQTNCLENBQTJCLENBQUMsRUFDekMsc0JBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUNqRCxDQUFDO0lBQ1YsQ0FBQztJQUVELGtDQUFVLEdBQVY7UUFBQSxpQkFNQztRQUxHLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVcsSUFB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VSxFQUFFO3lDQWVpQixpQkFBVTtPQWQzQixhQUFhLENBaUl6QjtJQUFELG9CQUFDO0NBQUEsQUFqSUQsSUFpSUM7QUFqSVksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7Y2F0Y2hFcnJvciwgbWFwLCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IEZyaWVuZCB9IGZyb20gXCIuL2ZyaWVuZFwiO1xyXG5cclxuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQge0FwcFNldHRpbmdzfSBmcm9tIFwifi9hcHAvYXBwLXNldHRpbmdzXCI7XHJcblxyXG5pbXBvcnQge0hlYWRlcnN9IGZyb20gXCJ+L2FwcC9zaGFyZWQvaGVhZGVyc1wiO1xyXG5pbXBvcnQge0ZyaWVuZHNoaXB9IGZyb20gXCJ+L2FwcC9ob21lL2ZyaWVuZC9mcmllbmRzaGlwXCI7XHJcblxyXG5jb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pXHJcbn07XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGcmllbmRTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIHVybCA9IGAke0FwcFNldHRpbmdzLkFQSV9VUkx9L3VzZXJzYDtcclxuICAgIHByaXZhdGUgdXJsRnJpZW5kcyA9IGAke0FwcFNldHRpbmdzLkFQSV9VUkx9L2ZyaWVuZHNoaXBzYDtcclxuICAgIHByaXZhdGUgdXJsSW52aXRhdGlvbiA9IGAke0FwcFNldHRpbmdzLkFQSV9VUkx9L2FjdGl2aXRpZXMvaW52aXRhdGlvbi9jcmVhdGVgO1xyXG5cclxuICAgIC8vIHByaXZhdGUgaXRlbXMgPSBuZXcgQXJyYXk8RnJpZW5kPihcclxuICAgIC8vICAgICB7IGlkOiAxLCBuYW1lOiBcInVzZXIgMVwiLCByb2xlOiBcIkdvYWxrZWVwZXJcIiB9LFxyXG4gICAgLy8gICAgIHsgaWQ6IDMsIG5hbWU6IFwidXNlciAyXCIsIHJvbGU6IFwiRGVmZW5kZXJcIiB9LFxyXG4gICAgLy8gICAgIHsgaWQ6IDQsIG5hbWU6IFwidXNlciAzXCIsIHJvbGU6IFwiTWlkZmllbGRlclwiIH0sXHJcbiAgICAvLyAgICAgeyBpZDogNSwgbmFtZTogXCJ1c2VyIDRcIiwgcm9sZTogXCJNaWRmaWVsZGVyXCIgfSxcclxuICAgIC8vICAgICB7IGlkOiA2LCBuYW1lOiBcInVzZXIgNVwiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiB9LFxyXG4gICAgLy8gKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XHJcblxyXG4gICAgZ2V0VXNlcnMoKTogT2JzZXJ2YWJsZTxGcmllbmRbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEZyaWVuZFtdPih0aGlzLnVybClcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICB0YXAodXNlcnMgPT4gdGhpcy5sb2coJ2ZldGNoZWQgZnJpZW5kcycpKSxcclxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcignZ2V0RnJpZW5kcycsIFtdKSlcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGcmllbmRzKCk6IE9ic2VydmFibGU8RnJpZW5kW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxGcmllbmRbXT4odGhpcy51cmxGcmllbmRzLCBIZWFkZXJzLmdldEF1dGhUb2tlbkhlYWRlcnMoKSlcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICB0YXAodXNlcnMgPT4gdGhpcy5sb2coJ2ZldGNoZWQgZnJpZW5kcycpKSxcclxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcignZ2V0RnJpZW5kcycsIFtdKSlcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQZW5kaW5nUmVxdWVzdHMoKTogT2JzZXJ2YWJsZTxGcmllbmRzaGlwW10+IHtcclxuICAgICAgICAvLyAvZnJpZW5kc2hpcHMvMTIzL3NlbnRSZXF1ZXN0c1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEZyaWVuZHNoaXBbXT4oYCR7dGhpcy51cmxGcmllbmRzfS9zZW50UmVxdWVzdHNgLCBIZWFkZXJzLmdldEF1dGhUb2tlbkhlYWRlcnMoKSlcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICB0YXAodXNlcnMgPT4gdGhpcy5sb2coJ2ZldGNoZWQgZnJpZW5kcycpKSxcclxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcignZ2V0RnJpZW5kcycsIFtdKSlcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSZWNlaXZlZFJlcXVlc3RzKCk6IE9ic2VydmFibGU8RnJpZW5kc2hpcFtdPiB7XHJcbiAgICAgICAgLy8gL2ZyaWVuZHNoaXBzLzEyMy9yZWNlaXZlZFJlcXVlc3RzXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RnJpZW5kc2hpcFtdPihgJHt0aGlzLnVybEZyaWVuZHN9L3JlY2VpdmVkUmVxdWVzdHNgLCBIZWFkZXJzLmdldEF1dGhUb2tlbkhlYWRlcnMoKSlcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICB0YXAodXNlcnMgPT4gdGhpcy5sb2coJ2ZldGNoZWQgZnJpZW5kcycpKSxcclxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcignZ2V0RnJpZW5kcycsIFtdKSlcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2hVc2VyKG5hbWU6IFN0cmluZyk6IE9ic2VydmFibGU8RnJpZW5kW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxGcmllbmRbXT4oYCR7dGhpcy51cmx9L3NlYXJjaD9uYW1lPSR7bmFtZX1gKVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIHRhcCh1c2VycyA9PiB0aGlzLmxvZygnZmV0Y2hlZCBhY3Rpdml0aWVzJykpLFxyXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKCdnZXRBY3Rpdml0aWVzJywgW10pKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW0oaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RnJpZW5kPiB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYCR7dGhpcy51cmx9LyR7aWR9YDtcclxuICAgICAgICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEZyaWVuZD4odXJsKS5waXBlKFxyXG4gICAgICAgICAgICB0YXAoXyA9PiB0aGlzLmxvZyhgZmV0Y2hlZCBmcmllbmQgaWQ9JHtpZH1gKSksXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcjxGcmllbmQ+KGBnZXRGcmllbmQgaWQ9JHtpZH1gKSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEZyaWVuZCh1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcklkKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55PihgJHt0aGlzLnVybEZyaWVuZHN9L2ludml0ZS8ke3VzZXJJZH1gLCB7fSwgSGVhZGVycy5nZXRBdXRoVG9rZW5IZWFkZXJzKCkpLnBpcGUoXHJcbiAgICAgICAgICAgIHRhcCgoZnJpZW5kOiBhbnkpID0+IHRoaXMubG9nKGBmcmllbmQgdy8gaWQ9JHt1c2VySWR9YCkpLFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3I8YW55PignYWRkRnJpZW5kJykpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvL3NlbmQgaW52aXRhdGlvbiBmb3IgYW4gYWN0aXZpdHlcclxuICAgIC8vIC9hY3Rpdml0aWVzL2ludml0YXRpb24vY3JlYXRlLzphY3Rpdml0eUlkLzppbnZpdGVlSWRcclxuICAgIHNlbmRJbnZpdGF0aW9uKGFjdGl2aXR5SWQ6IG51bWJlciwgaW52aXRlZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWN0aXZpdHlJRCBcIiArIGFjdGl2aXR5SWQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KGAke3RoaXMudXJsSW52aXRhdGlvbn0vJHthY3Rpdml0eUlkfS8ke2ludml0ZWVJZH1gLCB7fSwgSGVhZGVycy5nZXRBdXRoVG9rZW5IZWFkZXJzKCkpLnBpcGUoXHJcbiAgICAgICAgICAgLy8gdGFwKChmcmllbmQ6IGFueSkgPT4gdGhpcy5sb2coYGZyaWVuZCB3LyBpZD0ke3VzZXJJZH1gKSksXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcjxhbnk+KCdzZW5kSW52aXRhdGlvbicpKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFjY2VwdEZyaWVuZFJlc3Vlc3QoZnJpZW5kc2hpcElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIC8vIC9mcmllbmRzaGlwcy8xMjMvYWNjZXB0LzMyMVxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0PGFueT4oYCR7dGhpcy51cmxGcmllbmRzfS8ke2ZyaWVuZHNoaXBJZH0vYWNjZXB0YCwge30sIEhlYWRlcnMuZ2V0QXV0aFRva2VuSGVhZGVycygpKS5waXBlKFxyXG4gICAgICAgICAgICB0YXAoKGZyaWVuZDogYW55KSA9PiB0aGlzLmxvZyhgZnJpZW5kIHcvIGlkPSR7ZnJpZW5kc2hpcElkfWApKSxcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yPGFueT4oJ2FkZEZyaWVuZCcpKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVjbGluZUZyaWVuZFJlc3Vlc3QoZnJpZW5kc2hpcElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIC8vIC9mcmllbmRzaGlwcy8xMjMvZGVjbGluZS8zMjFcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZTxhbnk+KGAke3RoaXMudXJsRnJpZW5kc30vJHtmcmllbmRzaGlwSWR9L2RlY2xpbmVgLCBIZWFkZXJzLmdldEF1dGhUb2tlbkhlYWRlcnMoKSkucGlwZShcclxuICAgICAgICAgICAgdGFwKChmcmllbmQ6IGFueSkgPT4gdGhpcy5sb2coYGZyaWVuZCB3LyBpZD0ke2ZyaWVuZHNoaXBJZH1gKSksXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcjxhbnk+KCdhZGRGcmllbmQnKSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9nKG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBBY3Rpdml0eVNlcnZpY2U6ICR7bWVzc2FnZX1gKTtcclxuICAgICAgICAvLyB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZChgQWN0aXZpdHlTZXJ2aWNlOiAke21lc3NhZ2V9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcjxUPihvcGVyYXRpb24gPSAnb3BlcmF0aW9uJywgcmVzdWx0PzogVCkge1xyXG4gICAgICAgIHJldHVybiAoZXJyb3I6IGFueSk6IE9ic2VydmFibGU8VD4gPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gVE9ETzogc2VuZCB0aGUgZXJyb3IgdG8gcmVtb3RlIGxvZ2dpbmcgaW5mcmFzdHJ1Y3R1cmVcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7IC8vIGxvZyB0byBjb25zb2xlIGluc3RlYWRcclxuXHJcbiAgICAgICAgICAgIC8vIFRPRE86IGJldHRlciBqb2Igb2YgdHJhbnNmb3JtaW5nIGVycm9yIGZvciB1c2VyIGNvbnN1bXB0aW9uXHJcbiAgICAgICAgICAgIHRoaXMubG9nKGAke29wZXJhdGlvbn0gZmFpbGVkOiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcblxyXG4gICAgICAgICAgICAvLyBMZXQgdGhlIGFwcCBrZWVwIHJ1bm5pbmcgYnkgcmV0dXJuaW5nIGFuIGVtcHR5IHJlc3VsdC5cclxuICAgICAgICAgICAgcmV0dXJuIG9mKHJlc3VsdCBhcyBUKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN1Z2dlc3Rpb24oKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55PihgJHtBcHBTZXR0aW5ncy5BUElfVVJMfS9zdGF0aXN0aWNzL3N1Z2dlc3Rpb25gLCBIZWFkZXJzLmdldEF1dGhUb2tlbkhlYWRlcnMoKSlcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICB0YXAoc3VnZ2VzdGlvbnMgPT4gdGhpcy5sb2coJ2ZldGNoZWQgc3VnZ2VzdGlvbnMnKSksXHJcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IoJ2dldFN1Z2dlc3Rpb25zJywge30pKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==