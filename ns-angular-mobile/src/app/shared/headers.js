"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var app_settings_1 = require("~/app/app-settings");
var Headers = /** @class */ (function () {
    function Headers() {
    }
    Headers.getAuthTokenHeaders = function () {
        return { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json',
                'Authorization': "\"" + app_settings_1.AppSettings.TOKEN + "\"",
                'Csrf-Token': "nocheck" }) };
    };
    Headers.getJsonHeaders = function () {
        return { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }) };
    };
    return Headers;
}());
exports.Headers = Headers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlYWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBaUQ7QUFDakQsbURBQStDO0FBRS9DO0lBQUE7SUFXQSxDQUFDO0lBVFUsMkJBQW1CLEdBQTFCO1FBQ0ksT0FBTyxFQUFDLE9BQU8sRUFBRSxJQUFJLGtCQUFXLENBQzVCLEVBQUMsY0FBYyxFQUFFLGtCQUFrQjtnQkFDL0IsZUFBZSxFQUFFLE9BQUksMEJBQVcsQ0FBQyxLQUFLLE9BQUc7Z0JBQ3pDLFlBQVksRUFBRSxTQUFTLEVBQUMsQ0FBQyxFQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNNLHNCQUFjLEdBQXJCO1FBQ0ksT0FBTyxFQUFDLE9BQU8sRUFBRSxJQUFJLGtCQUFXLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQyxFQUFDLENBQUM7SUFDNUUsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQztBQVhZLDBCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwSGVhZGVyc30gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQge0FwcFNldHRpbmdzfSBmcm9tIFwifi9hcHAvYXBwLXNldHRpbmdzXCI7XG5cbmV4cG9ydCBjbGFzcyBIZWFkZXJzIHtcblxuICAgIHN0YXRpYyBnZXRBdXRoVG9rZW5IZWFkZXJzKCkge1xuICAgICAgICByZXR1cm4ge2hlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyhcbiAgICAgICAgICAgIHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYFwiJHtBcHBTZXR0aW5ncy5UT0tFTn1cImAsXG4gICAgICAgICAgICAgICAgJ0NzcmYtVG9rZW4nOiBcIm5vY2hlY2tcIn0pfTtcbiAgICB9XG4gICAgc3RhdGljIGdldEpzb25IZWFkZXJzKCkge1xuICAgICAgICByZXR1cm4ge2hlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pfTtcbiAgICB9XG59XG4iXX0=