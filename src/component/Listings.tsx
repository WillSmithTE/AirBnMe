import React from "react";
import { ListingModel, SimpleListingModel, LISTINGS_API_PATH } from "../model/Listing";
import { notifyError } from "../util/util";
import { ListingSummary } from "./ListingSummary";
import { Container } from "reactstrap";
import '../css/Listings.css';
import Axios, { AxiosError } from "axios";
import { SERVER_API_PATH } from "../util/constants";
import { isUndefined } from "util";
import { Error } from "../model/Error";

interface ListingsProps {
    searchTerm: string;
}

interface ListingsState {
    listings: SimpleListingModel[];
    pageNumber: number;
}

export class Listings extends React.Component<ListingsProps, ListingsState> {

    private static LISTINGS_API_PATH = SERVER_API_PATH + "/listing";

    private readonly takeAmount: number = 10;

    constructor(props: ListingsProps) {
        super(props);
        this.state = { listings: [], pageNumber: 1 };
        this.updateListingSummaries();
    }

    componentDidUpdate(prevProps: ListingsProps, prevState: ListingsState) {
        if (prevProps.searchTerm !== this.props.searchTerm ||
            prevState.pageNumber !== this.state.pageNumber) {
            this.updateListingSummaries();
        }
    }

    render(): JSX.Element {
        return <Container className='listingsContainer'>
            {this.state.listings.map((listing) => <ListingSummary listing={listing} key={listing.getId()} />)}
        </Container>;
    }

    private updateListingSummaries(): void {
        this.fetchListingSummaries().then(
            (listings: ListingModel[]) => {
                this.setState({
                    listings: listings
                        .map((listing) => SimpleListingModel.createFromRaw(listing))
                        .filter((listingOrUndefined) => !isUndefined(listingOrUndefined)) as SimpleListingModel[]
                });
            },
            (error: Error) => notifyError(error.getMessage())
        );
    }

    private fetchListingSummaries(): Promise<ListingModel[]> {
        return Axios.get<ListingModel[]>(this.buildQueryPath()).then(
            (result) => Promise.resolve(result.data),
            (error: AxiosError) => Promise.reject(Error.fromAxiosError(error))
        );
    }

    private buildQueryPath(): string {
        return `${LISTINGS_API_PATH}?skip=${this.getSkipAmount()}&take=${this.takeAmount}&searchTerm=${this.props.searchTerm}`;
    }

    private getSkipAmount(): number {
        const pageNumberMinusOne: number = this.state.pageNumber - 1;
        return pageNumberMinusOne * this.takeAmount;
    }

}