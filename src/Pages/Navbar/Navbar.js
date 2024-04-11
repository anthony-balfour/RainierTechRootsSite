import React from 'react'
import './Navbar.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import '../../../src/global.css';
import logo from '../assets/logo5cropped.png';

export default function Navbar() {
  return (
    <nav className="flex">
      <figure>
        <img id="logo" src={logo} alt="Rainier Tech Roots Logo" />
      </figure>
      <section className="nav-links-container">
        <ul className="flex nav-links-list">
          <li>
            <Link to="/" className="nav-links">Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-links">About</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-links">Contact</Link>
          </li>
        </ul>
      </section>
    </nav>
  )
}
