import { Injectable } from "@angular/core";
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {AppSettings} from "~/app/app-settings";

import { Item } from "./item";

import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ItemService {

    private activitiesUrl = `${AppSettings.API_URL}/activities`;  // URL to web api
    // private activitiesUrl = `${AppSettings.API_URL}/activity`;  // URL to web api
    private activitiesUrlTop = `${this.activitiesUrl}/top/10`;  // URL to web api
    private activitiesUrlStart = `${this.activitiesUrl}/start`;  // URL to web api


    constructor(private http: HttpClient) {
        console.log('init activities service');
    }

    addAuthToken() {
        let httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json',
                'Authorization': AppSettings.TOKEN})};
        return httpOptions
    }

    getActivities(): Observable<Item[]> {
        console.log(AppSettings.API_URL, this.addAuthToken());
        return this.http.get<Item[]>(this.activitiesUrlTop, )
            .pipe(
                tap(activities => this.log('fetched activities')),
                catchError(this.handleError('getActivities', []))
            );
    }

    createAccount(): Observable<any> {
        return this.http.post(`${AppSettings.API_URL}/users/create`, {"id": AppSettings.TOKEN},
            this.addAuthToken())
    }

    getItemNo404<Data>(activityBlueprintId: number): Observable<Item> {
        const url = `${this.activitiesUrl}/${activityBlueprintId}`;
        return this.http.get<Item[]>(url)
            .pipe(
                map(items => items[0]), // returns a {0|1} element array
                tap(h => {
                    const outcome = h ? `fetched` : `did not find`;
                    this.log(`${outcome} activity id=${activityBlueprintId}`);
                }),
                catchError(this.handleError<Item>(`getItem id=${activityBlueprintId}`))
            );
    }

    getItem(activityBlueprintId: number): Observable<Item> {
        const url = `${this.activitiesUrl}/${activityBlueprintId}`;
        return this.http.get<Item>(url).pipe(
            tap(_ => this.log(`fetched item id=${activityBlueprintId}`)),
            catchError(this.handleError<Item>(`getItem id=${activityBlueprintId}`))
        );
    }

    stopActivity(activityBlueprintId: number): Observable<Item> {
        const url = `${this.activitiesUrl}/${AppSettings.USER_ID}/stop`;
        return this.http.get<Item>(url).pipe(
            tap(_ => this.log(`stopped activity id=${activityBlueprintId}`)),
            catchError(this.handleError<Item>(`stopActivity id=${activityBlueprintId}`))
        );
    }

    startActivity (activity: any): Observable<any> {
        return this.http.post<any>(this.activitiesUrlStart, activity, httpOptions).pipe(
            tap((activity: any) => this.log(`started activity w/ id=${activity.activity_id}`)),
            catchError(this.handleError<any>('startActivity'))
        );
    }

    private log(message: string) {
        console.log(`ActivityService: ${message}`);
        // this.messageService.add(`ActivityService: ${message}`);
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

}
