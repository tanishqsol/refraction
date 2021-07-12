import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-selection',
  templateUrl: './input-selection.component.html',
  styleUrls: ['./input-selection.component.css']
})
export class InputSelectionComponent implements OnInit {

  constructor() { }
  targetValue: any = "";
  plusMinus = ["+", "-"]
  zeroToTen = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
  decimalFloat = [".00", ".25", ".50", ".75"]
  ngOnInit(): void {
  }
  appendZeroToTen(val) {
    this.targetValue += val.toString()
    console.log(this.targetValue)

  }
  appendPlusMinus(val) {
    this.targetValue += val.toString()
    console.log(this.targetValue)


  }
  appendDecimal(val) {
    this.targetValue += val.toString()
    console.log(this.targetValue)
  }
}
