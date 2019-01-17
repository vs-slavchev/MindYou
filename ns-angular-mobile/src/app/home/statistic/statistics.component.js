"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var statistic_service_1 = require("./statistic.service");
var StatisticsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the FriendService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function StatisticsComponent(statisticService) {
        this.statisticService = statisticService;
        this.hasData = false;
        this.bottomBarShow = true;
        this.periods = ["Week", "Month", "Quarter", "Year"];
        this.pickedTerms = new rxjs_1.Subject();
    }
    StatisticsComponent.prototype.ngOnInit = function () {
        this.picked = "week";
        // this.getStatistics();
        // this.statistics = this.pickedTerms.pipe(
        //     // wait 300ms after each keystroke before considering the term
        //     debounceTime(300),
        //
        //     // ignore new term if same as previous term
        //     distinctUntilChanged(),
        //
        //     // switch to new search observable each time the term changes
        //     switchMap((term: string) => this.statisticService.getStatistics(term)),
        // );
    };
    StatisticsComponent.prototype.getStatistics = function () {
        var _this = this;
        this.hasData = false;
        this.pieSource = [];
        this.statisticService.getStatistics(this.picked.toLowerCase()).subscribe(function (statistics) {
            _this.pieSource = statistics;
            _this.hasData = true;
        });
    };
    StatisticsComponent.prototype.selectedIndexChanged = function (args) {
        try {
            var picker = args.object;
            console.log("selected index " + picker.selectedIndex + " length " + this.periods.length);
            this.picked = this.periods[picker.selectedIndex];
            this.getStatistics();
        }
        catch (e) {
            console.log(e);
        }
    };
    StatisticsComponent = __decorate([
        core_1.Component({
            selector: "ns-statistics",
            moduleId: module.id,
            templateUrl: "./statistics.component.html",
            styleUrls: ["./statistic-style.css"],
        }),
        __metadata("design:paramtypes", [statistic_service_1.StatisticService])
    ], StatisticsComponent);
    return StatisticsComponent;
}());
exports.StatisticsComponent = StatisticsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGlzdGljcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGF0aXN0aWNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCw2QkFBMkM7QUFNM0MseURBQXVEO0FBZXZEO0lBU0ksOElBQThJO0lBQzlJLGlIQUFpSDtJQUNqSCw2QkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFWdEQsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUNsQixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixZQUFPLEdBQWEsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUV4RCxnQkFBVyxHQUFHLElBQUksY0FBTyxFQUFVLENBQUM7SUFNYSxDQUFDO0lBRTFELHNDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQix3QkFBd0I7UUFDeEIsMkNBQTJDO1FBQzNDLHFFQUFxRTtRQUNyRSx5QkFBeUI7UUFDekIsRUFBRTtRQUNGLGtEQUFrRDtRQUNsRCw4QkFBOEI7UUFDOUIsRUFBRTtRQUNGLG9FQUFvRTtRQUNwRSw4RUFBOEU7UUFDOUUsS0FBSztJQUNULENBQUM7SUFFRCwyQ0FBYSxHQUFiO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxVQUFVO1lBQ2hGLEtBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO1lBQzVCLEtBQUksQ0FBQyxPQUFPLEdBQUMsSUFBSSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLGtEQUFvQixHQUEzQixVQUE0QixJQUFJO1FBQzVCLElBQUk7WUFDQSxJQUFJLE1BQU0sR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQWtCLE1BQU0sQ0FBQyxhQUFhLGdCQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBUSxDQUFDLENBQUM7WUFDcEYsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDeEI7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEI7SUFFTCxDQUFDO0lBL0NRLG1CQUFtQjtRQVIvQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FHdkMsQ0FBQzt5Q0FZd0Msb0NBQWdCO09BWDdDLG1CQUFtQixDQWdEL0I7SUFBRCwwQkFBQztDQUFBLEFBaERELElBZ0RDO0FBaERZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIHN3aXRjaE1hcFxyXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU3RhdGlzdGljIH0gZnJvbSBcIi4vc3RhdGlzdGljXCI7XHJcbmltcG9ydCB7IFN0YXRpc3RpY1NlcnZpY2UgfSBmcm9tIFwiLi9zdGF0aXN0aWMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBBcHBTZXR0aW5ncyB9IGZyb20gXCJ+L2FwcC9hcHAtc2V0dGluZ3NcIjtcclxuaW1wb3J0ICogYXMgY2hhcnRNb2R1bGUgZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jaGFydFwiO1xyXG5cclxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbFwiO1xyXG5pbXBvcnQgeyBMaXN0UGlja2VyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC1waWNrZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtc3RhdGlzdGljc1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc3RhdGlzdGljcy5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL3N0YXRpc3RpYy1zdHlsZS5jc3NcIl0sXHJcbiAgICAvLyB0ZW1wbGF0ZTogYDxBY3Rpb25CYXIgdGl0bGU9XCJBcHBsaWNhdGlvbiBUaXRsZVwiPjwvQWN0aW9uQmFyPmBcclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdGF0aXN0aWNzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGhhc0RhdGE6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBib3R0b21CYXJTaG93ID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBwZXJpb2RzOiBzdHJpbmdbXSA9IFtcIldlZWtcIiwgXCJNb250aFwiLCBcIlF1YXJ0ZXJcIiwgXCJZZWFyXCJdO1xyXG4gICAgcHVibGljIHBpY2tlZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBwaWNrZWRUZXJtcyA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcclxuXHJcbiAgICBwaWVTb3VyY2U6IFN0YXRpc3RpY1tdO1xyXG5cclxuICAgIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBGcmllbmRTZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLlxyXG4gICAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSwgZGVmaW5lZCBpbiBhcHAubW9kdWxlLnRzLlxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdGF0aXN0aWNTZXJ2aWNlOiBTdGF0aXN0aWNTZXJ2aWNlKSB7fVxyXG4gICAgXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBpY2tlZCA9IFwid2Vla1wiO1xyXG4gICAgICAgIC8vIHRoaXMuZ2V0U3RhdGlzdGljcygpO1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGlzdGljcyA9IHRoaXMucGlja2VkVGVybXMucGlwZShcclxuICAgICAgICAvLyAgICAgLy8gd2FpdCAzMDBtcyBhZnRlciBlYWNoIGtleXN0cm9rZSBiZWZvcmUgY29uc2lkZXJpbmcgdGhlIHRlcm1cclxuICAgICAgICAvLyAgICAgZGVib3VuY2VUaW1lKDMwMCksXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgLy8gaWdub3JlIG5ldyB0ZXJtIGlmIHNhbWUgYXMgcHJldmlvdXMgdGVybVxyXG4gICAgICAgIC8vICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIC8vIHN3aXRjaCB0byBuZXcgc2VhcmNoIG9ic2VydmFibGUgZWFjaCB0aW1lIHRoZSB0ZXJtIGNoYW5nZXNcclxuICAgICAgICAvLyAgICAgc3dpdGNoTWFwKCh0ZXJtOiBzdHJpbmcpID0+IHRoaXMuc3RhdGlzdGljU2VydmljZS5nZXRTdGF0aXN0aWNzKHRlcm0pKSxcclxuICAgICAgICAvLyApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0YXRpc3RpY3MoKSB7XHJcbiAgICAgICAgdGhpcy5oYXNEYXRhID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5waWVTb3VyY2UgPSBbXTtcclxuICAgICAgICB0aGlzLnN0YXRpc3RpY1NlcnZpY2UuZ2V0U3RhdGlzdGljcyh0aGlzLnBpY2tlZC50b0xvd2VyQ2FzZSgpKS5zdWJzY3JpYmUoKHN0YXRpc3RpY3MpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5waWVTb3VyY2UgPSBzdGF0aXN0aWNzO1xyXG4gICAgICAgICAgICB0aGlzLmhhc0RhdGE9dHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRJbmRleENoYW5nZWQoYXJncykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBwaWNrZXIgPSA8TGlzdFBpY2tlcj5hcmdzLm9iamVjdDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHNlbGVjdGVkIGluZGV4ICR7cGlja2VyLnNlbGVjdGVkSW5kZXh9IGxlbmd0aCAke3RoaXMucGVyaW9kcy5sZW5ndGh9YCk7XHJcbiAgICAgICAgICAgIHRoaXMucGlja2VkID0gdGhpcy5wZXJpb2RzW3BpY2tlci5zZWxlY3RlZEluZGV4XTtcclxuICAgICAgICAgICAgdGhpcy5nZXRTdGF0aXN0aWNzKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59Il19