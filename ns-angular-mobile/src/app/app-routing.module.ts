import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import {AuthComponent} from "~/app/auth/auth.component";
import {ItemsComponent} from "~/app/home/item/items.component";
import {StatisticsComponent} from "~/app/home/statistic/statistics.component";
import {FriendsComponent} from "~/app/home/friend/friends.component";
import {HomeComponent} from "~/app/home/home.component";
import {ItemDetailComponent} from "~/app/home/item/item-detail.component";
import {FriendDetailComponent} from "~/app/home/friend/friend-detail.component";
import {AuthGuard} from "~/app/auth/auth.guard";

const routes: Routes = [
    { path: '',   redirectTo: '/home/items', pathMatch: 'full' },
    // { path: 'home',   loadChildren: '~/app/home/home.module#HomeModule' },
    // { path: "login", loadChildren: "./auth/auth.module#AuthModule" },
    { path: "login", component: AuthComponent },
    // { path: "home", component: HomeComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],
    { path: "home", component: HomeComponent,
        children: [
            // { path: "", redirectTo: "/home/items", pathMatch: 'full' },
            { path: "", redirectTo: "items", pathMatch: 'full' },
            { path: "items", component: ItemsComponent },
            { path: "item/:id", component: ItemDetailComponent },
            { path: "statistics", component: StatisticsComponent },
            { path: "friends", component: FriendsComponent },
            { path: "friend/:id", component: FriendDetailComponent }]}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }