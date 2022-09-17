import React from 'react';
import Featured from '../Components/Featured';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <div className="homeContainer">
                <Featured></Featured>
            </div>
        </div>
    );
};

export default Home;