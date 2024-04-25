import React from 'react'
import './ProgramsPanel.css'
import leftPic from '../../assets/teeth_m.jpg';
import middlePic from '../../assets/twosmile_m.jpg';
import rightPic from '../../assets/codingkids_m.jpg';

export default function ProgramsPanel() {
  return (
    <section className="panel flex">

      <section className="panel-container flex">
        <figure>
            <img src={leftPic} className="panel-image" alt="" />
        </figure>
          <article className="panel-message">
            <h2 className="white-text">3+</h2>
            <h2 className="white-text">Students Tutored</h2>
        </article>

      </section>

      <section className="panel-container flex">
        <figure>
          <img src={middlePic} className="panel-image"  alt="" />
        </figure>
        <article className="panel-message">
          <h2 className="white-text">2+</h2>
          <h2 className="white-text">Community Programs</h2>
        </article>
      </section>

      <section className="panel-container flex">
        <figure>
          <img src={rightPic} className="panel-image" alt="" />
        </figure>
        <article className="panel-message">
        <h2 className="white-text">10+</h2>
          <h2 className="white-text">Open Office Hours </h2>
        </article>
      </section>

    </section>
  )
}
