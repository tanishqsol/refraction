import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { DataServiceService } from '../../data-service.service';

@Component({
  selector: 'app-station3',
  templateUrl: './station3.component.html',
  styleUrls: ['./station3.component.css']
})
export class Station3Component implements OnInit {

  myAnswers: any[];

  constructor(private location: Location, private route: Router, private dataService: DataServiceService) { }
  myAnswersToShow;
  ngOnInit(): void {
    this.dataService.answers.subscribe(data => this.myAnswers= data)
    this.myAnswersToShow= this.myAnswers.filter(val=>val!==null)
    console.log(this.myAnswersToShow)
  }
  goBack() {
    this.location.back();
  }
  finishStation1() {
    console.log("station1 finished")
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
