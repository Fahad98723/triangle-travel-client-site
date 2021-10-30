import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css'
const Header = () => {
    const history = useHistory()
    const {user,logOut} = useAuth()

    //login route push after click on login btn in nav bar
    const loginHandle= () => {
        history.push('/login')
    }
    return (
        <Navbar collapseOnSelect expand="lg" sticky= 'top' className='py-1s navigation-bar'>
        <Container>
        <Navbar.Brand className='logo' as={Link} to="/home">Triangle Travel</Navbar.Brand>
        <Navbar.Toggle />
             <Navbar.Collapse className="justify-content-end menu">
                 <Nav.Link as={Link} to="/home">Home</Nav.Link>
                 <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                 {
                     user?.email || user?.displayName ? <>
                     <Nav.Link as={Link} to="/myBooking">My Booking</Nav.Link>
                     <Nav.Link as={Link} to="/manageAllBooking">Manage All Booking</Nav.Link>
                     <Nav.Link as={Link} to="/AddNewDestination">Add New Destination</Nav.Link>  </> : ''
                     
                 }
                 
            {
                user?.email || user?.displayName ? 
                <div className=''><h6 className='me-3 fw-bold'><i  className="fas fa-user-check fs-5"></i> {user?.displayName}</h6>
                <button onClick={logOut} className="btn btn-dark">Logout</button></div>
                :
                <button onClick={loginHandle} className="btn btn-dark">Login</button>
            }
                         
             </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;