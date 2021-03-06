import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, tap} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  readonly WIDGET_URL = '/api/widgets-manager/widgets';
  readonly USERS_WIDGETS_URL = '/api/widgets-manager/widgets/user';

  constructor(
    private http: HttpClient
  ) {}

  getWidgets(){
    return this.http.get(this.WIDGET_URL)
  }

  getUsersWidgets(){
    return this.http.get(this.USERS_WIDGETS_URL).pipe(
      map((user: any) => user.widgets)
    )
  }
}
