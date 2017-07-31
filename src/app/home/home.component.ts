import { GetKeyPipe } from '../get-key.pipe';
import { Industries, Services, Solutions } from '../resources/resources.enum';
import { Resource } from '../resources/resource';
import { ResourceService } from '../resources/resource.service';
import { Component, OnInit, Pipe } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MasonryOptions } from 'angular2-masonry';

@Component({
    selector: 'vistex-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [ResourceService],
})

export class HomeComponent implements OnInit {

    industries = Industries;
    services = Services;
    solutions = Solutions;

    industryTitle = 'Industries';
    serviceTitle = 'Services';
    solutionTitle = 'Solutions';

    resources: Resource[];

    constructor(private resourceService: ResourceService) {

    }

    ngOnInit() {
        this.getResources();
    }

    getResources(): void {
        this.resourceService.getResources().then(resources => this.resources = resources);
    }

    toggleIndustry(industry) {
        this.industryTitle = industry;

        this.showResources(industry, 'Industries');

    }

    toggleService(service) {
        this.serviceTitle = service;
        this.showResources(service, 'Services');

    }

    toggleSolution(solution) {
        this.solutionTitle = solution;

        this.showResources(solution, 'Solutions');
    }

    showResources(resourceType, resourceName) {

        if (resourceType !== resourceName) {
            for (const resource of this.resources) {
                if (resource.solution !== resourceType) { resource.isVisible = false; } else { resource.isVisible = true; }
            }
        } else {
            for (const resource of this.resources) {
                resource.isVisible = true;
            }
        }
    }
}
