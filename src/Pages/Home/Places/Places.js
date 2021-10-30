import { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import Place from '../Place/Place';

const Places = () => {
    const [places,setPlaces] = useState([])
    const {isLoading} = useAuth()
    useEffect(() => {
        fetch('http://localhost:5000/places')
        .then(res => res.json())
        .then(data => {
            setPlaces(data)
        })
    },[places])
    if(isLoading){
        return <Spinner className = 'd-block mx-auto' animation="border" variant="danger" />
    }
    return (
        <Container>
            <div className="py-5">
                <div className="heading text-center mb-5">
                    <h3>The Top Places For</h3>
                    <h1>Planning Your Holiday</h1>
                </div>
                <div className="plan-section">
                    <Row className ='gy-5'>
                        {
                        places.map(place => <Place key={place._id} place = {place}></Place>)
                        }
                    </Row>
                </div>
            </div>
        </Container>
    );
};

export default Places;