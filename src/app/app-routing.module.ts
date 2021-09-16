import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RefractionPageComponent } from './refraction-page/refraction-page.component';
import { StationPageComponent } from './station-page/station-page.component';
import { Answer1PageComponent } from './station-page/station1/answer1-page/answer1-page.component';
import { Answer2PageComponent } from './station-page/station1/answer2-page/answer2-page.component';
import { Answer3PageComponent } from './station-page/station1/answer3-page/answer3-page.component';
import { Answer1St1PageRteComponent } from './station-page/station1/station1-right/answer1-st1-page-rte/answer1-st1-page-rte.component';
import { Answer2St1PageRteComponent } from './station-page/station1/station1-right/answer2-st1-page-rte/answer2-st1-page-rte.component';
import { Answer3St1PageRteComponent } from './station-page/station1/station1-right/answer3-st1-page-rte/answer3-st1-page-rte.component';
import { Station1RightComponent } from './station-page/station1/station1-right/station1-right.component';
import { Station1Component } from './station-page/station1/station1.component';
import { Answer1St2PageComponent } from './station-page/station2/answer1-st2-page/answer1-st2-page.component';
import { Answer2St2PageComponent } from './station-page/station2/answer2-st2-page/answer2-st2-page.component';
import { Answer3St2PageComponent } from './station-page/station2/answer3-st2-page/answer3-st2-page.component';

import { Station2Component } from './station-page/station2/station2.component';
import { Answer1St3PageLteComponent } from './station-page/station3/answer1-st3-page-lte/answer1-st3-page-lte.component';
import { Answer2St3PageLteComponent } from './station-page/station3/answer2-st3-page-lte/answer2-st3-page-lte.component';
import { Answer3St3PageLteComponent } from './station-page/station3/answer3-st3-page-lte/answer3-st3-page-lte.component';
import { Station3Component } from './station-page/station3/station3.component';
import { Answer1St4PageLteComponent } from './station-page/station4/answer1-st4-page-lte/answer1-st4-page-lte.component';
import { Answer2St4PageLteComponent } from './station-page/station4/answer2-st4-page-lte/answer2-st4-page-lte.component';
import { Answer3St4PageLteComponent } from './station-page/station4/answer3-st4-page-lte/answer3-st4-page-lte.component';
import { Station4Component } from './station-page/station4/station4.component';
import { Answer1St5PageLteComponent } from './station-page/station5/answer1-st5-page-lte/answer1-st5-page-lte.component';
import { Answer2St5PageLteComponent } from './station-page/station5/answer2-st5-page-lte/answer2-st5-page-lte.component';
import { Answer3St5PageLteComponent } from './station-page/station5/answer3-st5-page-lte/answer3-st5-page-lte.component';
import { Station5Component } from './station-page/station5/station5.component';

const routes: Routes = [
  { path: '', component: RefractionPageComponent},
  { path: 'refraction', component: RefractionPageComponent},
  { path: 'refraction/stationPage', component: StationPageComponent },
  { path: 'refraction/stationPage/station1', component: Station1Component },
  { path: 'refraction/stationPage/station2', component: Station2Component },
  { path: 'refraction/stationPage/station3', component: Station3Component },
  { path: 'refraction/stationPage/station4', component: Station4Component },
  { path: 'refraction/stationPage/station5', component: Station5Component },
  { path: 'refraction/stationPage/station1-right', component: Station1RightComponent },
  
  { path: 'refraction/stationPage/station1/answer1', component: Answer1PageComponent },
  { path: 'refraction/stationPage/station1/answer2', component: Answer2PageComponent },
  { path: 'refraction/stationPage/station1/answer3', component: Answer3PageComponent },

  { path: 'refraction/stationPage/station1-right/answer1', component: Answer1St1PageRteComponent },
  { path: 'refraction/stationPage/station1-right/answer2', component: Answer2St1PageRteComponent },
  { path: 'refraction/stationPage/station1-right/answer3', component: Answer3St1PageRteComponent },

  { path: 'refraction/stationPage/station2/answer1', component: Answer1St2PageComponent },
  { path: 'refraction/stationPage/station2/answer2', component: Answer2St2PageComponent },
  { path: 'refraction/stationPage/station2/answer3', component: Answer3St2PageComponent },

  { path: 'refraction/stationPage/station3/answer1', component: Answer1St3PageLteComponent },
  { path: 'refraction/stationPage/station3/answer2', component: Answer2St3PageLteComponent },
  { path: 'refraction/stationPage/station3/answer3', component: Answer3St3PageLteComponent },

  { path: 'refraction/stationPage/station4/answer1', component: Answer1St4PageLteComponent },
  { path: 'refraction/stationPage/station4/answer2', component: Answer2St4PageLteComponent },
  { path: 'refraction/stationPage/station4/answer3', component: Answer3St4PageLteComponent },

  { path: 'refraction/stationPage/station5/answer1', component: Answer1St5PageLteComponent },
  { path: 'refraction/stationPage/station5/answer2', component: Answer2St5PageLteComponent },
  { path: 'refraction/stationPage/station5/answer3', component: Answer3St5PageLteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
