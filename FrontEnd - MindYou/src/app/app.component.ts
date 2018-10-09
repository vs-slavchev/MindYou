import { Component, OnInit } from "@angular/core";
import * as Dialogs from "ui/dialogs";
import {LocalNotifications}  from "nativescript-local-notifications";
import * as Toast from "nativescript-toast";


@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {

    public input: any;

    public constructor() {
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

}
