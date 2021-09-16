import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { DataServiceService } from '../../data-service.service';


@Component({
  selector: 'app-station1',
  templateUrl: './station1.component.html',
  styleUrls: ['./station1.component.css']
})
export class Station1Component implements OnInit {
  myAnswers: any[];
  myAnswers1: any;
  myAnswers2: any;
  myAnswers3: any;
  myAnswers1rte: any;
  myAnswers2rte: any;
  myAnswers3rte: any;

  constructor(private location: Location, private route: Router, private dataService: DataServiceService) { }
  myAnswersToShow;
  ngOnInit(): void {
    this.dataService.answer1St1Lte.subscribe(data => this.myAnswers1 = data.join(' '))
    this.dataService.answer2St1Lte.subscribe(data => this.myAnswers2 = data.join(' '))
    this.dataService.answer3St1Lte.subscribe(data => this.myAnswers3 = data.join(' '))
  }
  goBack() {
    alert('Are you sure you want to cancel this station?')
    this.route.navigate(['/refraction/stationPage'])
  }
  finishStation1() {
    console.log("station1 finished")
  }
  goToLeft() {
    this.route.navigate(['/refraction/stationPage/station1'])
  }
  goToRight() {
    this.route.navigate(['/refraction/stationPage/station1-right'])
  }
  goToAnswer1Page() {
    this.route.navigate(['/refraction/stationPage/station1/answer1'])
  }
  goToAnswer2Page() {
    this.route.navigate(['/refraction/stationPage/station1/answer2'])
  }
  goToAnswer3Page() {
    this.route.navigate(['/refraction/stationPage/station1/answer3'])
  }
}
