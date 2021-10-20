import React, { useEffect, useState } from 'react';
import Cares from '../../Cares/Cares';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Importance from '../Importance/Importance';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Cares></Cares>
            <Importance></Importance>
            <Footer></Footer>
        </div>
    );
};

export default Home;