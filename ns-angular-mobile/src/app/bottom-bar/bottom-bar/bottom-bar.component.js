"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var enums_1 = require("tns-core-modules/ui/enums");
var nativescript_angular_1 = require("nativescript-angular");
var BottomBarComponent = /** @class */ (function () {
    function BottomBarComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        // private routes = {'0': '/items', '1': '/statistics', '2': '/home/statistics'};
        this.routes = { '0': '/home/items', '1': '/home/statistics', '2': '/home/friends' };
        this.selectedTab = 0;
        this.tabSelected = new core_1.EventEmitter();
    }
    BottomBarComponent_1 = BottomBarComponent;
    BottomBarComponent.prototype.ngOnInit = function () {
    };
    BottomBarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.animateCurrentImage(_this.image1);
        }, 100);
    };
    BottomBarComponent.prototype.selectTab = function (index) {
        var previousTab = this.selectedTab;
        if (index != this.selectedTab) {
            this.routerExtensions.navigate([this.routes[index]], { clearHistory: true });
            this.selectedTab = index;
            this.tabHighlight.nativeElement.animate({
                translate: { x: index * platform_1.screen.mainScreen.widthDIPs / BottomBarComponent_1.ICONS, y: 0 },
                curve: enums_1.AnimationCurve.cubicBezier(1, .02, .45, .93),
                duration: 300
            });
            this.animateCurrentImage(this.getImage(index));
            this.animatePreviousImage(this.getImage(previousTab));
            this.tabSelected.emit(this.selectedTab);
        }
    };
    BottomBarComponent.prototype.getImage = function (index) {
        var currentImage;
        switch (index) {
            case 0:
                currentImage = this.image1;
                break;
            case 1:
                currentImage = this.image2;
                break;
            case 2:
                currentImage = this.image3;
                break;
            default:
                break;
        }
        return currentImage;
    };
    BottomBarComponent.prototype.animateCurrentImage = function (arg) {
        arg.nativeElement.animate({
            scale: { x: 1.2, y: 1.2 },
            curve: enums_1.AnimationCurve.cubicBezier(1, .02, .45, .93),
            duration: 300
        });
    };
    BottomBarComponent.prototype.animatePreviousImage = function (arg) {
        arg.nativeElement.animate({
            scale: { x: 1, y: 1 },
            curve: enums_1.AnimationCurve.cubicBezier(1, .02, .45, .93),
            duration: 300
        });
    };
    var BottomBarComponent_1;
    BottomBarComponent.ICONS = 3;
    __decorate([
        core_1.ViewChild('tabHighlight'),
        __metadata("design:type", core_1.ElementRef)
    ], BottomBarComponent.prototype, "tabHighlight", void 0);
    __decorate([
        core_1.ViewChild('image1'),
        __metadata("design:type", core_1.ElementRef)
    ], BottomBarComponent.prototype, "image1", void 0);
    __decorate([
        core_1.ViewChild('image2'),
        __metadata("design:type", core_1.ElementRef)
    ], BottomBarComponent.prototype, "image2", void 0);
    __decorate([
        core_1.ViewChild('image3'),
        __metadata("design:type", core_1.ElementRef)
    ], BottomBarComponent.prototype, "image3", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], BottomBarComponent.prototype, "tabSelected", void 0);
    BottomBarComponent = BottomBarComponent_1 = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'BottomBar',
            templateUrl: './bottom-bar.component.html',
            styleUrls: ['./bottom-bar.component.scss']
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions])
    ], BottomBarComponent);
    return BottomBarComponent;
}());
exports.BottomBarComponent = BottomBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib3R0b20tYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RjtBQUM3RixxQ0FBZ0M7QUFDaEMsbURBQXlEO0FBQ3pELDZEQUFzRDtBQVF0RDtJQWVJLDRCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQWJ0RCxpRkFBaUY7UUFDekUsV0FBTSxHQUFHLEVBQUMsR0FBRyxFQUFFLGFBQWEsRUFBRSxHQUFHLEVBQUUsa0JBQWtCLEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBQyxDQUFDO1FBSXJGLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBTWQsZ0JBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQVUsQ0FBQztJQUduRCxDQUFDOzJCQWhCUSxrQkFBa0I7SUFrQjNCLHFDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsNENBQWUsR0FBZjtRQUFBLGlCQUlDO1FBSEcsVUFBVSxDQUFDO1lBQ1AsS0FBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDWixDQUFDO0lBRUQsc0NBQVMsR0FBVCxVQUFVLEtBQWE7UUFDbkIsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUVuQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQzNCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUM3RSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7Z0JBQ3BDLFNBQVMsRUFBRSxFQUFDLENBQUMsRUFBRSxLQUFLLEdBQUcsaUJBQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLG9CQUFrQixDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDO2dCQUNwRixLQUFLLEVBQUUsc0JBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNuRCxRQUFRLEVBQUUsR0FBRzthQUNoQixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzNDO0lBQ0wsQ0FBQztJQUVELHFDQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1YsSUFBSSxZQUFZLENBQUM7UUFDakIsUUFBUSxLQUFLLEVBQUU7WUFDWCxLQUFLLENBQUM7Z0JBQ0YsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQzNCLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQzNCLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQzNCLE1BQU07WUFDVjtnQkFDSSxNQUFNO1NBQ2I7UUFDRCxPQUFPLFlBQVksQ0FBQztJQUN4QixDQUFDO0lBRUQsZ0RBQW1CLEdBQW5CLFVBQW9CLEdBQVE7UUFDeEIsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7WUFDdEIsS0FBSyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFDO1lBQ3ZCLEtBQUssRUFBRSxzQkFBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDbkQsUUFBUSxFQUFFLEdBQUc7U0FDaEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGlEQUFvQixHQUFwQixVQUFxQixHQUFRO1FBQ3pCLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1lBQ3RCLEtBQUssRUFBRSxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQztZQUNuQixLQUFLLEVBQUUsc0JBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ25ELFFBQVEsRUFBRSxHQUFHO1NBQ2hCLENBQUMsQ0FBQTtJQUNOLENBQUM7O0lBdkVNLHdCQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ1U7UUFBMUIsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQWUsaUJBQVU7NERBQUM7SUFHL0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQVMsaUJBQVU7c0RBQUM7SUFDbkI7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQVMsaUJBQVU7c0RBQUM7SUFDbkI7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQVMsaUJBQVU7c0RBQUM7SUFFOUI7UUFBVCxhQUFNLEVBQUU7OzJEQUEwQztJQWIxQyxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1NBQzdDLENBQUM7eUNBZ0J3Qyx1Q0FBZ0I7T0FmN0Msa0JBQWtCLENBOEU5QjtJQUFELHlCQUFDO0NBQUEsQUE5RUQsSUE4RUM7QUE5RVksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7c2NyZWVufSBmcm9tIFwicGxhdGZvcm1cIjtcbmltcG9ydCB7QW5pbWF0aW9uQ3VydmV9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnQm90dG9tQmFyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYm90dG9tLWJhci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYm90dG9tLWJhci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJvdHRvbUJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICAvLyBwcml2YXRlIHJvdXRlcyA9IHsnMCc6ICcvaXRlbXMnLCAnMSc6ICcvc3RhdGlzdGljcycsICcyJzogJy9ob21lL3N0YXRpc3RpY3MnfTtcbiAgICBwcml2YXRlIHJvdXRlcyA9IHsnMCc6ICcvaG9tZS9pdGVtcycsICcxJzogJy9ob21lL3N0YXRpc3RpY3MnLCAnMic6ICcvaG9tZS9mcmllbmRzJ307XG5cbiAgICBzdGF0aWMgSUNPTlMgPSAzO1xuICAgIEBWaWV3Q2hpbGQoJ3RhYkhpZ2hsaWdodCcpIHRhYkhpZ2hsaWdodDogRWxlbWVudFJlZjtcbiAgICBzZWxlY3RlZFRhYjogbnVtYmVyID0gMDtcblxuICAgIEBWaWV3Q2hpbGQoJ2ltYWdlMScpIGltYWdlMTogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCdpbWFnZTInKSBpbWFnZTI6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnaW1hZ2UzJykgaW1hZ2UzOiBFbGVtZW50UmVmO1xuXG4gICAgQE91dHB1dCgpIHRhYlNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlQ3VycmVudEltYWdlKHRoaXMuaW1hZ2UxKTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICB9XG5cbiAgICBzZWxlY3RUYWIoaW5kZXg6IG51bWJlcikge1xuICAgICAgICBsZXQgcHJldmlvdXNUYWIgPSB0aGlzLnNlbGVjdGVkVGFiO1xuXG4gICAgICAgIGlmIChpbmRleCAhPSB0aGlzLnNlbGVjdGVkVGFiKSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW3RoaXMucm91dGVzW2luZGV4XV0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IGluZGV4O1xuICAgICAgICAgICAgdGhpcy50YWJIaWdobGlnaHQubmF0aXZlRWxlbWVudC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IHt4OiBpbmRleCAqIHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcyAvIEJvdHRvbUJhckNvbXBvbmVudC5JQ09OUywgeTogMH0sXG4gICAgICAgICAgICAgICAgY3VydmU6IEFuaW1hdGlvbkN1cnZlLmN1YmljQmV6aWVyKDEsIC4wMiwgLjQ1LCAuOTMpLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlQ3VycmVudEltYWdlKHRoaXMuZ2V0SW1hZ2UoaW5kZXgpKTtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZVByZXZpb3VzSW1hZ2UodGhpcy5nZXRJbWFnZShwcmV2aW91c1RhYikpO1xuICAgICAgICAgICAgdGhpcy50YWJTZWxlY3RlZC5lbWl0KHRoaXMuc2VsZWN0ZWRUYWIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0SW1hZ2UoaW5kZXgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRJbWFnZTtcbiAgICAgICAgc3dpdGNoIChpbmRleCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbWFnZSA9IHRoaXMuaW1hZ2UxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbWFnZSA9IHRoaXMuaW1hZ2UyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbWFnZSA9IHRoaXMuaW1hZ2UzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VycmVudEltYWdlO1xuICAgIH1cblxuICAgIGFuaW1hdGVDdXJyZW50SW1hZ2UoYXJnOiBhbnkpIHtcbiAgICAgICAgYXJnLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY2FsZToge3g6IDEuMiwgeTogMS4yfSxcbiAgICAgICAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5jdWJpY0JlemllcigxLCAuMDIsIC40NSwgLjkzKSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZVByZXZpb3VzSW1hZ2UoYXJnOiBhbnkpIHtcbiAgICAgICAgYXJnLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY2FsZToge3g6IDEsIHk6IDF9LFxuICAgICAgICAgICAgY3VydmU6IEFuaW1hdGlvbkN1cnZlLmN1YmljQmV6aWVyKDEsIC4wMiwgLjQ1LCAuOTMpLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMFxuICAgICAgICB9KVxuICAgIH1cblxufVxuIl19