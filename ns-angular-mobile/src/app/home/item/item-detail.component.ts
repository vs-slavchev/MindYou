import { Component, OnInit, Input, SystemJsNgModuleLoader} from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item } from "./item";
import { ItemService } from "./item.service";
import {AppSettings} from "~/app/app-settings";
// import { Button } from "tns-core-modules/ui/button";


@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
    styleUrls: ["./item.css"]
})
export class ItemDetailComponent implements OnInit {
    @Input() item: Item;
    public timerEnabled: boolean;
    public seconds: number;
    public id;

    constructor(private itemService: ItemService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.timerEnabled = false;
        this.seconds = 0;
        this.getItem();
        this.id = setInterval(() => {
            if (this.timerEnabled) {
                this.seconds += 1;
            }
        }, 1000);
    }

    getItem(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.itemService.getItem(id)
            .subscribe((item) => {
                this.item = item;
                // this.item.time = 0;
            });
    }

    onTapStart(): void {
        console.log("Start timer");
        if (!this.seconds) {
            this.seconds = 0;
        }
        this.itemService.startActivity({
            "activity_id": this.item.activityBlueprintId, "user_id": AppSettings.TOKEN}).subscribe();
        this.timerEnabled = true;
    }

    onTapStop(): void {
        console.log("Stop timer");
        this.itemService.stopActivity(this.item.activityBlueprintId).subscribe();
        this.timerEnabled = false;
    }
}
