import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {RouterModule, Routes} from "@angular/router";
import {ContactComponent} from "./contact/contact.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {HttpTestComponent} from "./http-test/http-test.component";
import { LoginComponent } from './login/login.component';
import { NewstatsComponent } from './newstats/newstats.component';
import { MonthlyStatsComponent } from './monthly-stats/monthly-stats.component';

const routes:Routes=[
     {path:'home', component: HomeComponent},
     {path:'', component:HomeComponent},
     {path:'statistics', component:StatisticsComponent},
     {path:'contact', component:ContactComponent},
     {path:'profile', component:UserProfileComponent},
     //{path:'timeline', component:UserTimelineComponent},
    {path:'testcp',component: HttpTestComponent},
    {path:'login', component:LoginComponent},
   {path:'newstats', component:NewstatsComponent},
   {path:'mstats', component:MonthlyStatsComponent},
   
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
