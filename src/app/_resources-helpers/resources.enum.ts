// The lists of resources that are visible in the dropdown menus.
// Each enum list corresponds to the dropdown title that it is declared in.
// Enums, when converted to JS create a KVP with the key being the position in the list
// and the value being the value defined here. In order to get just the values in each
// dropdown list, a pipe, `get-value.pipe.ts`, is required.

export enum Industries {
    'Agriculture',
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
    'Telecommunications',
}

export enum Services {
    'Analytics',
    'CRM Integration',
    'Program Delivery',
    'Solution Delivery',
    'Customer Support',
    'Global Payments',
    'Strategy',
    'Training',
}

export enum Solutions {
    'Go-to-Market Suite',
    'Solutions for SAP',
    'channelConduit Suite',
    'Counterpoint Suite',
    'VIBES',
}
