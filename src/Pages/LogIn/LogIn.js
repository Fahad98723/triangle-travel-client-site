import React from 'react';
import { Container} from 'react-bootstrap';
import { useLocation,useHistory} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './LogIn.css'
const Login = () => {
    const {googleSignIn,error,setError,setIsLoading,facebookSignIn} = useAuth()

    //after login you will came where you were
    const location = useLocation()
    const path_url = location?.state?.from?.pathname
    const history = useHistory()
 
    //handle google signin
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            if (path_url) {
                history.push(path_url)
            }
            else{
                history.push('/')
            }
        })
        .catch(error => {
            setError(error.message)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }
    //handle facebook signin
    const handleFacebookSignIn = () => {
        facebookSignIn()
        .then(result => {
            if (path_url) {
                history.push(path_url)
            }
            else{
                history.push('/')
            }
        })
        .catch(error => {
            setError(error.message)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }
    return (
        <Container className= 'text-center py-5'>
            <div className="heading mb-5">
                <h3>Login with your social site</h3>
                <h1>Please log in</h1>
            </div>
            <h5 className='text-danger mt-2'>{error}</h5>
            <div className="d-flex justify-content-center">
                <div>
                <button  onClick = {handleGoogleSignIn} className='w-100 d-flex align-items-center  btn btn-light'><h5>Sign In With Google</h5><i className="ms-2 fab fa-google fs-4"></i></button>
                <button  onClick={handleFacebookSignIn} className='d-flex align-items-center btn btn-light mt-3'><h5>Sign In With Facebook</h5><i className="fa fa-facebook-square fs-3 ms-3"></i></button>
                </div>
            </div>
            
        </Container>
    );
};

export default Login;