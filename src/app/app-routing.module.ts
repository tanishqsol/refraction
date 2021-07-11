import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RefractionPageComponent } from './refraction-page/refraction-page.component';
import { StationPageComponent } from './station-page/station-page.component';
import { Answer1PageComponent } from './station-page/station1/answer1-page/answer1-page.component';
import { Answer2PageComponent } from './station-page/station1/answer2-page/answer2-page.component';
import { Answer3PageComponent } from './station-page/station1/answer3-page/answer3-page.component';
import { Station1Component } from './station-page/station1/station1.component';
import { Station2Component } from './station-page/station2/station2.component';
import { Station3Component } from './station-page/station3/station3.component';
import { Station4Component } from './station-page/station4/station4.component';
import { Station5Component } from './station-page/station5/station5.component';

const routes: Routes = [
  { path: '', component: RefractionPageComponent, pathMatch: 'full' },
  { path: 'refraction', component: RefractionPageComponent, pathMatch: 'full' },
  { path: 'refraction/stationPage', component: StationPageComponent },
  { path: 'refraction/stationPage/station1', component: Station1Component },
  { path: 'refraction/stationPage/station2', component: Station2Component },
  { path: 'refraction/stationPage/station3', component: Station3Component },
  { path: 'refraction/stationPage/station4', component: Station4Component },
  { path: 'refraction/stationPage/station5', component: Station5Component },
  { path: 'refraction/stationPage/station1/answer1', component: Answer1PageComponent },
  { path: 'refraction/stationPage/station1/answer2', component: Answer2PageComponent },
  { path: 'refraction/stationPage/station1/answer3', component: Answer3PageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
