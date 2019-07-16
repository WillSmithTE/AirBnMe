import React from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { Login } from './Login';
import { Demo } from './Demo';
import { Register } from './Register';

const LOGIN_PATH: string = '/login',
DEMO_PATH: string = '/demo';

export const REGISTER_PATH: string = '/register';

export class App extends React.Component {
  render() {
    return <div className="App">
      <BrowserRouter>
          <Link to={LOGIN_PATH}>Login</Link>
          <Link to={DEMO_PATH}>Demo</Link>

          <Route path={LOGIN_PATH} component={Login} />
          <Route path={REGISTER_PATH} component={Register} />
          <Route path={DEMO_PATH} component={Demo} />
        </BrowserRouter>
    </div>;
  }
}
