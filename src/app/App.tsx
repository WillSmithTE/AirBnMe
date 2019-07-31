import React from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { Login } from '../auth/Login';
import { Demo } from '../demo/Demo';
import { Register } from '../auth/Register';
import Logo from './logo.png';
import { About } from '../about/About';
import { NewListing } from '../new_listing/NewListing';

export const LOGIN_PATH: string = '/login',
  DEMO_PATH: string = '/demo',
  HOME_PATH: string = '/',
  ABOUT_PATH: string = '/about',
  CREATE_LISTING_PATH: string = '/create-listing';

export const REGISTER_PATH: string = '/register';

export class App extends React.Component {
  render() {
    return <div className="App">
      <BrowserRouter basename={HOME_PATH}>

        <Link to={HOME_PATH}><img src={Logo} alt='logo' className='App-logo' /></Link>
        <Link className='navItem' to={LOGIN_PATH}>Login</Link>
        <Link className='navItem' to={ABOUT_PATH}>About</Link>
        <Link className='navItem' to={CREATE_LISTING_PATH}>Create a listing</Link>

        <Route path={LOGIN_PATH} component={Login} />
        <Route path={REGISTER_PATH} component={Register} />
        <Route path={DEMO_PATH} component={Demo} />
        <Route path={ABOUT_PATH} component={About} />
        <Route path={CREATE_LISTING_PATH} component={NewListing} />
      </BrowserRouter>
    </div>;
  }
}
