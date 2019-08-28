import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../css/App.css';
import { Header } from './Header';
import { Body } from './Body';
import { AuthService } from '../services/AuthService';
import { noop } from '@babel/types';

export const LOGIN_PATH: string = '/login',
  DEMO_PATH: string = '/demo',
  HOME_PATH: string = '/',
  ABOUT_PATH: string = '/about',
  CREATE_LISTING_PATH: string = '/create-listing',
  REGISTER_PATH: string = '/register',
  LISTING_PATH: string = '/places',
  LISTING_ID_PATH = '/:listingId',
  ACCOUNT_PATH = '/user',
  USER_ID_PATH = '/:userId';

export const listingPathGenerator = (listingId: string) => {
  return `${LISTING_PATH}/${listingId}`;
}


export interface AppState {
  userId: number | undefined;
}

export interface AppStateWithSetUserId extends AppState {
  setUserId: (userId: number | undefined) => void;
}

export class App extends React.Component<{}, AppState> {

  constructor(props: {}) {
    super(props);
    this.state = { userId: undefined }
  }

  componentDidMount(): void {
    AuthService.getUserIdFromAuthToken().then(
      (userId) => this.setState({ userId }),
      (_error) => noop
    );

  }

  render() {
    return <div className="App">
      <BrowserRouter >

        <Header userId={this.state.userId} setUserId={(userId: number | undefined) => this.setUserId(userId)} />
        <Body userId={this.state.userId} setUserId={(userId: number | undefined) => this.setUserId(userId)} />

      </BrowserRouter >
    </div>;
  }

  private setUserId(userId: number | undefined): void {
    this.setState({ userId });
  }
}
