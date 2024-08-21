import React from 'react'
import Nav from '../components/shared/Navbar/Nav'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import AboutUs from '../components/AboutUs/AboutUs'
import Experience from '../components/Experience/Experience'
import Practice from '../components/Practice/Practice'
import Banner from '../components/Banner/Banner'
import Team from '../components/Team/Team'
import NewsAndEvents from '../components/NewsAndEvents/NewsAndEvents'


const Home = () => {
  return (
    <div className='home-page'>
        <Nav />
        <Hero />
        <Services />
        <AboutUs />
        <Experience />
        <Practice />
        <Banner />
        <Team />
        <NewsAndEvents />
    </div>
  )
}

export default Home