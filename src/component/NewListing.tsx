import * as React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { REQUIRED_TEXT, NAME_FIELD_NAME, STRING_FIELD_TYPE, DESCRIPTION_FIELD_NAME, ADDRESS_FIELD_NAME, PRICE_FIELD_NAME } from '../util/constants';
import { ListingModel, LISTINGS_API_PATH } from '../model/Listing';
import { makeFieldAndErrors, makeTextAreaFieldAndErrors, notifyError, axiosErrorToMessage } from '../util/util';
import { RouteComponentProps } from 'react-router';
import { postWithAuthToken } from '../model/AuthTypes';
import { LISTING_PATH } from './App';


export class NewListing extends React.Component<RouteComponentProps<{}>> {

    private static readonly MIN_NAME_LENGTH: number = 2;
    private static readonly MIN_DESCRIPTION_LENGTH: number = 10;
    private static readonly API_PATH: string = LISTINGS_API_PATH + '/new';

    private static readonly VALIDATION_SCHEMA = Yup.object().shape({
        name: Yup.string()
            .min(NewListing.MIN_NAME_LENGTH)
            .required(REQUIRED_TEXT),
        address: Yup.string()
            .min(NewListing.MIN_NAME_LENGTH)
            .required(REQUIRED_TEXT),
        description: Yup.string()
            .min(NewListing.MIN_DESCRIPTION_LENGTH)
            .required(REQUIRED_TEXT),
        price: Yup.number()
            .required(REQUIRED_TEXT)
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
        </div >;
    }

    private attemptCreateNewListing(listing: ListingModel): void {
        postWithAuthToken(NewListing.API_PATH, listing).then(
            (success) => this.props.history.push(`${LISTING_PATH}/${success.data.listingId}`),
            (error) => notifyError(axiosErrorToMessage(error))
        );
    }

    private setRanges(ranges: any[]): void {
        this.setState({ ranges });
    }
}
