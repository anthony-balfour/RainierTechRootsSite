import React from 'react'
import './LandingPage.css'
import kidsCodingImage from '../../assets/kidscoding_l.jpg'

export default function LandingPage() {

  return (
    <figure className="landing-page-container">
      <img src={kidsCodingImage} alt="two kids coding" className="landing-page-image" />
      <article className="welcome-message-container">
        <h1 className="white-text">Welcome to</h1>
        <h1 className="green-text">Rainier Tech Roots</h1>
        <p className="white-text">Coding Tutoring for the Rainier Community</p>
        <button id="button" className="white-text">Join The Cause</button>
      </article>

    </figure>
  )
}
