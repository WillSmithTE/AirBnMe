import * as React from 'react';
import { Route } from 'react-router';
import { LOGIN_PATH, REGISTER_PATH, DEMO_PATH, ABOUT_PATH, CREATE_LISTING_PATH } from './App';
import { Login } from './Login';
import { Register } from './Register';
import { Demo } from '../demo/Demo';
import { About } from './About';
import { NewListing } from './NewListing';
import '../css/Body.css';

export class Body extends React.Component {

    render(): JSX.Element {
        return <div>
            <Route path={LOGIN_PATH} component={Login} />
            <Route path={REGISTER_PATH} component={Register} />
            <Route path={DEMO_PATH} component={Demo} />
            <Route path={ABOUT_PATH} component={About} />
            <Route path={CREATE_LISTING_PATH} component={NewListing} />

            <h2 className='bottomStrip'>A WILL SMITH PRODUCTION</h2>
        </div>;

    }
}