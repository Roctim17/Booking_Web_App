import React from 'react';
import Featured from '../Components/Featured';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import PropertyList from '../Components/PropertyList';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <div className="homeContainer">
                <Featured></Featured>
                <h1 className="homeTitle">Browse by property type </h1>
                <PropertyList></PropertyList>
            </div>
        </div>
    );
};

export default Home;