import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { FaCarrot } from "react-icons/fa";
import './Navbar.css';


const Navbar = () => {
  const [click, setClick] = useState(false);

  const handlesClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
    <IconContext.Provider value={{color:" #000"}}>
      <nav className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <FaCarrot className="navbar-icon" />
            What's Up Doc?
          </Link>
          <div className="menu-icon" onClick={handlesClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-links"
                activeClassName="activated"
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-links"
                activeClassName="activated"
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/doctors"
                className="nav-links"
                activeClassName="activated"
                onClick={closeMobileMenu}
              >
                Doctors
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/appointment"
                className="nav-links"
                activeClassName="activated"
                onClick={closeMobileMenu}
              >
                Book Appointment
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/prescriptions"
                className="nav-links"
                activeClassName="activated"
                onClick={closeMobileMenu}
              >
                Prescriptions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-links"
                activeClassName="activated"
                onClick={closeMobileMenu}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/profile"
                className="nav-links"
                activeClassName="activated"
                onClick={closeMobileMenu}
              >
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/login"
                className="nav-links"
                activeClassName="activated"
                onClick={closeMobileMenu}
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </IconContext.Provider>
    </>
  );
}

export default Navbar;