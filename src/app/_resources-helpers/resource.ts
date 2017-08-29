// Defines all the parts of the resources that should be parsed from the JSON file.
// The industry, service, and solution variables are optional.
// isVisible is an internal variable that should always default to true initially.

declare module resource {

    export interface Guid {
        rendered: string;
    }

    export interface Title {
        rendered: string;
    }

    export interface Content {
        rendered: string;
    }

    export interface Excerpt {
        rendered: string;
    }

    export interface Self {
        href: string;
    }

    export interface Collection {
        href: string;
    }

    export interface About {
        href: string;
    }

    export interface Author {
        embeddable: boolean;
        href: string;
    }

    export interface Reply {
        embeddable: boolean;
        href: string;
    }

    export interface VersionHistory {
        href: string;
    }

    export interface Up {
        embeddable: boolean;
        href: string;
    }

    export interface WpFeaturedmedia {
        embeddable: boolean;
        href: string;
    }

    export interface WpAttachment {
        href: string;
    }

    export interface Cury {
        name: string;
        href: string;
        templated: boolean;
    }

    export interface Links {
        self: Self[];
        collection: Collection[];
        about: About[];
        author: Author[];
        replies: Reply[];
        'version-history': VersionHistory[];
        up: Up[];
        'wp:featuredmedia': WpFeaturedmedia[];
        'wp:attachment': WpAttachment[];
        curies: Cury[];
    }

    export interface Data {
        status: number;
    }

    export interface Author2 {
        code: string;
        message: string;
        data: Data;
    }

    export interface Title2 {
        rendered: string;
    }

    export interface Excerpt2 {
        rendered: string;
    }

    export interface Self2 {
        href: string;
    }

    export interface Collection2 {
        href: string;
    }

    export interface About2 {
        href: string;
    }

    export interface Author3 {
        embeddable: boolean;
        href: string;
    }

    export interface Reply2 {
        embeddable: boolean;
        href: string;
    }

    export interface VersionHistory2 {
        href: string;
    }

    export interface WpAttachment2 {
        href: string;
    }

    export interface Cury2 {
        name: string;
        href: string;
        templated: boolean;
    }

    export interface Links2 {
        self: Self2[];
        collection: Collection2[];
        about: About2[];
        author: Author3[];
        replies: Reply2[];
        'version-history': VersionHistory2[];
        'wp:attachment': WpAttachment2[];
        curies: Cury2[];
    }

    export interface Up2 {
        id: number;
        date: Date;
        slug: string;
        type: string;
        link: string;
        title: Title2;
        excerpt: Excerpt2;
        author: number;
        featured_media: number;
        _links: Links2;
    }

    export interface Title3 {
        rendered: string;
    }

    export interface Caption {
        rendered: string;
    }

    export interface Thumbnail {
        file: string;
        width: number;
        height: number;
        mime_type: string;
        source_url: string;
    }

    export interface Medium {
        file: string;
        width: number;
        height: number;
        mime_type: string;
        source_url: string;
    }

    export interface WpbsFeatured {
        file: string;
        width: number;
        height: number;
        mime_type: string;
        source_url: string;
    }

    export interface WpbsFeaturedHome {
        file: string;
        width: number;
        height: number;
        mime_type: string;
        source_url: string;
    }

    export interface PostThumbnail {
        file: string;
        width: number;
        height: number;
        mime_type: string;
        source_url: string;
    }

    export interface Full {
        file?: string;
        width?: number;
        height?: number;
        mime_type?: string;
        source_url?: string;
    }

    export interface Sizes {
        thumbnail?: Thumbnail;
        medium?: Medium;
        'wpbs-featured'?: WpbsFeatured;
        'wpbs-featured-home'?: WpbsFeaturedHome;
        'post-thumbnail'?: PostThumbnail;
        full?: Full;
    }

    export interface ImageMeta {
        aperture: string;
        credit: string;
        camera: string;
        caption: string;
        created_timestamp: string;
        copyright: string;
        focal_length: string;
        iso: string;
        shutter_speed: string;
        title: string;
        orientation: string;
        keywords: any[];
    }

    export interface MediaDetails {
        width?: number;
        height?: number;
        file?: string;
        sizes?: Sizes;
        image_meta?: ImageMeta;
    }

    export interface Self3 {
        href: string;
    }

    export interface Collection3 {
        href: string;
    }

    export interface About3 {
        href: string;
    }

    export interface Author4 {
        embeddable: boolean;
        href: string;
    }

    export interface Reply3 {
        embeddable: boolean;
        href: string;
    }

    export interface Links3 {
        self: Self3[];
        collection: Collection3[];
        about: About3[];
        author: Author4[];
        replies: Reply3[];
    }

    export interface WpFeaturedmedia2 {
        id?: number;
        date?: Date;
        slug?: string;
        type?: string;
        link?: string;
        title?: Title3;
        author?: number;
        caption?: Caption;
        alt_text?: string;
        media_type?: string;
        mime_type?: string;
        media_details?: MediaDetails;
        source_url?: string;
        _links?: Links3;
    }

    export interface Embedded {
        author: Author2[];
        up: Up2[];
        'wp:featuredmedia'?: WpFeaturedmedia2[];
    }

    export interface RootObject {
        id: number;
        date: Date;
        date_gmt: Date;
        guid: Guid;
        modified: Date;
        modified_gmt: Date;
        slug: string;
        status: string;
        type: string;
        link: string;
        title: Title;
        content: Content;
        excerpt: Excerpt;
        author: number;
        featured_media: number;
        parent: number;
        menu_order: number;
        comment_status: string;
        ping_status: string;
        template: string;
        meta: any[];
        _links: Links;
        _embedded: Embedded;
    }

}
// export interface Resource {
//
//     image: string;
//     blurb: string;
//     link: string;
//
//     isVisible: boolean; // Should always equal true in the JSON file.
//
//     industry?: string;
//     service?: string;
//     solution?: string;
//
// }
