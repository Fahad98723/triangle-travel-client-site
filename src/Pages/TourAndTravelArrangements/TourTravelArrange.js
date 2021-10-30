import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from '../../images/arrange.png'
import img2 from '../../images/arrange(1).png'
import img3 from '../../images/arrange(3).png'
const TourTravelArrange = () => {
    return (
        <div className='py-5'>
            <Container>
                <Row>
                    <div className="heading mb-5">
                                <h3>We Are Specialized In</h3>
                                <h1>Tour And Travel Arrangement</h1>
                    </div>
                    <Col lg='5' className ='arrangements'>
                        <Row className='mb-5'>
                           <Col md ='4'>
                           <img className='img-fluid' src={img2} alt="" />
                            </Col> 
                           <Col md ='8'>
                               <h3>We Can Be A Great Travel Planner For You</h3>
                               <p>For your travelling and tour we are the best choice for you we will give you 100% safety in your travel</p>
                            </Col> 
                        </Row>
                        <Row>
                           <Col md ='4'>
                           <img className='img-fluid' src={img1} alt="" />
                            </Col> 
                           <Col md ='8'>
                               <h3>We Guide You All Over The World</h3>
                               <p>We have best guide you can ensure with our guidense . Because we are the best with best guideman</p>
                            </Col> 
                        </Row>
                    </Col>
                    <Col lg='7'>
                        <img src={img3} alt="" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TourTravelArrange;