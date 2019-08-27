import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';
import Logo from '../assets/logo.png';
import '../css/Header.css';
import { AuthService } from '../services/AuthService';
import { HOME_PATH, LOGIN_PATH, ABOUT_PATH, CREATE_LISTING_PATH, AppState, ACCOUNT_PATH } from './App';

export class Header extends React.Component<AppState> {

    render(): JSX.Element {
        return <div>
            <Navbar color='faded' light expand='md'>
                <Link to={HOME_PATH}><img src={Logo} alt='logo' className='App-logo' /></Link>
                <Nav navbar>
                    <NavItem><NavLink to={HOME_PATH}>Home</NavLink></NavItem>
                    <NavItem><NavLink to={CREATE_LISTING_PATH}>Create a listing</NavLink></NavItem>
                    <NavItem><NavLink to={ABOUT_PATH}>About</NavLink></NavItem>
                    {this.loginOrAccountLink()}
                </Nav>
            </Navbar>
        </div>;
    }

    private loginOrAccountLink(): JSX.Element {
        if (AuthService.isLoggedIn(this.props.userId)) {
            return <><NavItem><NavLink to={`${ACCOUNT_PATH}/${this.props.userId}`}>Account</NavLink></NavItem>
                <button onClick={() => this.logout()}>Logout</button></>;
        } else {
            return <NavItem><NavLink to={LOGIN_PATH}>Login</NavLink></NavItem>;
        }
    }

    private logout(): void {
        alert(`Haha this hasn't been implemented yet 8) `)
    }
}
