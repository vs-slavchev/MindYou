import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from "@angular/core";
import {screen} from "platform";
import {AnimationCurve} from "tns-core-modules/ui/enums";

@Component({
    moduleId: module.id,
    selector: 'BottomBar',
    templateUrl: './bottom-bar.component.html',
    styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent implements OnInit {

    static ICONS = 3;
    @ViewChild('tabHighlight') tabHighlight: ElementRef;
    selectedTab: number = 0;

    @ViewChild('image1') image1: ElementRef;
    @ViewChild('image2') image2: ElementRef;
    @ViewChild('image3') image3: ElementRef;

    @Output() tabSelected = new EventEmitter<number>();

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.animateCurrentImage(this.image1);
        }, 100);
    }

    selectTab(index: number) {
        let previousTab = this.selectedTab;
        if (index != this.selectedTab) {
            this.selectedTab = index;
            this.tabHighlight.nativeElement.animate({
                translate: {x: index * screen.mainScreen.widthDIPs / BottomBarComponent.ICONS, y: 0},
                curve: AnimationCurve.cubicBezier(1, .02, .45, .93),
                duration: 300
            });
            this.animateCurrentImage(this.getImage(index));
            this.animatePreviousImage(this.getImage(previousTab));
            this.tabSelected.emit(this.selectedTab);
        }
    }

    getImage(index) {
        let currentImage;
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
    }

    animateCurrentImage(arg: any) {
        arg.nativeElement.animate({
            scale: {x: 1.2, y: 1.2},
            curve: AnimationCurve.cubicBezier(1, .02, .45, .93),
            duration: 300
        });
    }

    animatePreviousImage(arg: any) {
        arg.nativeElement.animate({
            scale: {x: 1, y: 1},
            curve: AnimationCurve.cubicBezier(1, .02, .45, .93),
            duration: 300
        })
    }

}
