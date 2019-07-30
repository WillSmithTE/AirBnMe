import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { Link, RouteComponentProps } from 'react-router-dom';
import { REGISTER_PATH, HOME_PATH } from '../App';
import { LoginRequest, AUTH_API_PATH } from './AuthTypes';
import { DEFAULT_AXIOS_POST_CONFIG, ACCESS_TOKEN_KEY } from '../constants';
import { notify, hashPassword } from '../util';

export class Login extends React.Component<RouteComponentProps<{}>> {

    private static readonly API_PATH = AUTH_API_PATH + 'login';

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

    private attemptLogin(loginRequest: LoginRequest): void {
        const password = hashPassword(loginRequest.password);
        axios.post(
            Login.API_PATH,
            { email: loginRequest.email, password },
            DEFAULT_AXIOS_POST_CONFIG
        ).then(
            (success) => {
                localStorage.setItem(ACCESS_TOKEN_KEY, success.data.access_token);
                this.props.history.push(HOME_PATH);
            },
            (error) => notify('Login failed - ' + JSON.stringify(error, null, 2))
        )
    }
}