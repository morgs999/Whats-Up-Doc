import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { FaCarrot } from "react-icons/fa";
import Auth from '../../utils/auth';
import '../Navbar/Navbar.css';


const Navbar = () => {
  const [click, setClick] = useState(false);

  const handlesClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <>
      <IconContext.Provider value={{ color: " #000" }}>
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
                  // activeClassName="active"
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-links"
                  // activeClassName="activated"
                  onClick={closeMobileMenu}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/doctors"
                  className="nav-links"
                  // activeClassName="activated"
                  onClick={closeMobileMenu}
                >
                  Find a Doctor
                </NavLink>
              </li>

              {/* <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-links"
                  // activeClassName="activated"
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </NavLink>
              </li> */}

              {Auth.loggedIn() ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      to="/appointment"
                      className="nav-links"
                      // activeClassName="activated"
                      onClick={closeMobileMenu}
                    >
                      Book An Appointment
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/prescriptions"
                      className="nav-links"
                      // activeClassName="activated"
                      onClick={closeMobileMenu}
                    >
                      Refill Your Prescriptions
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/profile"
                      className="nav-links"
                      // activeClassName="activated"
                      onClick={closeMobileMenu}
                    >
                      My Profile
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/"
                      className="nav-links"
                      // activeClassName="activated"
                      onClick={logout}
                    >
                      Logout
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink
                      to="/login"
                      className="nav-links"
                      // activeClassName="activated"
                      onClick={closeMobileMenu}
                    >
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/signup"
                      className="nav-links"
                      // activeClassName="activated"
                      onClick={closeMobileMenu}
                    >
                      Signup
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;