import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { Link, RouteComponentProps } from 'react-router-dom';
import { REGISTER_PATH, HOME_PATH } from './App';
import { LoginRequest, AUTH_API_PATH } from '../model/AuthTypes';
import { DEFAULT_AXIOS_POST_CONFIG, ACCESS_TOKEN_KEY } from '../util/constants';
import { notify, hashPassword, axiosErrorToMessage } from '../util/util';
import '../css/App.css';

export class Login extends React.Component<RouteComponentProps<{}>> {

    private static readonly API_PATH = AUTH_API_PATH + 'login';

    render() {
        return <div>
            <h3>Login</h3>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => this.attemptLogin(values)} >
                <Form>
                    <Field type='email' name='email' placeholder='email@gmail.com' className='input-field' />
                    <Field type='password' name='password' placeholder='Password' className='input-field' />
                    <button type='submit' className='input-field'>Login</button>
                </Form>
            </Formik>
            <h6 style={ { paddingTop: '12px' }}>New to AirbnMe?</h6>
            <Link to={REGISTER_PATH}><button>Create an account</button></Link>
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
                this.props.history.push(HOME_PATH, { userId: success.data.userId });
            },
            (error) => notify('Login failed - ' + axiosErrorToMessage(error))
        )
    }
}