import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-answer1-page',
  templateUrl: './answer1-page.component.html',
  styleUrls: ['./answer1-page.component.css']
})
export class Answer1PageComponent implements OnInit {

  constructor(private location: Location, private route: Router) { }
  isActive = true;
  ngOnInit(): void {
  }
  goBack() {
    this.location.back();
  }
}
