import { Component, OnInit } from "@angular/core";

import { Statistic } from "./statistic";
import { StatisticService } from "./statistic.service";
import * as chartModule from "nativescript-ui-chart";

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
    pieSource: {Brand: string, Amount: number}[] = [
        { Brand: 'Audi', Amount: 10 },
        { Brand: 'Mercedes', Amount: 76 },
        { Brand: 'Fiat', Amount: 60 },
        { Brand: 'BMW', Amount: 24 },
        { Brand: 'Crysler', Amount: 40 }
];


    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the FriendService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: StatisticService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }
}