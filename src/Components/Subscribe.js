import React from 'react';

const Subscribe = () => {
    return (
        <div className="subscribe">
            <h1 className="subscribeTitle">Save time, save money!</h1>
            <span className="subscribeDesc">Sign up and we'll send the best deals to you</span>
            <div className="subscribeInputContainer">
                <input type="text" placeholder="Your Email" />
                <button>Subscribe</button>
            </div>
        </div>
    );
};

export default Subscribe;