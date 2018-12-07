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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdGO0FBQ2hGLDBDQUFpRDtBQUdqRCwrQ0FBNkM7QUFDN0MsbURBQStDO0FBQy9DLHVEQUF1RDtBQVN2RDtJQU1JLDZCQUFvQixXQUF3QixFQUFVLEtBQXFCO1FBQXZELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFBSSxDQUFDO0lBRWhGLHNDQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxFQUFFLEdBQUcsV0FBVyxDQUFDO1lBQ2xCLElBQUksS0FBSSxDQUFDLFlBQVksRUFBRTtnQkFDbkIsS0FBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7YUFDckI7UUFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQscUNBQU8sR0FBUDtRQUFBLGlCQU9DO1FBTkcsSUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzthQUN2QixTQUFTLENBQUMsVUFBQyxJQUFJO1lBQ1osS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsc0JBQXNCO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELHdDQUFVLEdBQVY7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7U0FDcEI7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztZQUMzQixhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxTQUFTLEVBQUUsMEJBQVcsQ0FBQyxLQUFLO1NBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzdGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzdCLENBQUM7SUFFRCx1Q0FBUyxHQUFUO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDekUsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQXpDUTtRQUFSLFlBQUssRUFBRTs7cURBQVk7SUFEWCxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLFlBQVksQ0FBQztTQUM1QixDQUFDO3lDQU9tQywwQkFBVyxFQUFpQix1QkFBYztPQU5sRSxtQkFBbUIsQ0EyQy9CO0lBQUQsMEJBQUM7Q0FBQSxBQTNDRCxJQTJDQztBQTNDWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFN5c3RlbUpzTmdNb2R1bGVMb2FkZXJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcclxuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtBcHBTZXR0aW5nc30gZnJvbSBcIn4vYXBwL2FwcC1zZXR0aW5nc1wiO1xyXG4vLyBpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b25cIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWRldGFpbHNcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW0tZGV0YWlsLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vaXRlbS5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEl0ZW1EZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQElucHV0KCkgaXRlbTogSXRlbTtcclxuICAgIHB1YmxpYyB0aW1lckVuYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgc2Vjb25kczogbnVtYmVyO1xyXG4gICAgcHVibGljIGlkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50aW1lckVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlY29uZHMgPSAwO1xyXG4gICAgICAgIHRoaXMuZ2V0SXRlbSgpO1xyXG4gICAgICAgIHRoaXMuaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyRW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWNvbmRzICs9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJdGVtKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGlkID0gK3RoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpO1xyXG4gICAgICAgIHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbShpZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtID0gaXRlbTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuaXRlbS50aW1lID0gMDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25UYXBTdGFydCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlN0YXJ0IHRpbWVyXCIpO1xyXG4gICAgICAgIGlmICghdGhpcy5zZWNvbmRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kcyA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXRlbVNlcnZpY2Uuc3RhcnRBY3Rpdml0eSh7XHJcbiAgICAgICAgICAgIFwiYWN0aXZpdHlfaWRcIjogdGhpcy5pdGVtLmFjdGl2aXR5Qmx1ZXByaW50SWQsIFwidXNlcl9pZFwiOiBBcHBTZXR0aW5ncy5UT0tFTn0pLnN1YnNjcmliZSgpO1xyXG4gICAgICAgIHRoaXMudGltZXJFbmFibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvblRhcFN0b3AoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTdG9wIHRpbWVyXCIpO1xyXG4gICAgICAgIHRoaXMuaXRlbVNlcnZpY2Uuc3RvcEFjdGl2aXR5KHRoaXMuaXRlbS5hY3Rpdml0eUJsdWVwcmludElkKS5zdWJzY3JpYmUoKTtcclxuICAgICAgICB0aGlzLnRpbWVyRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==