import React from 'react'
import './InfoPanel.css'
import group from '../../assets/group_m.jpg'

export default function InfoPanel() {
  return (
    <section className="info-panel-container flex">
      <article className="info-panel-text flex">
        <h1 className="green-text">How We Work</h1>
        <p>At Rainier Tech Roots, we believe in providing personalized attention to each student. We conduct one-on-one sessions as well as group classes,
          depending on the student's preference. Our tutors use a hands-on approach to make learning fun and engaging.
          We also conduct workshops and seminars to keep our students updated with the latest technology trends.
        <button>Book A Meeting</button>
        </p>
      </article>
      <figure>
        <img src={group} alt="group of kids coding"/>
      </figure>
    </section>
  )
}
