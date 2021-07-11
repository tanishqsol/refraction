import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InputSelectionComponent } from '../../input-selection/input-selection.component';

@Component({
  selector: 'app-answer1-page',
  templateUrl: './answer1-page.component.html',
  styleUrls: ['./answer1-page.component.css']
})
export class Answer1PageComponent implements OnInit {

  constructor(private location: Location, private route: Router, public dialog: MatDialog) { }
  isActive = true;
  ngOnInit(): void {
  }
  goBack() {
    this.location.back();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(InputSelectionComponent, {
      width: '20vw',
      height: '85vh'
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
