import * as React from 'react';
import { Link } from 'react-router-dom';
import { HOME_PATH, LOGIN_PATH, ABOUT_PATH, CREATE_LISTING_PATH } from './App';
import Logo from '../app/logo.png';

export class Header extends React.Component {
    render(): JSX.Element {
        return <div>
            <Link to={HOME_PATH}><img src={Logo} alt='logo' className='App-logo' /></Link>
            <Link className='navItem' to={LOGIN_PATH}>Login</Link>
            <Link className='navItem' to={ABOUT_PATH}>About</Link>
            <Link className='navItem' to={CREATE_LISTING_PATH}>Create a listing</Link>
        </div>;
    }
}