import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { Router } from "@angular/router";
import {AppSettings} from "~/app/app-settings";
import { Page } from "tns-core-modules/ui/page/page";

import * as dialogs from "tns-core-modules/ui/dialogs";

import * as utils from "utils/utils";


const firebase = require("nativescript-plugin-firebase");


@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
    styleUrls: ["./item.css"]
})
export class ItemsComponent implements OnInit {
    items: Item[];
    reponse: any;
    public bottomBarShow = true;
    customActivity="";
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the FriendService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService, private router: Router) {
        // bottomBarShow
        console.log("Items are loading...");
        console.log("Custom activity"+ this.customActivity);
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

    // Method that creates a custom activity
    onTapCreateActivity(): void{
        // Make a POST request to create a custom activity 
        this.itemService.createCustomActivity(this.customActivity).subscribe();
        console.log("This is the custom activity " + this.customActivity);

        // Displaying the alert that the activity was created
        dialogs.alert({
            title: "Alert",
            message: "Your custom activity has been added successfully!",
            okButtonText: "Got it!"
        }).then(() => {
            console.log("Dialog closed!");
        });

        // Clearing the custom activity text field
        this.customActivity="";
        // Making the POST request to refresh the list
        this.getActivities();
        // Removing the keyboard after pressing the "Got it!" button in the alert
        this.dismissSoftKyeboard();
    }

    dismissSoftKyeboard() {
        utils.ad.dismissSoftInput();
    }
  
}

