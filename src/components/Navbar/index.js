import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import asserts from '../../asserts/icons/find.png'
import './style.css';

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {
    const [search, setSearch] = useState(false);

 const submitSearch = (e) =>{
     e.preventDefault();
     alert('Searched');

 }

 const openSearch = () =>{
     setSearch(true);

 }

 const searchClass = search?"searchinput active": "searchinput";


  return(
    <div className="navbar">
            <ul className="navbarMenu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about-us">About Us</NavLink></li>
            <li><NavLink to="/post">Post</NavLink></li>
            <li><NavLink to="/contact-us">Contact Us</NavLink></li>
        </ul>
        <div className= "search">
        <form onSubmit= {submitSearch}>
            <input type = "text" className={searchClass}  placeholder="Search"/>
            <img onClick={openSearch} className= "searchIcon" src={ asserts } alt="Search" />

        </form>

            
        </div>
    </div>
   )

 }

export default Navbar;