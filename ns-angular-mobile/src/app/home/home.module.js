"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_detail_component_1 = require("~/app/home/item/item-detail.component");
var statistics_component_1 = require("~/app/home/statistic/statistics.component");
var friends_component_1 = require("~/app/home/friend/friends.component");
var friend_detail_component_1 = require("~/app/home/friend/friend-detail.component");
var home_component_1 = require("~/app/home/home.component");
var items_component_1 = require("~/app/home/item/items.component");
var statistic_service_1 = require("~/app/home/statistic/statistic.service");
var friend_service_1 = require("~/app/home/friend/friend.service");
var item_service_1 = require("~/app/home/item/item.service");
var home_routing_module_1 = require("~/app/home/home-routing.module");
var bottom_bar_component_1 = require("~/app/bottom-bar/bottom-bar/bottom-bar.component");
var common_1 = require("nativescript-angular/common");
var angular_1 = require("nativescript-ui-chart/angular");
var angular_2 = require("nativescript-ui-listview/angular");
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            declarations: [
                items_component_1.ItemsComponent,
                item_detail_component_1.ItemDetailComponent,
                statistics_component_1.StatisticsComponent,
                friends_component_1.FriendsComponent,
                friend_detail_component_1.FriendDetailComponent,
                bottom_bar_component_1.BottomBarComponent,
                home_component_1.HomeComponent
            ],
            imports: [
                common_1.NativeScriptCommonModule,
                angular_1.NativeScriptUIChartModule,
                angular_2.NativeScriptUIListViewModule,
                // BottomBarModule,
                home_routing_module_1.HomeRoutingModule,
            ],
            providers: [
                item_service_1.ItemService,
                statistic_service_1.StatisticService,
                friend_service_1.FriendService
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCwrRUFBMEU7QUFDMUUsOEZBQXlGO0FBQ3pGLGtGQUE4RTtBQUM5RSx5RUFBcUU7QUFDckUscUZBQWdGO0FBQ2hGLDREQUF3RDtBQUN4RCxtRUFBK0Q7QUFDL0QsNEVBQXdFO0FBQ3hFLG1FQUErRDtBQUMvRCw2REFBeUQ7QUFDekQsc0VBQWlFO0FBQ2pFLHlGQUFvRjtBQUNwRixzREFBcUU7QUFDckUseURBQXdFO0FBQ3hFLDREQUE4RTtBQTRCOUU7SUFBQTtJQUNBLENBQUM7SUFEWSxVQUFVO1FBekJ0QixlQUFRLENBQUM7WUFDTixZQUFZLEVBQUU7Z0JBQ1YsZ0NBQWM7Z0JBQ2QsMkNBQW1CO2dCQUNuQiwwQ0FBbUI7Z0JBQ25CLHFEQUF3QjtnQkFDeEIsb0NBQWdCO2dCQUNoQiwrQ0FBcUI7Z0JBQ3JCLHlDQUFrQjtnQkFDbEIsOEJBQWE7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4QixtQ0FBeUI7Z0JBQ3pCLHNDQUE0QjtnQkFDNUIsbUJBQW1CO2dCQUNuQix1Q0FBaUI7YUFDcEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsMEJBQVc7Z0JBQ1gsb0NBQWdCO2dCQUNoQiw4QkFBYTthQUNoQjtZQUNELE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzlCLENBQUM7T0FDVyxVQUFVLENBQ3RCO0lBQUQsaUJBQUM7Q0FBQSxBQURELElBQ0M7QUFEWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUF9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0l0ZW1EZXRhaWxDb21wb25lbnR9IGZyb20gXCJ+L2FwcC9ob21lL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U3RhdGlzdGljRGV0YWlsQ29tcG9uZW50fSBmcm9tIFwifi9hcHAvaG9tZS9zdGF0aXN0aWMvc3RhdGlzdGljLWRldGFpbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTdGF0aXN0aWNzQ29tcG9uZW50fSBmcm9tIFwifi9hcHAvaG9tZS9zdGF0aXN0aWMvc3RhdGlzdGljcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtGcmllbmRzQ29tcG9uZW50fSBmcm9tIFwifi9hcHAvaG9tZS9mcmllbmQvZnJpZW5kcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtGcmllbmREZXRhaWxDb21wb25lbnR9IGZyb20gXCJ+L2FwcC9ob21lL2ZyaWVuZC9mcmllbmQtZGV0YWlsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0hvbWVDb21wb25lbnR9IGZyb20gXCJ+L2FwcC9ob21lL2hvbWUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7SXRlbXNDb21wb25lbnR9IGZyb20gXCJ+L2FwcC9ob21lL2l0ZW0vaXRlbXMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U3RhdGlzdGljU2VydmljZX0gZnJvbSBcIn4vYXBwL2hvbWUvc3RhdGlzdGljL3N0YXRpc3RpYy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RnJpZW5kU2VydmljZX0gZnJvbSBcIn4vYXBwL2hvbWUvZnJpZW5kL2ZyaWVuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7SXRlbVNlcnZpY2V9IGZyb20gXCJ+L2FwcC9ob21lL2l0ZW0vaXRlbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7SG9tZVJvdXRpbmdNb2R1bGV9IGZyb20gXCJ+L2FwcC9ob21lL2hvbWUtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHtCb3R0b21CYXJDb21wb25lbnR9IGZyb20gXCJ+L2FwcC9ib3R0b20tYmFyL2JvdHRvbS1iYXIvYm90dG9tLWJhci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHtOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L2FuZ3VsYXJcIjtcclxuaW1wb3J0IHtOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgSXRlbXNDb21wb25lbnQsXHJcbiAgICAgICAgSXRlbURldGFpbENvbXBvbmVudCxcclxuICAgICAgICBTdGF0aXN0aWNzQ29tcG9uZW50LFxyXG4gICAgICAgIFN0YXRpc3RpY0RldGFpbENvbXBvbmVudCxcclxuICAgICAgICBGcmllbmRzQ29tcG9uZW50LFxyXG4gICAgICAgIEZyaWVuZERldGFpbENvbXBvbmVudCxcclxuICAgICAgICBCb3R0b21CYXJDb21wb25lbnQsXHJcbiAgICAgICAgSG9tZUNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxyXG4gICAgICAgIC8vIEJvdHRvbUJhck1vZHVsZSxcclxuICAgICAgICBIb21lUm91dGluZ01vZHVsZSxcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBJdGVtU2VydmljZSxcclxuICAgICAgICBTdGF0aXN0aWNTZXJ2aWNlLFxyXG4gICAgICAgIEZyaWVuZFNlcnZpY2VcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVNb2R1bGUge1xyXG59XHJcbiJdfQ==