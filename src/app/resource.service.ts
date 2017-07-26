import { RESOURCES } from './mock-resources';
import { Resource } from './resource';
import { Injectable } from '@angular/core';

@Injectable()
export class ResourceService {

    getResources(): Promise<Resource[]> {
        return Promise.resolve(RESOURCES);
    }

}
