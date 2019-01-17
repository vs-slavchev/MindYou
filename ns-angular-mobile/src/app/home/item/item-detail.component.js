"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var item_service_1 = require("./item.service");
var app_settings_1 = require("~/app/app-settings");
// import { Button } from "tns-core-modules/ui/button";
var ItemDetailComponent = /** @class */ (function () {
    function ItemDetailComponent(itemService, route) {
        this.itemService = itemService;
        this.route = route;
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timerEnabled = false;
        this.seconds = 0;
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
            styleUrls: ["./item.css"]
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService, router_1.ActivatedRoute])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());
exports.ItemDetailComponent = ItemDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdGO0FBQ2hGLDBDQUFpRDtBQUdqRCwrQ0FBNkM7QUFDN0MsbURBQStDO0FBQy9DLHVEQUF1RDtBQVN2RDtJQU1JLDZCQUFvQixXQUF3QixFQUFVLEtBQXFCO1FBQXZELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFBSSxDQUFDO0lBRWhGLHNDQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxFQUFFLEdBQUcsV0FBVyxDQUFDO1lBQ2xCLElBQUksS0FBSSxDQUFDLFlBQVksRUFBRTtnQkFDbkIsS0FBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7YUFDckI7UUFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQscUNBQU8sR0FBUDtRQUFBLGlCQU9DO1FBTkcsSUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUN2QixTQUFTLENBQUMsVUFBQyxJQUFJO1lBQ1osS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsc0JBQXNCO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELHdDQUFVLEdBQVY7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7U0FDcEI7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztZQUMzQixhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxTQUFTLEVBQUUsMEJBQVcsQ0FBQyxLQUFLO1NBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzdGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzdCLENBQUM7SUFFRCx1Q0FBUyxHQUFUO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDekUsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQXpDUTtRQUFSLFlBQUssRUFBRTs7cURBQVk7SUFEWCxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLFlBQVksQ0FBQztTQUM1QixDQUFDO3lDQU9tQywwQkFBVyxFQUFpQix1QkFBYztPQU5sRSxtQkFBbUIsQ0EyQy9CO0lBQUQsMEJBQUM7Q0FBQSxBQTNDRCxJQTJDQztBQTNDWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFN5c3RlbUpzTmdNb2R1bGVMb2FkZXJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XG5pbXBvcnQge0FwcFNldHRpbmdzfSBmcm9tIFwifi9hcHAvYXBwLXNldHRpbmdzXCI7XG4vLyBpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b25cIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1kZXRhaWxzXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW0tZGV0YWlsLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2l0ZW0uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1EZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIGl0ZW06IEl0ZW07XG4gICAgcHVibGljIHRpbWVyRW5hYmxlZDogYm9vbGVhbjtcbiAgICBwdWJsaWMgc2Vjb25kczogbnVtYmVyO1xuICAgIHB1YmxpYyBpZDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50aW1lckVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZWNvbmRzID0gMDtcbiAgICAgICAgdGhpcy5nZXRJdGVtKCk7XG4gICAgICAgIHRoaXMuaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy50aW1lckVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlY29uZHMgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxuXG4gICAgZ2V0SXRlbSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaWQgPSArdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJyk7XG4gICAgICAgIHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbShpZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW0gPSBpdGVtO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuaXRlbS50aW1lID0gMDtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uVGFwU3RhcnQoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3RhcnQgdGltZXJcIik7XG4gICAgICAgIGlmICghdGhpcy5zZWNvbmRzKSB7XG4gICAgICAgICAgICB0aGlzLnNlY29uZHMgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXRlbVNlcnZpY2Uuc3RhcnRBY3Rpdml0eSh7XG4gICAgICAgICAgICBcImFjdGl2aXR5X2lkXCI6IHRoaXMuaXRlbS5hY3Rpdml0eUJsdWVwcmludElkLCBcInVzZXJfaWRcIjogQXBwU2V0dGluZ3MuVE9LRU59KS5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy50aW1lckVuYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uVGFwU3RvcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTdG9wIHRpbWVyXCIpO1xuICAgICAgICB0aGlzLml0ZW1TZXJ2aWNlLnN0b3BBY3Rpdml0eSh0aGlzLml0ZW0uYWN0aXZpdHlCbHVlcHJpbnRJZCkuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMudGltZXJFbmFibGVkID0gZmFsc2U7XG4gICAgfVxufVxuIl19