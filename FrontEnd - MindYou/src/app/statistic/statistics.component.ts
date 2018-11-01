import { Component, OnInit } from "@angular/core";

import { Statistic } from "./statistic";
import { StatisticService } from "./statistic.service";

@Component({
    selector: "ns-statistics",
    moduleId: module.id,
    templateUrl: "./statistics.component.html",
})
export class StatisticsComponent implements OnInit {
    items: Statistic[];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the FriendService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: StatisticService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }
}