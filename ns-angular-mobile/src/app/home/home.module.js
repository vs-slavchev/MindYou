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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCwrRUFBMEU7QUFDMUUsa0ZBQThFO0FBQzlFLHlFQUFxRTtBQUNyRSxxRkFBZ0Y7QUFDaEYsNERBQXdEO0FBQ3hELG1FQUErRDtBQUMvRCw0RUFBd0U7QUFDeEUsbUVBQStEO0FBQy9ELDZEQUF5RDtBQUN6RCxzRUFBaUU7QUFDakUseUZBQW9GO0FBQ3BGLHNEQUFxRTtBQUNyRSx5REFBd0U7QUEwQnhFO0lBQUE7SUFDQSxDQUFDO0lBRFksVUFBVTtRQXZCdEIsZUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFO2dCQUNWLGdDQUFjO2dCQUNkLDJDQUFtQjtnQkFDbkIsMENBQW1CO2dCQUNuQixvQ0FBZ0I7Z0JBQ2hCLCtDQUFxQjtnQkFDckIseUNBQWtCO2dCQUNsQiw4QkFBYTthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLG1DQUF5QjtnQkFDekIsbUJBQW1CO2dCQUNuQix1Q0FBaUI7YUFDcEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsMEJBQVc7Z0JBQ1gsb0NBQWdCO2dCQUNoQiw4QkFBYTthQUNoQjtZQUNELE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzlCLENBQUM7T0FDVyxVQUFVLENBQ3RCO0lBQUQsaUJBQUM7Q0FBQSxBQURELElBQ0M7QUFEWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUF9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJdGVtRGV0YWlsQ29tcG9uZW50fSBmcm9tIFwifi9hcHAvaG9tZS9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTdGF0aXN0aWNzQ29tcG9uZW50fSBmcm9tIFwifi9hcHAvaG9tZS9zdGF0aXN0aWMvc3RhdGlzdGljcy5jb21wb25lbnRcIjtcbmltcG9ydCB7RnJpZW5kc0NvbXBvbmVudH0gZnJvbSBcIn4vYXBwL2hvbWUvZnJpZW5kL2ZyaWVuZHMuY29tcG9uZW50XCI7XG5pbXBvcnQge0ZyaWVuZERldGFpbENvbXBvbmVudH0gZnJvbSBcIn4vYXBwL2hvbWUvZnJpZW5kL2ZyaWVuZC1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQge0hvbWVDb21wb25lbnR9IGZyb20gXCJ+L2FwcC9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQge0l0ZW1zQ29tcG9uZW50fSBmcm9tIFwifi9hcHAvaG9tZS9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTdGF0aXN0aWNTZXJ2aWNlfSBmcm9tIFwifi9hcHAvaG9tZS9zdGF0aXN0aWMvc3RhdGlzdGljLnNlcnZpY2VcIjtcbmltcG9ydCB7RnJpZW5kU2VydmljZX0gZnJvbSBcIn4vYXBwL2hvbWUvZnJpZW5kL2ZyaWVuZC5zZXJ2aWNlXCI7XG5pbXBvcnQge0l0ZW1TZXJ2aWNlfSBmcm9tIFwifi9hcHAvaG9tZS9pdGVtL2l0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHtIb21lUm91dGluZ01vZHVsZX0gZnJvbSBcIn4vYXBwL2hvbWUvaG9tZS1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHtCb3R0b21CYXJDb21wb25lbnR9IGZyb20gXCJ+L2FwcC9ib3R0b20tYmFyL2JvdHRvbS1iYXIvYm90dG9tLWJhci5jb21wb25lbnRcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvYW5ndWxhclwiO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEl0ZW1zQ29tcG9uZW50LFxuICAgICAgICBJdGVtRGV0YWlsQ29tcG9uZW50LFxuICAgICAgICBTdGF0aXN0aWNzQ29tcG9uZW50LFxuICAgICAgICBGcmllbmRzQ29tcG9uZW50LFxuICAgICAgICBGcmllbmREZXRhaWxDb21wb25lbnQsXG4gICAgICAgIEJvdHRvbUJhckNvbXBvbmVudCxcbiAgICAgICAgSG9tZUNvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUsXG4gICAgICAgIC8vIEJvdHRvbUJhck1vZHVsZSxcbiAgICAgICAgSG9tZVJvdXRpbmdNb2R1bGUsXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgSXRlbVNlcnZpY2UsXG4gICAgICAgIFN0YXRpc3RpY1NlcnZpY2UsXG4gICAgICAgIEZyaWVuZFNlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHtcbn1cbiJdfQ==