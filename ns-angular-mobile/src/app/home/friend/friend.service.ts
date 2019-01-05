import { Injectable } from "@angular/core";
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

import { Friend } from "./friend";

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppSettings} from "~/app/app-settings";

import {Headers} from "~/app/shared/headers";
import {Friendship} from "~/app/home/friend/friendship";

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class FriendService {

    private url = `${AppSettings.API_URL}/users`;
    private urlFriends = `${AppSettings.API_URL}/friendships`;

    // private items = new Array<Friend>(
    //     { id: 1, name: "user 1", role: "Goalkeeper" },
    //     { id: 3, name: "user 2", role: "Defender" },
    //     { id: 4, name: "user 3", role: "Midfielder" },
    //     { id: 5, name: "user 4", role: "Midfielder" },
    //     { id: 6, name: "user 5", role: "Midfielder" },
    // );

    constructor(private http: HttpClient) {}

    getUsers(): Observable<Friend[]> {
        return this.http.get<Friend[]>(this.url)
            .pipe(
                tap(users => this.log('fetched friends')),
                catchError(this.handleError('getFriends', []))
            );
    }

    getFriends(): Observable<Friend[]> {
        return this.http.get<Friend[]>(this.urlFriends, Headers.getAuthTokenHeaders())
            .pipe(
                tap(users => this.log('fetched friends')),
                catchError(this.handleError('getFriends', []))
            );
    }

    getPendingRequests(): Observable<Friendship[]> {
        // /friendships/123/sentRequests
        return this.http.get<Friendship[]>(`${this.urlFriends}/sentRequests`, Headers.getAuthTokenHeaders())
            .pipe(
                tap(users => this.log('fetched friends')),
                catchError(this.handleError('getFriends', []))
            );
    }

    getReceivedRequests(): Observable<Friendship[]> {
        // /friendships/123/receivedRequests
        return this.http.get<Friendship[]>(`${this.urlFriends}/receivedRequests`, Headers.getAuthTokenHeaders())
            .pipe(
                tap(users => this.log('fetched friends')),
                catchError(this.handleError('getFriends', []))
            );
    }

    searchUser(name: String): Observable<Friend[]> {
        return this.http.get<Friend[]>(`${this.url}/search?name=${name}`)
            .pipe(
                tap(users => this.log('fetched activities')),
                catchError(this.handleError('getActivities', []))
            );
    }

    getItem(id: string): Observable<Friend> {
        const url = `${this.url}/${id}`;
        console.log(url);
        return this.http.get<Friend>(url).pipe(
            tap(_ => this.log(`fetched friend id=${id}`)),
            catchError(this.handleError<Friend>(`getFriend id=${id}`))
        );
    }

    addFriend(userId: string): Observable<any> {
        console.log(userId);
        return this.http.post<any>(`${this.urlFriends}/invite/${userId}`, {}, Headers.getAuthTokenHeaders()).pipe(
            tap((friend: any) => this.log(`friend w/ id=${userId}`)),
            catchError(this.handleError<any>('addFriend'))
        );
    }

    acceptFriendResuest(friendshipId: string): Observable<any> {
        // /friendships/123/accept/321
        return this.http.put<any>(`${this.urlFriends}/${friendshipId}/accept`, {}, Headers.getAuthTokenHeaders()).pipe(
            tap((friend: any) => this.log(`friend w/ id=${friendshipId}`)),
            catchError(this.handleError<any>('addFriend'))
        );
    }

    declineFriendResuest(friendshipId: string): Observable<any> {
        // /friendships/123/decline/321
        return this.http.delete<any>(`${this.urlFriends}/${friendshipId}/decline`, Headers.getAuthTokenHeaders()).pipe(
            tap((friend: any) => this.log(`friend w/ id=${friendshipId}`)),
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
