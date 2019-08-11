import React from 'react';
import { ListingModel } from '../model/Listing';
import { Row, Col } from 'reactstrap';
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer } from 'mdbreact';
import '../css/ListingSummary.css';
import { Link } from 'react-router-dom';
import { listingPathGenerator } from './App';

interface ListingSummaryProps {
    listing: ListingModel;
}

export class ListingSummary extends React.Component<ListingSummaryProps> {
    render(): JSX.Element {
        return <Row xs={3}>
            <Col xs={4}>
                <Link to={listingPathGenerator(String(this.props.listing.getId()))}>
                    <img className='listingImg' src={this.props.listing.getImgUrl()} alt={`${this.props.listing.getName()} listing`} />
                </Link>
            </Col>
            <Col>
                <MDBContainer>
                    <MDBCard>
                        <Link to={listingPathGenerator(String(this.props.listing.getId()))}>
                            <MDBCardTitle>{this.props.listing.getName()}</MDBCardTitle>
                        </Link>
                        <MDBCardText>{this.props.listing.getDescription()}</MDBCardText>
                    </MDBCard>
                </MDBContainer>
            </Col>
        </Row >;
    }

}