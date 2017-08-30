import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/forkJoin';

import RootObject = resource.RootObject;

@Injectable()
export class ResourceService {

    constructor(private http: Http) {}

    // Get the URL string for the vistex REST API.
    // The page number defaults to 1, but can be any number > 0
    static getURL(page = 1): string {
        if (page <= 0) {
            throw new RangeError('Page number is out of range. Please make sure that the page number is greater than or equal to 1.');
        }

        const urlBase = 'https://www.vistex.com/wp-json/wp/v2/'; // The base URL of the http request (i.e. where the json is located on the site)
        const urlEndpoint = 'pages/'; // The endpoint of the http request (Can also be `posts/`)
        const urlParameters = '?_embed' + // JSON needs to return embedded items to get links to images.
            '&per_page=89' + // Number of pages shown per JSON page (Range: 1-100)
            '&page=' + page + // Requested JSON page (Default = 1)
            '&parent=242' + // The ID of the parent page (242 = Resources)
            '&orderby=title' + // Order by title (default = date)
            '&order=asc'; // Put in ascending order (default = desc)

        return urlBase + urlEndpoint + urlParameters;
    }

    // Generate and return the JSON page
    generateResources(page): Observable<RootObject[]> {
        // Call Angular's http dependency and gets the resources-list.json file.
        // Sets the JSON object to an observable to be used in the resources component.

        return this.http.get(ResourceService.getURL(page))
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || error));
    }
}
