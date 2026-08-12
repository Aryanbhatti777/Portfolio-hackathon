import React from 'react'
import Hero from '../componenets/Hero';
import Work from '../componenets/Work';
import Navbar from '../componenets/Navbar';
import Contact from '../componenets/Contact';
import About from '../componenets/About';

const Main = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <Work />
      <About/>
      <Contact/>
      </>
  )
}

export default Main;