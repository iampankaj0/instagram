import React from 'react';
import './navbar.css';
import logo from '../images/logo.png';

const Navbar = () => {
    return (
        <>
            <section className="header">
                <div className="container">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="search-bar">
                        <input type="search" className='form-control' placeholder='Search' />
                    </div>
                    <div className="buttons">
                        <button className="btn log-in-btn mr-2">log in</button>
                        <button className="btn sign-up-btn">sign up</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Navbar;