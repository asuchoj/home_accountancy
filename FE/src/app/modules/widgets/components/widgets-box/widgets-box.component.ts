import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'widgets-box',
  templateUrl: './widgets-box.component.html',
  styleUrls: ['./widgets-box.component.scss']
})
export class WidgetsBoxComponent implements OnInit {

  /**
   * Виджет, который требуется отрисовать
   * */
  @Input() widget: any;

  constructor() {}

  ngOnInit() {}

}
