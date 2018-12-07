"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var auth_component_1 = require("~/app/auth/auth.component");
var items_component_1 = require("~/app/home/item/items.component");
var statistics_component_1 = require("~/app/home/statistic/statistics.component");
var friends_component_1 = require("~/app/home/friend/friends.component");
var home_component_1 = require("~/app/home/home.component");
var item_detail_component_1 = require("~/app/home/item/item-detail.component");
var friend_detail_component_1 = require("~/app/home/friend/friend-detail.component");
var auth_guard_1 = require("~/app/auth/auth.guard");
var routes = [
    { path: '', redirectTo: '/home/items', pathMatch: 'full' },
    // { path: 'home',   loadChildren: '~/app/home/home.module#HomeModule' },
    // { path: "login", loadChildren: "./auth/auth.module#AuthModule" },
    { path: "login", component: auth_component_1.AuthComponent },
    { path: "home", component: home_component_1.HomeComponent, canActivate: [auth_guard_1.AuthGuard], canActivateChild: [auth_guard_1.AuthGuard],
        // { path: "home", component: HomeComponent,
        children: [
            // { path: "", redirectTo: "/home/items", pathMatch: 'full' },
            { path: "", redirectTo: "items", pathMatch: 'full' },
            { path: "items", component: items_component_1.ItemsComponent },
            { path: "item/:id", component: item_detail_component_1.ItemDetailComponent },
            { path: "statistics", component: statistics_component_1.StatisticsComponent },
            { path: "friends", component: friends_component_1.FriendsComponent },
            { path: "friend/:id", component: friend_detail_component_1.FriendDetailComponent }
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUV2RSw0REFBd0Q7QUFDeEQsbUVBQStEO0FBQy9ELGtGQUE4RTtBQUM5RSx5RUFBcUU7QUFDckUsNERBQXdEO0FBQ3hELCtFQUEwRTtBQUMxRSxxRkFBZ0Y7QUFDaEYsb0RBQWdEO0FBRWhELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBSSxVQUFVLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDNUQseUVBQXlFO0lBQ3pFLG9FQUFvRTtJQUNwRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7SUFDM0MsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFLFdBQVcsRUFBRSxDQUFDLHNCQUFTLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLHNCQUFTLENBQUM7UUFDakcsNENBQTRDO1FBQ3hDLFFBQVEsRUFBRTtZQUNOLDhEQUE4RDtZQUM5RCxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO1lBQ3BELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtZQUM1QyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLDJDQUFtQixFQUFFO1lBQ3BELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsMENBQW1CLEVBQUU7WUFDdEQsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRTtZQUNoRCxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLCtDQUFxQixFQUFFO1NBQUMsRUFBQztDQUNyRSxDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0F1dGhDb21wb25lbnR9IGZyb20gXCJ+L2FwcC9hdXRoL2F1dGguY29tcG9uZW50XCI7XG5pbXBvcnQge0l0ZW1zQ29tcG9uZW50fSBmcm9tIFwifi9hcHAvaG9tZS9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTdGF0aXN0aWNzQ29tcG9uZW50fSBmcm9tIFwifi9hcHAvaG9tZS9zdGF0aXN0aWMvc3RhdGlzdGljcy5jb21wb25lbnRcIjtcbmltcG9ydCB7RnJpZW5kc0NvbXBvbmVudH0gZnJvbSBcIn4vYXBwL2hvbWUvZnJpZW5kL2ZyaWVuZHMuY29tcG9uZW50XCI7XG5pbXBvcnQge0hvbWVDb21wb25lbnR9IGZyb20gXCJ+L2FwcC9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQge0l0ZW1EZXRhaWxDb21wb25lbnR9IGZyb20gXCJ+L2FwcC9ob21lL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQge0ZyaWVuZERldGFpbENvbXBvbmVudH0gZnJvbSBcIn4vYXBwL2hvbWUvZnJpZW5kL2ZyaWVuZC1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQge0F1dGhHdWFyZH0gZnJvbSBcIn4vYXBwL2F1dGgvYXV0aC5ndWFyZFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6ICcnLCAgIHJlZGlyZWN0VG86ICcvaG9tZS9pdGVtcycsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG4gICAgLy8geyBwYXRoOiAnaG9tZScsICAgbG9hZENoaWxkcmVuOiAnfi9hcHAvaG9tZS9ob21lLm1vZHVsZSNIb21lTW9kdWxlJyB9LFxuICAgIC8vIHsgcGF0aDogXCJsb2dpblwiLCBsb2FkQ2hpbGRyZW46IFwiLi9hdXRoL2F1dGgubW9kdWxlI0F1dGhNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJsb2dpblwiLCBjb21wb25lbnQ6IEF1dGhDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiaG9tZVwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXSwgY2FuQWN0aXZhdGVDaGlsZDogW0F1dGhHdWFyZF0sXG4gICAgLy8geyBwYXRoOiBcImhvbWVcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgLy8geyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9ob21lL2l0ZW1zXCIsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG4gICAgICAgICAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiaXRlbXNcIiwgcGF0aE1hdGNoOiAnZnVsbCcgfSxcbiAgICAgICAgICAgIHsgcGF0aDogXCJpdGVtc1wiLCBjb21wb25lbnQ6IEl0ZW1zQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6IFwiaXRlbS86aWRcIiwgY29tcG9uZW50OiBJdGVtRGV0YWlsQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6IFwic3RhdGlzdGljc1wiLCBjb21wb25lbnQ6IFN0YXRpc3RpY3NDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogXCJmcmllbmRzXCIsIGNvbXBvbmVudDogRnJpZW5kc0NvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiBcImZyaWVuZC86aWRcIiwgY29tcG9uZW50OiBGcmllbmREZXRhaWxDb21wb25lbnQgfV19XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfSJdfQ==