import { Component, OnInit } from "@angular/core";

import { Statistic } from "./statistic";
import { StatisticService } from "./statistic.service";
import { AppSettings } from "~/app/app-settings";
import * as chartModule from "nativescript-ui-chart";

import { Label } from "tns-core-modules/ui/label";
import { ListPicker } from "tns-core-modules/ui/list-picker";

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
    public periods: string[] = ["Week", "Month", "Quarter", "Year"];
    public picked: string;

    pieSource: Statistic[];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the FriendService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private statisticService: StatisticService) {}
    
    ngOnInit(): void {
        this.picked = "week";
        this.getStatistics();
    }

    getStatistics() {
        this.hasData = false;
        this.statistics = [];
        this.statisticService.getStatistics(this.picked.toLowerCase()).subscribe((statistics) => {
            console.log('statistics response');
            console.log(statistics);
            this.statistics = statistics;
            this.pieSource = statistics;
            this.hasData=true;
        });
    }

    public selectedIndexChanged(args) {
        try {
            let picker = <ListPicker>args.object;
            console.log(`selected index ${picker.selectedIndex} length ${this.periods.length}`);
            this.picked = this.periods[picker.selectedIndex];
            this.getStatistics();
        } catch (e) {
            console.log(e);
        }

    }
}