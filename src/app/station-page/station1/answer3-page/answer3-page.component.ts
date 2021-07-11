import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-answer3-page',
  templateUrl: './answer3-page.component.html',
  styleUrls: ['./answer3-page.component.css']
})
export class Answer3PageComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  goBack() {
    this.location.back();
  }

}
