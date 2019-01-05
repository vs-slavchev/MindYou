import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Friend } from "./friend";
import { FriendService } from "./friend.service";
import {AppSettings} from "~/app/app-settings";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./user-detail.component.html",
})
export class FriendDetailComponent implements OnInit {
    item: Friend;

    constructor(
        private friendService: FriendService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id: string = this.route.snapshot.params["id"];
        this.friendService.getItem(id).subscribe(user => this.item = user);
    }

    addFriend(userId: string): void {
        console.log(`adding friend ${userId} by ${AppSettings.USER_ID}`);
        this.friendService.addFriend(userId).subscribe();
    }

}
