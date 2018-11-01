import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Friend } from "./friend";
import { FriendService } from "./friend.service";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./friend-detail.component.html",
})
export class FriendDetailComponent implements OnInit {
    item: Friend;

    constructor(
        private itemService: FriendService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params["id"];
        this.item = this.itemService.getItem(id);
    }
}
