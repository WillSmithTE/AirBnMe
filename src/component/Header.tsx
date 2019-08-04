import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';
import { HOME_PATH, LOGIN_PATH, ABOUT_PATH, CREATE_LISTING_PATH } from './App';
import Logo from '../assets/logo.png';
import '../css/Header.css';
import { NavLink, Link } from 'react-router-dom';

export class Header extends React.Component {

    render(): JSX.Element {
        return <div>
            <Navbar color='faded' light expand='md'>
                <Link to={HOME_PATH}><img src={Logo} alt='logo' className='App-logo' /></Link>
                <Nav navbar>
                    <NavItem><NavLink to={ABOUT_PATH}>About</NavLink></NavItem>
                    <NavItem><NavLink to={CREATE_LISTING_PATH}>Create a listing</NavLink></NavItem>
                    <NavItem>{this.loginOrAccountLink()}</NavItem>
                </Nav>
            </Navbar>
        </div>;
    }

    private loginOrAccountLink(): JSX.Element {
        return <NavLink to={LOGIN_PATH}>Login</NavLink>;
    }
}
