import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputSelectionComponent } from '../../input-selection/input-selection.component';
import { MatDialog } from '@angular/material/dialog';
import { DataServiceService } from '../../../data-service.service';

@Component({
  selector: 'app-answer2-page',
  templateUrl: './answer2-page.component.html',
  styleUrls: ['./answer2-page.component.css']
})
export class Answer2PageComponent implements OnInit {

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
    this.dataService.getAnswersStation1([this.workingInCentemeters, this.dioptricEquivalent], 'answer2St1Lte');
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
