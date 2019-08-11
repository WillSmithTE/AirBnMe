import React from "react";
import { ListingModel, SimpleListingModel, LISTINGS_API_PATH } from "../model/Listing";
import { notifyError, axiosErrorToMessage } from "../util/util";
import { ListingSummary } from "./ListingSummary";
import { Container } from "reactstrap";
import '../css/Listings.css';
import Axios from "axios";
import { SERVER_API_PATH } from "../util/constants";
import { isUndefined } from "util";

interface ListingsProps {
    searchTerm: string;
}

interface ListingsState {
    listings: SimpleListingModel[];
}

export class Listings extends React.Component<ListingsProps, ListingsState> {

    private static LISTINGS_API_PATH = SERVER_API_PATH + "/listing";

    constructor(props: ListingsProps) {
        super(props);
        this.state = { listings: [] };
        this.fetchListingSummaries(this.props.searchTerm).then(
            (listings: ListingModel[]) => {
                this.setState({
                    listings: listings
                        .map((listing) => SimpleListingModel.createFromRaw(listing))
                        .filter((listingOrUndefined) => !isUndefined(listingOrUndefined)) as SimpleListingModel[]
                });
            },
            (error) => notifyError(axiosErrorToMessage(error as any))
        );
    }

    render(): JSX.Element {
        return <Container className='listingsContainer'>
            {this.state.listings.map((listing) => <ListingSummary listing={listing} key={listing.getId()} />)}
        </Container>;
    }

    private fetchListingSummaries(_searchTerm: string): Promise<ListingModel[]> {
        return Axios.get<ListingModel[]>(`${LISTINGS_API_PATH}?skip=0&take=10`).then(
            (result) => Promise.resolve(result.data),
            (error) => Promise.reject(axiosErrorToMessage(error))
        );
    }
}