import {Component} from "@angular/core";
const firebase = require("nativescript-plugin-firebase");

import { ios } from "application";
import {AppSettings} from "~/app/app-settings"
import {Message} from "nativescript-plugin-firebase";
import * as dialogs from "tns-core-modules/ui/dialogs";
declare var UITableViewCellSelectionStyle;


@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
})
export class AppComponent {
    public bottomBar: boolean;
    constructor () {
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

                dialogs.confirm({
                    title: `Title: ${message.title}`,
                    message: `Body: ${message.body}`,
                    okButtonText: "Open",
                    cancelButtonText: "Cancel",
                    // neutralButtonText: "Neutral text"
                }).then(result => {
                    // result argument is boolean
                    console.log("Dialog result: " + result);
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
