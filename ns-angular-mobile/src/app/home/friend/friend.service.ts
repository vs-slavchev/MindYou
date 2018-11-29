import { Injectable } from "@angular/core";
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

import { Friend } from "./friend";

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppSettings} from "~/app/app-settings";

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class FriendService {

    private url = `${AppSettings.API_URL}/user`;

    private items = new Array<Friend>(
        { id: 1, name: "user 1", role: "Goalkeeper" },
        { id: 3, name: "user 2", role: "Defender" },
        { id: 4, name: "user 3", role: "Midfielder" },
        { id: 5, name: "user 4", role: "Midfielder" },
        { id: 6, name: "user 5", role: "Midfielder" },
    );

    constructor(private http: HttpClient) {}

    getItems(): Friend[] {
        return this.items;
    }

    getItem(id: number): Friend {
        return this.items.filter(item => item.id === id)[0];
    }

    addFriend(friend: any): Observable<any> {
        return this.http.post<any>(`${this.url}/friendship/create`, friend, httpOptions).pipe(
            tap((friend: any) => this.log(`friend w/ id=${friend.friend_id}`)),
            catchError(this.handleError<any>('addFriend'))
        );
    }

    private log(message: string) {
        console.log(`ActivityService: ${message}`);
        // this.messageService.add(`ActivityService: ${message}`);
    }

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
