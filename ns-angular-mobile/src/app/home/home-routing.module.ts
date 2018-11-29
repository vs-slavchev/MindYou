import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { HomeComponent } from "~/app/home/home.component";
import { AuthGuard } from "~/app/auth/auth.guard";
import { ItemsComponent } from "~/app/home/item/items.component";
import { ItemDetailComponent } from "~/app/home/item/item-detail.component";
import { StatisticDetailComponent } from "~/app/home/statistic/statistic-detail.component";
import { FriendDetailComponent } from "~/app/home/friend/friend-detail.component";
import { FriendsComponent } from "~/app/home/friend/friends.component";
import { StatisticsComponent } from "~/app/home/statistic/statistics.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    {
        // canActivate: [AuthGuard],
        // canActivateChild: [AuthGuard],
        path: "home", component: HomeComponent, pathMatch: "full",
        children: [
            // { path: "", component: ItemsComponent },
            // {
            //     path: "",
            //     redirectTo: "items",
            //     pathMatch: "full"
            // },
            { path: "items", component: ItemsComponent },
            { path: "item/:id", component: ItemDetailComponent },
            { path: "statistics", component: StatisticsComponent },
            { path: "statistic/:id", component: StatisticDetailComponent },
            { path: "friends", component: FriendsComponent },
            { path: "friend/:id", component: FriendDetailComponent },
        ]
        //     {
        //         path: "",
        //         redirectTo: "index",
        //         pathMatch: "full"
        //     }
        //
        // ]
    },
    // {
    //     path: "**",
    //     redirectTo: "404",
    //     pathMatch: "full"
    // }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }
