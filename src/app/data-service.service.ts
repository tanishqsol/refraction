import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  isHomePage = new BehaviorSubject(true);
  answers = new BehaviorSubject<any[]>([]);


  answer1St1Rte = new BehaviorSubject<any[]>([]);
  answer2St1Rte = new BehaviorSubject<any[]>([]);
  answer3St1Rte = new BehaviorSubject<any[]>([]);
  answer1St1Lte = new BehaviorSubject<any[]>([]);
  answer2St1Lte = new BehaviorSubject<any[]>([]);
  answer3St1Lte = new BehaviorSubject<any[]>([]);

  answer1St2Rte = new BehaviorSubject<any[]>([]);
  answer2St2Rte = new BehaviorSubject<any[]>([]);
  answer3St2Rte = new BehaviorSubject<any[]>([]);
  answer1St2Lte = new BehaviorSubject<any[]>([]);
  answer2St2Lte = new BehaviorSubject<any[]>([]);
  answer3St2Lte = new BehaviorSubject<any[]>([]);

  answer1St3Rte = new BehaviorSubject<any[]>([]);
  answer2St3Rte = new BehaviorSubject<any[]>([]);
  answer3St3Rte = new BehaviorSubject<any[]>([]);
  answer1St3Lte = new BehaviorSubject<any[]>([]);
  answer2St3Lte = new BehaviorSubject<any[]>([]);
  answer3St3Lte = new BehaviorSubject<any[]>([]);

  answer1St4Rte = new BehaviorSubject<any[]>([]);
  answer2St4Rte = new BehaviorSubject<any[]>([]);
  answer3St4Rte = new BehaviorSubject<any[]>([]);
  answer1St4Lte = new BehaviorSubject<any[]>([]);
  answer2St4Lte = new BehaviorSubject<any[]>([]);
  answer3St4Lte = new BehaviorSubject<any[]>([]);

  answer1St5Rte = new BehaviorSubject<any[]>([]);
  answer2St5Rte = new BehaviorSubject<any[]>([]);
  answer3St5Rte = new BehaviorSubject<any[]>([]);
  answer1St5Lte = new BehaviorSubject<any[]>([]);
  answer2St5Lte = new BehaviorSubject<any[]>([]);
  answer3St5Lte = new BehaviorSubject<any[]>([]);

  constructor() { }
  hideTopBar(val) {
    this.isHomePage.next(val);
  }
  getAnswers(val) {
    console.log(val)
  }

  getAnswersStation1(val, pos) {
    if (pos === 'answer1St1Lte') {
      this.answer1St1Lte.next(val)
    }
    if (pos === 'answer2St1Lte') {
      this.answer2St1Lte.next(val)
    }
  }
  getAnswersSt1Right(val, pos) {
    console.log('tanishq check 2222', val)
    if (pos === 'dumm') {
      this.answer1St1Rte.next(val)
    }
    if (pos === 'answer2St1Rte') {
      this.answer2St1Rte.next(val)
    }
  }
  getAnswersStation2(val) {
    this.answer1St1Rte.next(val)
    this.answer2St1Rte.next(val)
    this.answer3St1Rte.next(val)
    this.answer1St1Lte.next(val)
    this.answer2St1Lte.next(val)
    this.answer3St1Lte.next(val)
  }
  getAnswersStation3(val) {
    this.answer1St1Rte.next(val)
    this.answer2St1Rte.next(val)
    this.answer3St1Rte.next(val)
    this.answer1St1Lte.next(val)
    this.answer2St1Lte.next(val)
    this.answer3St1Lte.next(val)
  }
  getAnswersStation4(val) {
    this.answer1St1Rte.next(val)
    this.answer2St1Rte.next(val)
    this.answer3St1Rte.next(val)
    this.answer1St1Lte.next(val)
    this.answer2St1Lte.next(val)
    this.answer3St1Lte.next(val)
  }
  getAnswersStation5(val) {
    this.answer1St1Rte.next(val)
    this.answer2St1Rte.next(val)
    this.answer3St1Rte.next(val)
    this.answer1St1Lte.next(val)
    this.answer2St1Lte.next(val)
    this.answer3St1Lte.next(val)
  }
}
