export class Resource {

    image: string;
    blurb: string;
    link: string;

    isVisible: boolean;

    industry?: string;
    service?: string;
    solution?: string;

    constructor(image: string, blurb: string, link: string, isVisible: boolean, industry?: string, service?: string, solution?: string) {
        this.image = image;
        this.blurb = blurb;
        this.link = link;
        this.isVisible = isVisible;
        this.industry = industry;
        this.service = service;
        this.solution = solution;        
    }
}
