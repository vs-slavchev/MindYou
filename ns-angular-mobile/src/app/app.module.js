"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
// Uncomment and add to NgModule imports if you need to use two-way binding
var forms_1 = require("nativescript-angular/forms");
// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
var http_client_1 = require("nativescript-angular/http-client");
var bottom_bar_module_1 = require("~/app/bottom-bar/bottom-bar.module");
var statistics_component_1 = require("~/app/statistic/statistics.component");
var friends_component_1 = require("~/app/friend/friends.component");
var statistic_detail_component_1 = require("~/app/statistic/statistic-detail.component");
var friend_detail_component_1 = require("~/app/friend/friend-detail.component");
var statistic_service_1 = require("~/app/statistic/statistic.service");
var friend_service_1 = require("~/app/friend/friend.service");
var item_service_1 = require("~/app/item/item.service");
var home_component_1 = require("./home/home.component");
var angular_1 = require("nativescript-ui-chart/angular");
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.NativeScriptFormsModule,
                http_client_1.NativeScriptHttpClientModule,
                bottom_bar_module_1.BottomBarModule,
                angular_1.NativeScriptUIChartModule
            ],
            declarations: [
                app_component_1.AppComponent,
                items_component_1.ItemsComponent,
                item_detail_component_1.ItemDetailComponent,
                statistics_component_1.StatisticsComponent,
                statistic_detail_component_1.StatisticDetailComponent,
                friends_component_1.FriendsComponent,
                friend_detail_component_1.FriendDetailComponent,
                home_component_1.HomeComponent
            ],
            providers: [
                item_service_1.ItemService,
                statistic_service_1.StatisticService,
                friend_service_1.FriendService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBRTlFLDJEQUF3RDtBQUN4RCxpREFBK0M7QUFDL0MsMERBQXdEO0FBQ3hELHNFQUFtRTtBQUVuRSwyRUFBMkU7QUFDM0Usb0RBQXFFO0FBRXJFLGtGQUFrRjtBQUNsRixnRUFBZ0Y7QUFFaEYsd0VBQW1FO0FBQ25FLDZFQUF5RTtBQUN6RSxvRUFBZ0U7QUFDaEUseUZBQW9GO0FBQ3BGLGdGQUEyRTtBQUMzRSx1RUFBbUU7QUFDbkUsOERBQTBEO0FBQzFELHdEQUFvRDtBQUNwRCx3REFBc0Q7QUFDdEQseURBQTBFO0FBb0MxRTtJQUhBOztNQUVFO0lBQ0Y7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUFsQ3JCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIscUNBQWdCO2dCQUNoQiwrQkFBdUI7Z0JBQ3ZCLDBDQUE0QjtnQkFDNUIsbUNBQWU7Z0JBQ2YsbUNBQXlCO2FBQzVCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLGdDQUFjO2dCQUNkLDJDQUFtQjtnQkFDbkIsMENBQW1CO2dCQUNuQixxREFBd0I7Z0JBQ3hCLG9DQUFnQjtnQkFDaEIsK0NBQXFCO2dCQUNyQiw4QkFBYTthQUNoQjtZQUNELFNBQVMsRUFBRTtnQkFDUCwwQkFBVztnQkFDWCxvQ0FBZ0I7Z0JBQ2hCLDhCQUFhO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7UUFDRjs7VUFFRTtPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuXHJcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbXMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEl0ZW1EZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xyXG5cclxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSHR0cENsaWVudCB3cmFwcGVyXHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcclxuXHJcbmltcG9ydCB7Qm90dG9tQmFyTW9kdWxlfSBmcm9tIFwifi9hcHAvYm90dG9tLWJhci9ib3R0b20tYmFyLm1vZHVsZVwiO1xyXG5pbXBvcnQge1N0YXRpc3RpY3NDb21wb25lbnR9IGZyb20gXCJ+L2FwcC9zdGF0aXN0aWMvc3RhdGlzdGljcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtGcmllbmRzQ29tcG9uZW50fSBmcm9tIFwifi9hcHAvZnJpZW5kL2ZyaWVuZHMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U3RhdGlzdGljRGV0YWlsQ29tcG9uZW50fSBmcm9tIFwifi9hcHAvc3RhdGlzdGljL3N0YXRpc3RpYy1kZXRhaWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7RnJpZW5kRGV0YWlsQ29tcG9uZW50fSBmcm9tIFwifi9hcHAvZnJpZW5kL2ZyaWVuZC1kZXRhaWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U3RhdGlzdGljU2VydmljZX0gZnJvbSBcIn4vYXBwL3N0YXRpc3RpYy9zdGF0aXN0aWMuc2VydmljZVwiO1xyXG5pbXBvcnQge0ZyaWVuZFNlcnZpY2V9IGZyb20gXCJ+L2FwcC9mcmllbmQvZnJpZW5kLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtJdGVtU2VydmljZX0gZnJvbSBcIn4vYXBwL2l0ZW0vaXRlbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jaGFydC9hbmd1bGFyXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgYm9vdHN0cmFwOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICAgICAgQm90dG9tQmFyTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnQsXHJcbiAgICAgICAgSXRlbXNDb21wb25lbnQsXHJcbiAgICAgICAgSXRlbURldGFpbENvbXBvbmVudCxcclxuICAgICAgICBTdGF0aXN0aWNzQ29tcG9uZW50LFxyXG4gICAgICAgIFN0YXRpc3RpY0RldGFpbENvbXBvbmVudCxcclxuICAgICAgICBGcmllbmRzQ29tcG9uZW50LFxyXG4gICAgICAgIEZyaWVuZERldGFpbENvbXBvbmVudCxcclxuICAgICAgICBIb21lQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgSXRlbVNlcnZpY2UsXHJcbiAgICAgICAgU3RhdGlzdGljU2VydmljZSxcclxuICAgICAgICBGcmllbmRTZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuLypcclxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxyXG4qL1xyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXX0=