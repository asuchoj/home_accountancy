import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {WidgetsComponent} from "./widgets.component";
import {WidgetsRoutingModule} from "./widgets-routing.module";
import {RedWidgetComponent} from './components/red-widget/red-widget.component';
import {GreenWidgetComponent} from './components/green-widget/green-widget.component';
import {YellowWidgetComponent} from './components/yellow-widget/yellow-widget.component';
import {WidgetsListComponent} from './components/widgets-list/widgets-list.component';
import {DragDropModule} from "@angular/cdk/drag-drop";

@NgModule({
  exports: [
    DragDropModule
  ],
  imports: [
    WidgetsRoutingModule,
    CommonModule,

  ],
  declarations: [
    WidgetsComponent,
    RedWidgetComponent,
    GreenWidgetComponent,
    YellowWidgetComponent,
    WidgetsListComponent
  ],
  providers: []
})

export class WidgetsModule {}
