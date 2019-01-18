import {Component, OnInit} from "@angular/core";
import {alert} from "tns-core-modules/ui/dialogs";
import {SelectedIndexChangedEventData} from "tns-core-modules/ui/tab-view";
import {SearchBar} from "tns-core-modules/ui/search-bar";

import {Friend} from "./friend";
import {FriendService} from "./friend.service";
import {Friendship} from "~/app/home/friend/friendship";
import {forEach} from "@angular/router/src/utils/collection";
import {AppSettings} from "~/app/app-settings";
import {Item} from "~/app/home/item/item";
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import {Suggestion} from "~/app/home/friend/Suggestion";
import { Button } from "tns-core-modules/ui/button";
//import { EventData } from "tns-core-modules/ui/page/page";
import { EventData } from "tns-core-modules/data/observable/observable";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { ItemService } from "../item/item.service";
import { Invitation } from "./invitation";

@Component({
    selector: "ns-statistics",
    moduleId: module.id,
    styleUrls: ['./friends.component.css'],
    templateUrl: "./friends.component.html",
})
export class FriendsComponent implements OnInit {
    users: Friend[];
    friends: Friend[];
    pending: Friendship[];
    received: Friendship[];
    suggestion: Suggestion;
    public tabSelectedIndex: number;
    public tabSelectedIndexResult: string;
    public searchPhrase: string;
    private sub: any;

    public items: Item[];
    receivedInvitations: Invitation[];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the FriendService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private friendService: FriendService, private itemService: ItemService, private route: ActivatedRoute, private router: Router) {
        this.tabSelectedIndex = 0;
        this.getActivities();
        // this.tabSelectedIndexResult = "Profile Tab (tabSelectedIndex = 0 )";  
    }

    ngOnInit(): void {
        this.sub = this.route.queryParams.subscribe(params => {
            // Defaults to 0 if no query param provided.
            console.log(params);
            if ("page" in params) {
                this.tabSelectedIndex = 1;
                this.changeTab();
            }
        });
        this.refreshUsers();
        this.getSuggestion();
        
        this.friendService.getReceivedInvitations().subscribe(invitations => {
            this.receivedInvitations = invitations;
        });

    }

    getSuggestion(): void {
        this.friendService.getSuggestion().subscribe((suggestion) => {
            // console.log("suggestion response");
            // console.log(suggestion);
            this.suggestion = new Suggestion(suggestion[0][0], suggestion[0][1]);
        });
    }

    acceptSuggestion(): void {
        console.log(`Accepted activity suggestion: ${this.suggestion.activityId} ${this.suggestion.name}`);
        //TODO: navigate
        // this.ngZone.run(() => this._router.navigate(['/home/friends'], navigationExtras));
        let navigationExtras: NavigationExtras = {
            queryParams: { page: this.suggestion.activityId }
        };
        this.router.navigate(['/home/items'], navigationExtras);
    }

    denySuggestion(): void {
        console.log(`Deny activity suggestion: ${this.suggestion.activityId} ${this.suggestion.name}`);
        this.suggestion = null;
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
                this.tabSelectedIndexResult = "Profile Tab (tabSelectedIndex = 0 )";
            } else if (newIndex === 1) {
                this.tabSelectedIndexResult = "Stats Tab (tabSelectedIndex = 1 )";
            } else if (newIndex === 2) {
                this.tabSelectedIndexResult = "Settings Tab (tabSelectedIndex = 2 )";
            }
            // alert(`Selected index has changed ( Old index: ${args.oldIndex} New index: ${args.newIndex} )`)
            //     .then(() => {
            //         console.log("Dialog closed!");
            //     });
        }
    }

    searchUser(name: String): void {
        this.friendService.searchUser(name).subscribe(users => this.users = this.initUsers(users));
        this.refreshUsers(false);
    }

    initUsers(users: Friend[]): Friend[] {
        let _users = [];
        users.forEach((user) => {
            _users.push(new Friend(user.id, user.name))
        });
        return _users
    }

    acceptFriendRequest(friendshipId: string): void {
        console.log(`accepting friendship ${friendshipId}`);
        this.friendService.acceptFriendResuest(friendshipId).subscribe();
        this.refreshUsers();
    }

    declineFriendRequest(friendshipId: string): void {
        console.log(`declining friendship ${friendshipId}`);
        this.friendService.declineFriendResuest(friendshipId).subscribe(
            () => {
                this.refreshUsers();
            }
        );
    }

    getUserLocally(id: string): Friend {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].id == id) {
                return this.users[i];
            }
        }
        return null;
    }

    addFriend(user: Friend): void {
        if (user.isFriend) {
            return;
        }
        if (user.isRequesting) {
            return;
        }
        if (user.requested) {
            return;
        }
        console.log("friend-detail " + user.id);
        console.log(`adding friend ${user.id} by ${AppSettings.TOKEN}`);
        this.friendService.addFriend(user.id).subscribe(() => {
            this.refreshUsers()
        });
    }

    refreshInvitations(): void{
        this.friendService.getReceivedInvitations().subscribe(invitations => {
            this.receivedInvitations = invitations;
        });
    }

    refreshUsers(doNotReloadUsers?: boolean): void {
        this.friendService.getPendingRequests().subscribe(users => {
            this.pending = users;
            this.annotateUsers()
        });
        this.friendService.getReceivedRequests().subscribe(users => {
            this.received = users;
            this.annotateUsers()
        });
        if (doNotReloadUsers) {
            this.friendService.getUsers().subscribe(users => {
                this.users = this.initUsers(users);
                this.annotateUsers()
            });
        }
        this.friendService.getFriends().subscribe(users => {
            this.friends = users;
            this.annotateUsers()
        });
    }

    annotateUsers(): void {

        if (this.friends) {
            this.friends.forEach((friend) => {
                let user = this.getUserLocally(friend.id);
                if (user) {
                    user.isFriend = true;
                }
            });
        }

        this.pending.forEach((pending) => {
            let user = this.getUserLocally(pending.inviteeUser.id);
            if (user) {
                user.requested = true;
            }
        });

    }

    /* INVITATION FOR THE ACTIVITY */

    //invit a friend for an activity
   // /activities/invitation/create/:activityId/:inviteeId
    sendInvitation(user: Friend,args: EventData): void {
       
       // this.invitation = new Invitation()
       
        user.invitationShared=true;
        console.log("change button color to red");

        const b = args.object as Button;     
        console.log("Friend button: " + args.object);
        b.set('text', 'Pending');
          
        dialogs.action({
            message: "Choose the activity to share",
            cancelButtonText: "Cancel",
            actions: this.items.map(function(el){return el.name})
        }).then(result => {
            console.log("Dialog result: " + result);
            
            for (var i in this.items)
            {
                if (this.items[i].name == result)
                {
                 console.log("Item name: " + this.items[i].name);
                  this.friendService.sendInvitation(this.items[i].activityBlueprintId,user.id).subscribe();
                }
            }
        });      
    }
 
    //accept the invitation
    ///activities/invitation/:invitationId/accept
    acceptInvitation(invitationId: number, args: EventData): void {

        const b = args.object as Button;  
        b.backgroundColor = 'red';
   
        this.friendService.acceptInvitation(invitationId).subscribe();
        for (var i in this.receivedInvitations){
            if(this.receivedInvitations[i].invitationId==invitationId){
                this.receivedInvitations.splice(this.receivedInvitations.indexOf[i],1);
            }
        }
    }

    returnArray():void{
       // console.log("invitations: " + this.receivedInvitations[0]);
        for(let i=0; i<this.receivedInvitations.length; i++)
    console.log("PrintinvitationsData:", this.receivedInvitations[i].inviterUser.name);
    }
        
    

    //decline the invitation   
    ///activities/invitation/:invitationId/decline
    declineInivitation(invitationId: number): void {
        this.friendService.declineInvitation(invitationId).subscribe();
        for (var i in this.receivedInvitations){
            if(this.receivedInvitations[i].invitationId==invitationId){
                this.receivedInvitations.splice(this.receivedInvitations.indexOf[i],1);
            }
        }

    }

    getActivities(): void {
        this.itemService.getActivities().subscribe(activities => {
            this.items = activities;
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
