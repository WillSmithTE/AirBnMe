import * as React from "react";
import { TextLink } from "../util/TextLink";

export class About extends React.Component {
    render(): JSX.Element {
        return <div>
            <h1>THIS IS AIRBNME</h1>
            <p>A little website inspired by a 
            <a style={{ display: 'inline;' }} href='https://twitter.com/dontplaynojames/status/1020568969965473793' target='_blank' rel="noopener noreferrer" > tweet </a>
             of Geoffrey James where anyone can post their accommodation and I can book it. Only me :)</p>
            <TextLink url='https://www.linkedin.com/in/willsmithte/' text='LinkedIn' />
            <TextLink url='github.com/WillSmithTE/' text='GitHub' />
        </div>;
    }
}
