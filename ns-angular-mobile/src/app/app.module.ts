import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

import {BottomBarModule} from "~/app/bottom-bar/bottom-bar.module";
import {StatisticsComponent} from "~/app/statistic/statistics.component";
import {FriendsComponent} from "~/app/friend/friends.component";
import {StatisticDetailComponent} from "~/app/statistic/statistic-detail.component";
import {FriendDetailComponent} from "~/app/friend/friend-detail.component";
import {StatisticService} from "~/app/statistic/statistic.service";
import {FriendService} from "~/app/friend/friend.service";
import {ItemService} from "~/app/item/item.service";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule,

        BottomBarModule,
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        StatisticsComponent,
        StatisticDetailComponent,
        FriendsComponent,
        FriendDetailComponent
    ],
    providers: [
        ItemService,
        StatisticService,
        FriendService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
