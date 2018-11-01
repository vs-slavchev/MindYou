import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Statistic } from "./statistic";
import { StatisticService } from "./statistic.service";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./statistic-detail.component.html",
})
export class StatisticDetailComponent implements OnInit {
    item: Statistic;

    constructor(
        private itemService: StatisticService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params["id"];
        this.item = this.itemService.getItem(id);
    }
}
