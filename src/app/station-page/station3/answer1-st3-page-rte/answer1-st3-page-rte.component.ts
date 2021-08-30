import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer1-st3-page-rte',
  templateUrl: './answer1-st3-page-rte.component.html',
  styleUrls: ['./answer1-st3-page-rte.component.css']
})
export class Answer1St3PageRteComponent implements OnInit {

  @ViewChild('rotateDiv') el: ElementRef;
  // answerName =
  //   {
  //     answerOne: false,
  //     answerTwo: false,
  //     answerThree: false
  //   };
  targetValue: any;
  mamaValue180: any = 180;
  answeValues = {
    targetValueAnswer1powerTop: '',
    targetValueAnswer1powerRight: '',
    targetValueAnswer1Sphere: '',
    targetValueAnswer1Cylinder: '',
    targetValueAnswer1Axis: ''

  }
  mamaValue90: any = 90;
  showLimitError: boolean = false;
  disableRotatePlus5: boolean = false;
  disableRotateMinus5: boolean = false;
  positionOfPower: any;
  constructor(private location: Location, private route: Router, public dialog: MatDialog, private dataService: DataServiceService) { }
  isActive = true;
  ngOnInit(): void {
  }
  goBack() {
    this.dataService.getAnswers([this.answeValues.targetValueAnswer1powerTop, this.answeValues.targetValueAnswer1powerRight, this.answeValues.targetValueAnswer1Axis, this.answeValues.targetValueAnswer1Cylinder, this.answeValues.targetValueAnswer1Sphere]);
    // this.dataService.getAnswers([this.answeValues[0] ? this.answeValues[0] : null, this.answeValues[1] ? this.answeValues[1] : null, this.answeValues[2] ? this.answeValues[2] : null, this.answeValues[3] ? this.answeValues[3] : null, this.answeValues[4] ? this.answeValues[4] : null]);
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
    if ((this.answeValues.targetValueAnswer1powerTop || this.answeValues.targetValueAnswer1powerRight) && ((positionOfPower === 'alternateAnswer1Sphere') || (positionOfPower === 'alternateAnswer1Cylinder') || (positionOfPower === '`alternateAnswer1Axis'))) {
      alert('this will reset previous selection')
      this.answeValues.targetValueAnswer1powerTop = null;
      this.answeValues.targetValueAnswer1powerRight = null;
    }

    else if ((this.answeValues.targetValueAnswer1Sphere || this.answeValues.targetValueAnswer1Cylinder || this.answeValues.targetValueAnswer1Axis) && ((positionOfPower === 'powerAnswer1Top') || (positionOfPower === 'powerAnswer1Right'))) {
      alert('this will reset previous selection')
      this.answeValues.targetValueAnswer1Sphere = null;
      this.answeValues.targetValueAnswer1Cylinder = null;
      this.answeValues.targetValueAnswer1Axis = null;
    }
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
        this.answeValues.targetValueAnswer1powerTop = result
      }
      else if (positionOfPower === 'powerAnswer1Right') {
        this.answeValues.targetValueAnswer1powerRight = result
      }
      else if (positionOfPower === 'alternateAnswer1Sphere') {
        this.answeValues.targetValueAnswer1Sphere = result
      }
      else if (positionOfPower === 'alternateAnswer1Cylinder') {
        this.answeValues.targetValueAnswer1Cylinder = result
      }
      else if (positionOfPower === 'alternateAnswer1Axis') {
        this.answeValues.targetValueAnswer1Axis = result
      }
    });
  }


}
