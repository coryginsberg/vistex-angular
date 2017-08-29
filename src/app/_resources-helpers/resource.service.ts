import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
// import RootObject = resource.RootObject;
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import RootObject = resource.RootObject;

@Injectable()
export class ResourceService {

    constructor(private http: Http) {}

    generateResources(): Observable<RootObject[]> {
        // Call Angular's http dependency and gets the resources-list.json file.
        // Sets the JSON object to an observable to be used in the resources component.

        const urlBase = 'https://www.vistex.com/wp-json/wp/v2/';
        const urlEndpoint = 'pages/';
        const urlParameters =
            '?_embed' +
            '&per_page=100' +
            '&page=1' +
            '&parent=242' +
            '&orderby=title' +
            '&order=asc';

        return this.http.get(urlBase + urlEndpoint + urlParameters)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || error));

        // TODO: Special characters are not rendering properly.

    }
}
