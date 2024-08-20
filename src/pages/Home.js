import React from 'react'
import Nav from '../components/shared/Navbar/Nav'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import AboutUs from '../components/AboutUs/AboutUs'
import Experience from '../components/Experience/Experience'

const Home = () => {
  return (
    <div className='home-page'>
        <Nav />
        <Hero />
        <Services />
        <AboutUs />
        <Experience />
    </div>
  )
}

export default Home