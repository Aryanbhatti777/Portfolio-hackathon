import React from 'react'
import Hero from '../componenets/Hero';
import Work from '../componenets/Work';
import Contact from '../componenets/Contact';
import About from '../componenets/About';
import Skills from '../componenets/Skills';
import Footer from '../componenets/Footer';

const Main = () => {
  return (
    <>
      <Hero />
      <Work />
      <About />
      <Skills/>
      <Contact />
      <Footer/>
      </>
  )
}

export default Main;