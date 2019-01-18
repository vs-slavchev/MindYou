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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib3R0b20tYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RjtBQUM3RixxQ0FBZ0M7QUFDaEMsbURBQXlEO0FBQ3pELDZEQUFzRDtBQVF0RDtJQWVJLDRCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQWJ0RCxpRkFBaUY7UUFDekUsV0FBTSxHQUFHLEVBQUMsR0FBRyxFQUFFLGFBQWEsRUFBRSxHQUFHLEVBQUUsa0JBQWtCLEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBQyxDQUFDO1FBSXJGLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBTWQsZ0JBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQVUsQ0FBQztJQUduRCxDQUFDOzJCQWhCUSxrQkFBa0I7SUFrQjNCLHFDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsNENBQWUsR0FBZjtRQUFBLGlCQUlDO1FBSEcsVUFBVSxDQUFDO1lBQ1AsS0FBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDWixDQUFDO0lBRUQsc0NBQVMsR0FBVCxVQUFVLEtBQWE7UUFDbkIsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUVuQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQzNCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUM3RSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7Z0JBQ3BDLFNBQVMsRUFBRSxFQUFDLENBQUMsRUFBRSxLQUFLLEdBQUcsaUJBQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLG9CQUFrQixDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDO2dCQUNwRixLQUFLLEVBQUUsc0JBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNuRCxRQUFRLEVBQUUsR0FBRzthQUNoQixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzNDO0lBQ0wsQ0FBQztJQUVELHFDQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1YsSUFBSSxZQUFZLENBQUM7UUFDakIsUUFBUSxLQUFLLEVBQUU7WUFDWCxLQUFLLENBQUM7Z0JBQ0YsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQzNCLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQzNCLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQzNCLE1BQU07WUFDVjtnQkFDSSxNQUFNO1NBQ2I7UUFDRCxPQUFPLFlBQVksQ0FBQztJQUN4QixDQUFDO0lBRUQsZ0RBQW1CLEdBQW5CLFVBQW9CLEdBQVE7UUFDeEIsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7WUFDdEIsS0FBSyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFDO1lBQ3ZCLEtBQUssRUFBRSxzQkFBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDbkQsUUFBUSxFQUFFLEdBQUc7U0FDaEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGlEQUFvQixHQUFwQixVQUFxQixHQUFRO1FBQ3pCLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1lBQ3RCLEtBQUssRUFBRSxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQztZQUNuQixLQUFLLEVBQUUsc0JBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ25ELFFBQVEsRUFBRSxHQUFHO1NBQ2hCLENBQUMsQ0FBQTtJQUNOLENBQUM7O0lBdkVNLHdCQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ1U7UUFBMUIsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQWUsaUJBQVU7NERBQUM7SUFHL0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQVMsaUJBQVU7c0RBQUM7SUFDbkI7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQVMsaUJBQVU7c0RBQUM7SUFDbkI7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQVMsaUJBQVU7c0RBQUM7SUFFOUI7UUFBVCxhQUFNLEVBQUU7OzJEQUEwQztJQWIxQyxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1NBQzdDLENBQUM7eUNBZ0J3Qyx1Q0FBZ0I7T0FmN0Msa0JBQWtCLENBOEU5QjtJQUFELHlCQUFDO0NBQUEsQUE5RUQsSUE4RUM7QUE5RVksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtzY3JlZW59IGZyb20gXCJwbGF0Zm9ybVwiO1xyXG5pbXBvcnQge0FuaW1hdGlvbkN1cnZlfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9lbnVtc1wiO1xyXG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdCb3R0b21CYXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2JvdHRvbS1iYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vYm90dG9tLWJhci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCb3R0b21CYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIC8vIHByaXZhdGUgcm91dGVzID0geycwJzogJy9pdGVtcycsICcxJzogJy9zdGF0aXN0aWNzJywgJzInOiAnL2hvbWUvc3RhdGlzdGljcyd9O1xyXG4gICAgcHJpdmF0ZSByb3V0ZXMgPSB7JzAnOiAnL2hvbWUvaXRlbXMnLCAnMSc6ICcvaG9tZS9zdGF0aXN0aWNzJywgJzInOiAnL2hvbWUvZnJpZW5kcyd9O1xyXG5cclxuICAgIHN0YXRpYyBJQ09OUyA9IDM7XHJcbiAgICBAVmlld0NoaWxkKCd0YWJIaWdobGlnaHQnKSB0YWJIaWdobGlnaHQ6IEVsZW1lbnRSZWY7XHJcbiAgICBzZWxlY3RlZFRhYjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAVmlld0NoaWxkKCdpbWFnZTEnKSBpbWFnZTE6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKCdpbWFnZTInKSBpbWFnZTI6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKCdpbWFnZTMnKSBpbWFnZTM6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgQE91dHB1dCgpIHRhYlNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVDdXJyZW50SW1hZ2UodGhpcy5pbWFnZTEpO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0VGFiKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgcHJldmlvdXNUYWIgPSB0aGlzLnNlbGVjdGVkVGFiO1xyXG5cclxuICAgICAgICBpZiAoaW5kZXggIT0gdGhpcy5zZWxlY3RlZFRhYikge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW3RoaXMucm91dGVzW2luZGV4XV0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVGFiID0gaW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMudGFiSGlnaGxpZ2h0Lm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IHt4OiBpbmRleCAqIHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcyAvIEJvdHRvbUJhckNvbXBvbmVudC5JQ09OUywgeTogMH0sXHJcbiAgICAgICAgICAgICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuY3ViaWNCZXppZXIoMSwgLjAyLCAuNDUsIC45MyksXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVDdXJyZW50SW1hZ2UodGhpcy5nZXRJbWFnZShpbmRleCkpO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVQcmV2aW91c0ltYWdlKHRoaXMuZ2V0SW1hZ2UocHJldmlvdXNUYWIpKTtcclxuICAgICAgICAgICAgdGhpcy50YWJTZWxlY3RlZC5lbWl0KHRoaXMuc2VsZWN0ZWRUYWIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRJbWFnZShpbmRleCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50SW1hZ2U7XHJcbiAgICAgICAgc3dpdGNoIChpbmRleCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50SW1hZ2UgPSB0aGlzLmltYWdlMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50SW1hZ2UgPSB0aGlzLmltYWdlMjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50SW1hZ2UgPSB0aGlzLmltYWdlMztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjdXJyZW50SW1hZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgYW5pbWF0ZUN1cnJlbnRJbWFnZShhcmc6IGFueSkge1xyXG4gICAgICAgIGFyZy5uYXRpdmVFbGVtZW50LmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY2FsZToge3g6IDEuMiwgeTogMS4yfSxcclxuICAgICAgICAgICAgY3VydmU6IEFuaW1hdGlvbkN1cnZlLmN1YmljQmV6aWVyKDEsIC4wMiwgLjQ1LCAuOTMpLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5pbWF0ZVByZXZpb3VzSW1hZ2UoYXJnOiBhbnkpIHtcclxuICAgICAgICBhcmcubmF0aXZlRWxlbWVudC5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2NhbGU6IHt4OiAxLCB5OiAxfSxcclxuICAgICAgICAgICAgY3VydmU6IEFuaW1hdGlvbkN1cnZlLmN1YmljQmV6aWVyKDEsIC4wMiwgLjQ1LCAuOTMpLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn1cclxuIl19