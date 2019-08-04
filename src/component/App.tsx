import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../css/App.css';
import { Header } from './Header';
import { Body } from './Body';

export const LOGIN_PATH: string = '/login',
  DEMO_PATH: string = '/demo',
  HOME_PATH: string = '/',
  ABOUT_PATH: string = '/about',
  CREATE_LISTING_PATH: string = '/create-listing',
  REGISTER_PATH: string = '/register',
  LISTING_PATH: string = '/places',
  USER_ID_PATH = '/:listingId';

export class App extends React.Component {

  render() {
    return <div className="App">
      <BrowserRouter basename={HOME_PATH}>

        <Header />
        <Body />

      </BrowserRouter>
    </div>;
  }
}
