"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var nativescript_angular_1 = require("nativescript-angular");
// import {BottomBarRoutes} from './bottom-bar.routes';
var bottom_bar_routes_1 = require("~/app/bottom-bar/bottom-bar.routes");
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
            // BottomBarComponent
            ],
            exports: [
            // BottomBarComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], BottomBarModule);
    return BottomBarModule;
}());
exports.BottomBarModule = BottomBarModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tLWJhci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib3R0b20tYmFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUV6RCxvREFBbUU7QUFDbkUsNkRBQThEO0FBRTlELHVEQUF1RDtBQUN2RCx3RUFBbUU7QUFpQm5FO0lBQUE7SUFDQSxDQUFDO0lBRFksZUFBZTtRQWYzQixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsK0JBQXVCO2dCQUN2QiwrQ0FBd0IsQ0FBQyxRQUFRLENBQU0sbUNBQWUsQ0FBQzthQUMxRDtZQUNELFlBQVksRUFBRTtZQUNWLHFCQUFxQjthQUN4QjtZQUNELE9BQU8sRUFBRTtZQUNMLHFCQUFxQjthQUN4QjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csZUFBZSxDQUMzQjtJQUFELHNCQUFDO0NBQUEsQUFERCxJQUNDO0FBRFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZX0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGV9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcblxuLy8gaW1wb3J0IHtCb3R0b21CYXJSb3V0ZXN9IGZyb20gJy4vYm90dG9tLWJhci5yb3V0ZXMnO1xuaW1wb3J0IHtCb3R0b21CYXJSb3V0ZXN9IGZyb20gXCJ+L2FwcC9ib3R0b20tYmFyL2JvdHRvbS1iYXIucm91dGVzXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKDxhbnk+Qm90dG9tQmFyUm91dGVzKVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIC8vIEJvdHRvbUJhckNvbXBvbmVudFxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICAvLyBCb3R0b21CYXJDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQm90dG9tQmFyTW9kdWxlIHtcbn1cbiJdfQ==