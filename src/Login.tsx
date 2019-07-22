import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { Link, RouteComponentProps } from 'react-router-dom';
import { REGISTER_PATH, HOME_PATH } from './App';
import { LoginRequest, AUTH_API_PATH } from './AuthTypes';
import { DEFAULT_AXIOS_POST_CONFIG, ACCESS_TOKEN_KEY } from './constants';

const LOGIN_PATH = AUTH_API_PATH + 'login';

export class Login extends React.Component<RouteComponentProps<{}>> {
    render() {
        return <div>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => this.attemptLogin(values)}
            >
                <Form>
                    <Field type='email' name='email' placeholder='email@gmail.com' />
                    <Field type='password' name='password' placeholder='Password' />
                    <button type='submit'>Login</button>
                </Form>
            </Formik>
            <Link to={REGISTER_PATH}><button>Register</button></Link>
        </div>
    }

    private attemptLogin(values: LoginRequest): void {
        axios.post(LOGIN_PATH, values, DEFAULT_AXIOS_POST_CONFIG).then(
            (success) => {
                localStorage.setItem(ACCESS_TOKEN_KEY, success.data.access_token);
                this.props.history.push(HOME_PATH);
            },
            (error) => alert('Login failed: ' + JSON.stringify(error, null, 2))
        );
    }
}