// export class Resource {
//     constructor(public image: string,
//                 public blurb: string,
//                 public link: string,
//                 isVisible: boolean,
//                 public industry?: string,
//                 public service?: string,
//                 public solution?: string) {}
// }

export interface Resource {

    image: string;
    blurb: string;
    link: string;

    isVisible: boolean;

    industry?: string;
    service?: string;
    solution?: string;

}
