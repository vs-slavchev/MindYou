import { Component, OnInit } from "@angular/core";
import { Observable, Subject } from 'rxjs';

import {
    debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
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
    hasData: boolean = false;
    public bottomBarShow = true;
    public periods: string[] = ["Week", "Month", "Quarter", "Year"];
    public picked: string;
    private pickedTerms = new Subject<string>();

    pieSource: Statistic[];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the FriendService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private statisticService: StatisticService) {}
    
    ngOnInit(): void {
        this.picked = "week";
        // this.getStatistics();
        // this.statistics = this.pickedTerms.pipe(
        //     // wait 300ms after each keystroke before considering the term
        //     debounceTime(300),
        //
        //     // ignore new term if same as previous term
        //     distinctUntilChanged(),
        //
        //     // switch to new search observable each time the term changes
        //     switchMap((term: string) => this.statisticService.getStatistics(term)),
        // );
    }

    getStatistics() {
        this.hasData = false;
        this.pieSource = [];
        this.statisticService.getStatistics(this.picked.toLowerCase()).subscribe((statistics) => {
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