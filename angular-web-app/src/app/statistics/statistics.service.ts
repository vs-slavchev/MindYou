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
export class StatisticsService {
  tokenID:string;
  fURL:string;
  fullURL:string
  url:string ='http://62.108.10.166:9000/statistics/hours-per-activity/';

  constructor(private http:HttpClient) { 
    firebase.auth().currentUser.getIdToken().then((data)=>{
     // console.log(data);
      this.tokenID=data;
      this.fURL = this.url.concat(this.tokenID);
      this.fullURL= this.fURL.concat('/recent');
     // console.log(this.fullURL);
   });
  }

 
  
  //private curl:string ='http://62.108.10.166:9000/statistics/hours-per-activity/YC3FEaY113ft4sLtiuqVtrhv8G43/recent';
  
 
  
  getStatistics(): Observable<IStatistics[]>{
    //console.log(this.fullURL);
    return this.http.get<IStatistics[]>(this.fullURL, httpOptions);
    
  }
  
}
