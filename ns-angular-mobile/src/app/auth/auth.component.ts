import {Component, OnInit, NgZone} from '@angular/core';
import {AppSettings} from "~/app/app-settings";
import {NavigationExtras, Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {Headers} from "~/app/shared/headers";
import {firestore, Message} from "nativescript-plugin-firebase";
import * as dialogs from "tns-core-modules/ui/dialogs";

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

    constructor(public _router: Router, private httpClient: HttpClient, private ngZone: NgZone) {
    }

    ngOnInit() {

    }

    onTapLogin(): void {

        // console.log("Facebook login");
        // console.log("Firebase " + firebase);
        console.log(`TOKEN: ${AppSettings.TOKEN}`);

        firebase.init({
            // Optionally pass in properties for database, authentication and cloud messaging,
            // see their respective docs.
            showNotificationsWhenInForeground: true,
            onMessageReceivedCallback: (message: Message) => {
                console.log(`Title: ${message.title}`);
                console.log(`Body: ${message.body}`);
                // if your server passed a custom property called 'running', then do this:
                console.log(`Value of 'running': ${message.data.running}`);

                dialogs.confirm({
                    title: `Title: ${message.title}`,
                    message: `Body: ${message.body}`,
                    okButtonText: "Open",
                    cancelButtonText: "Cancel",
                    // neutralButtonText: "Neutral text"
                }).then(result => {
                    // result argument is boolean
                    console.log("Dialog result: " + result);
                    if (!result) {
                        return;
                    }
                    let navigationExtras: NavigationExtras = {
                        queryParams: { page: "feeds" }
                    };
                    console.log('navigate to friends');
                    this.ngZone.run(() => this._router.navigate(['/home/friends'], navigationExtras));

                });
            }

        }).then(
            instance => {
                console.log("firebase.init done");
                instance.login({
                    type: instance.LoginType.FACEBOOK,
                    // Optional
                    facebookOptions: {
                        scope: ['public_profile', 'email']
                    },

                }).then((result) => {
                        JSON.stringify(result);
                        instance.getAuthToken({
                            // default false, not recommended to set to true by Firebase but exposed for {N} devs nonetheless :)
                            forceRefresh: false
                        }).then((token) => {
                                console.log("Auth token retrieved: " + token);
                                AppSettings.TOKEN = token;
                                this._router.navigate(['/home/items']);
                                let data = {
                                    "id": token,
                                    "name": result.name,
                                    "device_token": AppSettings.DEVICE_PUSH_TOKEN
                                };
                                console.log(data);
                                this.httpClient.post(this.url, data, Headers.getAuthTokenHeaders()).subscribe();
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
            },
            error => {
                console.log(`firebase.init error: ${error}`);
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
                                    "name": result.name,
                                    "device_token": AppSettings.DEVICE_PUSH_TOKEN
                                };
                                console.log(data);
                                this.httpClient.post(this.url, data, Headers.getAuthTokenHeaders()).subscribe();
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
        );

    }
}

