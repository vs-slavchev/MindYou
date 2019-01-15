import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StatisticsComponent} from './statistics/statistics.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestComponent } from './http-test/http-test.component';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {TokenInterceptor} from './login/TokenInterceptor';
import { NewstatsComponent } from './newstats/newstats.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatisticsComponent,
    ContactComponent,
    UserProfileComponent,
    HttpTestComponent,
    LoginComponent,
    NewstatsComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
