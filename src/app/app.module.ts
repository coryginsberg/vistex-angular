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

const routes: Routes = [
  {
    path: 'resources',
    component: HomeComponent
  },
  {
    // Catch-all: Anything not declared above goes here.
    // TODO: Make this a 404 page.
    path: '**',
    component: HomeComponent
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
    VistasComponent
  ],

  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    NgbModule.forRoot(),
    BrowserModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
