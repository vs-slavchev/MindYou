import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {RouterModule, Routes} from "@angular/router";
import {ContactComponent} from "./contact/contact.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {UserTimelineComponent} from "./user-timeline/user-timeline.component";
import {TestComponent} from "./test/test.component";
import{GetRequestsComponent} from "./get-requests/get-requests.component";
import {HttpTestComponent} from "./http-test/http-test.component";

const routes:Routes=[
     {path:'home', component: HomeComponent},
     {path:'statistics', component:StatisticsComponent},
     {path:'contact', component:ContactComponent},
     {path:'', component:HomeComponent},
     {path:'profile', component:UserProfileComponent},
     //{path:'timeline', component:UserTimelineComponent},
     {path:'test', component:TestComponent},
     {path:'get', component: GetRequestsComponent},
    {path:'testcp',component: HttpTestComponent}
    ];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      RouterModule.forRoot(routes)
  ],
    exports:[RouterModule],
})
export class AppRoutingModule { }
