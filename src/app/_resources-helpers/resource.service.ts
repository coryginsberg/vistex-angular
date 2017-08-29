import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
// import RootObject = resource.RootObject;
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/forkJoin';

import RootObject = resource.RootObject;
import {current} from 'codelyzer/util/syntaxKind';

@Injectable()
export class ResourceService {
    maxPageCount = '1';

    constructor(private http: Http) {}

    generateResources(): Observable<RootObject[]> {
        // Call Angular's http dependency and gets the resources-list.json file.
        // Sets the JSON object to an observable to be used in the resources component.

        const urlBase = 'https://www.vistex.com/wp-json/wp/v2/';
        const urlEndpoint = 'pages/';
        function urlParameters(currentPage = 1): string {
            return '?_embed' +
            '&per_page=10' +
            '&page=' + currentPage +
            '&parent=242' +
            '&orderby=title' +
            '&order=asc';
        }

        // // Get the number of pages returned in the header.
        // this.http.get(urlBase + urlEndpoint + urlParameters)
        //     .map((res: Response) => this.maxPageCount = res.headers.get('X-WP-TotalPages'))
        //     .catch((error: any) => Observable.throw(error.json().error || error));

        return this.http.get(urlBase + urlEndpoint + urlParameters(1))
                .map((res: Response) => res.json() || [])
                .catch((error: any) => Observable.throw(error.json().error || error));
    }
}
