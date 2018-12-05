import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IActivity} from "./activities";
import {Observable} from "rxjs/internal/Observable";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class HttpTestService{


    constructor(private http:HttpClient) { }
    private curl:string ='http://62.108.10.166:9000/activities/top/10';

    getActivities(): Observable<IActivity[]>{
        return this.http.get<IActivity[]>(this.curl, httpOptions);
    }
}
