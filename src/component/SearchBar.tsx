import React from "react";

export class SearchBar extends React.Component {
    render(): JSX.Element {
        return <div>
            <form>
                <input type='text' ></input>
                <button type='submit' >Search</button>
            </form>
        </div>;
    }
}