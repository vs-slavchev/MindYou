import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {RouterModule, Routes} from "@angular/router";
import {ContactComponent} from "./contact/contact.component";

const routes:Routes=[
    {path:'home', component: HomeComponent},
    {path:'statistics', component:StatisticsComponent},
    {path:'contact', component:ContactComponent},
    {path:'', component:HomeComponent}
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
