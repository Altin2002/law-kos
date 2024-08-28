import React from 'react'
import logo from '../../assets/hero2.png'
import "./imageSection.scss"

const ImageSection = () => {
  return (
    <div className="img-wrapper" data-aos="fade-left">
      <div className='left'></div>
      <div className='mid'></div>
      <div className='right'></div>
      <img src={logo} alt="logo" className="logo" />
    </div>
  )
}

export default ImageSection