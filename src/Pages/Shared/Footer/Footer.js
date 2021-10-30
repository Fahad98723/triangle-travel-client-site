import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from '../../../images/images/img (1).jpg'
import img2 from '../../../images/images/img (2).jpg'
import img3 from '../../../images/images/img (3).jpg'
import img4 from '../../../images/images/img (4).jpg'
import img5 from '../../../images/images/img (5).jpg'
import img6 from '../../../images/images/img (6).jpg'
const Footer = () => {
    return (
        <div className= 'py-5 footer-section'>
            <Container>
                <Row>
                    <Col lg= '4'>
                        <h3>Triangle Travel</h3>
                        <h6><i className="fas fa-envelope"></i> : md.ravi63@gmail.com</h6>
                        <h6><i className="fas fa-phone"></i> : +9355 3652 832</h6>
                        <h6><i className="fas fa-phone"></i> : +5642 4352 257</h6>
                        <h6><i className="fas fa-map-marked-alt"></i> : 3 Edgar Buildings, England,
                        BA1 2FJ.</h6>
                    </Col>
                    <Col lg='2'>
                        <h3>Quick Link</h3>
                        <h6>Popular Tour</h6>
                        <h6>Blog</h6>
                        <h6>Shop</h6>
                        <h6>FAQ's</h6>
                        <h6>Privacy Policy</h6>
                    </Col>
                    <Col lg='3'>
                        <h3>Important Links</h3>
                        <h6>Destination</h6>
                        <h6>Get In Touch</h6>
                        <h6>Who We Are</h6>
                        <h6>Contact Us</h6>
                        <h6>Hotels</h6>
                    </Col>
                    <Col lg='3'>
                        <Row className='g-4'>
                            <Col lg= '4'>
                                <img src={img1} alt="" className="img-fluid h-75 w-100" />
                            </Col>
                            <Col lg= '4'>
                                <img src={img2} alt="" className="img-fluid h-75 w-100" />
                            </Col>
                            <Col lg= '4'>
                                <img src={img3} alt="" className="img-fluid h-75 w-100" />
                            </Col>
                            <Col lg= '4'>
                                <img src={img4} alt="" className="img-fluid h-75 w-100" />
                            </Col>
                            <Col lg= '4'>
                                <img src={img5} alt="" className="img-fluid h-75 w-100" />
                            </Col>
                            <Col lg= '4'>
                                <img src={img6} alt="" className="img-fluid h-75 w-100" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;