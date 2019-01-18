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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUV2RSw0REFBd0Q7QUFDeEQsbUVBQStEO0FBQy9ELGtGQUE4RTtBQUM5RSx5RUFBcUU7QUFDckUsNERBQXdEO0FBQ3hELCtFQUEwRTtBQUMxRSxxRkFBZ0Y7QUFDaEYsb0RBQWdEO0FBRWhELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBSSxVQUFVLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDNUQseUVBQXlFO0lBQ3pFLG9FQUFvRTtJQUNwRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7SUFDM0MsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFLFdBQVcsRUFBRSxDQUFDLHNCQUFTLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLHNCQUFTLENBQUM7UUFDbEcsNENBQTRDO1FBQ3ZDLFFBQVEsRUFBRTtZQUNOLDhEQUE4RDtZQUM5RCxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO1lBQ3BELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtZQUM1QyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLDJDQUFtQixFQUFFO1lBQ3BELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsMENBQW1CLEVBQUU7WUFDdEQsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRTtZQUNoRCxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLCtDQUFxQixFQUFFO1NBQUMsRUFBQztDQUNyRSxDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge0F1dGhDb21wb25lbnR9IGZyb20gXCJ+L2FwcC9hdXRoL2F1dGguY29tcG9uZW50XCI7XHJcbmltcG9ydCB7SXRlbXNDb21wb25lbnR9IGZyb20gXCJ+L2FwcC9ob21lL2l0ZW0vaXRlbXMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U3RhdGlzdGljc0NvbXBvbmVudH0gZnJvbSBcIn4vYXBwL2hvbWUvc3RhdGlzdGljL3N0YXRpc3RpY3MuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7RnJpZW5kc0NvbXBvbmVudH0gZnJvbSBcIn4vYXBwL2hvbWUvZnJpZW5kL2ZyaWVuZHMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSBcIn4vYXBwL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtJdGVtRGV0YWlsQ29tcG9uZW50fSBmcm9tIFwifi9hcHAvaG9tZS9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0ZyaWVuZERldGFpbENvbXBvbmVudH0gZnJvbSBcIn4vYXBwL2hvbWUvZnJpZW5kL2ZyaWVuZC1kZXRhaWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7QXV0aEd1YXJkfSBmcm9tIFwifi9hcHAvYXV0aC9hdXRoLmd1YXJkXCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogJycsICAgcmVkaXJlY3RUbzogJy9ob21lL2l0ZW1zJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuICAgIC8vIHsgcGF0aDogJ2hvbWUnLCAgIGxvYWRDaGlsZHJlbjogJ34vYXBwL2hvbWUvaG9tZS5tb2R1bGUjSG9tZU1vZHVsZScgfSxcclxuICAgIC8vIHsgcGF0aDogXCJsb2dpblwiLCBsb2FkQ2hpbGRyZW46IFwiLi9hdXRoL2F1dGgubW9kdWxlI0F1dGhNb2R1bGVcIiB9LFxyXG4gICAgeyBwYXRoOiBcImxvZ2luXCIsIGNvbXBvbmVudDogQXV0aENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcImhvbWVcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LCBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0sIGNhbkFjdGl2YXRlQ2hpbGQ6IFtBdXRoR3VhcmRdLFxyXG4gICAvLyB7IHBhdGg6IFwiaG9tZVwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgLy8geyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9ob21lL2l0ZW1zXCIsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCJpdGVtc1wiLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6IFwiaXRlbXNcIiwgY29tcG9uZW50OiBJdGVtc0NvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6IFwiaXRlbS86aWRcIiwgY29tcG9uZW50OiBJdGVtRGV0YWlsQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogXCJzdGF0aXN0aWNzXCIsIGNvbXBvbmVudDogU3RhdGlzdGljc0NvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6IFwiZnJpZW5kc1wiLCBjb21wb25lbnQ6IEZyaWVuZHNDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiBcImZyaWVuZC86aWRcIiwgY29tcG9uZW50OiBGcmllbmREZXRhaWxDb21wb25lbnQgfV19XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxyXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9Il19