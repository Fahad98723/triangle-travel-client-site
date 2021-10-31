import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import img1 from '../../images/img(1).png'
import './AddNewDestination.css'
const AddNewDestination = () => {

    const { register, handleSubmit, reset } = useForm();
    const history = useHistory()
    const onSubmit = data => {
        fetch('https://warm-plateau-98820.herokuapp.com/places', {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                alert('Added succesfully')
                reset()
                history.push('/')
            }
        })
    };
    return (
        <div className='py-5 '>
            <Container>
                <div className="heading mb-5">
                    <h3>For Your Holiday</h3>
                    <h1>Add New Destination</h1>
                </div>
                    <Row>
                        <Col lg='6'>
                                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                                <input placeholder='Place Name' {...register("name")} />
                                <textarea placeholder='Place Details' {...register("details")} />
                                <input placeholder='Place Image' {...register("image")} />
                                <input placeholder='Cost' type="number" {...register("price")} />
                                <input placeholder='Date' type="date" {...register("date")} />
                                <input placeholder='Duration' type="number" {...register("tourTime")} />
                                <input className='btn btn-success' type="submit" value='Add New Destiantion' />
                            </form>
                        </Col>
                        <Col lg='6'>
                            <img src={img1} alt="" className="img-fluid" />
                        </Col>
                    </Row>
            </Container>
        </div>
    );
};

export default AddNewDestination;