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
  defaultLoad = [];
  targetValueAnswer1powerTop: any = "";
  targetValueAnswer1powerRight: any = "";
  targetValueAnswer1Sphere: any = "";
  targetValueAnswer1Cylinder: any = "";
  targetValueAnswer1Axis: any = "";
  isPlusMinusChosen: boolean = false;
  isZeroToTenChosen: boolean = false;
  isDecimalChosen: boolean = false;
  plusMinus = ["+", "-"]
  zeroToTen = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
  decimalFloat = [".00", ".25", ".50", ".75"]
  ngOnInit(): void {
    this.positionOfPower = this.data.positionOfPower
    this.defaultLoad[0] = this.plusMinus[0]
    this.defaultLoad[1] = this.zeroToTen[0]
    this.defaultLoad[2] = this.decimalFloat[0]
    this.targetValue = this.defaultLoad[0] + this.defaultLoad[1] + this.defaultLoad[2]
    console.log(this.positionOfPower)
  }

  appendZeroToTen(val, event) {
    console.log(event)
    this.defaultLoad[1] = val
    this.targetValue = this.defaultLoad[0] + this.defaultLoad[1] + this.defaultLoad[2]
    this.isZeroToTenChosen = event.checked ? true : false
  }
  appendPlusMinus(val) {
    this.defaultLoad[0] = val
    this.targetValue = this.defaultLoad[0] + this.defaultLoad[1] + this.defaultLoad[2]
    this.isPlusMinusChosen = true;

  }
  appendDecimal(val) {
    this.defaultLoad[2] = val
    this.targetValue = this.defaultLoad[0] + this.defaultLoad[1] + this.defaultLoad[2]
    this.isDecimalChosen = true;
  }

  setAppropriatePowerValue() {
    this.targetValueAnswer1powerTop = this.positionOfPower === 'powerAnswer1Top' ? this.targetValue : ""
    this.targetValueAnswer1powerRight = this.positionOfPower === 'powerAnswer1Right' ? this.targetValue : ""
    this.targetValueAnswer1Sphere = this.positionOfPower === 'alternateAnswer1Sphere' ? this.targetValue : ""
    this.targetValueAnswer1Cylinder = this.positionOfPower === 'alternateAnswer1Cylinder' ? this.targetValue : ""
    this.targetValueAnswer1Axis = this.positionOfPower === 'alternateAnswer1Axis' ? this.targetValue : ""
  }
}