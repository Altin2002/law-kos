import React from 'react'
import '../styles/aboutus.scss'
import { BsArrowRight } from 'react-icons/bs'

const AboutUs = () => {
  return (
    <div className='about-us' data-aos="fade-up-right">
      <div className='aboutus-title'>
        <hr size='5' />
        <h1>ABOUT US</h1>
      </div>
      <div className='aboutus-content'>
        <p>
          Our team consist of well-coordinated <br />
          lawyers that are able to solve the most <br />
          difficult tasks and cases.
          <button>About us <BsArrowRight className='btn-arrow' /></button>
        </p>
      </div>
    </div>
  )
}

export default AboutUs