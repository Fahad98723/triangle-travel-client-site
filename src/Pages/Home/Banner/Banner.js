import React from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner-section">
            <Container>
            <Row>
                <Col md = '6'>
                    <h1>Plan Your Best Holiday With Us And Enjoy</h1>
                    <InputGroup className="my-3">
                        <FormControl
                        placeholder="Search Your Favorite Place For
                        Travel"
                        aria-label="Search Your Favorite Place For
                        Travel"
                        aria-describedby="basic-addon2"
                        />
                        <button className="btn btn-dark" id="button-addon2">
                        Search
                        </button>
                    </InputGroup>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Banner;