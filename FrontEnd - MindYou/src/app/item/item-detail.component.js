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
            "activity_id": this.item.activityBlueprintId, "user_id": app_settings_1.AppSettings.USER_ID
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDBDQUFpRDtBQUdqRCwrQ0FBNkM7QUFDN0MsbURBQStDO0FBUy9DO0lBTUksNkJBQW9CLFdBQXdCLEVBQVUsS0FBcUI7UUFBdkQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtJQUFJLENBQUM7SUFFaEYsc0NBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLEVBQUUsR0FBRyxXQUFXLENBQUM7WUFDbEIsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLEtBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO1lBQ3RCLENBQUM7UUFBQSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVELHFDQUFPLEdBQVA7UUFBQSxpQkFPQztRQU5HLElBQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7YUFDdkIsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUNaLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLHNCQUFzQjtRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCx3Q0FBVSxHQUFWO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztZQUN2QixhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxTQUFTLEVBQUUsMEJBQVcsQ0FBQyxPQUFPO1NBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25HLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzdCLENBQUM7SUFFRCx1Q0FBUyxHQUFUO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDekUsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQXZDUTtRQUFSLFlBQUssRUFBRTs7cURBQVk7SUFEWCxtQkFBbUI7UUFML0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsOEJBQThCO1NBQzlDLENBQUM7eUNBT21DLDBCQUFXLEVBQWlCLHVCQUFjO09BTmxFLG1CQUFtQixDQXlDL0I7SUFBRCwwQkFBQztDQUFBLEFBekNELElBeUNDO0FBekNZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XG5pbXBvcnQge0FwcFNldHRpbmdzfSBmcm9tIFwifi9hcHAvYXBwLXNldHRpbmdzXCI7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1kZXRhaWxzXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW0tZGV0YWlsLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1EZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIGl0ZW06IEl0ZW07XG4gICAgcHVibGljIHRpbWVyRW5hYmxlZDogYm9vbGVhbjtcbiAgICBwdWJsaWMgc2Vjb25kczogbnVtYmVyO1xuICAgIHB1YmxpYyBpZDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50aW1lckVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5nZXRJdGVtKCk7XG4gICAgICAgIHRoaXMuaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy50aW1lckVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlY29uZHMgKz0gMTtcbiAgICAgICAgICAgIH19LCAxMDAwKTtcbiAgICB9XG5cbiAgICBnZXRJdGVtKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBpZCA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKTtcbiAgICAgICAgdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtKGlkKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5pdGVtLnRpbWUgPSAwO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25UYXBTdGFydCgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTdGFydCB0aW1lclwiKTtcbiAgICAgICAgaWYgKCF0aGlzLnNlY29uZHMpIHtcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kcyA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pdGVtU2VydmljZS5zdGFydEFjdGl2aXR5KHtcbiAgICAgICAgICAgICAgICBcImFjdGl2aXR5X2lkXCI6IHRoaXMuaXRlbS5hY3Rpdml0eUJsdWVwcmludElkLCBcInVzZXJfaWRcIjogQXBwU2V0dGluZ3MuVVNFUl9JRH0pLnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLnRpbWVyRW5hYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgb25UYXBTdG9wKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlN0b3AgdGltZXJcIik7XG4gICAgICAgIHRoaXMuaXRlbVNlcnZpY2Uuc3RvcEFjdGl2aXR5KHRoaXMuaXRlbS5hY3Rpdml0eUJsdWVwcmludElkKS5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy50aW1lckVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG59XG4iXX0=