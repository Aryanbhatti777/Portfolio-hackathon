import React from 'react'
import Hero from '../componenets/Hero';
import Work from '../componenets/Work';
import Navbar from '../componenets/Navbar';
import Contact from '../componenets/Contact';

const Main = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <Work />
      <Contact/>
      </>
  )
}

export default Main;