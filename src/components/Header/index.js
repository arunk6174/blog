import React from 'react'
import { NavLink } from 'react-router-dom';
import './style.css';

const Header = (props) => {
  return(
    <div className= "header">
        <nav className = "headerMenu">
            <NavLink to = "/">Home</NavLink>
            <NavLink to = "/about-us">About</NavLink>
            <NavLink to = "/contact-us">ContactUs</NavLink>
        </nav>
        <div>
            social Media links
        </div>
    </div>
   )

 }

export default Header;