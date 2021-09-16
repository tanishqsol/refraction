import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../../../data-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-answer3-st1-page-rte',
  templateUrl: './answer3-st1-page-rte.component.html',
  styleUrls: ['./answer3-st1-page-rte.component.css']
})
export class Answer3St1PageRteComponent implements OnInit {

  myAnswers1: any;
  myAnswers2: any;

  constructor(private location: Location, private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.dataService.answer1St1Rte.subscribe(data => this.myAnswers1 = data.join(' '))
    this.dataService.answer2St1Rte.subscribe(data => this.myAnswers2 = data.join(' '))
  
  }
  goBack() {
    this.location.back();
  }

}
