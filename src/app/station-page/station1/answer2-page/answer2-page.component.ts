import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-answer2-page',
  templateUrl: './answer2-page.component.html',
  styleUrls: ['./answer2-page.component.css']
})
export class Answer2PageComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  goBack() {
    this.location.back();
  }
}
