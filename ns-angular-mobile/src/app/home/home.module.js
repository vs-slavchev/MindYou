"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_detail_component_1 = require("~/app/home/item/item-detail.component");
var statistic_detail_component_1 = require("~/app/home/statistic/statistic-detail.component");
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
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            declarations: [
                items_component_1.ItemsComponent,
                item_detail_component_1.ItemDetailComponent,
                statistics_component_1.StatisticsComponent,
                statistic_detail_component_1.StatisticDetailComponent,
                friends_component_1.FriendsComponent,
                friend_detail_component_1.FriendDetailComponent,
                bottom_bar_component_1.BottomBarComponent,
                home_component_1.HomeComponent
            ],
            imports: [
                common_1.NativeScriptCommonModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCwrRUFBMEU7QUFDMUUsOEZBQXlGO0FBQ3pGLGtGQUE4RTtBQUM5RSx5RUFBcUU7QUFDckUscUZBQWdGO0FBQ2hGLDREQUF3RDtBQUN4RCxtRUFBK0Q7QUFDL0QsNEVBQXdFO0FBQ3hFLG1FQUErRDtBQUMvRCw2REFBeUQ7QUFDekQsc0VBQWlFO0FBQ2pFLHlGQUFvRjtBQUNwRixzREFBcUU7QUEwQnJFO0lBQUE7SUFDQSxDQUFDO0lBRFksVUFBVTtRQXZCdEIsZUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFO2dCQUNWLGdDQUFjO2dCQUNkLDJDQUFtQjtnQkFDbkIsMENBQW1CO2dCQUNuQixxREFBd0I7Z0JBQ3hCLG9DQUFnQjtnQkFDaEIsK0NBQXFCO2dCQUNyQix5Q0FBa0I7Z0JBQ2xCLDhCQUFhO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsbUJBQW1CO2dCQUNuQix1Q0FBaUI7YUFDcEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsMEJBQVc7Z0JBQ1gsb0NBQWdCO2dCQUNoQiw4QkFBYTthQUNoQjtZQUNELE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzlCLENBQUM7T0FDVyxVQUFVLENBQ3RCO0lBQUQsaUJBQUM7Q0FBQSxBQURELElBQ0M7QUFEWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUF9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJdGVtRGV0YWlsQ29tcG9uZW50fSBmcm9tIFwifi9hcHAvaG9tZS9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTdGF0aXN0aWNEZXRhaWxDb21wb25lbnR9IGZyb20gXCJ+L2FwcC9ob21lL3N0YXRpc3RpYy9zdGF0aXN0aWMtZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTdGF0aXN0aWNzQ29tcG9uZW50fSBmcm9tIFwifi9hcHAvaG9tZS9zdGF0aXN0aWMvc3RhdGlzdGljcy5jb21wb25lbnRcIjtcbmltcG9ydCB7RnJpZW5kc0NvbXBvbmVudH0gZnJvbSBcIn4vYXBwL2hvbWUvZnJpZW5kL2ZyaWVuZHMuY29tcG9uZW50XCI7XG5pbXBvcnQge0ZyaWVuZERldGFpbENvbXBvbmVudH0gZnJvbSBcIn4vYXBwL2hvbWUvZnJpZW5kL2ZyaWVuZC1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQge0hvbWVDb21wb25lbnR9IGZyb20gXCJ+L2FwcC9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQge0l0ZW1zQ29tcG9uZW50fSBmcm9tIFwifi9hcHAvaG9tZS9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTdGF0aXN0aWNTZXJ2aWNlfSBmcm9tIFwifi9hcHAvaG9tZS9zdGF0aXN0aWMvc3RhdGlzdGljLnNlcnZpY2VcIjtcbmltcG9ydCB7RnJpZW5kU2VydmljZX0gZnJvbSBcIn4vYXBwL2hvbWUvZnJpZW5kL2ZyaWVuZC5zZXJ2aWNlXCI7XG5pbXBvcnQge0l0ZW1TZXJ2aWNlfSBmcm9tIFwifi9hcHAvaG9tZS9pdGVtL2l0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHtIb21lUm91dGluZ01vZHVsZX0gZnJvbSBcIn4vYXBwL2hvbWUvaG9tZS1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHtCb3R0b21CYXJDb21wb25lbnR9IGZyb20gXCJ+L2FwcC9ib3R0b20tYmFyL2JvdHRvbS1iYXIvYm90dG9tLWJhci5jb21wb25lbnRcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgSXRlbXNDb21wb25lbnQsXG4gICAgICAgIEl0ZW1EZXRhaWxDb21wb25lbnQsXG4gICAgICAgIFN0YXRpc3RpY3NDb21wb25lbnQsXG4gICAgICAgIFN0YXRpc3RpY0RldGFpbENvbXBvbmVudCxcbiAgICAgICAgRnJpZW5kc0NvbXBvbmVudCxcbiAgICAgICAgRnJpZW5kRGV0YWlsQ29tcG9uZW50LFxuICAgICAgICBCb3R0b21CYXJDb21wb25lbnQsXG4gICAgICAgIEhvbWVDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICAvLyBCb3R0b21CYXJNb2R1bGUsXG4gICAgICAgIEhvbWVSb3V0aW5nTW9kdWxlLFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEl0ZW1TZXJ2aWNlLFxuICAgICAgICBTdGF0aXN0aWNTZXJ2aWNlLFxuICAgICAgICBGcmllbmRTZXJ2aWNlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZU1vZHVsZSB7XG59XG4iXX0=