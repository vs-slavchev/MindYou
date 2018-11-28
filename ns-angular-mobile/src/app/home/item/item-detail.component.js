"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var item_service_1 = require("./item.service");
var app_settings_1 = require("~/app/app-settings");
var ItemDetailComponent = /** @class */ (function () {
    function ItemDetailComponent(itemService, route) {
        this.itemService = itemService;
        this.route = route;
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timerEnabled = false;
        this.getItem();
        this.id = setInterval(function () {
            if (_this.timerEnabled) {
                _this.seconds += 1;
            }
        }, 1000);
    };
    ItemDetailComponent.prototype.getItem = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.itemService.getItem(id)
            .subscribe(function (item) {
            _this.item = item;
            // this.item.time = 0;
        });
    };
    ItemDetailComponent.prototype.onTapStart = function () {
        console.log("Start timer");
        if (!this.seconds) {
            this.seconds = 0;
        }
        this.itemService.startActivity({
            "activity_id": this.item.activityBlueprintId, "user_id": app_settings_1.AppSettings.TOKEN
        }).subscribe();
        this.timerEnabled = true;
    };
    ItemDetailComponent.prototype.onTapStop = function () {
        console.log("Stop timer");
        this.itemService.stopActivity(this.item.activityBlueprintId).subscribe();
        this.timerEnabled = false;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ItemDetailComponent.prototype, "item", void 0);
    ItemDetailComponent = __decorate([
        core_1.Component({
            selector: "ns-details",
            moduleId: module.id,
            templateUrl: "./item-detail.component.html",
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService, router_1.ActivatedRoute])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());
exports.ItemDetailComponent = ItemDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDBDQUFpRDtBQUdqRCwrQ0FBNkM7QUFDN0MsbURBQStDO0FBUS9DO0lBTUksNkJBQW9CLFdBQXdCLEVBQVUsS0FBcUI7UUFBdkQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtJQUFJLENBQUM7SUFFaEYsc0NBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLEVBQUUsR0FBRyxXQUFXLENBQUM7WUFDbEIsSUFBSSxLQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNuQixLQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQzthQUNyQjtRQUFBLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRUQscUNBQU8sR0FBUDtRQUFBLGlCQU9DO1FBTkcsSUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUN2QixTQUFTLENBQUMsVUFBQyxJQUFJO1lBQ1osS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsc0JBQXNCO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELHdDQUFVLEdBQVY7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7U0FDcEI7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztZQUMzQixhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxTQUFTLEVBQUUsMEJBQVcsQ0FBQyxLQUFLO1NBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzdGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzdCLENBQUM7SUFFRCx1Q0FBUyxHQUFUO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDekUsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQXZDUTtRQUFSLFlBQUssRUFBRTs7cURBQVk7SUFEWCxtQkFBbUI7UUFML0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsOEJBQThCO1NBQzlDLENBQUM7eUNBT21DLDBCQUFXLEVBQWlCLHVCQUFjO09BTmxFLG1CQUFtQixDQXlDL0I7SUFBRCwwQkFBQztDQUFBLEFBekNELElBeUNDO0FBekNZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XG5pbXBvcnQge0FwcFNldHRpbmdzfSBmcm9tIFwifi9hcHAvYXBwLXNldHRpbmdzXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtZGV0YWlsc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtLWRldGFpbC5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBpdGVtOiBJdGVtO1xuICAgIHB1YmxpYyB0aW1lckVuYWJsZWQ6IGJvb2xlYW47XG4gICAgcHVibGljIHNlY29uZHM6IG51bWJlcjtcbiAgICBwdWJsaWMgaWQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGltZXJFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ2V0SXRlbSgpO1xuICAgICAgICB0aGlzLmlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMudGltZXJFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWNvbmRzICs9IDE7XG4gICAgICAgICAgICB9fSwgMTAwMCk7XG4gICAgfVxuXG4gICAgZ2V0SXRlbSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaWQgPSArdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJyk7XG4gICAgICAgIHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbShpZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW0gPSBpdGVtO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuaXRlbS50aW1lID0gMDtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uVGFwU3RhcnQoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3RhcnQgdGltZXJcIik7XG4gICAgICAgIGlmICghdGhpcy5zZWNvbmRzKSB7XG4gICAgICAgICAgICB0aGlzLnNlY29uZHMgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXRlbVNlcnZpY2Uuc3RhcnRBY3Rpdml0eSh7XG4gICAgICAgICAgICBcImFjdGl2aXR5X2lkXCI6IHRoaXMuaXRlbS5hY3Rpdml0eUJsdWVwcmludElkLCBcInVzZXJfaWRcIjogQXBwU2V0dGluZ3MuVE9LRU59KS5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy50aW1lckVuYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uVGFwU3RvcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTdG9wIHRpbWVyXCIpO1xuICAgICAgICB0aGlzLml0ZW1TZXJ2aWNlLnN0b3BBY3Rpdml0eSh0aGlzLml0ZW0uYWN0aXZpdHlCbHVlcHJpbnRJZCkuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMudGltZXJFbmFibGVkID0gZmFsc2U7XG4gICAgfVxufVxuIl19