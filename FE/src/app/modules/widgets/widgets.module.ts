import {NgModule} from "@angular/core";

import {WidgetsComponent} from "./widgets.component";
import {WidgetsMenuComponent} from "./components/widgets-menu/widgets-menu.component";
import {WidgetsRoutingModule} from "./widgets-routing.module";
import {CommonModule} from "@angular/common";
import {WidgetsWrapComponent} from './components/widgets-wrap/widgets-wrap.component';
import {RedWidgetComponent} from './components/red-widget/red-widget.component';
import {GreenWidgetComponent} from './components/green-widget/green-widget.component';
import {YellowWidgetComponent} from './components/yellow-widget/yellow-widget.component';
import {WidgetsBoxComponent} from './components/widgets-box/widgets-box.component';

@NgModule({
  imports: [
    WidgetsRoutingModule,
    CommonModule
  ],
  declarations: [
    WidgetsComponent,
    WidgetsMenuComponent,
    WidgetsWrapComponent,
    RedWidgetComponent,
    GreenWidgetComponent,
    YellowWidgetComponent,
    WidgetsBoxComponent
  ],
  providers: []
})

export class WidgetsModule {}
