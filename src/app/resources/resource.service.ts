import { Resource } from './resource';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ResourceService {

    constructor(private http: HttpClient) {}

    generateResources(): Promise<Resource[]> {
        // Call Angular's http dependency and gets the resources-list.json file.
        // Sets the JSON object to a promise to be used in the home component.
        return this.http
            .get<Resource[]>('../assets/resources-list.json')
            .toPromise();
    }
}
