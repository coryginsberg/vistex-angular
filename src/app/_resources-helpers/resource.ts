// Defines all the parts of the resources that should be parsed from the JSON file.
// The industry, service, and solution variables are optional.
// isVisible is an internal variable that should always default to true initially.

export interface Resource {

    image: string;
    blurb: string;
    link: string;

    isVisible: boolean; // Should always equal true in the JSON file.

    industry?: string;
    service?: string;
    solution?: string;

}
