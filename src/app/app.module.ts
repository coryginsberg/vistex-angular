// Root Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Component Imports
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// Extra Angular Imports
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { VideosComponent } from './videos/videos.component';
import { WebinarsComponent } from './webinars/webinars.component';
import { EventsComponent } from './events/events.component';
import { VistasComponent } from './vistas/vistas.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    // Catch-all: Anything not declared above goes here.
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CaseStudiesComponent,
    VideosComponent,
    WebinarsComponent,
    EventsComponent,
    VistasComponent,
    NotFoundComponent
  ],

  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    NgbModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
