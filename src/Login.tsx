import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import { REGISTER_PATH } from './App';

export class Login extends React.Component {
    render() {
        return <div>
            <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => console.error(values)}
            >
                <Form>
                    <Field type='email' name='email' />
                    <Field type='password' name='password' />
                    <button type='submit'>Login</button>
                </Form>
            </Formik>
            <Link to={REGISTER_PATH}><button>Register</button></Link>
        </div>
    }
}