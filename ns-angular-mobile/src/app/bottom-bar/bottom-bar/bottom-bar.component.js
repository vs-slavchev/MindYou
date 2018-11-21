"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var enums_1 = require("tns-core-modules/ui/enums");
var nativescript_angular_1 = require("nativescript-angular");
var BottomBarComponent = /** @class */ (function () {
    function BottomBarComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.routes = { '0': '/items', '1': '/statistics', '2': '/friends' };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib3R0b20tYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RjtBQUM3RixxQ0FBZ0M7QUFDaEMsbURBQXlEO0FBQ3pELDZEQUFzRDtBQVF0RDtJQWNJLDRCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVo5QyxXQUFNLEdBQUcsRUFBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBQyxDQUFDO1FBSXRFLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBTWQsZ0JBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQVUsQ0FBQztJQUduRCxDQUFDOzJCQWZRLGtCQUFrQjtJQWlCM0IscUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCw0Q0FBZSxHQUFmO1FBQUEsaUJBSUM7UUFIRyxVQUFVLENBQUM7WUFDUCxLQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFRCxzQ0FBUyxHQUFULFVBQVUsS0FBYTtRQUNuQixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBRW5DLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztnQkFDcEMsU0FBUyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEtBQUssR0FBRyxpQkFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsb0JBQWtCLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUM7Z0JBQ3BGLEtBQUssRUFBRSxzQkFBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ25ELFFBQVEsRUFBRSxHQUFHO2FBQ2hCLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDM0M7SUFDTCxDQUFDO0lBRUQscUNBQVEsR0FBUixVQUFTLEtBQUs7UUFDVixJQUFJLFlBQVksQ0FBQztRQUNqQixRQUFRLEtBQUssRUFBRTtZQUNYLEtBQUssQ0FBQztnQkFDRixZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDM0IsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDM0IsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDM0IsTUFBTTtZQUNWO2dCQUNJLE1BQU07U0FDYjtRQUNELE9BQU8sWUFBWSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxnREFBbUIsR0FBbkIsVUFBb0IsR0FBUTtRQUN4QixHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztZQUN0QixLQUFLLEVBQUUsRUFBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUM7WUFDdkIsS0FBSyxFQUFFLHNCQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUNuRCxRQUFRLEVBQUUsR0FBRztTQUNoQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsaURBQW9CLEdBQXBCLFVBQXFCLEdBQVE7UUFDekIsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7WUFDdEIsS0FBSyxFQUFFLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDO1lBQ25CLEtBQUssRUFBRSxzQkFBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDbkQsUUFBUSxFQUFFLEdBQUc7U0FDaEIsQ0FBQyxDQUFBO0lBQ04sQ0FBQzs7SUF2RU0sd0JBQUssR0FBRyxDQUFDLENBQUM7SUFDVTtRQUExQixnQkFBUyxDQUFDLGNBQWMsQ0FBQztrQ0FBZSxpQkFBVTs0REFBQztJQUcvQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBUyxpQkFBVTtzREFBQztJQUNuQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBUyxpQkFBVTtzREFBQztJQUNuQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBUyxpQkFBVTtzREFBQztJQUU5QjtRQUFULGFBQU0sRUFBRTs7MkRBQTBDO0lBWjFDLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7U0FDN0MsQ0FBQzt5Q0Fld0MsdUNBQWdCO09BZDdDLGtCQUFrQixDQTZFOUI7SUFBRCx5QkFBQztDQUFBLEFBN0VELElBNkVDO0FBN0VZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge3NjcmVlbn0gZnJvbSBcInBsYXRmb3JtXCI7XG5pbXBvcnQge0FuaW1hdGlvbkN1cnZlfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9lbnVtc1wiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ0JvdHRvbUJhcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2JvdHRvbS1iYXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2JvdHRvbS1iYXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCb3R0b21CYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHJpdmF0ZSByb3V0ZXMgPSB7JzAnOiAnL2l0ZW1zJywgJzEnOiAnL3N0YXRpc3RpY3MnLCAnMic6ICcvZnJpZW5kcyd9O1xuXG4gICAgc3RhdGljIElDT05TID0gMztcbiAgICBAVmlld0NoaWxkKCd0YWJIaWdobGlnaHQnKSB0YWJIaWdobGlnaHQ6IEVsZW1lbnRSZWY7XG4gICAgc2VsZWN0ZWRUYWI6IG51bWJlciA9IDA7XG5cbiAgICBAVmlld0NoaWxkKCdpbWFnZTEnKSBpbWFnZTE6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnaW1hZ2UyJykgaW1hZ2UyOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ2ltYWdlMycpIGltYWdlMzogRWxlbWVudFJlZjtcblxuICAgIEBPdXRwdXQoKSB0YWJTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZUN1cnJlbnRJbWFnZSh0aGlzLmltYWdlMSk7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgfVxuXG4gICAgc2VsZWN0VGFiKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHByZXZpb3VzVGFiID0gdGhpcy5zZWxlY3RlZFRhYjtcblxuICAgICAgICBpZiAoaW5kZXggIT0gdGhpcy5zZWxlY3RlZFRhYikge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFt0aGlzLnJvdXRlc1tpbmRleF1dLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSBpbmRleDtcbiAgICAgICAgICAgIHRoaXMudGFiSGlnaGxpZ2h0Lm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7eDogaW5kZXggKiBzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHMgLyBCb3R0b21CYXJDb21wb25lbnQuSUNPTlMsIHk6IDB9LFxuICAgICAgICAgICAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5jdWJpY0JlemllcigxLCAuMDIsIC40NSwgLjkzKSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZUN1cnJlbnRJbWFnZSh0aGlzLmdldEltYWdlKGluZGV4KSk7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVQcmV2aW91c0ltYWdlKHRoaXMuZ2V0SW1hZ2UocHJldmlvdXNUYWIpKTtcbiAgICAgICAgICAgIHRoaXMudGFiU2VsZWN0ZWQuZW1pdCh0aGlzLnNlbGVjdGVkVGFiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEltYWdlKGluZGV4KSB7XG4gICAgICAgIGxldCBjdXJyZW50SW1hZ2U7XG4gICAgICAgIHN3aXRjaCAoaW5kZXgpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBjdXJyZW50SW1hZ2UgPSB0aGlzLmltYWdlMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBjdXJyZW50SW1hZ2UgPSB0aGlzLmltYWdlMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBjdXJyZW50SW1hZ2UgPSB0aGlzLmltYWdlMztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGN1cnJlbnRJbWFnZTtcbiAgICB9XG5cbiAgICBhbmltYXRlQ3VycmVudEltYWdlKGFyZzogYW55KSB7XG4gICAgICAgIGFyZy5uYXRpdmVFbGVtZW50LmFuaW1hdGUoe1xuICAgICAgICAgICAgc2NhbGU6IHt4OiAxLjIsIHk6IDEuMn0sXG4gICAgICAgICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuY3ViaWNCZXppZXIoMSwgLjAyLCAuNDUsIC45MyksXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFuaW1hdGVQcmV2aW91c0ltYWdlKGFyZzogYW55KSB7XG4gICAgICAgIGFyZy5uYXRpdmVFbGVtZW50LmFuaW1hdGUoe1xuICAgICAgICAgICAgc2NhbGU6IHt4OiAxLCB5OiAxfSxcbiAgICAgICAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5jdWJpY0JlemllcigxLCAuMDIsIC40NSwgLjkzKSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDBcbiAgICAgICAgfSlcbiAgICB9XG5cbn1cbiJdfQ==