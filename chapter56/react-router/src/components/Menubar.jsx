import React from 'react';
import { Link } from 'react-router-dom';

const navStyle = {
    backgroundColor : "black",
    color : 'white',
    textAlign : 'center',
    display : 'flex', 
    flexDirection : 'row', 
    alignItems : 'center', 
    justifyContent : 'space-evenly',
    padding : '10px'

}

const linkStyle = {
    color : 'white', 
    textDecoration : 'none', 
    textTransform : 'capitalize'
}

const Menubar = () => {
    return (
            <nav style={navStyle}>
                <Link to="/" style={linkStyle}>home </Link>
                <Link to="/about" style={linkStyle}>about </Link>
                <Link to="/contact" style={linkStyle}>contact </Link>
            </nav>
    );
}

export default Menubar;
