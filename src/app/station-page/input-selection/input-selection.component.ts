import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-selection',
  templateUrl: './input-selection.component.html',
  styleUrls: ['./input-selection.component.css']
})
export class InputSelectionComponent implements OnInit {

  constructor() { }
  plusMinus = ["+", "-"]
  zeroToTen = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  decimalFloat = [0.00, 0.25, 0.50, 0.75]
  ngOnInit(): void {
  }

}
