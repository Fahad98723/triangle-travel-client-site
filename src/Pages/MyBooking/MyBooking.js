import React from 'react';
import useAuth from '../../Hooks/useAuth';
const MyBooking = () => {
    const {user} = useAuth()
    const email = user?.email
    fetch(`http://localhost:5000/booking/byEmail`, {
        method : 'POST',
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(email)
    })
    return (
        <div>
            
        </div>
    );
};

export default MyBooking;