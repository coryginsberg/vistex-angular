import { Resource } from './resources/resource';
import { Injectable } from '@angular/core';

@Injectable()
export class FilterResourcesService {

    constructor(private resources: Resource[], 
                private industryTitle: string, 
                private serviceTitle: string, 
                private solutionTitle: string,
                private defaultDropdownName = '') {
    }

    // Filter the cards based on the resource type selected from any of the dropdowns.
    filter(defaultName, resourceType) {
        if (defaultName === this.industryTitle) {
            // If industry != the default name ("Industries"), then filter the
            // cards for only the ones that have the selected keyword listed.
            if (resourceType !== this.defaultDropdownName) {
                for (const resource of this.resources) {
                    if (resource.industry !== resourceType) { resource.isVisible = false; } else { resource.isVisible = true; }
                }
            } else {
                this.showAllResources();
            }
            return;
        }
        if (defaultName === this.serviceTitle) {
            // If service != the default name ("Services"), then filter the
            // cards for only the ones that have the selected keyword listed.
            if (resourceType !== this.defaultDropdownName) {
                for (const resource of this.resources) {
                    if (resource.service !== resourceType) { resource.isVisible = false; } else { resource.isVisible = true; }
                }
            } else {
                this.showAllResources();
            }
            return;
        }
        if (defaultName === this.solutionTitle) {
            // If solution != the default name ("Solutions"), then filter the
            // cards for only the ones that have the selected keyword listed.
            if (resourceType !== this.defaultDropdownName) {
                for (const resource of this.resources) {
                    if (resource.solution !== resourceType) { resource.isVisible = false; } else { resource.isVisible = true; }
                }
            } else {
                this.showAllResources();
            }
            return;
        }

    }

    // Restores all cards hidden
    showAllResources() {
        for (const resource of this.resources) {
            resource.isVisible = true;
        }
    }

}
