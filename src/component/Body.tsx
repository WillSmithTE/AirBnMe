import * as React from 'react';
import { Route  } from 'react-router';
import { LOGIN_PATH, REGISTER_PATH, DEMO_PATH, ABOUT_PATH, CREATE_LISTING_PATH } from './App';
import { Login } from './Login';
import { Register } from './Register';
import { Demo } from '../demo/Demo';
import { About } from '../about/About';
import { NewListing } from './NewListing';

export class Body extends React.Component {

    render(): JSX.Element {
        return <div>
            <Route path={LOGIN_PATH} component={Login} />
            <Route path={REGISTER_PATH} component={Register} />
            <Route path={DEMO_PATH} component={Demo} />
            <Route path={ABOUT_PATH} component={About} />
            <Route path={CREATE_LISTING_PATH} component={NewListing} />
        </div>;

    }
}