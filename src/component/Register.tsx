import React from "react";
import axios, { AxiosError } from 'axios';
import { Formik, Form } from "formik";
import { RouteComponentProps } from "react-router";
import * as Yup from 'yup';
import { Error } from '../model/Error';
import { RegisterRequest, AUTH_API_PATH } from "../model/AuthTypes";
import { DEFAULT_AXIOS_POST_CONFIG, REQUIRED_TEXT, PASSWORD_FIELD_NAME, EMAIL_FIELD_NAME, CONFIRM_PASSWORD_FIELD_NAME, NAME_FIELD_NAME, STRING_FIELD_TYPE } from "../util/constants";
import { notify, hashPassword, makeFieldAndErrors } from "../util/util";
import { LOGIN_PATH } from "./App";

interface RegisterFields {
    email?: string;
    password?: string;
    confirmPassword?: string;
    name?: string;
}

export class Register extends React.Component<RouteComponentProps<{}>> {

    private static readonly MIN_PASSWORD_LENGTH = 6;
    private static readonly MAX_PASSWORD_LENGTH = 30;
    private static readonly MIN_NAME_LENGTH = 1;
    private static readonly API_PATH = AUTH_API_PATH + 'register';

    private static readonly VALIDATION_SCHEMA =
        Yup.object().shape({
            email: Yup.string()
                .email()
                .required(REQUIRED_TEXT),
            password: Yup.string()
                .min(Register.MIN_PASSWORD_LENGTH)
                .max(Register.MAX_PASSWORD_LENGTH)
                .required(REQUIRED_TEXT),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref(PASSWORD_FIELD_NAME)], 'Passwords must match')
                .required(REQUIRED_TEXT),
            name: Yup.string()
                .min(Register.MIN_NAME_LENGTH)
                .required(REQUIRED_TEXT)
        });

    render() {
        return <div>
            <Formik
                initialValues={{ email: '', password: '', confirmPassword: '', name: '' }}
                onSubmit={(values) => this.attemptRegister(values as any)}
                validationSchema={Register.VALIDATION_SCHEMA}
            >
                {({ errors, touched }) =>
                    <Form>
                        {makeFieldAndErrors(EMAIL_FIELD_NAME, errors, touched, 'email@gmail.com')}
                        {makeFieldAndErrors(PASSWORD_FIELD_NAME, errors, touched, 'Password')}
                        {makeFieldAndErrors(CONFIRM_PASSWORD_FIELD_NAME, errors, touched, 'Confirm Password', PASSWORD_FIELD_NAME)}
                        {makeFieldAndErrors(NAME_FIELD_NAME, errors, touched, 'Will Smith', STRING_FIELD_TYPE)}
                        <div><button type='submit'>Register</button></div>
                    </Form>
                }
            </Formik>
        </div>;
    }

    private attemptRegister(registerRequest: RegisterRequest): void {
        const password = hashPassword(registerRequest.password);
        axios.post(
            Register.API_PATH,
            { email: registerRequest.email, password, name: registerRequest.name },
            DEFAULT_AXIOS_POST_CONFIG
        ).then(
            (_success) => {
                notify('Registration success!');
                this.props.history.push(LOGIN_PATH);
            },
            (error: AxiosError) => notify('Registration failed - ' + Error.fromAxiosError(error).getMessage())
        );
    }

}
