"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var home_component_1 = require("~/app/home/home.component");
var items_component_1 = require("~/app/home/item/items.component");
var item_detail_component_1 = require("~/app/home/item/item-detail.component");
var statistic_detail_component_1 = require("~/app/home/statistic/statistic-detail.component");
var friend_detail_component_1 = require("~/app/home/friend/friend-detail.component");
var friends_component_1 = require("~/app/home/friend/friends.component");
var statistics_component_1 = require("~/app/home/statistic/statistics.component");
var router_1 = require("nativescript-angular/router");
var routes = [
    {
        // canActivate: [AuthGuard],
        // canActivateChild: [AuthGuard],
        path: "home", component: home_component_1.HomeComponent, pathMatch: "full",
        children: [
            // { path: "", component: ItemsComponent },
            // {
            //     path: "",
            //     redirectTo: "items",
            //     pathMatch: "full"
            // },
            { path: "items", component: items_component_1.ItemsComponent },
            { path: "item/:id", component: item_detail_component_1.ItemDetailComponent },
            { path: "statistics", component: statistics_component_1.StatisticsComponent },
            { path: "statistic/:id", component: statistic_detail_component_1.StatisticDetailComponent },
            { path: "friends", component: friends_component_1.FriendsComponent },
            { path: "friend/:id", component: friend_detail_component_1.FriendDetailComponent },
        ]
        //     {
        //         path: "",
        //         redirectTo: "index",
        //         pathMatch: "full"
        //     }
        //
        // ]
    },
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());
exports.HomeRoutingModule = HomeRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsNERBQTBEO0FBRTFELG1FQUFpRTtBQUNqRSwrRUFBNEU7QUFDNUUsOEZBQTJGO0FBQzNGLHFGQUFrRjtBQUNsRix5RUFBdUU7QUFDdkUsa0ZBQWdGO0FBQ2hGLHNEQUF1RTtBQUV2RSxJQUFNLE1BQU0sR0FBVztJQUNuQjtRQUNJLDRCQUE0QjtRQUM1QixpQ0FBaUM7UUFDakMsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTTtRQUN6RCxRQUFRLEVBQUU7WUFDTiwyQ0FBMkM7WUFDM0MsSUFBSTtZQUNKLGdCQUFnQjtZQUNoQiwyQkFBMkI7WUFDM0Isd0JBQXdCO1lBQ3hCLEtBQUs7WUFDTCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7WUFDNUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSwyQ0FBbUIsRUFBRTtZQUNwRCxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLDBDQUFtQixFQUFFO1lBQ3RELEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUscURBQXdCLEVBQUU7WUFDOUQsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRTtZQUNoRCxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLCtDQUFxQixFQUFFO1NBQzNEO1FBQ0QsUUFBUTtRQUNSLG9CQUFvQjtRQUNwQiwrQkFBK0I7UUFDL0IsNEJBQTRCO1FBQzVCLFFBQVE7UUFDUixFQUFFO1FBQ0YsSUFBSTtLQUNQO0NBTUosQ0FBQztBQU1GO0lBQUE7SUFBaUMsQ0FBQztJQUFyQixpQkFBaUI7UUFKN0IsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxpQkFBaUIsQ0FBSTtJQUFELHdCQUFDO0NBQUEsQUFBbEMsSUFBa0M7QUFBckIsOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCJ+L2FwcC9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tIFwifi9hcHAvYXV0aC9hdXRoLmd1YXJkXCI7XG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gXCJ+L2FwcC9ob21lL2l0ZW0vaXRlbXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIn4vYXBwL2hvbWUvaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFN0YXRpc3RpY0RldGFpbENvbXBvbmVudCB9IGZyb20gXCJ+L2FwcC9ob21lL3N0YXRpc3RpYy9zdGF0aXN0aWMtZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRnJpZW5kRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIn4vYXBwL2hvbWUvZnJpZW5kL2ZyaWVuZC1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBGcmllbmRzQ29tcG9uZW50IH0gZnJvbSBcIn4vYXBwL2hvbWUvZnJpZW5kL2ZyaWVuZHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTdGF0aXN0aWNzQ29tcG9uZW50IH0gZnJvbSBcIn4vYXBwL2hvbWUvc3RhdGlzdGljL3N0YXRpc3RpY3MuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgLy8gY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdLFxuICAgICAgICAvLyBjYW5BY3RpdmF0ZUNoaWxkOiBbQXV0aEd1YXJkXSxcbiAgICAgICAgcGF0aDogXCJob21lXCIsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCwgcGF0aE1hdGNoOiBcImZ1bGxcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIC8vIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBJdGVtc0NvbXBvbmVudCB9LFxuICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgLy8gICAgIHBhdGg6IFwiXCIsXG4gICAgICAgICAgICAvLyAgICAgcmVkaXJlY3RUbzogXCJpdGVtc1wiLFxuICAgICAgICAgICAgLy8gICAgIHBhdGhNYXRjaDogXCJmdWxsXCJcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICB7IHBhdGg6IFwiaXRlbXNcIiwgY29tcG9uZW50OiBJdGVtc0NvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiBcIml0ZW0vOmlkXCIsIGNvbXBvbmVudDogSXRlbURldGFpbENvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiBcInN0YXRpc3RpY3NcIiwgY29tcG9uZW50OiBTdGF0aXN0aWNzQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6IFwic3RhdGlzdGljLzppZFwiLCBjb21wb25lbnQ6IFN0YXRpc3RpY0RldGFpbENvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiBcImZyaWVuZHNcIiwgY29tcG9uZW50OiBGcmllbmRzQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6IFwiZnJpZW5kLzppZFwiLCBjb21wb25lbnQ6IEZyaWVuZERldGFpbENvbXBvbmVudCB9LFxuICAgICAgICBdXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgcGF0aDogXCJcIixcbiAgICAgICAgLy8gICAgICAgICByZWRpcmVjdFRvOiBcImluZGV4XCIsXG4gICAgICAgIC8vICAgICAgICAgcGF0aE1hdGNoOiBcImZ1bGxcIlxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvL1xuICAgICAgICAvLyBdXG4gICAgfSxcbiAgICAvLyB7XG4gICAgLy8gICAgIHBhdGg6IFwiKipcIixcbiAgICAvLyAgICAgcmVkaXJlY3RUbzogXCI0MDRcIixcbiAgICAvLyAgICAgcGF0aE1hdGNoOiBcImZ1bGxcIlxuICAgIC8vIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==