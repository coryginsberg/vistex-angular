import { Resource } from './resource';
import { Injectable } from '@angular/core';
import { RESOURCES } from './mock-resources';

@Injectable()
export class ResourceService {

    getResources(): Promise<Resource[]> {
        return Promise.resolve(RESOURCES);
    }

}
