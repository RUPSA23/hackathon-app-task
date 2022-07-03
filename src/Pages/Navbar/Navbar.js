import React from 'react';
import { Nav } from 'react-bootstrap';
import css from './Navbar.css'
// import logo from '../../assets/icons/'

const Navbar = () => {
    return (
        <div className="navbar">
        <Nav as="ul">
        {/* <img src={rocketimage} alt="image"/> */}
        <Nav.Item>
        DPhi
          </Nav.Item>
      </Nav>
      </div>
        
    );
};

export default Navbar;