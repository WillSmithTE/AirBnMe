import React from 'react';
import { SearchBar } from './SearchBar';
import { Listings } from './Listings';

interface HomeState {
    searchTerm: string;
}

export class Home extends React.Component<{}, HomeState> {

    constructor(props: {}) {
        super(props);
        this.state = { searchTerm: '' };
    }

    render(): JSX.Element {
        return <div>
            <SearchBar setSearchTerm={(searchTerm: string) => this.setSearchTerm(searchTerm)} />
            <Listings searchTerm={this.state.searchTerm} />
        </div>;
    }

    private setSearchTerm(searchTerm: string): void {
        this.setState({ searchTerm });
    }
}