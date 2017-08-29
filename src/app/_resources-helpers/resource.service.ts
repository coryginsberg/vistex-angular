import { Resource } from './resource';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ResourceService {

    constructor(private http: HttpClient) {}

    generateResources(): Promise<Resource[]> {
        // Call Angular's http dependency and gets the resources-list.json file.
        // Sets the JSON object to a promise to be used in the resources component.
        return this.http
            .get<Resource[]>('https://www.vistex.com/wp-json/wp/v2/pages?&parent=242&per_page=100&page=1') // The URL to the json file that the _resources-helpers are listed in
            .toPromise();
    }
}
