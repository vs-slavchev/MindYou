import {Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import {AppSettings} from "~/app/app-settings";
import { Router } from "@angular/router";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
const firebase = require("nativescript-plugin-firebase");

@Component({
    selector: 'ns-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    moduleId: module.id,
})
export class HomeComponent implements AfterViewInit, OnInit {

    userName:any;
    userEmail:any;
    userProfilePicture:any;

    constructor(private router: Router, private _changeDetectionRef: ChangeDetectorRef) {
        console.log("Home component is loading...");
       
        // getting the Facebook profile picture, name and email of the current user for the drawer
        firebase.getCurrentUser()
      .then((user) =>{
        this.userName = user.name;
        this.userEmail = user.email;
        this.userProfilePicture = user.profileImageURL;
      })
      .catch(error => console.log("Trouble in paradise: " + error)); 
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    public onCloseDrawerTap() {
        console.log("entered drawer");
        this.drawer.closeDrawer();
    }

    ngOnInit() { }

    tabSelected(args: number) {
        console.log(`tab selected: ${args}`);
    }

    // Method to log out 
    onTapLogout(): void {
        console.log("Entered to logout");
        firebase.logout();
        AppSettings.TOKEN = null;
        this.router.navigate(['/login']);
    }
}
