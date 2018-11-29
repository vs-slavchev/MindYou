import { Component, OnInit } from "@angular/core";

import { Friend } from "./friend";
import { FriendService } from "./friend.service";


@Component({
    selector: "ns-statistics",
    moduleId: module.id,
    templateUrl: "./friends.component.html",
})
export class FriendsComponent implements OnInit {
    users: Friend[];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the FriendService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private friendService: FriendService) { }

    ngOnInit(): void {
        this.users = this.friendService.getItems();
    }
}