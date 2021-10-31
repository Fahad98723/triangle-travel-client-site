import { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Place from '../Place/Place';

const Places = () => {
    const [places,setPlaces] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    //all places data load from server
    useEffect(() => {
        fetch('https://warm-plateau-98820.herokuapp.com/places')
        .then(res => res.json())
        .then(data => {
            setIsLoading(true)
            setPlaces(data)
        })
        .finally(() => {
            setIsLoading(false)
        })
    },[places,setIsLoading])
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