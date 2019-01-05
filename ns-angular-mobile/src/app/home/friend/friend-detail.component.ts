import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Friend } from "./friend";
import { FriendService } from "./friend.service";
import {AppSettings} from "~/app/app-settings";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./friend-detail.component.html",
})
export class FriendDetailComponent implements OnInit {
    item: Friend;

    constructor(
        private friendService: FriendService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id: string = this.route.snapshot.params["id"];
        this.friendService.getItem(id).subscribe(friend => this.item = friend);
        // FIXME: server response 500 to get user
        // this.item = {"id":"JhuhxY6OwKd0Cw3ujvYuuejVzMG3","name":"Mirela Goranova"};
    }

    acceptFriend(userId: number): void {
        console.log("friend-detail");
        // TODO: implement me
        // console.log(`adding friend ${userId} by ${AppSettings.USER_ID}`);
        // this.friendService.addFriend({"inviter_id": AppSettings.USER_ID,"invitee_id":userId}).subscribe();
    }
}
