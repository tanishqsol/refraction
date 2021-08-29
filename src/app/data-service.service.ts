import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  isHomePage = new BehaviorSubject(true);
  answers = new BehaviorSubject<any[]>([]);
  constructor() { }
  hideTopBar(val) {
    this.isHomePage.next(val);
  }

  getAnswers(val) {
    this.answers.next(val)
  }
}
