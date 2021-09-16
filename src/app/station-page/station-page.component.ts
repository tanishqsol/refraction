import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-station-page',
  templateUrl: './station-page.component.html',
  styleUrls: ['./station-page.component.css']
})
export class StationPageComponent implements OnInit {
  showLogout: boolean;
  isStartClicked: boolean;
  station1color;
  station2color;
  station3color;
  station4color;
  station5color;
  constructor(private location: Location, private route: Router) { }
  ngOnInit(): void {
  }
  goBack() {
    this.location.back();
  }
  startOsce() {
    this.isStartClicked = !this.isStartClicked;
    if (this.station1color) {

      this.route.navigate(['refraction/stationPage/station1'])
    }
    if (this.station2color) {
      this.route.navigate(['refraction/stationPage/station2'])
    }
    if (this.station3color) {

      this.route.navigate(['refraction/stationPage/station3'])
    }
    if (this.station4color) {
      this.route.navigate(['refraction/stationPage/station4'])
    }
    if (this.station5color) {
      this.route.navigate(['refraction/stationPage/station5'])
    }
    if (!(this.station1color || this.station2color || this.station4color || this.station3color || this.station5color)) {
      alert("please select a Station");
      this.isStartClicked = !this.isStartClicked;

    }
  }
  station1Click() {
    this.station1color = !this.station1color
  }
  station2Click() {
    this.station2color = !this.station2color
  }
  station3Click() {
    this.station3color = !this.station3color
  }
  station4Click() {
    this.station4color = !this.station4color
  }
  station5Click() {
    this.station5color = !this.station5color
  }
}
