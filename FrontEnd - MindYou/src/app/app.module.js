"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var item_service_1 = require("./item/item.service");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var forms_1 = require("nativescript-angular/forms");
// import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
// import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
// import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular";
// import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
// import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
// import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-ui-autocomplete/angular";
// import { NativeScriptUIGaugeModule } from "nativescript-ui-gauge/angular";
var bottom_bar_module_1 = require("~/app/bottom-bar/bottom-bar.module");
var statistics_component_1 = require("~/app/statistic/statistics.component");
var friends_component_1 = require("~/app/friend/friends.component");
var statistic_detail_component_1 = require("~/app/statistic/statistic-detail.component");
var friend_detail_component_1 = require("~/app/friend/friend-detail.component");
var statistic_service_1 = require("~/app/statistic/statistic.service");
var friend_service_1 = require("~/app/friend/friend.service");
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
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
                // NativeScriptUISideDrawerModule,
                // NativeScriptUIListViewModule,
                // NativeScriptUICalendarModule,
                // NativeScriptUIChartModule,
                // NativeScriptUIDataFormModule,
                // NativeScriptUIAutoCompleteTextViewModule,
                // NativeScriptUIGaugeModule,
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                forms_1.NativeScriptFormsModule,
                bottom_bar_module_1.BottomBarModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                items_component_1.ItemsComponent,
                item_detail_component_1.ItemDetailComponent,
                statistics_component_1.StatisticsComponent,
                statistic_detail_component_1.StatisticDetailComponent,
                friends_component_1.FriendsComponent,
                friend_detail_component_1.FriendDetailComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFFL0Msb0RBQWtEO0FBQ2xELDBEQUF3RDtBQUN4RCxzRUFBbUU7QUFDbkUsb0RBQXFFO0FBRXJFLHVGQUF1RjtBQUN2RixtRkFBbUY7QUFDbkYsbUZBQW1GO0FBQ25GLDZFQUE2RTtBQUM3RSxtRkFBbUY7QUFDbkYsbUdBQW1HO0FBQ25HLDZFQUE2RTtBQUM3RSx3RUFBbUU7QUFDbkUsNkVBQXlFO0FBQ3pFLG9FQUFnRTtBQUNoRSx5RkFBb0Y7QUFDcEYsZ0ZBQTJFO0FBQzNFLHVFQUFtRTtBQUNuRSw4REFBMEQ7QUFFMUQsMkVBQTJFO0FBQzNFLHdFQUF3RTtBQUV4RSxrRkFBa0Y7QUFDbEYsbUZBQW1GO0FBd0NuRjtJQUhBOztNQUVFO0lBQ0Y7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUF0Q3JCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLGtDQUFrQztnQkFDbEMsZ0NBQWdDO2dCQUNoQyxnQ0FBZ0M7Z0JBQ2hDLDZCQUE2QjtnQkFDN0IsZ0NBQWdDO2dCQUNoQyw0Q0FBNEM7Z0JBQzVDLDZCQUE2QjtnQkFDN0Isd0NBQWtCO2dCQUNsQiw4QkFBZ0I7Z0JBQ2hCLCtCQUF1QjtnQkFDdkIsbUNBQWU7YUFDbEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osZ0NBQWM7Z0JBQ2QsMkNBQW1CO2dCQUNuQiwwQ0FBbUI7Z0JBQ25CLHFEQUF3QjtnQkFDeEIsb0NBQWdCO2dCQUNoQiwrQ0FBcUI7YUFDeEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsMEJBQVc7Z0JBQ1gsb0NBQWdCO2dCQUNoQiw4QkFBYTthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO1FBQ0Y7O1VBRUU7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS9pdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEl0ZW1EZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2FsZW5kYXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNhbGVuZGFyL2FuZ3VsYXJcIjtcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L2FuZ3VsYXJcIjtcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL2FuZ3VsYXJcIjtcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQXV0b0NvbXBsZXRlVGV4dFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWF1dG9jb21wbGV0ZS9hbmd1bGFyXCI7XG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1nYXVnZS9hbmd1bGFyXCI7XG5pbXBvcnQge0JvdHRvbUJhck1vZHVsZX0gZnJvbSBcIn4vYXBwL2JvdHRvbS1iYXIvYm90dG9tLWJhci5tb2R1bGVcIjtcbmltcG9ydCB7U3RhdGlzdGljc0NvbXBvbmVudH0gZnJvbSBcIn4vYXBwL3N0YXRpc3RpYy9zdGF0aXN0aWNzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtGcmllbmRzQ29tcG9uZW50fSBmcm9tIFwifi9hcHAvZnJpZW5kL2ZyaWVuZHMuY29tcG9uZW50XCI7XG5pbXBvcnQge1N0YXRpc3RpY0RldGFpbENvbXBvbmVudH0gZnJvbSBcIn4vYXBwL3N0YXRpc3RpYy9zdGF0aXN0aWMtZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtGcmllbmREZXRhaWxDb21wb25lbnR9IGZyb20gXCJ+L2FwcC9mcmllbmQvZnJpZW5kLWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7U3RhdGlzdGljU2VydmljZX0gZnJvbSBcIn4vYXBwL3N0YXRpc3RpYy9zdGF0aXN0aWMuc2VydmljZVwiO1xuaW1wb3J0IHtGcmllbmRTZXJ2aWNlfSBmcm9tIFwifi9hcHAvZnJpZW5kL2ZyaWVuZC5zZXJ2aWNlXCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEh0dHBDbGllbnQgd3JhcHBlclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgLy8gTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgICAgICAvLyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgICAgICAvLyBOYXRpdmVTY3JpcHRVSUNhbGVuZGFyTW9kdWxlLFxuICAgICAgICAvLyBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlLFxuICAgICAgICAvLyBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlLFxuICAgICAgICAvLyBOYXRpdmVTY3JpcHRVSUF1dG9Db21wbGV0ZVRleHRWaWV3TW9kdWxlLFxuICAgICAgICAvLyBOYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBCb3R0b21CYXJNb2R1bGUsXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBJdGVtc0NvbXBvbmVudCxcbiAgICAgICAgSXRlbURldGFpbENvbXBvbmVudCxcbiAgICAgICAgU3RhdGlzdGljc0NvbXBvbmVudCxcbiAgICAgICAgU3RhdGlzdGljRGV0YWlsQ29tcG9uZW50LFxuICAgICAgICBGcmllbmRzQ29tcG9uZW50LFxuICAgICAgICBGcmllbmREZXRhaWxDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBJdGVtU2VydmljZSxcbiAgICAgICAgU3RhdGlzdGljU2VydmljZSxcbiAgICAgICAgRnJpZW5kU2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==