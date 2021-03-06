import { Injectable } from "@angular/core";
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {AppSettings} from "~/app/app-settings";

import {HttpClient} from '@angular/common/http';
import {Statistic} from "~/app/home/statistic/statistic";
import {Headers} from "~/app/shared/headers";


@Injectable()
export class StatisticService {

    private url = `${AppSettings.API_URL}/statistics/hours-per-activity/`;  // URL to web api


    constructor(private http: HttpClient) {
        console.log('init activities service');
    }

    getStatistics(period: string): Observable<Statistic[]> {
        return this.http.get<Statistic[]>(`${this.url}${period}`, Headers.getAuthTokenHeaders())
            .pipe(
                tap(statistics => this.log('fetched statistics')),
                catchError(this.handleError('getActivities', []))
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
