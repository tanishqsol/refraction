import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-input-selection',
  templateUrl: './input-selection.component.html',
  styleUrls: ['./input-selection.component.css']
})
export class InputSelectionComponent implements OnInit {
  isTenChosen: boolean = false;
  positionOfPower: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  targetValue;
  targetValueAnswer1powerTop: any = "";
  targetValueAnswer1powerRight: any = "";
  targetValueAnswer1Sphere: any = "";
  targetValueAnswer1Cylinder: any = "";
  targetValueAnswer1Axis: any = "";
  isPlusMinusChosen: boolean = true;
  isZeroToTenChosen: boolean = true;
  isDecimalChosen: boolean = true;
  plusMinus = ["+", "-"]
  zeroToTen = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
  decimalFloat = [".00", ".25", ".50", ".75"]
  ngOnInit(): void {
    this.positionOfPower = this.data.positionOfPower
    console.log(this.positionOfPower)
  }
  appendZeroToTen(val) {
    if (this.positionOfPower === 'powerAnswer1Top') { }
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
  setAppropriatePowerValue() {
    this.targetValueAnswer1powerTop = this.positionOfPower === 'powerAnswer1Top' ? this.targetValue : ""
    this.targetValueAnswer1powerRight = this.positionOfPower === 'powerAnswer1Right' ? this.targetValue : ""
    this.targetValueAnswer1Sphere = this.positionOfPower === 'alternateAnswer1Sphere' ? this.targetValue : ""
    this.targetValueAnswer1Cylinder = this.positionOfPower === 'alternateAnswer1Cylinder' ? this.targetValue : ""
    this.targetValueAnswer1Axis = this.positionOfPower === 'alternateAnswer1Axis' ? this.targetValue : ""
  }
}