import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../../images/simpleAbout.jpg'
const SimpleAbout = () => {
    return (
        <div className="py-5">
            <Container>
            <div className="heading text-center mb-5">
                <h3>Who We Are</h3>
                <h1>Know More About Ourselves</h1>
            </div>
                <Row className=" align-items-center">
                    <Col md = '6'>
                        <h4>We Are Your Travel Mate</h4>
                        <p>Amazing Tours is leading tour operator of Bangladesh and we are member of IATA and Tour Operators Association of Bangladesh (TOAB). We are not only for tour operator, our Established Software company, This company provide many product is  travel related and others kinds of software. Amazing Tours provides inbound and outbound tour operate</p>
                        <p> Inbound tours provide experience guide, standard and any category’s hotel, best tours spot selection and your security. Holidays are meant for relaxation,your quality time with your loved ones and it is imperative to have the best Tour Operator to be your travel planner, who has got the experienc-</p>
                    </Col>
                    <Col md = '6'>
                        <img className='img-fluid' src={img} alt="" />
                    </Col>
                </Row>
        </Container>
        </div>
    );
};

export default SimpleAbout;