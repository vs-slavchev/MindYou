import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserTimelineComponent } from './user-timeline/user-timeline.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { GetRequestsComponent } from './get-requests/get-requests.component';
import { HttpTestComponent } from './http-test/http-test.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatisticsComponent,
    ContactComponent,
    UserProfileComponent,
    UserTimelineComponent,
    TestComponent,
    GetRequestsComponent,
    HttpTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
