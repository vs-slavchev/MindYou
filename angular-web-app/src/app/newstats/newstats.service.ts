import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IStatistics} from './statistics.js';
import {Observable} from "rxjs/internal/Observable";
import * as firebase from 'firebase';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NewstatsService {
  tokenID:string;
  fURL:string='http://145.93.89.45:9000/statistics/four-weeks-activity/10';
  fullURL:string
  UrlTop:string=' http://145.93.89.45:9000/statistics/top-six-activities';;
  url:string ='http://145.93.89.45:9000/statistics/hours-per-activity/week';


  constructor(private http:HttpClient) { 
    this.fullURL=this.url.concat('week');
    firebase.auth().currentUser.getIdToken().then((data)=>{
      //console.log("token id: "+ data);
      this.tokenID=data;
      // this.fURL = this.url.concat(this.tokenID);
      // this.fullURL= this.fURL.concat('/recent');


  
     // console.log(this.fullURL);

     
   });
  }
  
  getStatistics(): Observable<IStatistics[]>{
    console.log(this.url);
    return this.http.get<IStatistics[]>(this.url, httpOptions);
  }

  getFourWeeks(): Observable<IStatistics[]>{
    console.log(this.fURL);
    return this.http.get<IStatistics[]>(this.fURL, httpOptions);
  }
  
  getTop(): Observable<IStatistics[]>{
    console.log(this.fURL);
    return this.http.get<IStatistics[]>(this.UrlTop, httpOptions);
  }

}
