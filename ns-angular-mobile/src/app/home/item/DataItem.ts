import {Color} from "tns-core-modules/color";

export class DataItem {
    constructor(public id?: number,
                public activityBlueprintId?: number,
                public time?: number,
                public name?: string,
                public description?: string,
                public title?: string,
                public text?: string,
                public image?: string,
                public selected?: boolean,
                public type?: string,
                public category?: string,
                public size?: number,
                public color?: string,
                public suggested?: boolean
    ) {
    }
}