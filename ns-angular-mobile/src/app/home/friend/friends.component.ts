import { Component, OnInit } from "@angular/core";
import { alert } from "tns-core-modules/ui/dialogs";
import { SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view";
import { SearchBar } from "tns-core-modules/ui/search-bar";

import { Friend } from "./friend";
import { FriendService } from "./friend.service";
import {Friendship} from "~/app/home/friend/friendship";


@Component({
    selector: "ns-statistics",
    moduleId: module.id,
    templateUrl: "./friends.component.html",
})
export class FriendsComponent implements OnInit {
    users: Friend[];
    friends: Friend[];
    pending: Friendship[];
    received: Friendship[];
    public tabSelectedIndex: number;
    public tabSelectedIndexResult: string;
    public searchPhrase: string;


    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the FriendService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private friendService: FriendService) {
        this.tabSelectedIndex = 0;
        // this.tabSelectedIndexResult = "Profile Tab (tabSelectedIndex = 0 )";
    }

    ngOnInit(): void {
        this.friendService.getPendingRequests().subscribe(users => this.pending = users);
        this.friendService.getReceivedRequests().subscribe(users => this.received = users);
        this.friendService.getUsers().subscribe(users => this.users = users);
        this.friendService.getFriends().subscribe(users => this.friends = users);
    }

    public onSubmit(args) {
        let searchBar = <SearchBar>args.object;
        // alert("You are searching for " + searchBar.text);
        this.searchUser(searchBar.text);
        console.log("SearchBar text! Search: " + searchBar.text);
    }

    public onTextChanged(args) {
        let searchBar = <SearchBar>args.object;
        console.log("SearchBar text changed! New value: " + searchBar.text);
        this.searchUser(searchBar.text);
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
                // this.tabSelectedIndexResult = "Profile Tab (tabSelectedIndex = 0 )";
            } else if (newIndex === 1) {
                // this.tabSelectedIndexResult = "Stats Tab (tabSelectedIndex = 1 )";
            } else if (newIndex === 2) {
                // this.tabSelectedIndexResult = "Settings Tab (tabSelectedIndex = 2 )";
            }
            // alert(`Selected index has changed ( Old index: ${args.oldIndex} New index: ${args.newIndex} )`)
            //     .then(() => {
            //         console.log("Dialog closed!");
            //     });
        }
    }

    searchUser(name: String): void {
        this.friendService.searchUser(name).subscribe(users => this.users = users);
    }

    acceptFriendRequest(friendshipId: string): void {
        console.log(`accepting friendship ${friendshipId}`);
        this.friendService.acceptFriendResuest(friendshipId).subscribe();
        this.friendService.getReceivedRequests().subscribe(users => this.received = users);
        this.friendService.getFriends().subscribe(users => this.friends = users);
    }
}
