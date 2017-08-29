import { ResourceService } from './_resources-helpers/resource.service';
import { FlexLayoutModule } from '@angular/flex-layout';
// Root Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

// Component Imports
import { AppComponent } from './app.component';
import { HomeComponent } from './resources/resources.component';

// Extra Angular Imports
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { GetValuePipe } from './get-value.pipe';
import { MasonryModule } from 'angular2-masonry';
import {WordPressModule} from 'ngx-wordpress';

const routes: Routes = [
    { path: 'resources-angular', component: HomeComponent },
    { path: '', redirectTo: '/resources-angular', pathMatch: 'full' },
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        GetValuePipe
    ],

    imports: [
        RouterModule.forRoot(
            routes,
            { enableTracing: false } // <-- debugging purposes only
        ),
        NgbModule.forRoot(),
        BsDropdownModule.forRoot(),
        BrowserModule,
        HttpModule,
        FlexLayoutModule,
        MasonryModule,
        HttpClientModule,
        WordPressModule.forRoot('https://vistex.com'),
    ],
    providers: [ ResourceService ],
    bootstrap: [ AppComponent ],
})
export class AppModule { }
