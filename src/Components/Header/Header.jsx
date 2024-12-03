import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { BiCurrentLocation } from "react-icons/bi";

function Header({ onCityChange, onLocationFetch }) {
    const [inputValue, setInputValue] = useState('');

    const handleSearch = () => {
        if (inputValue.trim()) {
            onCityChange(inputValue.trim());
        }
    };

    return (
        <header className='header'>
                <div className="header_inner">
                    <h2>
                        <a href="/" className="header_link">Weather</a>
                    </h2>
                    <div className="header_right">
                        <input
                            type="text"
                            className="header_input"
                            placeholder="Enter city name"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button className='header_btn' onClick={handleSearch}>
                            <IoIosSearch /> Search
                        </button>
                        <button
                            className="header_loc_btn"
                            onClick={onLocationFetch}
                        >
                            <BiCurrentLocation /> Current Location
                        </button>
                    </div>
                </div>
        </header>
    );
}

export default Header;
