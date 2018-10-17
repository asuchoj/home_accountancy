import {Component, Input} from '@angular/core';

@Component({
  selector: 'widgets-list',
  templateUrl: './widgets-list.component.html',
  styleUrls: ['./widgets-list.component.scss']
})
export class WidgetsListComponent {

  /**
   * Виджет, который требуется отрисовать
   * */
  @Input() widget: any;
}
