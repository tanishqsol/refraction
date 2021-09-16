import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { InputSelectionComponent } from '../../../input-selection/input-selection.component';
import { DataServiceService } from '../../../../data-service.service';

@Component({
  selector: 'app-answer2-st1-page-rte',
  templateUrl: './answer2-st1-page-rte.component.html',
  styleUrls: ['./answer2-st1-page-rte.component.css']
})
export class Answer2St1PageRteComponent implements OnInit {

  constructor(private location: Location, private route: Router, private dataService: DataServiceService, public dialog: MatDialog) { }
  workingInCentemeters;
  dioptricEquivalent;
  answeValues = {
    targetValueAnswer1powerTop: '',
    targetValueAnswer1powerRight: '',
    targetValueAnswer1Sphere: '',
    targetValueAnswer1Cylinder: '',
    targetValueAnswer1Axis: ''

  }
  ngOnInit(): void {
  }
  goBack() {
    this.dataService.getAnswersSt1Right([this.workingInCentemeters, this.dioptricEquivalent], 'answer2St1Rte');
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
