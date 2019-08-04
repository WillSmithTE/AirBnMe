import * as hash from 'hash.js';
import * as React from 'react';
import { FormikTouched, Field } from 'formik';
import { TEXTAREA_FIELD_TYPE } from './constants';
import { AxiosError } from 'axios';
import { isUndefined } from 'util';
import '../css/App.css';

export function isNonEmptyString(value: any): boolean {
    return typeof value === 'string' &&
        value !== null &&
        value !== undefined;
}

export function axiosErrorToMessage(error: AxiosError): string {
    if (isUndefined(error.response)) {
        return error.message;
    } else {
        return error.response.data.message;
    }
}

export function notify(message: any): void {
    alert(message);
}

export function notifyError(message: string): void {
    notify('Error: ' + message);
}

export function hashPassword(unhashed: string): string {
    return hash.sha384().update(hash.sha384().update(unhashed)).digest('hex');
}

export function makeFieldAndErrors<S, T extends keyof S>(
    fieldName: T,
    errors: S,
    touched: FormikTouched<S>,
    placeholder: string,
    fieldType: string = fieldName as string
): JSX.Element {

    return <div className='input-field'>
        <Field type={fieldType} name={fieldName} placeholder={placeholder} />
        {maybeShowValidationError(fieldName, errors, touched)}
    </div >;
}

export function makeTextAreaFieldAndErrors<S, T extends keyof S>(
    fieldName: T,
    errors: S,
    touched: FormikTouched<S>,
    placeholder: string,
    fieldType: string = fieldName as string
): JSX.Element {
    return <div>
        <Field type={fieldType} name={fieldName} placeholder={placeholder} component={TEXTAREA_FIELD_TYPE} />
        {maybeShowValidationError(fieldName, errors, touched)}
    </div >;
}

function maybeShowValidationError<S, T extends keyof S>(fieldName: T, errors: S, touched: FormikTouched<S>): S[T] | undefined {
    return errors[fieldName] && touched[fieldName] ?
        errors[fieldName] :
        undefined;
}
