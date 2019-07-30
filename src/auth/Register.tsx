import React from "react";
import axios from 'axios';
import { Formik, Form, Field, FormikTouched } from "formik";
import { RouteComponentProps } from "react-router";
import * as Yup from 'yup';
import { RegisterRequest, AUTH_API_PATH } from "./AuthTypes";
import { DEFAULT_AXIOS_POST_CONFIG } from "../constants";
import { notify, hashPassword } from "../util";
import { LOGIN_PATH } from "../App";

interface RegisterFields {
    email?: string;
    password?: string;
    confirmPassword?: string;
    name?: string;
}

export class Register extends React.Component<RouteComponentProps<{}>> {

    private static readonly REQURED_MESSAGE = 'Required';
    private static readonly MIN_PASSWORD_LENGTH = 6;
    private static readonly MAX_PASSWORD_LENGTH = 30;
    private static readonly PASSWORD_FIELD_NAME = 'password';
    private static readonly CONFIRM_PASSWORD_FIELD_NAME = 'confirmPassword';
    private static readonly EMAIL_FIELD_NAME = 'email';
    private static readonly NAME_FIELD_NAME = 'name';
    private static readonly STRING_FIELD_TYPE = 'string';
    private static readonly MIN_NAME_LENGTH = 1;
    private static readonly API_PATH = AUTH_API_PATH + 'register';

    private static readonly VALIDATION_SCHEMA =
        Yup.object().shape({
            email: Yup.string()
                .email()
                .required(Register.REQURED_MESSAGE),
            password: Yup.string()
                .min(Register.MIN_PASSWORD_LENGTH)
                .max(Register.MAX_PASSWORD_LENGTH)
                .required(Register.REQURED_MESSAGE),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref(Register.PASSWORD_FIELD_NAME)], 'Passwords must match')
                .required(Register.REQURED_MESSAGE),
            name: Yup.string()
                .min(Register.MIN_NAME_LENGTH)
                .required(Register.REQURED_MESSAGE)
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
                        {Register.makeFieldAndErrors(Register.EMAIL_FIELD_NAME, errors, touched, 'email@gmail.com')}
                        {Register.makeFieldAndErrors(Register.PASSWORD_FIELD_NAME, errors, touched, 'Password')}
                        {Register.makeFieldAndErrors(Register.CONFIRM_PASSWORD_FIELD_NAME, errors, touched, 'Confirm Password', Register.PASSWORD_FIELD_NAME)}
                        {Register.makeFieldAndErrors(Register.NAME_FIELD_NAME, errors, touched, 'Will Smith', Register.STRING_FIELD_TYPE)}
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
            (error) => notify('Registration failed - ' + error)
        );
    }

    private static maybeShowValidationError<T extends keyof RegisterFields>(fieldName: T, errors: RegisterFields, touched: FormikTouched<RegisterFields>): string | undefined {

        return errors[fieldName] && touched[fieldName] ?
            errors[fieldName] :
            undefined;
    }

    private static makeFieldAndErrors<T extends keyof RegisterFields>(
        fieldName: T,
        errors: RegisterFields,
        touched: FormikTouched<RegisterFields>,
        placeholder: string,
        fieldType: string = fieldName): JSX.Element {

        return <div>
            < Field type={fieldType} name={fieldName} placeholder={placeholder} />
            {Register.maybeShowValidationError(fieldName, errors, touched)}
        </div >;
    }
}
