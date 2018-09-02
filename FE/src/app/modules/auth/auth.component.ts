import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  /**
   * название сайтов, акаунты которых используются для входа в приложение
   * */
  accounts: any = [
    {name: 'Google', icon: 'accountancy-google'},
    {name: 'VK', icon: 'accountancy-vk'}
  ];

  constructor() {}

  ngOnInit() {}
}
