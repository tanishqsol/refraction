import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { DataServiceService } from '../../../data-service.service';

@Component({
  selector: 'app-answer3-page',
  templateUrl: './answer3-page.component.html',
  styleUrls: ['./answer3-page.component.css']
})
export class Answer3PageComponent implements OnInit {
  myAnswers1: any;
  myAnswers2: any;

  constructor(private location: Location, private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.dataService.answer1St1Lte.subscribe(data => this.myAnswers1 = data.join(' '))
    this.dataService.answer2St1Lte.subscribe(data => this.myAnswers2 = data.join(' '))
  
  }
  goBack() {
    this.location.back();
  }

}
