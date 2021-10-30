import React, { useEffect, useRef, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Booking = () => {
    const {user} = useAuth()
    const {id} = useParams()
    const [place, setPlace] = useState({})
    const history = useHistory()
    useEffect(() => {
        fetch(`http://localhost:5000/places/${id}`)
        .then(res => res.json())
        .then(data => setPlace(data))
    },[id])
    console.log(place.name);
    const addressRef = useRef()
    const numberRef = useRef()
    const formHandle = e => {
        const bookUser = {
            name : user?.displayName,
            email : user?.email,
            place : place?.name,
            address : addressRef.current.value,
            number : numberRef.current.value,
            status :  'Pending',
            date : place?.date,
            tourTime: place?.tourDuration
        }
        fetch(`http://localhost:5000/booking`, {
            method : 'POST',
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(bookUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('Successfully Booked')
                history.push('/home')
            }
        })
        e.preventDefault()
        e.target.reset()
    }
    return (
        <div className='py-5'>
            <Container>
                <div className="heading text-center mb-2">
                    <h3>To Travel With Us Please</h3>
                    <h1>Book Now</h1>
                </div>
                <form  className='d-flex justify-content-center'  onSubmit={formHandle}>
                <Card className='plan' style={{ width: '25rem' }}>
                    <Card.Img variant="top" src={place.image} />
                        <Card.Body>
                        <Card.Title>{place.name}</Card.Title>
                        <Card.Text>
                        {place.details}
                        </Card.Text>
                        <input ref = {addressRef} className='mb-3 w-75' required type="text"  placeholder='Your Address' />
                        <input ref={numberRef} className='mb-3 w-75' required type="number" placeholder='Your Number' />
                        <div className="book">
                        <input type='submit' value='Book' className="btn btn-danger"></input>
                        </div>
                        </Card.Body>
                </Card>
                </form>
            </Container>
        </div>
    );
};

export default Booking;