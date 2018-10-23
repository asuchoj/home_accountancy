import {Component}from '@angular/core';
import {WidgetService} from "./service/widget.service";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})

export class WidgetsComponent {

  /**
   * виджеты определенного user
   * */
  usersWidgets: any;

  /**
   * Виджеты для меню
   * */
  widgets: any;

  constructor(private widget: WidgetService) {
    this.widget.getWidgets().subscribe( widgets => this.widgets = widgets);
    this.widget.getUsersWidgets().subscribe(widgets => this.usersWidgets = widgets);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
