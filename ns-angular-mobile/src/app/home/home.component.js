"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        console.log("Home component is loading...");
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.tabSelected = function (args) {
        console.log("tab selected: " + args);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'ns-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQVFoRDtJQUVJO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxnQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxJQUFZO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQWlCLElBQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFaUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ25DLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUN0QixDQUFDOztPQUNXLGFBQWEsQ0FhekI7SUFBRCxvQkFBQztDQUFBLEFBYkQsSUFhQztBQWJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbnMtaG9tZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkhvbWUgY29tcG9uZW50IGlzIGxvYWRpbmcuLi5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRhYlNlbGVjdGVkKGFyZ3M6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGB0YWIgc2VsZWN0ZWQ6ICR7YXJnc31gKTtcclxuICAgIH1cclxufVxyXG4iXX0=