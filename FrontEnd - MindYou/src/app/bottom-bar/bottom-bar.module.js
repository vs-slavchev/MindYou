"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var nativescript_angular_1 = require("nativescript-angular");
var bottom_bar_routes_1 = require("./bottom-bar.routes");
var bottom_bar_component_1 = require("./bottom-bar/bottom-bar.component");
var BottomBarModule = /** @class */ (function () {
    function BottomBarModule() {
    }
    BottomBarModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.NativeScriptFormsModule,
                nativescript_angular_1.NativeScriptRouterModule.forChild(bottom_bar_routes_1.BottomBarRoutes)
            ],
            declarations: [
                bottom_bar_component_1.BottomBarComponent
            ],
            exports: [
                bottom_bar_component_1.BottomBarComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], BottomBarModule);
    return BottomBarModule;
}());
exports.BottomBarModule = BottomBarModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tLWJhci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib3R0b20tYmFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUV6RCxvREFBbUU7QUFDbkUsNkRBQThEO0FBRTlELHlEQUFvRDtBQUNwRCwwRUFBcUU7QUFpQnJFO0lBQUE7SUFDQSxDQUFDO0lBRFksZUFBZTtRQWYzQixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsK0JBQXVCO2dCQUN2QiwrQ0FBd0IsQ0FBQyxRQUFRLENBQU0sbUNBQWUsQ0FBQzthQUMxRDtZQUNELFlBQVksRUFBRTtnQkFDVix5Q0FBa0I7YUFDckI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wseUNBQWtCO2FBQ3JCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxlQUFlLENBQzNCO0lBQUQsc0JBQUM7Q0FBQSxBQURELElBQ0M7QUFEWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUF9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge05hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZX0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuXG5pbXBvcnQge0JvdHRvbUJhclJvdXRlc30gZnJvbSAnLi9ib3R0b20tYmFyLnJvdXRlcyc7XG5pbXBvcnQge0JvdHRvbUJhckNvbXBvbmVudH0gZnJvbSAnLi9ib3R0b20tYmFyL2JvdHRvbS1iYXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoPGFueT5Cb3R0b21CYXJSb3V0ZXMpXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQm90dG9tQmFyQ29tcG9uZW50XG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIEJvdHRvbUJhckNvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBCb3R0b21CYXJNb2R1bGUge1xufVxuIl19