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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJpZW5kLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmcmllbmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2QkFBb0M7QUFDcEMsNENBQW9EO0FBSXBELDZDQUE2RDtBQUM3RCxtREFBK0M7QUFFL0MsZ0RBQTZDO0FBRzdDLElBQU0sV0FBVyxHQUFHO0lBQ2hCLE9BQU8sRUFBRSxJQUFJLGtCQUFXLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQztDQUNqRSxDQUFDO0FBR0Y7SUFLSSxxQ0FBcUM7SUFDckMscURBQXFEO0lBQ3JELG1EQUFtRDtJQUNuRCxxREFBcUQ7SUFDckQscURBQXFEO0lBQ3JELHFEQUFxRDtJQUNyRCxLQUFLO0lBRUwsdUJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFYNUIsUUFBRyxHQUFNLDBCQUFXLENBQUMsT0FBTyxXQUFRLENBQUM7UUFDckMsZUFBVSxHQUFNLDBCQUFXLENBQUMsT0FBTyxpQkFBYyxDQUFDO0lBVW5CLENBQUM7SUFFeEMsZ0NBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEcsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDO2FBQ25DLElBQUksQ0FDRCxlQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEVBQTNCLENBQTJCLENBQUMsRUFDekMsc0JBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUNqRCxDQUFDO0lBQ1YsQ0FBQztJQUVELGtDQUFVLEdBQVY7UUFBQSxpQkFNQztRQUxHLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVcsSUFBSSxDQUFDLFVBQVUsRUFBRSxpQkFBTyxDQUFDLG1CQUFtQixFQUFFLENBQUM7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QUMsR0FBRyxDQUFDLHNCQUFvQixPQUFTLENBQUMsQ0FBQztRQUMzQywwREFBMEQ7SUFDOUQsQ0FBQztJQUVPLG1DQUFXLEdBQW5CLFVBQXVCLFNBQXVCLEVBQUUsTUFBVTtRQUExRCxpQkFZQztRQVpzQiwwQkFBQSxFQUFBLHVCQUF1QjtRQUMxQyxPQUFPLFVBQUMsS0FBVTtZQUVkLHdEQUF3RDtZQUN4RCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMseUJBQXlCO1lBRS9DLDhEQUE4RDtZQUM5RCxLQUFJLENBQUMsR0FBRyxDQUFJLFNBQVMsaUJBQVksS0FBSyxDQUFDLE9BQVMsQ0FBQyxDQUFDO1lBRWxELHlEQUF5RDtZQUN6RCxPQUFPLFNBQUUsQ0FBQyxNQUFXLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUM7SUFDTixDQUFDO0lBbkhRLGFBQWE7UUFEekIsaUJBQVUsRUFBRTt5Q0FjaUIsaUJBQVU7T0FiM0IsYUFBYSxDQW9IekI7SUFBRCxvQkFBQztDQUFBLEFBcEhELElBb0hDO0FBcEhZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge09ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7Y2F0Y2hFcnJvciwgbWFwLCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRnJpZW5kIH0gZnJvbSBcIi4vZnJpZW5kXCI7XG5cbmltcG9ydCB7SHR0cENsaWVudCwgSHR0cEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7QXBwU2V0dGluZ3N9IGZyb20gXCJ+L2FwcC9hcHAtc2V0dGluZ3NcIjtcblxuaW1wb3J0IHtIZWFkZXJzfSBmcm9tIFwifi9hcHAvc2hhcmVkL2hlYWRlcnNcIjtcbmltcG9ydCB7RnJpZW5kc2hpcH0gZnJvbSBcIn4vYXBwL2hvbWUvZnJpZW5kL2ZyaWVuZHNoaXBcIjtcblxuY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSlcbn07XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGcmllbmRTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgdXJsID0gYCR7QXBwU2V0dGluZ3MuQVBJX1VSTH0vdXNlcnNgO1xuICAgIHByaXZhdGUgdXJsRnJpZW5kcyA9IGAke0FwcFNldHRpbmdzLkFQSV9VUkx9L2ZyaWVuZHNoaXBzYDtcblxuICAgIC8vIHByaXZhdGUgaXRlbXMgPSBuZXcgQXJyYXk8RnJpZW5kPihcbiAgICAvLyAgICAgeyBpZDogMSwgbmFtZTogXCJ1c2VyIDFcIiwgcm9sZTogXCJHb2Fsa2VlcGVyXCIgfSxcbiAgICAvLyAgICAgeyBpZDogMywgbmFtZTogXCJ1c2VyIDJcIiwgcm9sZTogXCJEZWZlbmRlclwiIH0sXG4gICAgLy8gICAgIHsgaWQ6IDQsIG5hbWU6IFwidXNlciAzXCIsIHJvbGU6IFwiTWlkZmllbGRlclwiIH0sXG4gICAgLy8gICAgIHsgaWQ6IDUsIG5hbWU6IFwidXNlciA0XCIsIHJvbGU6IFwiTWlkZmllbGRlclwiIH0sXG4gICAgLy8gICAgIHsgaWQ6IDYsIG5hbWU6IFwidXNlciA1XCIsIHJvbGU6IFwiTWlkZmllbGRlclwiIH0sXG4gICAgLy8gKTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cblxuICAgIGdldFVzZXJzKCk6IE9ic2VydmFibGU8RnJpZW5kW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RnJpZW5kW10+KHRoaXMudXJsKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgdGFwKHVzZXJzID0+IHRoaXMubG9nKCdmZXRjaGVkIGZyaWVuZHMnKSksXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKCdnZXRGcmllbmRzJywgW10pKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRGcmllbmRzKCk6IE9ic2VydmFibGU8RnJpZW5kW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RnJpZW5kW10+KHRoaXMudXJsRnJpZW5kcywgSGVhZGVycy5nZXRBdXRoVG9rZW5IZWFkZXJzKCkpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICB0YXAodXNlcnMgPT4gdGhpcy5sb2coJ2ZldGNoZWQgZnJpZW5kcycpKSxcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IoJ2dldEZyaWVuZHMnLCBbXSkpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIGdldFBlbmRpbmdSZXF1ZXN0cygpOiBPYnNlcnZhYmxlPEZyaWVuZHNoaXBbXT4ge1xuICAgICAgICAvLyAvZnJpZW5kc2hpcHMvMTIzL3NlbnRSZXF1ZXN0c1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxGcmllbmRzaGlwW10+KGAke3RoaXMudXJsRnJpZW5kc30vJHtBcHBTZXR0aW5ncy5UT0tFTn0vc2VudFJlcXVlc3RzYCwgSGVhZGVycy5nZXRBdXRoVG9rZW5IZWFkZXJzKCkpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICB0YXAodXNlcnMgPT4gdGhpcy5sb2coJ2ZldGNoZWQgZnJpZW5kcycpKSxcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IoJ2dldEZyaWVuZHMnLCBbXSkpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIGdldFJlY2VpdmVkUmVxdWVzdHMoKTogT2JzZXJ2YWJsZTxGcmllbmRzaGlwW10+IHtcbiAgICAgICAgLy8gL2ZyaWVuZHNoaXBzLzEyMy9yZWNlaXZlZFJlcXVlc3RzXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEZyaWVuZHNoaXBbXT4oYCR7dGhpcy51cmxGcmllbmRzfS8ke0FwcFNldHRpbmdzLlRPS0VOfS9yZWNlaXZlZFJlcXVlc3RzYCwgSGVhZGVycy5nZXRBdXRoVG9rZW5IZWFkZXJzKCkpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICB0YXAodXNlcnMgPT4gdGhpcy5sb2coJ2ZldGNoZWQgZnJpZW5kcycpKSxcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IoJ2dldEZyaWVuZHMnLCBbXSkpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIHNlYXJjaFVzZXIobmFtZTogU3RyaW5nKTogT2JzZXJ2YWJsZTxGcmllbmRbXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxGcmllbmRbXT4oYCR7dGhpcy51cmx9L3NlYXJjaD9uYW1lPSR7bmFtZX1gKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgdGFwKHVzZXJzID0+IHRoaXMubG9nKCdmZXRjaGVkIGFjdGl2aXRpZXMnKSksXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKCdnZXRBY3Rpdml0aWVzJywgW10pKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBnZXRJdGVtKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEZyaWVuZD4ge1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxGcmllbmQ+KGAke3RoaXMudXJsfS8ke2lkfWApXG4gICAgLy8gICAgICAgICAucGlwZShcbiAgICAvLyAgICAgICAgICAgICB0YXAodXNlcnMgPT4gdGhpcy5sb2coJ2ZldGNoZWQgZmlyZW5kJykpLFxuICAgIC8vICAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcignZ2V0SXRlbScsIHt9KSlcbiAgICAvLyAgICAgICAgICk7XG4gICAgLy8gfVxuXG4gICAgZ2V0SXRlbShpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxGcmllbmQ+IHtcbiAgICAgICAgY29uc3QgdXJsID0gYCR7dGhpcy51cmx9LyR7aWR9YDtcbiAgICAgICAgY29uc29sZS5sb2codXJsKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RnJpZW5kPih1cmwpLnBpcGUoXG4gICAgICAgICAgICB0YXAoXyA9PiB0aGlzLmxvZyhgZmV0Y2hlZCBmcmllbmQgaWQ9JHtpZH1gKSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3I8RnJpZW5kPihgZ2V0RnJpZW5kIGlkPSR7aWR9YCkpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYWRkRnJpZW5kKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgY29uc29sZS5sb2codXNlcklkKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4oYCR7dGhpcy51cmxGcmllbmRzfS9pbnZpdGUvJHt1c2VySWR9YCwge30sIEhlYWRlcnMuZ2V0QXV0aFRva2VuSGVhZGVycygpKS5waXBlKFxuICAgICAgICAgICAgdGFwKChmcmllbmQ6IGFueSkgPT4gdGhpcy5sb2coYGZyaWVuZCB3LyBpZD0ke3VzZXJJZH1gKSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3I8YW55PignYWRkRnJpZW5kJykpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYWNjZXB0RnJpZW5kUmVzdWVzdChmcmllbmRzaGlwSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIC8vIC9mcmllbmRzaGlwcy8xMjMvYWNjZXB0LzMyMVxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxhbnk+KGAke3RoaXMudXJsRnJpZW5kc30vJHtmcmllbmRzaGlwSWR9L2FjY2VwdC8ke0FwcFNldHRpbmdzLlRPS0VOfWAsIHt9LCBIZWFkZXJzLmdldEF1dGhUb2tlbkhlYWRlcnMoKSkucGlwZShcbiAgICAgICAgICAgIHRhcCgoZnJpZW5kOiBhbnkpID0+IHRoaXMubG9nKGBmcmllbmQgdy8gaWQ9JHtmcmllbmRzaGlwSWR9YCkpLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yPGFueT4oJ2FkZEZyaWVuZCcpKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGRlY2xpbmVGcmllbmRSZXN1ZXN0KGZyaWVuZHNoaXBJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgLy8gL2ZyaWVuZHNoaXBzLzEyMy9kZWNsaW5lLzMyMVxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxhbnk+KGAke3RoaXMudXJsRnJpZW5kc30vJHtmcmllbmRzaGlwSWR9L2RlY2xpbmUvJHtBcHBTZXR0aW5ncy5UT0tFTn1gLCB7fSwgSGVhZGVycy5nZXRBdXRoVG9rZW5IZWFkZXJzKCkpLnBpcGUoXG4gICAgICAgICAgICB0YXAoKGZyaWVuZDogYW55KSA9PiB0aGlzLmxvZyhgZnJpZW5kIHcvIGlkPSR7ZnJpZW5kc2hpcElkfWApKSxcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcjxhbnk+KCdhZGRGcmllbmQnKSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvZyhtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS5sb2coYEFjdGl2aXR5U2VydmljZTogJHttZXNzYWdlfWApO1xuICAgICAgICAvLyB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZChgQWN0aXZpdHlTZXJ2aWNlOiAke21lc3NhZ2V9YCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcjxUPihvcGVyYXRpb24gPSAnb3BlcmF0aW9uJywgcmVzdWx0PzogVCkge1xuICAgICAgICByZXR1cm4gKGVycm9yOiBhbnkpOiBPYnNlcnZhYmxlPFQ+ID0+IHtcblxuICAgICAgICAgICAgLy8gVE9ETzogc2VuZCB0aGUgZXJyb3IgdG8gcmVtb3RlIGxvZ2dpbmcgaW5mcmFzdHJ1Y3R1cmVcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpOyAvLyBsb2cgdG8gY29uc29sZSBpbnN0ZWFkXG5cbiAgICAgICAgICAgIC8vIFRPRE86IGJldHRlciBqb2Igb2YgdHJhbnNmb3JtaW5nIGVycm9yIGZvciB1c2VyIGNvbnN1bXB0aW9uXG4gICAgICAgICAgICB0aGlzLmxvZyhgJHtvcGVyYXRpb259IGZhaWxlZDogJHtlcnJvci5tZXNzYWdlfWApO1xuXG4gICAgICAgICAgICAvLyBMZXQgdGhlIGFwcCBrZWVwIHJ1bm5pbmcgYnkgcmV0dXJuaW5nIGFuIGVtcHR5IHJlc3VsdC5cbiAgICAgICAgICAgIHJldHVybiBvZihyZXN1bHQgYXMgVCk7XG4gICAgICAgIH07XG4gICAgfVxufVxuIl19