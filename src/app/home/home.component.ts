import { GetKeyPipe } from '../get-key.pipe';
import { Industries, Services, Solutions } from '../resources/resources.enum';
import { Resource } from '../resource';
import { ResourceService } from '../resource.service';
import { Component, OnInit, Pipe } from '@angular/core';
import { RouterLink } from '@angular/router';

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

    ddIndustriesTtl = 'Industries';
    ddServicesTtl = 'Services';
    ddSolutionsTtl = 'Solutions';

    resources: Resource[];

    constructor(private resourceService: ResourceService) { }

    ngOnInit() {
        this.getResources();
    }

    getResources(): void {
        this.resourceService.getResources().then(resources => this.resources = resources);
    }

    toggleIndustry(industry) {
        this.ddIndustriesTtl = industry;

        if (industry !== 'Industries') {
            for (const resource of this.resources) {
                if (resource.industry !== industry) { resource.isVisible = false; } else { resource.isVisible = true; }
            }
        } else {
            for (const resource of this.resources) {
                resource.isVisible = true;
            }
        }
    }

    toggleService(service) {
        this.ddServicesTtl = service;

        if (service !== 'Services') {
            for (const resource of this.resources) {
                if (resource.service !== service) { resource.isVisible = false; } else { resource.isVisible = true; }
            }
        } else {
            for (const resource of this.resources) {
                resource.isVisible = true;
            }
        }
    }

    toggleSolution(solution) {
        this.ddSolutionsTtl = solution;

        if (solution !== 'Solutions') {
            for (const resource of this.resources) {
                if (resource.solution !== solution) { resource.isVisible = false; } else { resource.isVisible = true; }
            }
        } else {
            for (const resource of this.resources) {
                resource.isVisible = true;
            }
        }
    }
}
