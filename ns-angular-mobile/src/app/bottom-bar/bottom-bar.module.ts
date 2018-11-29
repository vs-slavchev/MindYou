import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {NativeScriptFormsModule} from 'nativescript-angular/forms';
import {NativeScriptRouterModule} from 'nativescript-angular';

// import {BottomBarRoutes} from './bottom-bar.routes';
import {BottomBarRoutes} from "~/app/bottom-bar/bottom-bar.routes";

@NgModule({
    imports: [
        NativeScriptFormsModule,
        NativeScriptRouterModule.forChild(<any>BottomBarRoutes)
    ],
    declarations: [
        // BottomBarComponent
    ],
    exports: [
        // BottomBarComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BottomBarModule {
}
