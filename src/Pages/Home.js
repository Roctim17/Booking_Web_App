import React from 'react';
import Featured from '../Components/Featured';
import FeaturedProperties from '../Components/FeaturedProperties';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import PropertyList from '../Components/PropertyList';
import Subscribe from '../Components/Subscribe';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <div className="homeContainer">
                <Featured></Featured>
                <h1 className="homeTitle">Browse by property type </h1>
                <PropertyList></PropertyList>
                <h1 className="homeTitle">Homes guests love</h1>
                <FeaturedProperties></FeaturedProperties>
                <Subscribe></Subscribe>

            </div>
        </div>
    );
};

export default Home;