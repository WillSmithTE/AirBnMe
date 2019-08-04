import { SERVER_API_PATH } from "../util/constants";

export interface ListingModel {
    name: string;
    address: string;
    description: string;
    price: number;
}

export const LISTINGS_API_PATH = `${SERVER_API_PATH}listing`;
