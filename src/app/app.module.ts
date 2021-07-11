import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
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
    InputSelectionComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    FlexLayoutModule,
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
