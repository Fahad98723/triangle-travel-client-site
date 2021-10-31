import React from 'react';
import {  Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Place.css'
const Place = ({place}) => {
    const {name, image, details ,_id } = place
    //sending id on the router by useParams (book now button click)
    const history = useHistory()
    const handleBooking = () => {
        history.push(`/booking/${_id}`)
    }
    return (
        <Col lg='6'>
            <div className="plan">
                <Row>
                    <Col md = '6'>
                        <img className='img-fluid' src= {image} alt="" />
                    </Col>
                    <Col md = '6' className='d-flex align-items-center'>
                        <div className='p-2'>
                            <h3>{name}</h3>
                            <p>{details}</p>
                            <button onClick={handleBooking} className='btn btn-danger'>Booking Now</button>
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
    );
};

export default Place;