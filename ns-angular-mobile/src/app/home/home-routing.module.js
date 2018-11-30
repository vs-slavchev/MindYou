"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var home_component_1 = require("~/app/home/home.component");
var items_component_1 = require("~/app/home/item/items.component");
var item_detail_component_1 = require("~/app/home/item/item-detail.component");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsNERBQTBEO0FBRTFELG1FQUFpRTtBQUNqRSwrRUFBNEU7QUFDNUUsOEZBQTJGO0FBQzNGLHFGQUFrRjtBQUNsRix5RUFBdUU7QUFDdkUsa0ZBQWdGO0FBQ2hGLHNEQUF1RTtBQUV2RSxJQUFNLE1BQU0sR0FBVztJQUNuQjtRQUNJLDRCQUE0QjtRQUM1QixpQ0FBaUM7UUFDakMsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTTtRQUN6RCxRQUFRLEVBQUU7WUFDTiwyQ0FBMkM7WUFDM0MsSUFBSTtZQUNKLGdCQUFnQjtZQUNoQiwyQkFBMkI7WUFDM0Isd0JBQXdCO1lBQ3hCLEtBQUs7WUFDTCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7WUFDNUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSwyQ0FBbUIsRUFBRTtZQUNwRCxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLDBDQUFtQixFQUFFO1lBQ3RELEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUscURBQXdCLEVBQUU7WUFDOUQsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRTtZQUNoRCxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLCtDQUFxQixFQUFFO1NBQzNEO1FBQ0QsUUFBUTtRQUNSLG9CQUFvQjtRQUNwQiwrQkFBK0I7UUFDL0IsNEJBQTRCO1FBQzVCLFFBQVE7UUFDUixFQUFFO1FBQ0YsSUFBSTtLQUNQO0NBTUosQ0FBQztBQU1GO0lBQUE7SUFBaUMsQ0FBQztJQUFyQixpQkFBaUI7UUFKN0IsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxpQkFBaUIsQ0FBSTtJQUFELHdCQUFDO0NBQUEsQUFBbEMsSUFBa0M7QUFBckIsOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwifi9hcHAvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tIFwifi9hcHAvYXV0aC9hdXRoLmd1YXJkXCI7XHJcbmltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSBcIn4vYXBwL2hvbWUvaXRlbS9pdGVtcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCJ+L2FwcC9ob21lL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFN0YXRpc3RpY0RldGFpbENvbXBvbmVudCB9IGZyb20gXCJ+L2FwcC9ob21lL3N0YXRpc3RpYy9zdGF0aXN0aWMtZGV0YWlsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGcmllbmREZXRhaWxDb21wb25lbnQgfSBmcm9tIFwifi9hcHAvaG9tZS9mcmllbmQvZnJpZW5kLWRldGFpbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRnJpZW5kc0NvbXBvbmVudCB9IGZyb20gXCJ+L2FwcC9ob21lL2ZyaWVuZC9mcmllbmRzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTdGF0aXN0aWNzQ29tcG9uZW50IH0gZnJvbSBcIn4vYXBwL2hvbWUvc3RhdGlzdGljL3N0YXRpc3RpY3MuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAge1xyXG4gICAgICAgIC8vIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXSxcclxuICAgICAgICAvLyBjYW5BY3RpdmF0ZUNoaWxkOiBbQXV0aEd1YXJkXSxcclxuICAgICAgICBwYXRoOiBcImhvbWVcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LCBwYXRoTWF0Y2g6IFwiZnVsbFwiLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIC8vIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBJdGVtc0NvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgIC8vICAgICBwYXRoOiBcIlwiLFxyXG4gICAgICAgICAgICAvLyAgICAgcmVkaXJlY3RUbzogXCJpdGVtc1wiLFxyXG4gICAgICAgICAgICAvLyAgICAgcGF0aE1hdGNoOiBcImZ1bGxcIlxyXG4gICAgICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6IFwiaXRlbXNcIiwgY29tcG9uZW50OiBJdGVtc0NvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6IFwiaXRlbS86aWRcIiwgY29tcG9uZW50OiBJdGVtRGV0YWlsQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogXCJzdGF0aXN0aWNzXCIsIGNvbXBvbmVudDogU3RhdGlzdGljc0NvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6IFwic3RhdGlzdGljLzppZFwiLCBjb21wb25lbnQ6IFN0YXRpc3RpY0RldGFpbENvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6IFwiZnJpZW5kc1wiLCBjb21wb25lbnQ6IEZyaWVuZHNDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiBcImZyaWVuZC86aWRcIiwgY29tcG9uZW50OiBGcmllbmREZXRhaWxDb21wb25lbnQgfSxcclxuICAgICAgICBdXHJcbiAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAvLyAgICAgICAgIHBhdGg6IFwiXCIsXHJcbiAgICAgICAgLy8gICAgICAgICByZWRpcmVjdFRvOiBcImluZGV4XCIsXHJcbiAgICAgICAgLy8gICAgICAgICBwYXRoTWF0Y2g6IFwiZnVsbFwiXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIF1cclxuICAgIH0sXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgcGF0aDogXCIqKlwiLFxyXG4gICAgLy8gICAgIHJlZGlyZWN0VG86IFwiNDA0XCIsXHJcbiAgICAvLyAgICAgcGF0aE1hdGNoOiBcImZ1bGxcIlxyXG4gICAgLy8gfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZVJvdXRpbmdNb2R1bGUgeyB9XHJcbiJdfQ==