import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

// import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
// import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
// import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular";
// import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
// import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
// import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-ui-autocomplete/angular";
// import { NativeScriptUIGaugeModule } from "nativescript-ui-gauge/angular";
import {BottomBarModule} from "~/app/bottom-bar/bottom-bar.module";
import {StatisticsComponent} from "~/app/statistic/statistics.component";
import {FriendsComponent} from "~/app/friend/friends.component";
import {StatisticDetailComponent} from "~/app/statistic/statistic-detail.component";
import {FriendDetailComponent} from "~/app/friend/friend-detail.component";
import {StatisticService} from "~/app/statistic/statistic.service";
import {FriendService} from "~/app/friend/friend.service";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        // NativeScriptUISideDrawerModule,
        // NativeScriptUIListViewModule,
        // NativeScriptUICalendarModule,
        // NativeScriptUIChartModule,
        // NativeScriptUIDataFormModule,
        // NativeScriptUIAutoCompleteTextViewModule,
        // NativeScriptUIGaugeModule,
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
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
