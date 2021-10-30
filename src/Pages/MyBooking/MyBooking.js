import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
const MyBooking = () => {
    const {user} = useAuth()
    const email = user?.email
    // fetch(`https://warm-plateau-98820.herokuapp.com/booking/byEmail`, {
    //     method : 'POST',
    //     headers : {
    //         'content-type' : 'application/json'
    //     },
    //     body : JSON.stringify(email)
    // })
    const [booking, setBooking] = useState([])
    useEffect(() => {
        fetch('https://warm-plateau-98820.herokuapp.com/booking')
        .then(res => res.json())
        .then(data => setBooking(data))
    },[booking])
    const myBooking = booking.filter(book => book.email === email)
    const handleDelete = id => {
        const confirm = window.confirm('Are you sure about this?')
        if (confirm) {
            fetch(`https://warm-plateau-98820.herokuapp.com/booking/${id}`, {
            method : "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount>0) {
                alert('Deleted successfully')
                const remaining = myBooking.filter(booking => booking._id !== id )
                setBooking(remaining)
            }
        })
        }
    }
    return (
        <div className='py-5'>
            <Container>
                <div className="heading mb-5">
                    <h3>My Booking List</h3>
                    <h1>My Booking</h1>
                </div>
                <div className='overflow-auto'>
                <Table striped bordered hover variant="dark" >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Tour Place</th>
                    <th>Date</th>
                    <th>Duration</th>
                    <th>Status</th>
                    <th>Booking Cancel</th>
                </tr>
            </thead>
            <tbody>
               {
                   myBooking.map(booking =>  
                   <tr>
                        <td>{booking.name}</td>
                        <td>{booking.email}</td>
                        <td>{booking.address}</td>
                        <td>{booking.place}</td>
                        <td>{booking.date}</td>
                        <td>{booking.duration} Day</td>
                        <td>{booking.status}</td>
                        <td className="text-center"><i onClick={() => handleDelete(booking._id)} className="fas fa-trash-alt"></i></td>
                    </tr>)
               }
            </tbody>
            </Table>
                </div>
            </Container>
        </div>
    );
};

export default MyBooking;