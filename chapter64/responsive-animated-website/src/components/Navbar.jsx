import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary p-3 sticky-top b-2">
            <div className="container-fluid ">
                <NavLink className="navbar-brand" to="/" >Parth Kamal </NavLink>
                    <ul className="navbar-nav right-navbar">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/services">Services </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact Us </NavLink>
                        </li>
                    </ul>
                </div>
        </nav>
    );
}

export default Navbar;
