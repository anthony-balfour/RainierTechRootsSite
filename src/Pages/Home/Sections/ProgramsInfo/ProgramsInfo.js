import React from 'react'
import './ProgramsInfo.css'
import book from '../../../assets/book.svg';
import tutor from '../../../assets/tutor.svg';
import community from '../../../assets/community.svg';

export default function ProgramsInfo() {
  return (
    <section className="programs-info-container flex">
      <h1 className="green-text">What We Offer</h1>
      <article className="info-panel flex">
        <article className="program-info flex">
          <img className="program-icon" src={book}/>
          <h3 className="green-text">Software Tutoring</h3>
          <p className="program-paragraph">We offer free technology tutoring to young students of all backgrounds. Our tutors grew up in Rainier community and are excited to tutor </p>
        </article>
        <article className="program-info flex">
          <img className="program-icon" src={community}/>
          <h3 className="green-text">Community Programs</h3>
          <p className="program-paragraph">We currently lead a program at the local Eritrean Community Center! We have a 10-week program teaching students how to build their own personal websites hosted on AWS! (with laptops provided) </p>
        </article>
        <article className="program-info flex">
          <img className="program-icon" src={tutor}/>
          <h3 className="green-text">Open Office Hours Every Thursday</h3>
          <p className="program-paragraph">Our tutors help students build their careers by providing guidance on internships, job applications, resume building, and interview preparation.</p>
        </article>
      </article>
    </section>
  )
}
