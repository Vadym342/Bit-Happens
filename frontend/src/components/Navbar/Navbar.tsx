import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { Button } from './Button';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <>
      <nav className="navbar fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <Link to="/" className="navbar-logo">
          FLUXION <i className="fab fa-firstdraft" />
        </Link>
        <li className="nav-item course-link" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <Link to="/courses" className="nav-links" onClick={closeMobileMenu}>
            Course <i className="fas fa-caret-down" />
          </Link>
          {dropdown && <Dropdown />}
        </li>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/search" className="search-icon" onClick={closeMobileMenu}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="cart-icon" onClick={closeMobileMenu}>
              <i className="fas fa-shopping-cart" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact-us" className="nav-links" onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
