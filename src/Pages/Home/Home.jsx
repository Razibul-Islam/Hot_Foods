import React from 'react';
import Banner from './Banner';
import Menus from './Menue';
import Delivery from './Delivery';
import Open from './Open';
import OurService from './OurService';
import Review from './Review';
import Book from './Book';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Menus/>
            <Open/>
            <Delivery/>
            <OurService/>
            <Book/>
            <Review/>
            <Footer/>
        </div>
    );
};

export default Home;