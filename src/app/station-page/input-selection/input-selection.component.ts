import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-selection',
  templateUrl: './input-selection.component.html',
  styleUrls: ['./input-selection.component.css']
})
export class InputSelectionComponent implements OnInit {
  isTenChosen: boolean = false;
  constructor() { }
  targetValue: any = "";
  isPlusMinusChosen:boolean = true;
  isZeroToTenChosen:boolean = true;
  isDecimalChosen:boolean = true;
  plusMinus = ["+", "-"]
  zeroToTen = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
  decimalFloat = [".00", ".25", ".50", ".75"]
  ngOnInit(): void {
  }
  appendZeroToTen(val) {
    this.targetValue += val.toString()
    this.isTenChosen = val == "10" ? true : false;
    this.targetValue = this.targetValue.length > 5 ? "" : this.targetValue
  }
  appendPlusMinus(val) {
    this.targetValue += val.toString()
    this.targetValue = this.targetValue.length > 5 ? "" : this.targetValue
  }
  appendDecimal(val) {
    this.targetValue += val.toString()
    if (this.isTenChosen) {
      this.targetValue = this.targetValue.length > 6 ? "" : this.targetValue
    }
    else {
      this.targetValue = this.targetValue.length > 5 ? "" : this.targetValue

    }
  }
}