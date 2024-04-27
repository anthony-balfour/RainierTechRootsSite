import React from 'react'
import './InfoPanel.css'
import group from '../../assets/group_m.jpg'
import { Link } from 'react-router-dom'

export default function InfoPanel() {
  return (
    <section className="info-panel-container flex">
      <article className="info-panel-text flex">
        <h1 className="green-text">How We Work</h1>
        <p>We are a non-profit offering free coding tutoring to anyone wanting to come in and learn. At Rainier Tech Roots, we believe in providing personalized attention to each student. We conduct one-on-one sessions as well as group classes,
          depending on the student's preference. Our tutors use a hands-on approach to make learning fun and engaging.
          We conduct workshops to keep our students updated with the latest technology trends.
        <button><Link className="book-meeting" to="https://calendly.com/rainiertechroots/30min">Book A Meeting</Link></button>
        </p>
      </article>
      <figure>
        <img src={group} alt="group of kids coding"/>
      </figure>
    </section>
  )
}
