import { FilterResourcesService } from './../filter-resources.service';
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

    defaultDropdownName = '';

    resources: Resource[] = [];

    // Angular2-masonry source: https://www.npmjs.com/package/angular2-masonry
    public masonryOptions: MasonryOptions = {
        itemSelector: '.brick',
        columnWidth: 314,
        gutter: 30,
        fitWidth: true,
    };

    // Stores if the dropdown is currently openned. 
    // This is set by show___Dropdown() and read by the 
    // corresponding dropdown in home.component.html
    public industryDropdownStatus: { isopen: boolean } = { isopen: false };
    public servicesDropdownStatus: { isopen: boolean } = { isopen: false };
    public solutionsDropdownStatus: { isopen: boolean } = { isopen: false };

    filterResourcesService: FilterResourcesService;

    constructor(private resourceService: ResourceService) {
    }

    ngOnInit() {
        // Gets the resources on initialization.

        // TODO: generate resources from JSON
        this.generateResources();
        this.getResources();

        this.filterResourcesService = new FilterResourcesService(this.resources, this.industryTitle, this.serviceTitle, this.solutionTitle);
    }

    generateResources(): void {
        // this.resourceService.generateResources().then(resources => this.resources = resources);
    }

    getResources(): void {
        this.resourceService.getResources().then(resources => this.resources = resources);
    }

    // The below functions show the dropdown when a MouseEvent is triggered.
    // In reality, it is simply switching between isopen = true & isopen = false
    // each time it is called, but in practice the name is fine as the function is
    // to show the dropdown whenever the user hovers over the dropdown and stop 
    // showing when the user is no longer hovering over it.
    showIndustriesDropdown($event: MouseEvent) {
        $event.preventDefault();
        $event.stopPropagation();

        // Sets the dropdownStatus to the oposite of what it was before firing
        this.industryDropdownStatus.isopen = !this.industryDropdownStatus.isopen;
    }

    showServicesDropdown($event: MouseEvent) {
        $event.preventDefault();
        $event.stopPropagation();

        // Sets the dropdownStatus to the oposite of what it was before firing
        this.servicesDropdownStatus.isopen = !this.servicesDropdownStatus.isopen;
    }

    showSolutionsDropdown($event: MouseEvent) {
        $event.preventDefault();
        $event.stopPropagation();

        // Sets the dropdownStatus to the oposite of what it was before firing
        this.solutionsDropdownStatus.isopen = !this.solutionsDropdownStatus.isopen;
    }

    // Toggle if filtering by industry.
    toggleIndustry(industry) {
        // Set the title to the selected text from the dropdown.
        this.defaultDropdownName = this.industryTitle;
        this.industryTitle = industry;

        this.filterResourcesService.filter(this.defaultDropdownName, industry);
    }

    // Toggle if filtering by service
    toggleService(service) {
        // Set the title to the selected text from the dropdown.
        this.defaultDropdownName = this.serviceTitle;
        this.serviceTitle = service;

        this.filterResourcesService.filter(this.defaultDropdownName, service);
    }

    // Toggle if filtering by solution
    toggleSolution(solution) {
        // Set the title to the selected text from the dropdown.
        this.defaultDropdownName = this.solutionTitle;
        this.solutionTitle = solution;

        this.filterResourcesService.filter(this.defaultDropdownName, solution);
    }
}
