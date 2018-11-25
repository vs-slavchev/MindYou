import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

const firebase = require("nativescript-plugin-firebase");


@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];
    public bottomBarShow = true;

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the FriendService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService) { 
        // bottomBarShow
    }

    ngOnInit(): void {
        this.getActivities();
        firebase.getAuthToken({
            // default false, not recommended to set to true by Firebase but exposed for {N} devs nonetheless :)
            forceRefresh: false
        }).then(
            function (token) {
                console.log("Auth token retrieved: " + token);
            },
            function (errorMessage) {
                console.log("Auth token retrieval error: " + errorMessage);
            }
        );
    }

    getActivities(): void {
        this.itemService.getActivities().subscribe(activities => this.items = activities);
    }

    onTapLogin(): void {
        console.log("Facebook login");
        firebase.login({
            type: firebase.LoginType.FACEBOOK,
            // Optional
            facebookOptions: {
                scope: ['public_profile', 'email']
            },

        }).then(
            function (result) {
                JSON.stringify(result);
                firebase.getAuthToken({
                    // default false, not recommended to set to true by Firebase but exposed for {N} devs nonetheless :)
                    forceRefresh: false
                }).then(
                    function (token) {
                        console.log("Auth token retrieved: " + token);
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

    onTapLogout(): void {
        firebase.logout();
    }
}
