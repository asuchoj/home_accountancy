import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  readonly WIDGET_URL = 'http://localhost:3000/widgets';

  constructor(
    private http: HttpClient
  ) {}

  getWidgets(){
    return this.http.get(this.WIDGET_URL).pipe(
      tap(t => console.log(t))
    )
  }
}
