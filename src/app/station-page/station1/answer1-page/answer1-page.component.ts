import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  // answerName =
  //   {
  //     answerOne: false,
  //     answerTwo: false,
  //     answerThree: false
  //   };
  targetValue: any;
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
    if (this.mamaValue180 < 180 && this.mamaValue180 > 90) {
      this.mamaValue180 += 5;
      this.mamaValue90 += 5;
      this.el.nativeElement.style.transform += "rotate(-5deg)";
    }
    else if (this.mamaValue180 == 90 && this.mamaValue90 == 180) {
      alert("Invalid axis - rotation beyond axis limit");
      this.disableRotatePlus5 = true;
    }
    else if (this.mamaValue180 >= 5 && this.mamaValue180 < 89) {
      this.mamaValue180 += 5;
      this.mamaValue90 += 5;
      this.el.nativeElement.style.transform += "rotate(-5deg)";
    }
    else if (this.mamaValue180 == 180 && this.mamaValue90 == 90) {
      this.mamaValue180 = 5;
      this.mamaValue90 += 5;
      this.el.nativeElement.style.transform += "rotate(-5deg)";
    }
    this.disableRotateMinus5 = false;
  }

  rotateMinus5() {

    if (this.mamaValue180 <= 180 && this.mamaValue180 > 90) {
      this.mamaValue180 -= 5;
      this.mamaValue90 -= 5;
      this.el.nativeElement.style.transform += "rotate(+5deg)";
    }
    else if (this.mamaValue180 == 90 && this.mamaValue90 == 0) {
      alert("Invalid axis - rotation beyond axis limit")
      this.disableRotateMinus5 = true;
    }
    else if (this.mamaValue180 == 5) {
      this.el.nativeElement.style.transform = "rotate(0deg)";
      this.mamaValue180 = 180;
      this.mamaValue90 = 90;
      this.disableRotateMinus5 = false;
      this.disableRotatePlus5 = false;
    }
    else if (this.mamaValue180 > 5 && this.mamaValue180 <= 90) {
      this.mamaValue180 -= 5;
      this.mamaValue90 -= 5;
      this.el.nativeElement.style.transform += "rotate(+5deg)";
    }
    this.disableRotatePlus5 = false;
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
        positionOfPower: positionOfPower,
        answerName: 'answerOne'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("this is the result: ", result)
      if (positionOfPower === 'powerAnswer1Top') {
        this.targetValueAnswer1powerTop = result
      }
      else if (positionOfPower === 'powerAnswer1Right') {
        this.targetValueAnswer1powerRight = result
      }
      else if (positionOfPower === 'alternateAnswer1Sphere') {
        this.targetValueAnswer1Sphere = result
      }
      else if (positionOfPower === 'alternateAnswer1Cylinder') {
        this.targetValueAnswer1Cylinder = result
      }
      else if (positionOfPower === 'alternateAnswer1Axis') {
        this.targetValueAnswer1Axis = result
      }
    });
  }
}
