import * as React from 'react';
import { Route, RouteComponentProps } from 'react-router';
import { LOGIN_PATH, REGISTER_PATH, DEMO_PATH, ABOUT_PATH, CREATE_LISTING_PATH, LISTING_PATH, LISTING_ID_PATH, HOME_PATH, ACCOUNT_PATH, USER_ID_PATH, AppStateWithSetUserId } from './App';
import { Login } from './Login';
import { Register } from './Register';
import { Demo } from '../demo/Demo';
import { About } from './About';
import { NewListing } from './NewListing';
import '../css/Body.css';
import { Listing } from './Listing';
import { Home } from './Home';
import { Account } from './Account';

export interface BodyRouterProps extends AppStateWithSetUserId, RouteComponentProps {

}

export class Body extends React.Component<AppStateWithSetUserId> {

    render(): JSX.Element {
        return <div>
            <Route path={HOME_PATH} exact component={Home} />
            <Route path={LOGIN_PATH} render={(props) => <Login {...props} setUserId={this.props.setUserId} userId={this.props.userId}/>} />
            <Route path={REGISTER_PATH} component={Register} />
            <Route path={DEMO_PATH} component={Demo} />
            <Route path={ABOUT_PATH} component={About} />
            <Route path={CREATE_LISTING_PATH} component={NewListing} />
            <Route path={LISTING_PATH + LISTING_ID_PATH} component={Listing} />
            <Route path={ACCOUNT_PATH + USER_ID_PATH} component={Account} />

            <h2 className='bottomStrip'>A WILL SMITH PRODUCTION</h2>
        </div>;

    }
}