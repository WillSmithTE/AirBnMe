import React from "react";
import { RouteComponentProps } from "react-router";
import Axios, { AxiosResponse } from "axios";
import { LISTINGS_API_PATH, ListingModel } from "../model/Listing";

interface ListingId {
    listingId: string | undefined;
}
interface ListingState extends ListingId {
    listing: ListingModel | undefined;
}

export class Listing extends React.Component<RouteComponentProps<ListingId>, ListingState> {

    private static priceFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    constructor(props: RouteComponentProps<ListingId>) {
        super(props);
        this.state = {
            listingId: props.match.params.listingId,
            listing: undefined
        };
        Axios.get(`${LISTINGS_API_PATH}/${this.state.listingId}`).then(
            (response: AxiosResponse<ListingModel>) => {
                this.setState({ listing: response.data });
            }
        )
    }

    render(): JSX.Element {
        if (this.state.listing === undefined) {
            return <div></div>;
        } else {
            return <div>
                <h1>{this.state.listing.name}</h1>
                <p>{this.state.listing.description}</p>
                <p>{Listing.formatPrice(this.state.listing.price)}</p>
            </div>;
        }
    }

    private static formatPrice(price: number): string {
        return Listing.priceFormatter.format(price);
    }
}