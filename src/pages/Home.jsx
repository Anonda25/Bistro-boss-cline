import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category';
import PopulerMenu from './PopulerMenu';
import Featured from './Featured/Featured';
import Testimoneial from './Testimoneial/Testimoneial';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | | Home</title>

            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopulerMenu></PopulerMenu>
            <Featured></Featured>
            <Testimoneial></Testimoneial>
        </div>
    );
};

export default Home;