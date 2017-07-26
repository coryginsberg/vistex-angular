import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'vistex-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
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

    constructor() { }

    ngOnInit() {
    }

    toggleIndustry(industry) {
        this.ddIndustriesTtl = industry;
    }
    toggleService(service) {
        this.ddServicesTtl = service;
    }
    toggleSolution(solution) {
        this.ddSolutionsTtl = solution;
    }

}
