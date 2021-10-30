import React from 'react';
import TourTravelArrange from '../../TourAndTravelArrangements/TourTravelArrange';
import Banner from '../Banner/Banner';
import Places from '../Places/Places';
import SimpleAbout from '../SimpleAbout/SimpleAbout';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SimpleAbout></SimpleAbout>
            <Places></Places>
            <TourTravelArrange></TourTravelArrange>
        </div>
    );
};

export default Home;