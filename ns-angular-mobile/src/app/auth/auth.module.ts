import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AuthModule { }
