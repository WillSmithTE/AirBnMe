import { SERVER_API_PATH } from "../util/constants";
import defaultPic from '../assets/default-pic.png';
import { isNullOrUndefined } from "util";

export const LISTINGS_API_PATH = `${SERVER_API_PATH}listing`;
// const DEFAULT_LISTING_IMG_PATH = '/src/assets/default-pic.png';

export interface ListingModel {
    getId(): number;
    getName(): string;
    getAddress(): string;
    getDescription(): string;
    getPrice(): number;
    getImgUrl(): string;
}

export class SimpleListingModel implements ListingModel {

    private readonly id: number;
    private readonly name: string;
    private readonly address: string;
    private readonly description: string;
    private readonly price: number;
    private readonly imgUrl: string;

    constructor(id: number, name: string, description: string, address: string, price: number, imgUrl: string = defaultPic) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.description = description;
        this.price = price;
        this.imgUrl = imgUrl;
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getAddress(): string {
        return this.address;
    }

    public getDescription(): string {
        return this.description;
    }

    public getPrice(): number {
        return this.price;
    }

    public getImgUrl(): string {
        return this.imgUrl;
    }

    public static createFromRaw(listing: any): SimpleListingModel | undefined {
        console.error(listing);
        if (
            isNullOrUndefined(listing.id) ||
            isNullOrUndefined(listing.name) ||
            isNullOrUndefined(listing.description) ||
            isNullOrUndefined(listing.price) ||
            isNullOrUndefined(listing.address)
        ) {
            return undefined;
        } else return new SimpleListingModel(
            listing.id,
            listing.name,
            listing.description,
            listing.address,
            listing.price,
            listing.imgUrl
        );
    }
}
