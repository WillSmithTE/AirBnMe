import { SERVER_API_PATH } from "../util/constants";

export interface Listing {
    name: string;
    address: string;
    description: string;
}

export const LISTINGS_API_PATH = `${SERVER_API_PATH}listings/`;
export const LISTINGS_PATH = '/listings';