import { Component, OnInit } from "@angular/core";

import { Statistic } from "./statistic";
import { StatisticService } from "./statistic.service";
import * as chartModule from "nativescript-ui-chart";

import { Label } from "tns-core-modules/ui/label";

@Component({
    selector: "ns-statistics",
    moduleId: module.id,
    templateUrl: "./statistics.component.html",
    styleUrls: ["./statistic-style.css"],
    // template: `<ActionBar title="Application Title"></ActionBar>`

})
export class StatisticsComponent implements OnInit {
    items: Statistic[];
    public bottomBarShow = true;
    pieSource: {activity_name: string, hours: number}[] = [
        { activity_name: 'Cleaning', hours: 0.33 },
        { activity_name: 'Commuting', hours: 1.66 },
        { activity_name: 'Cooking', hours: 1.33 },
        { activity_name: 'Eating', hours: 1.25 },
        { activity_name: 'Gym', hours: 2.00 },
        { activity_name: 'Music', hours: 0.75 },
        { activity_name: 'Reading', hours: 1.00 },
        { activity_name: 'Studying', hours: 5.50 },
        { activity_name: 'Working', hours: 8.00 }
];


    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the FriendService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: StatisticService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }
}