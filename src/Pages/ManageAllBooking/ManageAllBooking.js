import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

const ManageAllBooking = () => {
    const [allBooking, setAllBooking] = useState([])
    useEffect(() => {
        fetch('https://warm-plateau-98820.herokuapp.com/booking')
        .then(res => res.json())
        .then(data => setAllBooking(data))
    },[allBooking])
    const handleDelete = (id) => {
        console.log(id);
        const confirm = window.confirm('Are you sure about this ?')
        if (confirm) {
            fetch(`https://warm-plateau-98820.herokuapp.com/booking/${id}`, {
            method : "DELETE",
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount>0) {
                alert('Deleted successfully')
                const remaining = allBooking.filter(booking => booking._id !== id )
                setAllBooking(remaining)
            }
        })
        }
    }

    const handleStatus = id => {
        const item = allBooking.find(i => i._id === id)
        console.log(item);
        const itemUpdate = {...item}
        itemUpdate.status = "approved"
        console.log(itemUpdate);
        fetch(`https://warm-plateau-98820.herokuapp.com/booking/${id}`, {
            method : "PUT",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(itemUpdate)
        })
    }
    return (
        <div className='py-5 '>
            <Container>
                <div className="heading mb-5">
                    <h3>Manage All Bookings Here</h3>
                    <h1>All Booking</h1>
                </div>
                <div className='overflow-auto'>
                <Table striped bordered hover variant="dark" >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Adress</th>
                    <th>Tour Place</th>
                    <th>Date</th>
                    <th>Duration</th>
                    <th>Status</th>
                    <th>Booking Cancel</th>
                </tr>
            </thead>
            <tbody>
               {
                   allBooking.map(booking =>  
                   <tr>
                        <td>{booking.name}</td>
                        <td>{booking.email}</td>
                        <td>{booking.address}</td>
                        <td>{booking.place}</td>
                        <td>{booking.date}</td>
                        <td>{booking.duration} Day</td>
                        <td className='text-center'>{booking.status} {booking.status === 'Pending' && <i onClick={() => handleStatus(booking._id)} className=" ms-4 fas fa-check-circle fs-4 text-center"></i>}</td>
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

export default ManageAllBooking;