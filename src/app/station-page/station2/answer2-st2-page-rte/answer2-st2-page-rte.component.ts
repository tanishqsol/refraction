import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InputSelectionComponent } from '../../input-selection/input-selection.component';
import { Location } from '@angular/common';


@Component({
  selector: 'app-answer2-st2-page-rte',
  templateUrl: './answer2-st2-page-rte.component.html',
  styleUrls: ['./answer2-st2-page-rte.component.css']
})
export class Answer2St2PageRteComponent implements OnInit {


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
