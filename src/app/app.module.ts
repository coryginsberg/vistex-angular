import { ResourceService } from './resource.service';
import { FlexLayoutModule } from '@angular/flex-layout';
// Root Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Component Imports
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// Extra Angular Imports
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
        FlexLayoutModule,
    ],
    providers: [ ResourceService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
