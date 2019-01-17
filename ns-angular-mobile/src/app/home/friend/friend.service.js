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
        this.urlAcceptDeclineInvitation = app_settings_1.AppSettings.API_URL + "/activities/invitation";
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
    FriendService.prototype.getReceivedInvitations = function () {
        // /activities/invitation/receivedRequests
        return this.http.get(this.urlAcceptDeclineInvitation + "/receivedRequests", headers_1.Headers.getAuthTokenHeaders())
            .pipe(operators_1.catchError(this.handleError('receivedInvitations', [])));
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
    //ACTIVITY INVITATION
    //send invitation for an activity
    // /activities/invitation/create/:activityId/:inviteeId
    FriendService.prototype.sendInvitation = function (activityId, inviteeId) {
        console.log("activityID " + activityId);
        return this.http.post(this.urlInvitation + "/" + activityId + "/" + inviteeId, {}, headers_1.Headers.getAuthTokenHeaders()).pipe(operators_1.catchError(this.handleError('sendInvitation')));
    };
    //accept invitation
    ///activities/invitation/:invitationId/accept
    FriendService.prototype.acceptInvitation = function (invitationId) {
        return this.http.put(this.urlAcceptDeclineInvitation + "/" + invitationId + "/accept", {}, headers_1.Headers.getAuthTokenHeaders()).pipe(operators_1.catchError(this.handleError('acceptInvitation')));
    };
    //decline invitation
    //  /activities/invitation/:invitationId/decline
    FriendService.prototype.declineInvitation = function (invitationId) {
        return this.http.delete(this.urlAcceptDeclineInvitation + "/" + invitationId + "/decline", headers_1.Headers.getAuthTokenHeaders()).pipe(operators_1.catchError(this.handleError('declineInvitation')));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJpZW5kLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmcmllbmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2QkFBb0M7QUFDcEMsNENBQW9EO0FBSXBELDZDQUE2RDtBQUM3RCxtREFBK0M7QUFFL0MsZ0RBQTZDO0FBSTdDLElBQU0sV0FBVyxHQUFHO0lBQ2hCLE9BQU8sRUFBRSxJQUFJLGtCQUFXLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQztDQUNqRSxDQUFDO0FBR0Y7SUFRSSxxQ0FBcUM7SUFDckMscURBQXFEO0lBQ3JELG1EQUFtRDtJQUNuRCxxREFBcUQ7SUFDckQscURBQXFEO0lBQ3JELHFEQUFxRDtJQUNyRCxLQUFLO0lBRUwsdUJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFkNUIsUUFBRyxHQUFNLDBCQUFXLENBQUMsT0FBTyxXQUFRLENBQUM7UUFDckMsZUFBVSxHQUFNLDBCQUFXLENBQUMsT0FBTyxpQkFBYyxDQUFDO1FBQ2xELGtCQUFhLEdBQU0sMEJBQVcsQ0FBQyxPQUFPLGtDQUErQixDQUFDO1FBQ3RFLCtCQUEwQixHQUFNLDBCQUFXLENBQUMsT0FBTywyQkFBd0IsQ0FBQztJQVc3QyxDQUFDO0lBRXhDLGdDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxHLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQzthQUNuQyxJQUFJLENBQ0QsZUFBRyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxFQUEzQixDQUEyQixDQUFDLEVBQ3pDLHNCQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FDakQsQ0FBQztJQUNWLENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBQUEsaUJB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IFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge09ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtjYXRjaEVycm9yLCBtYXAsIHRhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgRnJpZW5kIH0gZnJvbSBcIi4vZnJpZW5kXCI7XHJcblxyXG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7QXBwU2V0dGluZ3N9IGZyb20gXCJ+L2FwcC9hcHAtc2V0dGluZ3NcIjtcclxuXHJcbmltcG9ydCB7SGVhZGVyc30gZnJvbSBcIn4vYXBwL3NoYXJlZC9oZWFkZXJzXCI7XHJcbmltcG9ydCB7RnJpZW5kc2hpcH0gZnJvbSBcIn4vYXBwL2hvbWUvZnJpZW5kL2ZyaWVuZHNoaXBcIjtcclxuaW1wb3J0IHsgSW52aXRhdGlvbiB9IGZyb20gXCIuL2ludml0YXRpb25cIjtcclxuXHJcbmNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4gICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSlcclxufTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZyaWVuZFNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgdXJsID0gYCR7QXBwU2V0dGluZ3MuQVBJX1VSTH0vdXNlcnNgO1xyXG4gICAgcHJpdmF0ZSB1cmxGcmllbmRzID0gYCR7QXBwU2V0dGluZ3MuQVBJX1VSTH0vZnJpZW5kc2hpcHNgO1xyXG4gICAgcHJpdmF0ZSB1cmxJbnZpdGF0aW9uID0gYCR7QXBwU2V0dGluZ3MuQVBJX1VSTH0vYWN0aXZpdGllcy9pbnZpdGF0aW9uL2NyZWF0ZWA7XHJcbiAgICBwcml2YXRlIHVybEFjY2VwdERlY2xpbmVJbnZpdGF0aW9uID0gYCR7QXBwU2V0dGluZ3MuQVBJX1VSTH0vYWN0aXZpdGllcy9pbnZpdGF0aW9uYDtcclxuXHJcbiAgXHJcbiAgICAvLyBwcml2YXRlIGl0ZW1zID0gbmV3IEFycmF5PEZyaWVuZD4oXHJcbiAgICAvLyAgICAgeyBpZDogMSwgbmFtZTogXCJ1c2VyIDFcIiwgcm9sZTogXCJHb2Fsa2VlcGVyXCIgfSxcclxuICAgIC8vICAgICB7IGlkOiAzLCBuYW1lOiBcInVzZXIgMlwiLCByb2xlOiBcIkRlZmVuZGVyXCIgfSxcclxuICAgIC8vICAgICB7IGlkOiA0LCBuYW1lOiBcInVzZXIgM1wiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiB9LFxyXG4gICAgLy8gICAgIHsgaWQ6IDUsIG5hbWU6IFwidXNlciA0XCIsIHJvbGU6IFwiTWlkZmllbGRlclwiIH0sXHJcbiAgICAvLyAgICAgeyBpZDogNiwgbmFtZTogXCJ1c2VyIDVcIiwgcm9sZTogXCJNaWRmaWVsZGVyXCIgfSxcclxuICAgIC8vICk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICAgIGdldFVzZXJzKCk6IE9ic2VydmFibGU8RnJpZW5kW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxGcmllbmRbXT4odGhpcy51cmwpXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgdGFwKHVzZXJzID0+IHRoaXMubG9nKCdmZXRjaGVkIGZyaWVuZHMnKSksXHJcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IoJ2dldEZyaWVuZHMnLCBbXSkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RnJpZW5kcygpOiBPYnNlcnZhYmxlPEZyaWVuZFtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RnJpZW5kW10+KHRoaXMudXJsRnJpZW5kcywgSGVhZGVycy5nZXRBdXRoVG9rZW5IZWFkZXJzKCkpXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgdGFwKHVzZXJzID0+IHRoaXMubG9nKCdmZXRjaGVkIGZyaWVuZHMnKSksXHJcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IoJ2dldEZyaWVuZHMnLCBbXSkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGVuZGluZ1JlcXVlc3RzKCk6IE9ic2VydmFibGU8RnJpZW5kc2hpcFtdPiB7XHJcbiAgICAgICAgLy8gL2ZyaWVuZHNoaXBzLzEyMy9zZW50UmVxdWVzdHNcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxGcmllbmRzaGlwW10+KGAke3RoaXMudXJsRnJpZW5kc30vc2VudFJlcXVlc3RzYCwgSGVhZGVycy5nZXRBdXRoVG9rZW5IZWFkZXJzKCkpXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgdGFwKHVzZXJzID0+IHRoaXMubG9nKCdmZXRjaGVkIGZyaWVuZHMnKSksXHJcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IoJ2dldEZyaWVuZHMnLCBbXSkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmVjZWl2ZWRSZXF1ZXN0cygpOiBPYnNlcnZhYmxlPEZyaWVuZHNoaXBbXT4ge1xyXG4gICAgICAgIC8vIC9mcmllbmRzaGlwcy8xMjMvcmVjZWl2ZWRSZXF1ZXN0c1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEZyaWVuZHNoaXBbXT4oYCR7dGhpcy51cmxGcmllbmRzfS9yZWNlaXZlZFJlcXVlc3RzYCwgSGVhZGVycy5nZXRBdXRoVG9rZW5IZWFkZXJzKCkpXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgdGFwKHVzZXJzID0+IHRoaXMubG9nKCdmZXRjaGVkIGZyaWVuZHMnKSksXHJcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IoJ2dldEZyaWVuZHMnLCBbXSkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmVjZWl2ZWRJbnZpdGF0aW9ucygpOiBPYnNlcnZhYmxlPEludml0YXRpb25bXT4ge1xyXG4gICAgICAgIC8vIC9hY3Rpdml0aWVzL2ludml0YXRpb24vcmVjZWl2ZWRSZXF1ZXN0c1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEludml0YXRpb25bXT4oYCR7dGhpcy51cmxBY2NlcHREZWNsaW5lSW52aXRhdGlvbn0vcmVjZWl2ZWRSZXF1ZXN0c2AsIEhlYWRlcnMuZ2V0QXV0aFRva2VuSGVhZGVycygpKVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcigncmVjZWl2ZWRJbnZpdGF0aW9ucycsIFtdKSlcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2hVc2VyKG5hbWU6IFN0cmluZyk6IE9ic2VydmFibGU8RnJpZW5kW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxGcmllbmRbXT4oYCR7dGhpcy51cmx9L3NlYXJjaD9uYW1lPSR7bmFtZX1gKVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIHRhcCh1c2VycyA9PiB0aGlzLmxvZygnZmV0Y2hlZCBhY3Rpdml0aWVzJykpLFxyXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKCdnZXRBY3Rpdml0aWVzJywgW10pKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW0oaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RnJpZW5kPiB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYCR7dGhpcy51cmx9LyR7aWR9YDtcclxuICAgICAgICBjb25zb2xlLmxvZyh1cmwpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEZyaWVuZD4odXJsKS5waXBlKFxyXG4gICAgICAgICAgICB0YXAoXyA9PiB0aGlzLmxvZyhgZmV0Y2hlZCBmcmllbmQgaWQ9JHtpZH1gKSksXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcjxGcmllbmQ+KGBnZXRGcmllbmQgaWQ9JHtpZH1gKSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEZyaWVuZCh1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcklkKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55PihgJHt0aGlzLnVybEZyaWVuZHN9L2ludml0ZS8ke3VzZXJJZH1gLCB7fSwgSGVhZGVycy5nZXRBdXRoVG9rZW5IZWFkZXJzKCkpLnBpcGUoXHJcbiAgICAgICAgICAgIHRhcCgoZnJpZW5kOiBhbnkpID0+IHRoaXMubG9nKGBmcmllbmQgdy8gaWQ9JHt1c2VySWR9YCkpLFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3I8YW55PignYWRkRnJpZW5kJykpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBhY2NlcHRGcmllbmRSZXN1ZXN0KGZyaWVuZHNoaXBJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICAvLyAvZnJpZW5kc2hpcHMvMTIzL2FjY2VwdC8zMjFcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxhbnk+KGAke3RoaXMudXJsRnJpZW5kc30vJHtmcmllbmRzaGlwSWR9L2FjY2VwdGAsIHt9LCBIZWFkZXJzLmdldEF1dGhUb2tlbkhlYWRlcnMoKSkucGlwZShcclxuICAgICAgICAgICAgdGFwKChmcmllbmQ6IGFueSkgPT4gdGhpcy5sb2coYGZyaWVuZCB3LyBpZD0ke2ZyaWVuZHNoaXBJZH1gKSksXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcjxhbnk+KCdhZGRGcmllbmQnKSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGRlY2xpbmVGcmllbmRSZXN1ZXN0KGZyaWVuZHNoaXBJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICAvLyAvZnJpZW5kc2hpcHMvMTIzL2RlY2xpbmUvMzIxXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8YW55PihgJHt0aGlzLnVybEZyaWVuZHN9LyR7ZnJpZW5kc2hpcElkfS9kZWNsaW5lYCwgSGVhZGVycy5nZXRBdXRoVG9rZW5IZWFkZXJzKCkpLnBpcGUoXHJcbiAgICAgICAgICAgIHRhcCgoZnJpZW5kOiBhbnkpID0+IHRoaXMubG9nKGBmcmllbmQgdy8gaWQ9JHtmcmllbmRzaGlwSWR9YCkpLFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3I8YW55PignYWRkRnJpZW5kJykpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0FDVElWSVRZIElOVklUQVRJT05cclxuXHJcbiAgICAgICAgLy9zZW5kIGludml0YXRpb24gZm9yIGFuIGFjdGl2aXR5XHJcbiAgICAvLyAvYWN0aXZpdGllcy9pbnZpdGF0aW9uL2NyZWF0ZS86YWN0aXZpdHlJZC86aW52aXRlZUlkXHJcbiAgICBzZW5kSW52aXRhdGlvbihhY3Rpdml0eUlkOiBudW1iZXIsIGludml0ZWVJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFjdGl2aXR5SUQgXCIgKyBhY3Rpdml0eUlkKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55PihgJHt0aGlzLnVybEludml0YXRpb259LyR7YWN0aXZpdHlJZH0vJHtpbnZpdGVlSWR9YCwge30sIEhlYWRlcnMuZ2V0QXV0aFRva2VuSGVhZGVycygpKS5waXBlKFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3I8YW55Pignc2VuZEludml0YXRpb24nKSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vYWNjZXB0IGludml0YXRpb25cclxuICAgICAvLy9hY3Rpdml0aWVzL2ludml0YXRpb24vOmludml0YXRpb25JZC9hY2NlcHRcclxuICAgICBhY2NlcHRJbnZpdGF0aW9uKGludml0YXRpb25JZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxhbnk+KGAke3RoaXMudXJsQWNjZXB0RGVjbGluZUludml0YXRpb259LyR7aW52aXRhdGlvbklkfS9hY2NlcHRgLCB7fSwgSGVhZGVycy5nZXRBdXRoVG9rZW5IZWFkZXJzKCkpLnBpcGUoXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcjxhbnk+KCdhY2NlcHRJbnZpdGF0aW9uJykpXHJcbiAgICAgICAgKTtcclxuICAgICB9XHJcblxyXG4gICAgIC8vZGVjbGluZSBpbnZpdGF0aW9uXHJcbiAgICAgLy8gIC9hY3Rpdml0aWVzL2ludml0YXRpb24vOmludml0YXRpb25JZC9kZWNsaW5lXHJcbiAgICAgZGVjbGluZUludml0YXRpb24oaW52aXRhdGlvbklkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPGFueT4oYCR7dGhpcy51cmxBY2NlcHREZWNsaW5lSW52aXRhdGlvbn0vJHtpbnZpdGF0aW9uSWR9L2RlY2xpbmVgLCBIZWFkZXJzLmdldEF1dGhUb2tlbkhlYWRlcnMoKSkucGlwZShcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yPGFueT4oJ2RlY2xpbmVJbnZpdGF0aW9uJykpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvZyhtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgQWN0aXZpdHlTZXJ2aWNlOiAke21lc3NhZ2V9YCk7XHJcbiAgICAgICAgLy8gdGhpcy5tZXNzYWdlU2VydmljZS5hZGQoYEFjdGl2aXR5U2VydmljZTogJHttZXNzYWdlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3I8VD4ob3BlcmF0aW9uID0gJ29wZXJhdGlvbicsIHJlc3VsdD86IFQpIHtcclxuICAgICAgICByZXR1cm4gKGVycm9yOiBhbnkpOiBPYnNlcnZhYmxlPFQ+ID0+IHtcclxuXHJcbiAgICAgICAgICAgIC8vIFRPRE86IHNlbmQgdGhlIGVycm9yIHRvIHJlbW90ZSBsb2dnaW5nIGluZnJhc3RydWN0dXJlXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpOyAvLyBsb2cgdG8gY29uc29sZSBpbnN0ZWFkXHJcblxyXG4gICAgICAgICAgICAvLyBUT0RPOiBiZXR0ZXIgam9iIG9mIHRyYW5zZm9ybWluZyBlcnJvciBmb3IgdXNlciBjb25zdW1wdGlvblxyXG4gICAgICAgICAgICB0aGlzLmxvZyhgJHtvcGVyYXRpb259IGZhaWxlZDogJHtlcnJvci5tZXNzYWdlfWApO1xyXG5cclxuICAgICAgICAgICAgLy8gTGV0IHRoZSBhcHAga2VlcCBydW5uaW5nIGJ5IHJldHVybmluZyBhbiBlbXB0eSByZXN1bHQuXHJcbiAgICAgICAgICAgIHJldHVybiBvZihyZXN1bHQgYXMgVCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdWdnZXN0aW9uKCk6IE9ic2VydmFibGU8YW55PiB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4oYCR7QXBwU2V0dGluZ3MuQVBJX1VSTH0vc3RhdGlzdGljcy9zdWdnZXN0aW9uYCwgSGVhZGVycy5nZXRBdXRoVG9rZW5IZWFkZXJzKCkpXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgdGFwKHN1Z2dlc3Rpb25zID0+IHRoaXMubG9nKCdmZXRjaGVkIHN1Z2dlc3Rpb25zJykpLFxyXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKCdnZXRTdWdnZXN0aW9ucycsIHt9KSlcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iXX0=