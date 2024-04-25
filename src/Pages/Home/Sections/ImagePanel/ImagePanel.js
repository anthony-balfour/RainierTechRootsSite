import React from 'react'
import './ImagePanel.css'
import aboutme from '../../assets/aboutme_m.jpg';
import glasses from '../../assets/glasses.jpg';
import smile from '../../assets/smile_m.jpg';
import classroom from '../../assets/classroom_m.jpg'
import redshirt from '../../assets/red.jpg';
import twokids from '../../assets/twokidscoding_m.jpg';


export default function ImagePanel() {
  return (
    <section>
      <figure className="flex image-panel-container">
        <img src ={glasses}/>
        <img src={redshirt} />
        <img src={smile}/>
      </figure>
      <figure className="flex image-panel-container">
        <img src={classroom} />
        <img src={aboutme} />
        <img src={twokids} />
      </figure>
    </section>
  )
}
