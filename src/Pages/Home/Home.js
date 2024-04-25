import React from 'react'
import LandingPage from './Sections/LandingPage/LandingPage'
import ProgramsPanel from './Sections/ProgramsPanel/ProgramsPanel';
import ProgramsInfo from './Sections/ProgramsInfo/ProgramsInfo';
import InfoPanel from './Sections/InfoPanel/InfoPanel';
import ImagePanel from './Sections/ImagePanel/ImagePanel';
import Footer from './Sections/Footer/Footer';

export default function Home() {
  return (
    <section>
      <LandingPage />
      <ProgramsPanel />
      <ProgramsInfo />
      <InfoPanel />
      <ImagePanel />
      <Footer />
    </section>
  )
}
