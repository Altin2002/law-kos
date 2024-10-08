import React from 'react'
import { TestimonialsData } from '../data'
import '../styles/testimonials.scss'

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <div className='testimonials-content'>
                <div className='title'>
                    <h1>What our clients say about us</h1>
                </div>
 
                <div className='clients'  data-aos="zoom-in">
                    {TestimonialsData.map((clients, index) => {
                        return (
                            <div className='client' key={index}>
                                <div className='client-description'>
                                    <img src={clients.image} alt={clients.name} />
                                    <span>,,</span>
                                    <p>{clients.description}</p>
                                </div>
                                <hr size='5' />
                                <div className='name-position'>
                                    <h3>{clients.name}</h3>
                                    <p>{clients.postion}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Testimonials