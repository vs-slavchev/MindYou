import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'ns-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    moduleId: module.id,
})
export class HomeComponent implements OnInit {

    constructor() {
        console.log("Home component is loading...");
    }

    ngOnInit() {

    }

    tabSelected(args: number) {
        console.log(`tab selected: ${args}`);
    }
}
