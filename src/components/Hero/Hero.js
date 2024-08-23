import React from 'react'
import {HeroData} from '../data'
import '../styles/hero.scss'
import { FiArrowRight } from 'react-icons/fi'

const Hero = () => {
  return (
    <div className='hero'>
    {HeroData.map((props, index) => {
        return (
            <div className='hero-section' key={index}>
                <div className='hero-upper'>
                    <div className='hero-title'>
                        <h1>{props.title}</h1>
                    </div>
                    <div className='hero-description'>
                        <p>{props.description}</p>
                        <button type='button'>{props.button} <FiArrowRight className='button-right'/></button>
                    </div>
                </div>
                <div className='hero-lower'>
                    <img src={props.img} alt={props.title}/>
                    {/* {props.img} */}
                    {/* <img className='top-image' src={props.img2} alt='second pic' /> */}
                </div>
            </div>
        )
    })}

</div>
  )
}

export default Hero