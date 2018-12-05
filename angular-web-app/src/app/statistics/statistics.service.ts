import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IStatistics} from './statistics.js';
import {Observable} from "rxjs/internal/Observable";
//import * as firebase from 'firebase';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  //tokenID:string;
  constructor(private http:HttpClient) { 
  //   firebase.auth().currentUser.getIdToken().then((data)=>{
  //     console.log(data);
  //     this.tokenID=data;
  //  });
  }
   
  
  private curl:string ='http:/62.108.10.166:9000/statistics/hours-per-activity/YC3FEaY113ft4sLtiuqVtrhv8G43/recent';
  
 
  
  getStatistics(): Observable<IStatistics[]>{
    
    return this.http.get<IStatistics[]>(this.curl, httpOptions);
    
  }
  
}
