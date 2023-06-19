import React,  { useState } from 'react'
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <i className="fa-solid fa-seedling" />
            <h1>VegEC</h1>
          </Link>
          <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/menu" className='nav-links'  onClick={closeMobileMenu} >
                MENU
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className='nav-links'  onClick={closeMobileMenu} >
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className='nav-links'  onClick={closeMobileMenu} >
                CONTACT
              </Link>
            </li>
          </ul>
          <button className='bars' onClick={toggleMenu}>
            <i className={isOpen ? "fa-solid fa-xmark" : "fas fa-bars"} />
          </button>
        </div>  
      </nav>  
    </>
  )
}

export default Navbar