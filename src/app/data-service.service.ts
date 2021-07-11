import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  public isHomePage = new BehaviorSubject(true);
  constructor() { }
  hideTopBar(val){
    this.isHomePage.next(val);
  }
}
