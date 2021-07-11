import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './data-service.service';
import { Location } from '@angular/common';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  isHomePage = true;
  title = 'refraction';
  constructor(private dataService: DataServiceService, private location: Location) { }
  ngOnInit(): void {
    this.dataService.hideTopBar(true)
  }
  goBack() {
    this.location.back();
  }
  hideToolBar() {
    this.isHomePage === false;
  }
}
