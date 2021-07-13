import { Component, OnInit, ViewChild } from '@angular/core';
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
  mamaValue90: any = 90;
  showLimitError: boolean = false;
  disableRotatePlus5: boolean = false;
  disableRotateMinus5: boolean = false;
  constructor(private location: Location, private route: Router, public dialog: MatDialog) { }
  isActive = true;
  ngOnInit(): void {
  }
  goBack() {
    this.location.back();
  }

  rotatePlus5() {
    // if section2 is Active, then
    //alert(To answer this question in Power Cross format the values you have entered into the Spherocylinder will be removed\n\nAre you sure you want to proceed')
    //alert('To answer this question in Spherocylinder format the values you have entered into the Power Cross will be removed\n\nAre you sure you want to proceed')

    if (this.mamaValue180 < 180 && this.mamaValue180 >90) {
      this.mamaValue180 += 5;
      this.mamaValue90 += 5;
      this.el.nativeElement.style.transform += "rotate(-5deg)";
    }
    else if (this.mamaValue180 == 90 && this.mamaValue90 == 180) {
          alert ("Invalid axis - rotation beyond axis limit");
          this.disableRotatePlus5 = true;
    }
    else if (this.mamaValue180 >=5 && this.mamaValue180 < 89) {
            	this.mamaValue180 +=5;
            	this.mamaValue90 += 5;
            	this.el.nativeElement.style.transform += "rotate(-5deg)";
    }
    else if (this.mamaValue180 == 180 && this.mamaValue90 == 90) {
          this.mamaValue180=5;
          this.mamaValue90 +=5;
          this.el.nativeElement.style.transform += "rotate(-5deg)";
    }
    this.disableRotateMinus5 = false;
  }

  rotateMinus5() {

    if (this.mamaValue180 <= 180 && this.mamaValue180 >90) {
      this.mamaValue180 -= 5;
      this.mamaValue90 -= 5;
      this.el.nativeElement.style.transform += "rotate(+5deg)";
    }
    else if (this.mamaValue180 == 90 && this.mamaValue90 == 0) {
      alert ("Invalid axis - rotation beyond axis limit")
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
      this.mamaValue180 -=5;
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
  openDialog(): void {
    const dialogRef = this.dialog.open(InputSelectionComponent, {
      width: '15vw',
      height: '80vh',
      data: { targetValue: this.targetValue }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.targetValue = result;
    });
  }
}
