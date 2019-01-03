"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var app_settings_1 = require("~/app/app-settings");
var Headers = /** @class */ (function () {
    function Headers() {
    }
    Headers.getAuthTokenHeaders = function () {
        return { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json',
                'Authorization': "" + app_settings_1.AppSettings.TOKEN,
                'Csrf-Token': "nocheck" }) };
    };
    Headers.getJsonHeaders = function () {
        return { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }) };
    };
    return Headers;
}());
exports.Headers = Headers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlYWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBaUQ7QUFDakQsbURBQStDO0FBRS9DO0lBQUE7SUFXQSxDQUFDO0lBVFUsMkJBQW1CLEdBQTFCO1FBQ0ksT0FBTyxFQUFDLE9BQU8sRUFBRSxJQUFJLGtCQUFXLENBQzVCLEVBQUMsY0FBYyxFQUFFLGtCQUFrQjtnQkFDL0IsZUFBZSxFQUFFLEtBQUcsMEJBQVcsQ0FBQyxLQUFPO2dCQUN2QyxZQUFZLEVBQUUsU0FBUyxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDTSxzQkFBYyxHQUFyQjtRQUNJLE9BQU8sRUFBQyxPQUFPLEVBQUUsSUFBSSxrQkFBVyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUMsRUFBQyxDQUFDO0lBQzVFLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7QUFYWSwwQkFBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQge0FwcFNldHRpbmdzfSBmcm9tIFwifi9hcHAvYXBwLXNldHRpbmdzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVhZGVycyB7XHJcblxyXG4gICAgc3RhdGljIGdldEF1dGhUb2tlbkhlYWRlcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoXHJcbiAgICAgICAgICAgIHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgJHtBcHBTZXR0aW5ncy5UT0tFTn1gLFxyXG4gICAgICAgICAgICAgICAgJ0NzcmYtVG9rZW4nOiBcIm5vY2hlY2tcIn0pfTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXRKc29uSGVhZGVycygpIHtcclxuICAgICAgICByZXR1cm4ge2hlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pfTtcclxuICAgIH1cclxufVxyXG4iXX0=