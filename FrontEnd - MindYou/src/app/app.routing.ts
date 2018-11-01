import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { StatisticsComponent } from "./statistic/statistics.component";
import { StatisticDetailComponent } from "./statistic/statistic-detail.component";
import { FriendsComponent } from "./friend/friends.component";
import { FriendDetailComponent } from "./friend/friend-detail.component";

const routes: Routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "statistics", component: StatisticsComponent },
    { path: "statistic/:id", component: StatisticDetailComponent },
    { path: "friends", component: FriendsComponent },
    { path: "friend/:id", component: FriendDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }