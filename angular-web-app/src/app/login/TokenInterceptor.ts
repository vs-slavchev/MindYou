import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import * as firebase from 'firebase';
import {Observable} from '../../../node_modules/rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    tokenID:string;
    constructor(private http:HttpClient) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        firebase.auth().currentUser.getIdToken().then((data)=>{
            // console.log("the token interceptor: "+ data);
             this.tokenID=data;
          });
    request = request.clone({
      setHeaders: {
        Authorization: this.tokenID,
        'Content-Type': 'application/json',
        'Csrf-Token': "nocheck"
      }
    });
    return next.handle(request);
  }
}