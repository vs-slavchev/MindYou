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
    public bottomBarShow = true;
    // pieSource: {activity_name: string, hours: number}[] = [
    //     { activity_name: 'Cleaning', hours: 0.33 },
    //     { activity_name: 'Commuting', hours: 1.66 },
    //     { activity_name: 'Cooking', hours: 1.33 },
    //     { activity_name: 'Eating', hours: 1.25 },
    //     { activity_name: 'Gym', hours: 2.00 },
    //     { activity_name: 'Music', hours: 0.75 },
    //     { activity_name: 'Reading', hours: 1.00 },
    //     { activity_name: 'Studying', hours: 5.50 },
    //     { activity_name: 'Working', hours: 8.00 }
    // ];

    // pieSource: { activity_name: string, hours: number }[] = [{
    //     "activity_name": "cooking",
    //     "hours": 0
    // }, {
    //     "activity_name": "gym",
    //     "hours": 0.01
    // }, {
    //     "activity_name": "swimming",
    //     "hours": 0.03
    // }];

    pieSource: Statistic[];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the FriendService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private statisticService: StatisticService) { }

    ngOnInit(): void {
        this.statisticService.getStatistics().subscribe((statistics) => {
            this.statistics = statistics;
            // this.statistics.forEach(function (statistic: Statistic) {
            //     pieSource.append({"activity_name": statistic.a, "hours": 0})
            // });

            this.pieSource = statistics;
            console.log(statistics);
        });
        // this.statistics = this.statisticService.getStatistics();
    }
}