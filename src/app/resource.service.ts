import { Resource } from './resource';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import './resources.json';

@Injectable()
export class ResourceService {

    resourceUrl = './resources.json';

    resourceData: Resource;

    constructor(private http: Http) {}

    // Promises are Async.
    // Loads the Resource objects (the cards) async.
    getResources(): Promise<Resource[]> {
        return this.http.get(this.resourceUrl)
        .toPromise()
        .then(response => response.json().data as Resource[])
        .catch(this.handleError);
        // return Promise.resolve(resource);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
