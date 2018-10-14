import { Component, OnInit } from '@angular/core';
import {WidgetService} from "../../service/widget.service";
import {RedWidgetComponent} from "../red-widget/red-widget.component";

@Component({
  selector: 'widgets-menu',
  templateUrl: './widgets-menu.component.html',
  styleUrls: ['./widgets-menu.component.scss']
})
export class WidgetsMenuComponent implements OnInit {

  /**
   * Виджеты для меню
   * */
  widgets: any;

  constructor(
    private widget: WidgetService
  ) {
     this.widget.getWidgets().subscribe( widgets => {
     this.widgets = widgets
    })
  }

  ngOnInit() {
  }
}
