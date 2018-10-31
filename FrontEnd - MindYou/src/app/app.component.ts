import { Component, OnInit } from "@angular/core";
import * as Dialogs from "ui/dialogs";
import {LocalNotifications}  from "nativescript-local-notifications";
import * as Toast from "nativescript-toast";

import {ItemEventData} from "tns-core-modules/ui/list-view";
// import {Page} from "tns-core-modules/ui/page";

import { ios } from "application";
declare var UITableViewCellSelectionStyle;


@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {

    activities: { name: string, imageSrc: string }[] = [
        { name: "", imageSrc: "" },
        { name: "", imageSrc: "" },
        { name: "", imageSrc: "" },
        { name: "", imageSrc: "" },
        { name: "", imageSrc: "" },
        { name: "", imageSrc: "" },
        { name: "", imageSrc: "" }
    ];

    onItemTap(args: ItemEventData): void {
    }

    public input: any;

    // public constructor(private page: Page) {
    public constructor() {
        // this.page.actionBarHidden = true;
        this.input = {
            "id": "123",
            "title": "",
            "body": ""
        };
    }

    public ngOnInit() {
        LocalNotifications.addOnMessageReceivedCallback(notificationData => {
                Dialogs.alert({
                    title: "Notification received",
                    message: "ID: " + notificationData.id +
                    "\nTitle: " + notificationData.title+
                    "\nBody: " + notificationData.body,
                    okButtonText: "Excellent!"
                });
            }
        );
    }

    public schedule() {
        LocalNotifications.requestPermission().then(granted => {
            if(granted) {
                LocalNotifications.schedule([{
                    id: this.input.id,
                    title: this.input.title,
                    body: this.input.body,
                    at: new Date(new Date().getTime() + (10 * 1000))
                }]).then(() => {
                    Toast.makeText("Notification scheduled!").show();
                }, error => {
                    console.dir(error);
                });
            }
        });
    }

    onItemLoading(args: any) {
        if (ios) {
            const cell = args.ios;
            cell.selectionStyle = UITableViewCellSelectionStyle.UITableViewCellSelectionStyleNone;
        }
    }

    tabSelected(args: number) {
        console.log(`tab selected: ${args}`);
    }
}
