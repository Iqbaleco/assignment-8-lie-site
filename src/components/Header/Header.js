import React from 'react';
import logo from '../../images/UPC-logo.png';
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
        </nav>
    );
};

export default Header;