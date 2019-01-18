import {Component, NgZone} from "@angular/core";
const firebase = require("nativescript-plugin-firebase");

import { ios } from "application";
import {AppSettings} from "~/app/app-settings"
import {Message} from "nativescript-plugin-firebase";
import * as dialogs from "tns-core-modules/ui/dialogs";
import {NavigationExtras, Router} from "@angular/router";
declare var UITableViewCellSelectionStyle;


@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
})
export class AppComponent {
    public bottomBar: boolean;
    constructor (private _router: Router, private ngZone: NgZone) {
        this.bottomBar = AppSettings.showBottomBar;
        firebase.getCurrentPushToken().then((token: string) => {
            // may be null if not known yet
            console.log(`Current push token: ${token}`);
            AppSettings.DEVICE_PUSH_TOKEN = token;
        });
        firebase.init({
            // Optionally pass in properties for database, authentication and cloud messaging,
            // see their respective docs.
            showNotificationsWhenInForeground: true,
            onMessageReceivedCallback: (message: Message) => {
                console.log(`Title: ${message.title}`);
                console.log(`Body: ${message.body}`);
                // if your server passed a custom property called 'running', then do this:
                console.log(`Value of 'running': ${message.data.running}`);
                let title = "You received a notification!";
                let body = "Do you want to open the feed?";

                if (message) {
                    if (message.title) {
                        title = message.title;
                    }
                    if (message.body) {
                        body = message.body;
                    }
                }

                dialogs.confirm({
                    title: `${title}`,
                    message: `${body}`,
                    okButtonText: "Open",
                    cancelButtonText: "Cancel",
                    // neutralButtonText: "Neutral text"
                }).then(result => {
                    // result argument is boolean
                    console.log("Dialog result: " + result);
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

            },
            error => {
                console.log(`firebase.init error: ${error}`);
            },

        );
    }

    public counter: number = 16;

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }

    onItemLoading(args: any) {
        if (ios) {
            const cell = args.ios;
            cell.selectionStyle = UITableViewCellSelectionStyle.UITableViewCellSelectionStyleNone;
        }
    }

}
