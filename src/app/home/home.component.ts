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

    industryDropdownIsOpen = false;

    industries = Industries;
    services = Services;
    solutions = Solutions;

    industryTitle = 'Industries';
    serviceTitle = 'Services';
    solutionTitle = 'Solutions';

    resources: Resource[];

    // Angular2-masonry source: https://www.npmjs.com/package/angular2-masonry
    public masonryOptions: MasonryOptions = {
        itemSelector: '.brick',
        columnWidth: 314,
        gutter: 30,
        fitWidth: true,
    };

    public industryDropdownStatus: { isopen: boolean } = { isopen: false };
    public servicesDropdownStatus: { isopen: boolean } = { isopen: false };
    public solutionsDropdownStatus: { isopen: boolean } = { isopen: false };

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
        this.serviceTitle = service;

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
        this.solutionTitle = solution;

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

    showIndustriesDropdown($event: MouseEvent) {
        $event.preventDefault();
        $event.stopPropagation();
        this.industryDropdownStatus.isopen = !this.industryDropdownStatus.isopen;
    }

    showServicesDropdown($event: MouseEvent) {
        $event.preventDefault();
        $event.stopPropagation();
        this.servicesDropdownStatus.isopen = !this.servicesDropdownStatus.isopen;
    }

    showSolutionsDropdown($event: MouseEvent) {
        $event.preventDefault();
        $event.stopPropagation();
        this.solutionsDropdownStatus.isopen = !this.solutionsDropdownStatus.isopen;
    }
}
