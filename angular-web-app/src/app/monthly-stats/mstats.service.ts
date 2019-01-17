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
export class MstatsService {

  tokenID:string;
  fURL:string;
  fullURL:string
  UrlM:string;
  url:string ='http://62.108.10.166:9000/statistics/hours-per-activity/';
  Murl:string='http://62.108.10.166:9000/statistics/hours-per-day/2/month';
  urlI:string ='http://62.108.10.166:9000/statistics/hours-per-activity/month';
  
  constructor(private http:HttpClient) { 
    this.fullURL=' http://145.93.88.222:9000/statistics/top-six-activities';
   //this.fullURL=' http://145.93.90.22:9000/statistics/top-six-activities';
   
    firebase.auth().currentUser.getIdToken().then((data)=>{
      //console.log("token id: "+ data);
      this.tokenID=data;
      // this.fURL = this.url.concat(this.tokenID);
      // this.fullURL= this.fURL.concat('/recent');

       this.UrlM=this.url.concat('month');
      
     // console.log(this.fullURL);



     
   });
  }

  getMonthlyStats():Observable<IStatistics[]>{
    console.log(this.urlI);
    return this.http.get<IStatistics[]>(this.urlI, httpOptions);
  }
 
  getSpecificStats() :Observable<IStatistics[]>{
   console.log(this.Murl);
    return this.http.get<IStatistics[]>(this.Murl, httpOptions);
  }

  getTopActivities(): Observable<IStatistics[]>{
    console.log(this.fullURL);
    return this.http.get<IStatistics[]>(this.fullURL, httpOptions);
  }

  getOlderStats():Observable<IStatistics[]>{
    return this.http.get<IStatistics[]>(this.UrlM, httpOptions);
  }
}
