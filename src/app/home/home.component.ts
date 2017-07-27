import { RESOURCES } from './../mock-resources';
import { Resource } from '../resource';
import { ResourceService } from './../resource.service';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'vistex-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [ResourceService]
})
export class HomeComponent implements OnInit {

    solutions = ['Go-to-Market Suite',
        'Solution for SAP',
        'channelConduit Suite',
        'Counterpoint Suite',
        'VIBES'];
    industries = ['Agriculture',
        'Chemical',
        'Foodservice',
        'Manufaturing',
        'Mill Products',
        'Retail',
        'Wholesale Distribution',
        'Automotive',
        'Consumer Products',
        'High Tech',
        'Life Science',
        'Music, Media & Licensing',
        'Telecommunications'];
    services = ['Analytics',
        'CRM Integration',
        'Program Delivery',
        'Solution Delivery',
        'Customer Support',
        'Global Payments',
        'Strategy',
        'Training'];

    ddIndustriesTtl = 'Industries';
    ddServicesTtl = 'Services';
    ddSolutionsTtl = 'Solutions';

    resource: Resource;

    resources: Resource[];

    constructor(private resourceService: ResourceService) { }

    ngOnInit() {
        this.getResources();
    }

    getResources() {
        this.resourceService.getResources().then(resources => this.resources = resources);
    }

    toggleIndustry(industry) {
        this.ddIndustriesTtl = industry;

        for (const resource of this.resources) {
            if (resource.industry !== industry) {
                resource.isVisible = false;
            } else {
                resource.isVisible = true;
            }
        }
    }
    toggleService(service) {
        this.ddServicesTtl = service;
                for (const resource of this.resources) {
            if (resource.service !== service) {
                resource.isVisible = false;
            } else {
                resource.isVisible = true;
            }
        }
    }
    toggleSolution(solution) {
        this.ddSolutionsTtl = solution;
            for (const resource of this.resources) {
            if (resource.solution !== solution) {
                resource.isVisible = false;
            } else {
                resource.isVisible = true;
            }
        }
    }

}
