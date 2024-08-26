import React from 'react'
import { ExperienceData } from '../data'
import '../styles/experience.scss'

const Experience = () => {
  return (
    <div className='experience' data-aos="zoom-in">
            {ExperienceData.map((props, index) => {
                return (
                    <div className='experience-content' key={index}>
                        <div className='left-content'>
                            <div className='images'>
                                <h2>15</h2>
                            </div>
                            <div className='left-text'>
                                <h1>{props.title}</h1>
                                <p>{props.description}</p>
                            </div>
                        </div>
                        <div className='right-content'>
                            <img src={props.image3} alt='businessman' className='first-image'/>
                            <img src={props.image4} alt='office' className='second-image' />
                        </div>
                    </div>
                )
            })}

        </div>
  )
}

export default Experience