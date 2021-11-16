import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../photo/banner-4.jpg'
import './header.css'

const Header = () => {
    return (
        <div className="header" style={{backgroundImage:`url(${banner})`}}>
         

            <nav className="nav">
                <Link to="/home" underline="none">Home</Link>
                <Link to ="/book">Book</Link>
                <Link to ="/login">Login</Link>
            </nav>

            <h1 className="header-text">BURJ AL ARAB</h1>
            <h1  className="header-text">A global icon of Arabian Luxury </h1>
        </div>
    );
};

export default Header;