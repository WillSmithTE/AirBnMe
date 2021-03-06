import * as React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { REQUIRED, NAME_FIELD_NAME, STRING_FIELD_TYPE, DESCRIPTION_FIELD_NAME, ADDRESS_FIELD_NAME, PRICE_FIELD_NAME } from '../util/constants';
import { ListingModel, LISTINGS_API_PATH } from '../model/Listing';
import { makeFieldAndErrors, makeTextAreaFieldAndErrors, notify } from '../util/util';
import { RouteComponentProps } from 'react-router';
import { postWithAuthToken } from '../model/AuthTypes';
import { LISTING_PATH } from './App';
import { Error } from '../model/Error';
import { DatePicker } from './DatePicker';


export class NewListing extends React.Component<RouteComponentProps<{}>> {

    private static readonly MIN_NAME_LENGTH: number = 2;
    private static readonly MIN_DESCRIPTION_LENGTH: number = 10;
    private static readonly API_PATH: string = LISTINGS_API_PATH + '/new';

    private static readonly VALIDATION_SCHEMA = Yup.object().shape({
        name: Yup.string()
            .min(NewListing.MIN_NAME_LENGTH)
            .required(REQUIRED),
        address: Yup.string()
            .min(NewListing.MIN_NAME_LENGTH)
            .required(REQUIRED),
        description: Yup.string()
            .min(NewListing.MIN_DESCRIPTION_LENGTH)
            .required(REQUIRED),
        price: Yup.number()
            .required(REQUIRED)
    });

    render(): JSX.Element {
        return <div>
            <h1>Create your listing</h1>
            <Formik
                initialValues={{ name: '', address: '', description: '', price: '' }}
                onSubmit={(values) => this.attemptCreateNewListing(values as any)}
                validationSchema={NewListing.VALIDATION_SCHEMA} >
                {({ errors, touched }) =>
                    <Form>
                        {makeFieldAndErrors(NAME_FIELD_NAME, errors, touched, 'The Palace', STRING_FIELD_TYPE)}
                        {makeTextAreaFieldAndErrors(DESCRIPTION_FIELD_NAME, errors, touched, 'Describe your place :)')}
                        {makeFieldAndErrors(ADDRESS_FIELD_NAME, errors, touched, '25, Buckingham Road, England', STRING_FIELD_TYPE)}
                        {makeFieldAndErrors(PRICE_FIELD_NAME, errors, touched, '80', STRING_FIELD_TYPE)}
                        <div><button type='submit'>Post</button></div>
                    </Form>
                }
            </Formik>
            <DatePicker startDateId='start' endDateId='end' />
        </div >;
    }

    private attemptCreateNewListing(listing: ListingModel): void {
        postWithAuthToken(NewListing.API_PATH, listing).then(
            (success) => this.props.history.push(`${LISTING_PATH}/${success.data.listingId}`),
            (error: Error) => notify(error.getMessage())
        );
    }

    private setRanges(ranges: any[]): void {
        this.setState({ ranges });
    }
}
