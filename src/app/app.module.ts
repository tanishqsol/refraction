import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RefractionPageComponent } from './refraction-page/refraction-page.component';
import { StationPageComponent } from './station-page/station-page.component';
import { Station1Component } from './station-page/station1/station1.component';
import { Station2Component } from './station-page/station2/station2.component';
import { Station3Component } from './station-page/station3/station3.component';
import { Station4Component } from './station-page/station4/station4.component';
import { Station5Component } from './station-page/station5/station5.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Answer1PageComponent } from './station-page/station1/answer1-page/answer1-page.component';
import { Answer2PageComponent } from './station-page/station1/answer2-page/answer2-page.component';
import { Answer3PageComponent } from './station-page/station1/answer3-page/answer3-page.component';
import { InputSelectionComponent } from './station-page/input-selection/input-selection.component';
import { Answer1St2PageComponent } from './station-page/station2/answer1-st2-page/answer1-st2-page.component';
import { Answer2St2PageComponent } from './station-page/station2/answer2-st2-page/answer2-st2-page.component';
import { Answer3St2PageComponent } from './station-page/station2/answer3-st2-page/answer3-st2-page.component';
import { Answer1St2PageRteComponent } from './station-page/station2/answer1-st2-page-rte/answer1-st2-page-rte.component';
import { Answer2St2PageRteComponent } from './station-page/station2/answer2-st2-page-rte/answer2-st2-page-rte.component';
import { Answer3St2PageRteComponent } from './station-page/station2/answer3-st2-page-rte/answer3-st2-page-rte.component';
import { Answer1St1PageRteComponent } from './station-page/station1/answer1-st1-page-rte/answer1-st1-page-rte.component';
import { Answer2St1PageRteComponent } from './station-page/station1/answer2-st1-page-rte/answer2-st1-page-rte.component';
import { Answer3St1PageRteComponent } from './station-page/station1/answer3-st1-page-rte/answer3-st1-page-rte.component';
import { Answer3St3PageRteComponent } from './station-page/station3/answer3-st3-page-rte/answer3-st3-page-rte.component';
import { Answer2St3PageRteComponent } from './station-page/station3/answer2-st3-page-rte/answer2-st3-page-rte.component';
import { Answer1St3PageRteComponent } from './station-page/station3/answer1-st3-page-rte/answer1-st3-page-rte.component';
import { Answer1St3PageLteComponent } from './station-page/station3/answer1-st3-page-lte/answer1-st3-page-lte.component';
import { Answer2St3PageLteComponent } from './station-page/station3/answer2-st3-page-lte/answer2-st3-page-lte.component';
import { Answer3St3PageLteComponent } from './station-page/station3/answer3-st3-page-lte/answer3-st3-page-lte.component';
import { Answer1St4PageRteComponent } from './station-page/station4/answer1-st4-page-rte/answer1-st4-page-rte.component';
import { Answer2St4PageRteComponent } from './station-page/station4/answer2-st4-page-rte/answer2-st4-page-rte.component';
import { Answer3St4PageRteComponent } from './station-page/station4/answer3-st4-page-rte/answer3-st4-page-rte.component';
import { Answer1St4PageLteComponent } from './station-page/station4/answer1-st4-page-lte/answer1-st4-page-lte.component';
import { Answer2St4PageLteComponent } from './station-page/station4/answer2-st4-page-lte/answer2-st4-page-lte.component';
import { Answer3St4PageLteComponent } from './station-page/station4/answer3-st4-page-lte/answer3-st4-page-lte.component';
import { Answer1St5PageRteComponent } from './station-page/station5/answer1-st5-page-rte/answer1-st5-page-rte.component';
import { Answer2St5PageRteComponent } from './station-page/station5/answer2-st5-page-rte/answer2-st5-page-rte.component';
import { Answer3St5PageRteComponent } from './station-page/station5/answer3-st5-page-rte/answer3-st5-page-rte.component';
import { Answer1St5PageLteComponent } from './station-page/station5/answer1-st5-page-lte/answer1-st5-page-lte.component';
import { Answer2St5PageLteComponent } from './station-page/station5/answer2-st5-page-lte/answer2-st5-page-lte.component';
import { Answer3St5PageLteComponent } from './station-page/station5/answer3-st5-page-lte/answer3-st5-page-lte.component';

@NgModule({
  declarations: [
    AppComponent,
    RefractionPageComponent,
    StationPageComponent,
    Station1Component,
    Station2Component,
    Station3Component,
    Station4Component,
    Station5Component,
    Answer1PageComponent,
    Answer2PageComponent,
    Answer3PageComponent,
    InputSelectionComponent,
    Answer1St2PageComponent,
    Answer2St2PageComponent,
    Answer3St2PageComponent,
    Answer1St2PageRteComponent,
    Answer2St2PageRteComponent,
    Answer3St2PageRteComponent,
    Answer1St1PageRteComponent,
    Answer2St1PageRteComponent,
    Answer3St1PageRteComponent,
    Answer3St3PageRteComponent,
    Answer2St3PageRteComponent,
    Answer1St3PageRteComponent,
    Answer1St3PageLteComponent,
    Answer2St3PageLteComponent,
    Answer3St3PageLteComponent,
    Answer1St4PageRteComponent,
    Answer2St4PageRteComponent,
    Answer3St4PageRteComponent,
    Answer1St4PageLteComponent,
    Answer2St4PageLteComponent,
    Answer3St4PageLteComponent,
    Answer1St5PageRteComponent,
    Answer2St5PageRteComponent,
    Answer3St5PageRteComponent,
    Answer1St5PageLteComponent,
    Answer2St5PageLteComponent,
    Answer3St5PageLteComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    AppRoutingModule,
    RouterModule,

    BrowserAnimationsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
