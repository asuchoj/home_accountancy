import { Component, OnInit } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

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

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateTo(){
   // this.http.get('http://localhost:3000/get').subscribe( t => console.log(t));
    //    // this.http.delete('http://localhost:3000/delete').subscribe( t => console.log(t))

    this.router.navigate(['widgets']).then(() => {
      console.log('Успешно')
    })
  }
}
