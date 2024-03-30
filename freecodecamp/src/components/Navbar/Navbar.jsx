
import React from 'react'
import {NavLink} from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
 
  return (
    <nav className="navbar ">
      <div className="container">
        <ul className="nav">
          <li className="nav-item">
            <div to="/search" className="nav-link search-bar search-input search-button float-left">Search 8,000+ tutorials</div >
          </li>
          <div className="nav-item nav-item-center"> 
            <p class="title">FreeCodeCamp</p> <i className="fas fa-fire"></i>
          </div>
          <li className="nav-item nav-item-buttons">
            <div  to="/menu" className="nav-link menu">Menu</div >
          </li>
          <li className="nav-item nav-item-buttons">
          <NavLink to="/SignIn" className="nav-link btn-link sign-in" >Sign In </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;