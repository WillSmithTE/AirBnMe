import * as React from 'react';

interface TextLinkProps {
    url: string;
    text: string;
}

export class TextLink extends React.Component<TextLinkProps> {
    render(): JSX.Element {
        return <a style={ { margin: '4px' } } href={this.props.url} target='_blank' rel="noopener noreferrer" >{this.props.text}</a>;
    }
}