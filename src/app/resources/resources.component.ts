import { Industries, ContentType, Solutions } from '../_resources-helpers/resources.enum';
import { ResourceService } from '../_resources-helpers/resource.service';
import { Component, OnInit } from '@angular/core';
import { MasonryOptions } from 'angular2-masonry';
import RootObject = resource.RootObject;
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

@Component({
    selector: 'vistex-resources',
    templateUrl: './resources.component.html',
    styleUrls: ['./resources.component.scss', './loading.scss'],
    providers: [ResourceService],
})

export class HomeComponent implements OnInit {

    readonly industries = Industries;
    readonly contentType = ContentType;
    readonly solutions = Solutions;

    readonly industryTitle = 'Industries';
    readonly contentTypeTitle = 'Content Type';
    readonly solutionTitle = 'Solutions';

    isLoading = true;

    currentIndustryTitle = this.industryTitle;
    currentContentTypeTitle = this.contentTypeTitle;
    currentSolutionTitle = this.solutionTitle;

    resources: RootObject[] = [];

    // Angular2-masonry source: https://www.npmjs.com/package/angular2-masonry
    public masonryOptions: MasonryOptions = {
        itemSelector: '.brick',
        columnWidth: 314,
        gutter: 30,
        fitWidth: true,
    };

    // Stores if the dropdown is currently opened.
    // This is set by show___Dropdown() and read by the 
    // corresponding dropdown in resources.component.html
    public industryDropdownStatus: { isOpen: boolean } = {isOpen: false};
    public solutionsDropdownStatus: { isOpen: boolean } = {isOpen: false};
    public contentTypeDropdownStatus: { isOpen: boolean } = {isOpen: false};

    constructor(private resourceService: ResourceService) {
    }

    ngOnInit(): void {
        this.generateResources();
    }

    // Generate the resources. Since Wordpress REST API is paged (maxed out at 100 per page), this calls the API multiple
    // times to get all the pages. If a page is not found, then an error is thrown, so the array is not futureproof-able.
    // If some links aren't showing on the resources page in the future, add the next number to the end of the array and
    // see if that works.
    // !!!!!!!!!!!!!!!!!!!!!!!!! THIS IS A HACK !!!!!!!!!!!!!!!!!!!!!!!!!
    // (More specifically, the array is a hack)
    // The preferred way of getting the number of pages is to read the header response, X-WP-TotalPages, and use that number
    // to loop through, but I cannot figure out a way to loop through, as subscribe is async and doesn't run until the rest
    // of the app is done, meaning that I can't extract the response before the page starts generating resources. I'm sure
    // that I would be able to figure this out if given enough time, but tomorrow is my last day, I still have more to do
    // and it's time for lunch.
    // -- Cory.
    // TODO: Someone implement this properly someday (Sorry).
    generateResources() {
        const pagesArray = [1, 2];

        this.processPages(pagesArray).subscribe(
            resources => resources.forEach((resource: RootObject[]) => this.resources = this.resources.concat(resource)),
            err => console.log(err),
            () => this.isLoading = false
        );
    }

    // For each page, push an HTTP request and join the resulting pages together to make one observable.
    processPages(pages) {
        const observableBatch = [];
        pages.forEach((component, index, pageNum) => {
            observableBatch.push(this.resourceService.generateResources(pageNum[component]));
        });

        return Observable.forkJoin(observableBatch);
    }

    ///////////////////////////////////////////////////////////////////////////////

    // The below functions show the dropdown when a MouseEvent is triggered.
    // In reality, it is simply switching between isOpen = true & isOpen = false
    // each time it is called, but in practice the name is fine as the function is
    // to show the dropdown whenever the user hovers over the dropdown and stop 
    // showing when the user is no longer hovering over it.

    showIndustriesDropdown($event: MouseEvent) {
        $event.preventDefault();
        $event.stopPropagation();

        // Sets the dropdownStatus to the opposite of what it was before firing
        this.industryDropdownStatus.isOpen = !this.industryDropdownStatus.isOpen;
    }

    showSolutionsDropdown($event: MouseEvent) {
        $event.preventDefault();
        $event.stopPropagation();

        // Sets the dropdownStatus to the opposite of what it was before firing
        this.solutionsDropdownStatus.isOpen = !this.solutionsDropdownStatus.isOpen;
    }

    showContentTypeDropdown($event: MouseEvent) {
        $event.preventDefault();
        $event.stopPropagation();

        // Sets the dropdownStatus to the opposite of what it was before firing
        this.contentTypeDropdownStatus.isOpen = !this.contentTypeDropdownStatus.isOpen;
    }

    ///////////////////////////////////////////////////////////////////////////////
    // Below functions toggle the filtering of the cards when one of the items in
    // the dropdowns is selected. The functions read the title of the dropdown and sees if
    // it is the default title. If it is, then it resets all cards. If not, then
    // it shows only the cards that have that resource type declared.

    toggleIndustry(industry) {
        this.currentIndustryTitle = industry;

        // Checks if the dropdown title is the default name
        if (industry !== this.industryTitle) {
            // If not, then filters the cards for only the ones
            // that have the selected keyword listed.
            for (const resource of this.resources) {
                // resource.isVisible = resource.industry === industry;
            }
        } else {
            // Else show all _resources-helpers (assumes that this will
            // only be called when 'clear' is pressed).
            this.showAllResources();
        }
    }

    toggleSolution(solution) {
        this.currentSolutionTitle = solution;

        // Checks if the dropdown title is the default name
        if (solution !== this.solutionTitle) {
            // If not, then filters the cards for only the ones
            // that have the selected keyword listed.
            for (const resource of this.resources) {
                // resource.isVisible = resource.solution === solution;
            }
        } else {
            // Else show all _resources-helpers (assumes that this will
            // only be called when 'clear' is pressed).
            this.showAllResources();
        }
    }

    toggleContentType(service) {
        this.currentContentTypeTitle = service;

        // Checks if the dropdown title is the default name
        if (service !== this.contentTypeTitle) {
            // If not, then filters the cards for only the ones
            // that have the selected keyword listed.
            for (const resource of this.resources) {
                // resource.isVisible = resource.service === service;
            }
        } else {
            // Else show all _resources-helpers (assumes that this will
            // only be called when 'clear' is pressed).
            this.showAllResources();
        }
    }

    // Restores all hidden cards
    showAllResources() {
        for (const resource of this.resources) {
            // resource.isVisible = true;
        }
    }

    // The JSON for the title is not properly encoded and simply decodes special characters
    // into the html symbol number. Simply inserting that into the html itself does not fix
    // it, as it does not parse plaintext for conversions. Calling titleCorrected() within an
    // innerHTML fixes that by passing the title text into TypeScript/JavaScript and returning
    // the result, which should properly encode the text.
    titleCorrected(title): string {
        return title;
    }
}
