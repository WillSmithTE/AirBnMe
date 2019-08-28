import React from 'react';
import { stringValueOrEmptyString } from '../util/util';

interface SearchBarProps {
    setSearchTerm: (searchTerm: string) => void;
}

interface SearchBarState {
    searchTerm: string | undefined;
}

export class SearchBar extends React.Component<SearchBarProps, SearchBarState> {

    constructor(props: SearchBarProps) {
        super(props);
        this.state = { searchTerm: '' };
    }

    render(): JSX.Element {
        return <div>
            <form onSubmit={(event: any) => this.submitSearch(event)}>
                <input
                    type='text'
                    name='search'
                    value={this.state.searchTerm}
                    onChange={(event: any) => this.onSearchChange(event)}>
                </input>
                <button type='submit'  >Search</button>
            </form>
        </div>;
    }

    private submitSearch(event: any): void {
        this.props.setSearchTerm(stringValueOrEmptyString(this.state.searchTerm));
        event.preventDefault();
    }

    private onSearchChange(event: any): void {
        this.setState({ searchTerm: stringValueOrEmptyString(event.currentTarget.value) });
    }
}