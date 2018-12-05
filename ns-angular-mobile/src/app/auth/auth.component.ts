import {Component, OnInit} from '@angular/core';
import {AppSettings} from "~/app/app-settings";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const firebase = require("nativescript-plugin-firebase");
const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Component({
    selector: 'ns-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css'],
    moduleId: module.id,
})
export class AuthComponent implements OnInit {

    private url = `${AppSettings.API_URL}/users/create`;

    constructor(public _router: Router, private httpClient: HttpClient) {
    }

    ngOnInit() {
        // firebase.init({
        //     onAuthStateChanged: function(data) { // optional but useful to immediately re-logon the user when he re-visits your app
        //         console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
        //         if (data.loggedIn) {
        //             console.log("user's email address: " + (data.user.email ? data.user.email : "N/A"));
        //             _router.
        //         }
        //     }
        // });
    }

    onTapLogin(): void {
    //     var listener = {
    //         onAuthStateChanged((data) => {
    //             console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
    //             if (data.loggedIn) {
    //                 console.log("User info", data.user);
    //                 firebase.removeAuthStateListener(listener);
    //                 this._ro
                // }
            // },
            // thisArg: this
        // });
        
        console.log("Facebook login");
        console.log("Firebase " + firebase);
         
        // firebase.addAuthStateListener(listener);
        firebase.login({
           type: firebase.LoginType.FACEBOOK,
            // Optional
            facebookOptions: {
                scope: ['public_profile', 'email']
            },

        }).then((result) => {
                JSON.stringify(result);
                firebase.getAuthToken({
                    // default false, not recommended to set to true by Firebase but exposed for {N} devs nonetheless :)
                    forceRefresh: false
                }).then((token) => {
                        console.log("Auth token retrieved: " + token);
                        AppSettings.TOKEN = token;
                        this._router.navigate(['/home/items']);
                        let data = {
                            "id": token,
                            "name": result.name
                        };
                        console.log(data);
                        this.httpClient.post(this.url, data, httpOptions).subscribe();
                    },
                    function (errorMessage) {
                        console.log("Auth token retrieval error: " + errorMessage);
                    }
                );
            },
            function (errorMessage) {
                console.log(errorMessage);
            }
        );
    }
}

