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
var forms_1 = require("nativescript-angular/forms");
var angular_3 = require("nativescript-ui-sidedrawer/angular");
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
                forms_1.NativeScriptFormsModule,
                angular_3.NativeScriptUISideDrawerModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCwrRUFBMEU7QUFDMUUsa0ZBQThFO0FBQzlFLHlFQUFxRTtBQUNyRSxxRkFBZ0Y7QUFDaEYsNERBQXdEO0FBQ3hELG1FQUErRDtBQUMvRCw0RUFBd0U7QUFDeEUsbUVBQStEO0FBQy9ELDZEQUF5RDtBQUN6RCxzRUFBaUU7QUFDakUseUZBQW9GO0FBQ3BGLHNEQUFxRTtBQUNyRSx5REFBd0U7QUFDeEUsNERBQThFO0FBQzlFLG9EQUFrRTtBQUNsRSw4REFBa0Y7QUE2QmxGO0lBQUE7SUFDQSxDQUFDO0lBRFksVUFBVTtRQTFCdEIsZUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFO2dCQUNWLGdDQUFjO2dCQUNkLDJDQUFtQjtnQkFDbkIsMENBQW1CO2dCQUNuQixvQ0FBZ0I7Z0JBQ2hCLCtDQUFxQjtnQkFDckIseUNBQWtCO2dCQUNsQiw4QkFBYTthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLG1DQUF5QjtnQkFDekIsc0NBQTRCO2dCQUM1QixtQkFBbUI7Z0JBQ25CLHVDQUFpQjtnQkFDakIsK0JBQXVCO2dCQUN2Qix3Q0FBOEI7YUFDakM7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsMEJBQVc7Z0JBQ1gsb0NBQWdCO2dCQUNoQiw4QkFBYTthQUNoQjtZQUNELE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzlCLENBQUM7T0FDVyxVQUFVLENBQ3RCO0lBQUQsaUJBQUM7Q0FBQSxBQURELElBQ0M7QUFEWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUF9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0l0ZW1EZXRhaWxDb21wb25lbnR9IGZyb20gXCJ+L2FwcC9ob21lL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U3RhdGlzdGljc0NvbXBvbmVudH0gZnJvbSBcIn4vYXBwL2hvbWUvc3RhdGlzdGljL3N0YXRpc3RpY3MuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7RnJpZW5kc0NvbXBvbmVudH0gZnJvbSBcIn4vYXBwL2hvbWUvZnJpZW5kL2ZyaWVuZHMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7RnJpZW5kRGV0YWlsQ29tcG9uZW50fSBmcm9tIFwifi9hcHAvaG9tZS9mcmllbmQvZnJpZW5kLWRldGFpbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tIFwifi9hcHAvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0l0ZW1zQ29tcG9uZW50fSBmcm9tIFwifi9hcHAvaG9tZS9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1N0YXRpc3RpY1NlcnZpY2V9IGZyb20gXCJ+L2FwcC9ob21lL3N0YXRpc3RpYy9zdGF0aXN0aWMuc2VydmljZVwiO1xyXG5pbXBvcnQge0ZyaWVuZFNlcnZpY2V9IGZyb20gXCJ+L2FwcC9ob21lL2ZyaWVuZC9mcmllbmQuc2VydmljZVwiO1xyXG5pbXBvcnQge0l0ZW1TZXJ2aWNlfSBmcm9tIFwifi9hcHAvaG9tZS9pdGVtL2l0ZW0uc2VydmljZVwiO1xyXG5pbXBvcnQge0hvbWVSb3V0aW5nTW9kdWxlfSBmcm9tIFwifi9hcHAvaG9tZS9ob21lLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7Qm90dG9tQmFyQ29tcG9uZW50fSBmcm9tIFwifi9hcHAvYm90dG9tLWJhci9ib3R0b20tYmFyL2JvdHRvbS1iYXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7TmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jaGFydC9hbmd1bGFyXCI7XHJcbmltcG9ydCB7TmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XHJcbmltcG9ydCB7TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiXHJcbmltcG9ydCB7TmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBJdGVtc0NvbXBvbmVudCxcclxuICAgICAgICBJdGVtRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgICAgIFN0YXRpc3RpY3NDb21wb25lbnQsXHJcbiAgICAgICAgRnJpZW5kc0NvbXBvbmVudCxcclxuICAgICAgICBGcmllbmREZXRhaWxDb21wb25lbnQsXHJcbiAgICAgICAgQm90dG9tQmFyQ29tcG9uZW50LFxyXG4gICAgICAgIEhvbWVDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcclxuICAgICAgICAvLyBCb3R0b21CYXJNb2R1bGUsXHJcbiAgICAgICAgSG9tZVJvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgSXRlbVNlcnZpY2UsXHJcbiAgICAgICAgU3RhdGlzdGljU2VydmljZSxcclxuICAgICAgICBGcmllbmRTZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHtcclxufVxyXG4iXX0=