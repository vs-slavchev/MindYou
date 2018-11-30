import { Component, OnInit } from "@angular/core";
import { alert } from "tns-core-modules/ui/dialogs";
import { SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view";

import { Friend } from "./friend";
import { FriendService } from "./friend.service";


@Component({
    selector: "ns-statistics",
    moduleId: module.id,
    templateUrl: "./friends.component.html",
})
export class FriendsComponent implements OnInit {
    users: Friend[];
    public tabSelectedIndex: number;
    public tabSelectedIndexResult: string;


    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the FriendService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private friendService: FriendService) {
        this.tabSelectedIndex = 0;
        this.tabSelectedIndexResult = "Profile Tab (tabSelectedIndex = 0 )";
    }

    ngOnInit(): void {
        this.users = this.friendService.getItems();
    }

    changeTab() {
        if (this.tabSelectedIndex === 0) {
            this.tabSelectedIndex = 1;
        } else if (this.tabSelectedIndex === 1) {
            this.tabSelectedIndex = 2;
        } else if (this.tabSelectedIndex === 2) {
            this.tabSelectedIndex = 0;
        }
    }

    // displaying the old and new TabView selectedIndex
    onSelectedIndexChanged(args: SelectedIndexChangedEventData) {
        if (args.oldIndex !== -1) {
            const newIndex = args.newIndex;
            if (newIndex === 0) {
                this.tabSelectedIndexResult = "Profile Tab (tabSelectedIndex = 0 )";
            } else if (newIndex === 1) {
                this.tabSelectedIndexResult = "Stats Tab (tabSelectedIndex = 1 )";
            } else if (newIndex === 2) {
                this.tabSelectedIndexResult = "Settings Tab (tabSelectedIndex = 2 )";
            }
            alert(`Selected index has changed ( Old index: ${args.oldIndex} New index: ${args.newIndex} )`)
                .then(() => {
                    console.log("Dialog closed!");
                });
        }
    }
}
