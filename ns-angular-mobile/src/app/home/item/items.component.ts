import { Component, OnInit, Input,ViewChild, ElementRef } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { Router } from "@angular/router";
import {AppSettings} from "~/app/app-settings";
import { Page, Color } from "tns-core-modules/ui/page/page";
import * as dialogs from "tns-core-modules/ui/dialogs";
import * as utils from "utils/utils";
import { ListViewEventData, RadListView } from "nativescript-ui-listview";
const firebase = require("nativescript-plugin-firebase");

import { ActivatedRoute } from "@angular/router";

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
    isVisible: any;

    @Input() item: Item;
    public timerEnabled: boolean;
    public seconds: number;
    public id;

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the FriendService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService, private router: Router, private route: ActivatedRoute) {
        // bottomBarShow
        console.log("Items are loading...");
        console.log("Custom activity"+ this.customActivity);
       
        //setting the visibility of the timer to false
        this.isVisible = false;       
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

        this.timerEnabled = false;
        this.seconds = 0;
        this.getItem();
        this.id = setInterval(() => {
            if (this.timerEnabled) {
                this.seconds += 1;
            }
        }, 1000);                    
    }

    getItem(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.itemService.getItem(id)
            .subscribe((item) => {
                this.item = item;
                // this.item.time = 0;
            });
    }

    getActivities(): void {
        this.itemService.getActivities().subscribe(activities => this.items = activities);
        // this.itemService.createAccount().subscribe(response => this.reponse = response)
    }

    onTapLogout(): void {
        firebase.logout();
        console.log("Logout done");
        AppSettings.TOKEN = null;
        this.router.navigate(['/login']);
    }

    // Method that creates a custom activity
    onTapCreateActivity(): void{
        if (this.customActivity != "") {
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
            // Making the POST request to refresh the list
            this.getActivities();
            // Removing the keyboard after pressing the "Got it!" button in the alert
            this.dismissSoftKyeboard();
         }
    else{
             // Displaying the alert that the activity is empty
        dialogs.alert({
            title: "Alert",
            message: "Please provide the name for your custom activity!",
            okButtonText: "Got it!"
        }).then(() => {
            console.log("Dialog closed!");
        });
     }
        // Clearing the custom activity text field
        this.customActivity="";
        
    }

    // Method to hide the keyboard
    dismissSoftKyeboard() {
        utils.ad.dismissSoftInput();
    }

    // Method for selected item -> change color to orange when selected and start the activity
    public onItemSelected(args: ListViewEventData) {
      console.log("Item is selected");

      // Changing the color of the selected item to orange.
      args.view.backgroundColor = new Color("#FF7816");  

      console.log("Start timer");
      if (!this.seconds) {
          this.seconds = 0;
      }
    //   this.itemService.startActivity({
    //       "activity_id": this.item.activityBlueprintId, "user_id": AppSettings.TOKEN}).subscribe();
       this.timerEnabled = true;
       this.isVisible = true;
    }

    // Method for deselecting the item - > change color to white when deselect and stop the activity
    public onItemDeselected(args: ListViewEventData) {
        console.log("Item is deselected");

        // Changing the color of the deselected item to white.
        args.view.backgroundColor = new Color("#ffffff");

        console.log("Stop timer");
        // this.itemService.stopActivity(this.item.activityBlueprintId).subscribe();
        this.timerEnabled = false;
        this.isVisible = false;
    } 
}

