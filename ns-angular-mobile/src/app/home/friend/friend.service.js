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
    function FriendService(http) {
        this.http = http;
        this.url = app_settings_1.AppSettings.API_URL + "/user";
        this.items = new Array({ id: 1, name: "user 1", role: "Goalkeeper" }, { id: 3, name: "user 2", role: "Defender" }, { id: 4, name: "user 3", role: "Midfielder" }, { id: 5, name: "user 4", role: "Midfielder" }, { id: 6, name: "user 5", role: "Midfielder" });
    }
    FriendService.prototype.getItems = function () {
        return this.items;
    };
    FriendService.prototype.getItem = function (id) {
        return this.items.filter(function (item) { return item.id === id; })[0];
    };
    FriendService.prototype.addFriend = function (friend) {
        var _this = this;
        return this.http.post(this.url + "/friendship/create", friend, httpOptions).pipe(operators_1.tap(function (friend) { return _this.log("friend w/ id=" + friend.friend_id); }), operators_1.catchError(this.handleError('addFriend')));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJpZW5kLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmcmllbmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2QkFBb0M7QUFDcEMsNENBQW9EO0FBSXBELDZDQUE2RDtBQUM3RCxtREFBK0M7QUFFL0MsSUFBTSxXQUFXLEdBQUc7SUFDaEIsT0FBTyxFQUFFLElBQUksa0JBQVcsQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDO0NBQ2pFLENBQUM7QUFHRjtJQVlJLHVCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBVjVCLFFBQUcsR0FBTSwwQkFBVyxDQUFDLE9BQU8sVUFBTyxDQUFDO1FBRXBDLFVBQUssR0FBRyxJQUFJLEtBQUssQ0FDckIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUM3QyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQzNDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDN0MsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUM3QyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLENBQ2hELENBQUM7SUFFcUMsQ0FBQztJQUV4QyxnQ0FBUSxHQUFSO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCwrQkFBTyxHQUFQLFVBQVEsRUFBVTtRQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBZCxDQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsaUNBQVMsR0FBVCxVQUFVLE1BQVc7UUFBckIsaUJBS0M7UUFKRyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFTLElBQUksQ0FBQyxHQUFHLHVCQUFvQixFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQ2pGLGVBQUcsQ0FBQyxVQUFDLE1BQVcsSUFBSyxPQUFBLEtBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWdCLE1BQU0sQ0FBQyxTQUFXLENBQUMsRUFBNUMsQ0FBNEMsQ0FBQyxFQUNsRSxzQkFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQU0sV0FBVyxDQUFDLENBQUMsQ0FDakQsQ0FBQztJQUNOLENBQUM7SUFFTywyQkFBRyxHQUFYLFVBQVksT0FBZTtRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFvQixPQUFTLENBQUMsQ0FBQztRQUMzQywwREFBMEQ7SUFDOUQsQ0FBQztJQUVPLG1DQUFXLEdBQW5CLFVBQXVCLFNBQXVCLEVBQUUsTUFBVTtRQUExRCxpQkFZQztRQVpzQiwwQkFBQSxFQUFBLHVCQUF1QjtRQUMxQyxPQUFPLFVBQUMsS0FBVTtZQUVkLHdEQUF3RDtZQUN4RCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMseUJBQXlCO1lBRS9DLDhEQUE4RDtZQUM5RCxLQUFJLENBQUMsR0FBRyxDQUFJLFNBQVMsaUJBQVksS0FBSyxDQUFDLE9BQVMsQ0FBQyxDQUFDO1lBRWxELHlEQUF5RDtZQUN6RCxPQUFPLFNBQUUsQ0FBQyxNQUFXLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUM7SUFDTixDQUFDO0lBOUNRLGFBQWE7UUFEekIsaUJBQVUsRUFBRTt5Q0FhaUIsaUJBQVU7T0FaM0IsYUFBYSxDQStDekI7SUFBRCxvQkFBQztDQUFBLEFBL0NELElBK0NDO0FBL0NZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge2NhdGNoRXJyb3IsIG1hcCwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBGcmllbmQgfSBmcm9tIFwiLi9mcmllbmRcIjtcclxuXHJcbmltcG9ydCB7SHR0cENsaWVudCwgSHR0cEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHtBcHBTZXR0aW5nc30gZnJvbSBcIn4vYXBwL2FwcC1zZXR0aW5nc1wiO1xyXG5cclxuY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KVxyXG59O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRnJpZW5kU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSB1cmwgPSBgJHtBcHBTZXR0aW5ncy5BUElfVVJMfS91c2VyYDtcclxuXHJcbiAgICBwcml2YXRlIGl0ZW1zID0gbmV3IEFycmF5PEZyaWVuZD4oXHJcbiAgICAgICAgeyBpZDogMSwgbmFtZTogXCJ1c2VyIDFcIiwgcm9sZTogXCJHb2Fsa2VlcGVyXCIgfSxcclxuICAgICAgICB7IGlkOiAzLCBuYW1lOiBcInVzZXIgMlwiLCByb2xlOiBcIkRlZmVuZGVyXCIgfSxcclxuICAgICAgICB7IGlkOiA0LCBuYW1lOiBcInVzZXIgM1wiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiB9LFxyXG4gICAgICAgIHsgaWQ6IDUsIG5hbWU6IFwidXNlciA0XCIsIHJvbGU6IFwiTWlkZmllbGRlclwiIH0sXHJcbiAgICAgICAgeyBpZDogNiwgbmFtZTogXCJ1c2VyIDVcIiwgcm9sZTogXCJNaWRmaWVsZGVyXCIgfSxcclxuICAgICk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICAgIGdldEl0ZW1zKCk6IEZyaWVuZFtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRJdGVtKGlkOiBudW1iZXIpOiBGcmllbmQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgPT09IGlkKVswXTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRGcmllbmQoZnJpZW5kOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KGAke3RoaXMudXJsfS9mcmllbmRzaGlwL2NyZWF0ZWAsIGZyaWVuZCwgaHR0cE9wdGlvbnMpLnBpcGUoXHJcbiAgICAgICAgICAgIHRhcCgoZnJpZW5kOiBhbnkpID0+IHRoaXMubG9nKGBmcmllbmQgdy8gaWQ9JHtmcmllbmQuZnJpZW5kX2lkfWApKSxcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yPGFueT4oJ2FkZEZyaWVuZCcpKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2cobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYEFjdGl2aXR5U2VydmljZTogJHttZXNzYWdlfWApO1xyXG4gICAgICAgIC8vIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKGBBY3Rpdml0eVNlcnZpY2U6ICR7bWVzc2FnZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUVycm9yPFQ+KG9wZXJhdGlvbiA9ICdvcGVyYXRpb24nLCByZXN1bHQ/OiBUKSB7XHJcbiAgICAgICAgcmV0dXJuIChlcnJvcjogYW55KTogT2JzZXJ2YWJsZTxUPiA9PiB7XHJcblxyXG4gICAgICAgICAgICAvLyBUT0RPOiBzZW5kIHRoZSBlcnJvciB0byByZW1vdGUgbG9nZ2luZyBpbmZyYXN0cnVjdHVyZVxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTsgLy8gbG9nIHRvIGNvbnNvbGUgaW5zdGVhZFxyXG5cclxuICAgICAgICAgICAgLy8gVE9ETzogYmV0dGVyIGpvYiBvZiB0cmFuc2Zvcm1pbmcgZXJyb3IgZm9yIHVzZXIgY29uc3VtcHRpb25cclxuICAgICAgICAgICAgdGhpcy5sb2coYCR7b3BlcmF0aW9ufSBmYWlsZWQ6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuXHJcbiAgICAgICAgICAgIC8vIExldCB0aGUgYXBwIGtlZXAgcnVubmluZyBieSByZXR1cm5pbmcgYW4gZW1wdHkgcmVzdWx0LlxyXG4gICAgICAgICAgICByZXR1cm4gb2YocmVzdWx0IGFzIFQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIl19