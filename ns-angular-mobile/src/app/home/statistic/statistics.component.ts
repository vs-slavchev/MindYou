import { Component, OnInit } from "@angular/core";

import { Statistic } from "./statistic";
import { StatisticService } from "./statistic.service";
import { AppSettings } from "~/app/app-settings";
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
    statistics: Statistic[];
    hasData: boolean = false;
    public bottomBarShow = true;

    pieSource: Statistic[];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the FriendService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private statisticService: StatisticService) { }
    
    ngOnInit(): void {
        this.getStatistics();
        // this.statistics = this.statisticService.getStatistics();
    }

    getStatistics() {
        this.hasData = false;
        this.statisticService.getStatistics().subscribe((statistics) => {
            console.log('statistics response');
            console.log(statistics);
            this.statistics = statistics;
            this.pieSource = statistics;
            this.hasData=true;
        });
    }
}