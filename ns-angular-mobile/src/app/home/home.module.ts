import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {ItemDetailComponent} from "~/app/home/item/item-detail.component";
import {StatisticDetailComponent} from "~/app/home/statistic/statistic-detail.component";
import {StatisticsComponent} from "~/app/home/statistic/statistics.component";
import {FriendsComponent} from "~/app/home/friend/friends.component";
import {FriendDetailComponent} from "~/app/home/friend/friend-detail.component";
import {HomeComponent} from "~/app/home/home.component";
import {ItemsComponent} from "~/app/home/item/items.component";
import {StatisticService} from "~/app/home/statistic/statistic.service";
import {FriendService} from "~/app/home/friend/friend.service";
import {ItemService} from "~/app/home/item/item.service";
import {HomeRoutingModule} from "~/app/home/home-routing.module";
import {BottomBarComponent} from "~/app/bottom-bar/bottom-bar/bottom-bar.component";
import {NativeScriptCommonModule} from "nativescript-angular/common";


@NgModule({
    declarations: [
        ItemsComponent,
        ItemDetailComponent,
        StatisticsComponent,
        StatisticDetailComponent,
        FriendsComponent,
        FriendDetailComponent,
        BottomBarComponent,
        HomeComponent
    ],
    imports: [
        NativeScriptCommonModule,
        // BottomBarModule,
        HomeRoutingModule,
    ],
    providers: [
        ItemService,
        StatisticService,
        FriendService
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule {
}
