import { Resource } from './resource';
import { Injectable } from '@angular/core';
import { RESOURCES } from './mock-resources';
import { compile, compileFromFile } from 'json-schema-to-typescript';
// import { writeFileSync } from 'fs';

@Injectable()
export class ResourceService {

    async generateResources() {

        // const deferred = this.$q.defer();
        // this.$http.get(url, this.getHeaders(headers)).then(response => {
        //     const jsonObject = response.data;
        //     const resource = <Resource>jsonObject;
        //     deferred.resolve(resource);
        // })

        // return deferred.promise;
    }

    getResources(): Promise<Resource[]> {
        return Promise.resolve(RESOURCES);
    }
}
