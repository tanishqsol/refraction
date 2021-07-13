import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-station4',
  templateUrl: './station4.component.html',
  styleUrls: ['./station4.component.css']
})
export class Station4Component implements OnInit {
  constructor(private location: Location, private route: Router) { }

  ngOnInit(): void {
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
