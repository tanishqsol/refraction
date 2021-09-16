import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../../../data-service.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-station1-right',
  templateUrl: './station1-right.component.html',
  styleUrls: ['./station1-right.component.css']
})
export class Station1RightComponent implements OnInit {

  myAnswers: any[];
  myAnswers1rte: any;
  myAnswers2rte: any;
  myAnswers3rte: any;

  constructor(private location: Location, private route: Router, private dataService: DataServiceService) { }
  myAnswersToShow;
  ngOnInit(): void {
    this.dataService.answer1St1Rte.subscribe(data => this.myAnswers1rte = data.join(' '))
    this.dataService.answer2St1Rte.subscribe(data => this.myAnswers2rte = data.join(' '))
    this.dataService.answer3St1Rte.subscribe(data => this.myAnswers3rte = data.join(' '))
  }
  goBack() {
    this.location.back();
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
    this.route.navigate(['/refraction/stationPage/station1-right/answer1'])
  }
  goToAnswer2Page() {
    this.route.navigate(['/refraction/stationPage/station1-right/answer2'])
  }
  goToAnswer3Page() {
    this.route.navigate(['/refraction/stationPage/station1-right/answer3'])
  }

}
