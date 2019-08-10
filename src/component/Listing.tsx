import React from "react";
import { RouteComponentProps } from "react-router";
import Axios, { AxiosResponse } from "axios";
import { LISTINGS_API_PATH, ListingModel, SimpleListingModel } from "../model/Listing";

interface ListingId {
    listingId: string | undefined;
}
interface ListingState extends ListingId {
    listing: SimpleListingModel | undefined;
    badIdNumber?: boolean;
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
                this.setState({ listing: SimpleListingModel.createFromRaw(response.data) });
            },
            (_error) => this.setState({ badIdNumber: true })
        )
    }

    render(): JSX.Element {
        if (this.state.listing !== undefined) {
            return <div>
                <h1>{this.state.listing.getName()}</h1>
                <p>{this.state.listing.getDescription()}</p>
                <p>{Listing.formatPrice(this.state.listing.getPrice())}</p>
            </div>;
        } else if (this.state.badIdNumber) {
            return <div>Listing not found :(</div>
        } else {
            return <div></div>;
        }
    }

    private static formatPrice(price: number): string {
        return Listing.priceFormatter.format(price);
    }
}