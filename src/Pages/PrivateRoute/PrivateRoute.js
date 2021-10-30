import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user,isLoading} = useAuth()

    //spinner on data loading and stoping the problem after reloading always went on login 
    if(isLoading){
        return <Spinner className = 'd-block mx-auto' animation="border" variant="danger" />
    }
    return (
        <Route
        {...rest}
        render = {({location}) => user.email || user.displayName ? children : <Redirect
        to={{
            pathname: "/login",
            state: { from: location }
          }}
        >

        </Redirect>}
        >
            
        </Route>
    );
};

export default PrivateRoute;