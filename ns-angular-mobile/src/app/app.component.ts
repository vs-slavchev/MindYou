import {Component} from "@angular/core";
const firebase = require("nativescript-plugin-firebase");

import { ios } from "application";
import {AppSettings} from "~/app/app-settings"
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
        firebase.init({
            // Optionally pass in properties for database, authentication and cloud messaging,
            // see their respective docs.

        }).then(
            instance => {
                console.log("firebase.init done");

            },
            error => {
                console.log(`firebase.init error: ${error}`);
            },

        );
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
