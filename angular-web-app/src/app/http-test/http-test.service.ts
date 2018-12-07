import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IActivity} from "./activities";
import {Observable} from "rxjs/internal/Observable";
import {IStatistics} from "./statistics";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class HttpTestService{


    constructor(private http:HttpClient, private http2:HttpClient) { }
    private curl:string ='http://62.108.10.166:9000/activities/top/10';
    private url:string ='http://62.108.10.166:9000/statistics/hours-per-activity/6/recent';

    getActivities(): Observable<IActivity[]>{
        return this.http.get<IActivity[]>(this.curl, httpOptions);
    }

    getStats():Observable<IStatistics[]>{
        return this.http2.get<IStatistics[]>(this.url,httpOptions);
    }
}
