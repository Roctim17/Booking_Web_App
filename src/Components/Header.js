import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faHotel,
    // faCalendarDays,
    faCar,
    // faPerson,
    faPlane,
    faTaxi, faBed
} from "@fortawesome/free-solid-svg-icons"
import '../App.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faHotel} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                <h1 className='headerTitle'> A Lifetime of discounts</h1>
                <p className='headerDesc'>
                    Get rewarded for your travels - unlock instant savings of 105 or more with a free Booking account
                </p>
                <button className='headerBtn'>Sign in / Register</button>
            </div>
        </div>
    );
};

export default Header;