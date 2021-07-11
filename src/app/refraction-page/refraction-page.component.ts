import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';


@Component({
  selector: 'app-refraction-page',
  templateUrl: './refraction-page.component.html',
  styleUrls: ['./refraction-page.component.css']
})
export class RefractionPageComponent implements OnInit {
isHomePage;
  showLogin: boolean;
  showLogout: boolean;
  constructor(private dataService: DataServiceService) { }
  
  ngOnInit(){
    this.showLogin = true;
    this.showLogout = true;
  }
}
