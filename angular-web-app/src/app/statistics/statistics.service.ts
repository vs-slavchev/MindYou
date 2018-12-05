import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IStatistics} from './statistics.js';
import {Observable} from "rxjs/internal/Observable";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http:HttpClient) { }
  private curl:string ='http://145.93.178.3:9000//statistics/hours-per-activity/YC3FEaY113ft4sLtiuqVtrhv8G43/recent';

  getStatistics(): Observable<IStatistics[]>{
    return this.http.get<IStatistics[]>(this.curl, httpOptions);
  }
}
