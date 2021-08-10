import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InputSelectionComponent } from '../../input-selection/input-selection.component';

@Component({
  selector: 'app-answer1-page',
  templateUrl: './answer1-page.component.html',
  styleUrls: ['./answer1-page.component.css']
})
export class Answer1PageComponent implements OnInit {
  @ViewChild('rotateDiv') el: ElementRef;
  targetValue: any;
  // power='power';
  mamaValue180: any = 180;
  targetValueAnswer1powerTop: any = "";
  targetValueAnswer1powerRight: any = "";
  targetValueAnswer1Sphere: any = "";
  targetValueAnswer1Cylinder: any = "";
  targetValueAnswer1Axis: any = "";
  mamaValue90: any = 90;
  showLimitError: boolean = false;
  disableRotatePlus5: boolean = false;
  disableRotateMinus5: boolean = false;
  positionOfPower: any;
  constructor(private location: Location, private route: Router, public dialog: MatDialog) { }
  isActive = true;
  ngOnInit(): void {
  }
  goBack() {
    this.location.back();
  }
  rotatePlus5() {
    this.disableRotateMinus5 = false;
    this.el.nativeElement.style.transform += "rotate(-5deg)";
    this.mamaValue180 += 5;
    this.mamaValue90 += 5;
    if (this.mamaValue180 > 265 || this.mamaValue90 > 175) {
      alert("Limits Reached")
      this.disableRotatePlus5 = true;
    }
  }
  rotateMinus5() {
    this.disableRotatePlus5 = false;
    this.el.nativeElement.style.transform += "rotate(+5deg)";
    this.mamaValue180 -= 5;
    this.mamaValue90 -= 5;
    if (this.mamaValue180 < 95 || this.mamaValue90 < 5) {
      alert("Limits Reached")
      this.disableRotateMinus5 = true;
    }
  }
  resetRotation() {
    this.el.nativeElement.style.transform = "rotate(0deg)";
    this.mamaValue180 = 180;
    this.mamaValue90 = 90;
    this.disableRotateMinus5 = false;
    this.disableRotatePlus5 = false;
  }
  openDialog(positionOfPower): void {
    const dialogRef = this.dialog.open(InputSelectionComponent, {
      width: '15vw',
      height: '80vh',
      data: {
        positionOfPower: positionOfPower
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("this is the result: ", result)

      this.targetValueAnswer1powerTop = positionOfPower === 'powerAnswer1Top' ? result : 0;
      this.targetValueAnswer1powerRight = positionOfPower === 'powerAnswer1Right' ? result : 0;
      this.targetValueAnswer1Sphere = positionOfPower === 'alternateAnswer1Sphere' ? result : 0;
      this.targetValueAnswer1Cylinder = positionOfPower === 'alternateAnswer1Cylinder' ? result : 0;
      this.targetValueAnswer1Axis = positionOfPower === 'alternateAnswer1Axis' ? result : 0;
    });
  }
}
