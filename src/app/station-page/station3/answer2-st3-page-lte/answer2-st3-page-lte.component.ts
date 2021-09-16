import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { InputSelectionComponent } from '../../input-selection/input-selection.component';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataServiceService } from '../../../data-service.service';

@Component({
  selector: 'app-answer2-st3-page-lte',
  templateUrl: './answer2-st3-page-lte.component.html',
  styleUrls: ['./answer2-st3-page-lte.component.css']
})
export class Answer2St3PageLteComponent implements OnInit {

  constructor(private location: Location, private route: Router, public dialog: MatDialog) { }
  workingInCentemeters;
  dioptricEquivalent;
  ngOnInit(): void {
  }
  goBack() {
    this.location.back();
  }
  openDialog(positionOfPower): void {
    const dialogRef = this.dialog.open(InputSelectionComponent, {
      width: '15vw',
      height: '80vh',
      data: {
        positionOfPower: positionOfPower,
        answerName: 'answerTwo_one'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("this is the result: ", result)

      if (positionOfPower === 'workingInCentemeters') {
        this.workingInCentemeters = result
      }
      else if (positionOfPower === 'dioptricEquivalent') {
        this.dioptricEquivalent = result
      }
    });
  }

}
