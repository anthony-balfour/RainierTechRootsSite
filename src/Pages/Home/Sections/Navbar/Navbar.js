import React from 'react'
import './Navbar.css';
import './global.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex">
      <figure>

      </figure>
      <section className="flex nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </section>
    </nav>
  )
}
