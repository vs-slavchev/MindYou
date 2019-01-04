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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsNERBQTBEO0FBRTFELG1FQUFpRTtBQUNqRSwrRUFBNEU7QUFDNUUscUZBQWtGO0FBQ2xGLHlFQUF1RTtBQUN2RSxrRkFBZ0Y7QUFDaEYsc0RBQXVFO0FBRXZFLElBQU0sTUFBTSxHQUFXO0lBQ25CO1FBQ0ksNEJBQTRCO1FBQzVCLGlDQUFpQztRQUNqQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNO1FBQ3pELFFBQVEsRUFBRTtZQUNOLDJDQUEyQztZQUMzQyxJQUFJO1lBQ0osZ0JBQWdCO1lBQ2hCLDJCQUEyQjtZQUMzQix3QkFBd0I7WUFDeEIsS0FBSztZQUNMLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtZQUM1QyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLDJDQUFtQixFQUFFO1lBQ3BELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsMENBQW1CLEVBQUU7WUFDdEQsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRTtZQUNoRCxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLCtDQUFxQixFQUFFO1NBQzNEO1FBQ0QsUUFBUTtRQUNSLG9CQUFvQjtRQUNwQiwrQkFBK0I7UUFDL0IsNEJBQTRCO1FBQzVCLFFBQVE7UUFDUixFQUFFO1FBQ0YsSUFBSTtLQUNQO0NBTUosQ0FBQztBQU1GO0lBQUE7SUFBaUMsQ0FBQztJQUFyQixpQkFBaUI7UUFKN0IsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxpQkFBaUIsQ0FBSTtJQUFELHdCQUFDO0NBQUEsQUFBbEMsSUFBa0M7QUFBckIsOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwifi9hcHAvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tIFwifi9hcHAvYXV0aC9hdXRoLmd1YXJkXCI7XHJcbmltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSBcIn4vYXBwL2hvbWUvaXRlbS9pdGVtcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCJ+L2FwcC9ob21lL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZyaWVuZERldGFpbENvbXBvbmVudCB9IGZyb20gXCJ+L2FwcC9ob21lL2ZyaWVuZC9mcmllbmQtZGV0YWlsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGcmllbmRzQ29tcG9uZW50IH0gZnJvbSBcIn4vYXBwL2hvbWUvZnJpZW5kL2ZyaWVuZHMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFN0YXRpc3RpY3NDb21wb25lbnQgfSBmcm9tIFwifi9hcHAvaG9tZS9zdGF0aXN0aWMvc3RhdGlzdGljcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgLy8gY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdLFxyXG4gICAgICAgIC8vIGNhbkFjdGl2YXRlQ2hpbGQ6IFtBdXRoR3VhcmRdLFxyXG4gICAgICAgIHBhdGg6IFwiaG9tZVwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIHBhdGhNYXRjaDogXCJmdWxsXCIsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgLy8geyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IEl0ZW1zQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgLy8gICAgIHBhdGg6IFwiXCIsXHJcbiAgICAgICAgICAgIC8vICAgICByZWRpcmVjdFRvOiBcIml0ZW1zXCIsXHJcbiAgICAgICAgICAgIC8vICAgICBwYXRoTWF0Y2g6IFwiZnVsbFwiXHJcbiAgICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogXCJpdGVtc1wiLCBjb21wb25lbnQ6IEl0ZW1zQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogXCJpdGVtLzppZFwiLCBjb21wb25lbnQ6IEl0ZW1EZXRhaWxDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiBcInN0YXRpc3RpY3NcIiwgY29tcG9uZW50OiBTdGF0aXN0aWNzQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogXCJmcmllbmRzXCIsIGNvbXBvbmVudDogRnJpZW5kc0NvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6IFwiZnJpZW5kLzppZFwiLCBjb21wb25lbnQ6IEZyaWVuZERldGFpbENvbXBvbmVudCB9LFxyXG4gICAgICAgIF1cclxuICAgICAgICAvLyAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgcGF0aDogXCJcIixcclxuICAgICAgICAvLyAgICAgICAgIHJlZGlyZWN0VG86IFwiaW5kZXhcIixcclxuICAgICAgICAvLyAgICAgICAgIHBhdGhNYXRjaDogXCJmdWxsXCJcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gXVxyXG4gICAgfSxcclxuICAgIC8vIHtcclxuICAgIC8vICAgICBwYXRoOiBcIioqXCIsXHJcbiAgICAvLyAgICAgcmVkaXJlY3RUbzogXCI0MDRcIixcclxuICAgIC8vICAgICBwYXRoTWF0Y2g6IFwiZnVsbFwiXHJcbiAgICAvLyB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lUm91dGluZ01vZHVsZSB7IH1cclxuIl19