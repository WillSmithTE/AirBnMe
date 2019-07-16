import React from "react";
import { Formik, Form, Field } from "formik";

export class Register extends React.Component {
    render() {
        return <div>
                        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => console.error(values)}
            >
                <Form>
                    <Field type='email' name='email' />
                    <Field type='password' name='password' />
                    <Field type='password' name='confirmPassword' />
                    <Field type='string' name='name' />
                    <Field type='checkbox' name='fakeAdmin' />
                    <button type='submit'>Register</button>
                </Form>
            </Formik>
        </div>;
    }
}