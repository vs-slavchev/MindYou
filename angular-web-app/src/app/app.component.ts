import { Component } from '@angular/core';
import {StatisticsService} from "./statistics/statistics.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-web-app';
  readonly ROOT_URL='';
  posts: any;
  constructor( private http: HttpClient){}

  getPosts(){
      this.posts=this.http.get(this.ROOT_URL+'/posts')
  }

}
