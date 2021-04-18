import React from 'react';
import Navbar from '../../Shared/Navigation/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css'

const Header = () => {
    return (
        <main className="header">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
        </main>
    );
};

export default Header;