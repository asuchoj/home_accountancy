import { Component, OnInit } from '@angular/core';
import {WidgetService} from "../../service/widget.service";
import {RedWidgetComponent} from "../red-widget/red-widget.component";

@Component({
  selector: 'widgets-menu',
  templateUrl: './widgets-menu.component.html',
  styleUrls: ['./widgets-menu.component.scss']
})
export class WidgetsMenuComponent implements OnInit {

  widgets: any;
  myContext = {$implicit: 'World', localSk: 'Svet'};

  public dynamicTabs = [
    {
      label: 'User Information',
      component: RedWidgetComponent
    }
  ];

  constructor(
    private widget: WidgetService
  ) {
     this.widget.getWidgets().subscribe( wid => {
     this.widgets = wid
    })
  }

  ngOnInit() {
  }
}
