import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { Router } from "@angular/router";
import {AppSettings} from "~/app/app-settings";


const firebase = require("nativescript-plugin-firebase");


@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];
    reponse: any;
    public bottomBarShow = true;

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the FriendService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService, private router: Router) {
        // bottomBarShow
        console.log("Items are loading...");
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
        // this.itemService.createAccount().subscribe(response => this.reponse = response)
    }

    onTapLogout(): void {
        firebase.logout();
        AppSettings.TOKEN = null;
        this.router.navigate(['/login']);
    }
}
