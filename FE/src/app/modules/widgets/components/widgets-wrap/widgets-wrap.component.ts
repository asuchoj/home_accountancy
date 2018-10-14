import { Component, OnInit } from '@angular/core';
import {WidgetService} from "../../service/widget.service";

@Component({
  selector: 'widgets-wrap',
  templateUrl: './widgets-wrap.component.html',
  styleUrls: ['./widgets-wrap.component.scss']
})
export class WidgetsWrapComponent implements OnInit {

  /**
   * виджеты определенного user
   * */
  usersWidgets: any;

  constructor(private widget: WidgetService) { }

  ngOnInit() {
    this.widget.getUsersWidgets().subscribe(widgets => this.usersWidgets = widgets);
  }
}
