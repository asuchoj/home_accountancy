import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularMaterialModule} from './shared/angular-material/angular-material.module';
import {AuthModule} from './auth/auth.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CdkTableModule,
    CdkTreeModule,
    AngularMaterialModule,
    AuthModule
  ],
  exports: [
    CdkTableModule,
    CdkTreeModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
