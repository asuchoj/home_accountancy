import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import {AngularMaterialModule} from '../shared/angular-material/angular-material.module';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    AuthComponent,
    AngularMaterialModule
  ],
  declarations: [AuthComponent]

})
export class AuthModule {}
