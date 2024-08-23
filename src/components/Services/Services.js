import React from 'react'
import servicesImg from '../../assets/services.png'
import '../styles/services.scss'

const Services = () => {
  return (
    <div className='services'>
            <div className='services-title'>
                <h1>Services</h1>
                <hr size='5' />
            </div>

            <div className='services-mid-section'>
                <div className='services-personal'>
                    <h3>Personal</h3>
                    <p> 
                        From family law to personal injury, we treat<br /> your
                        case with the care it deserves. Let's <br />protect what
                        matters most to you.
                    </p>

                </div>
                <div className='services-business'>
                    <h3>Business</h3>
                    <p>
                        Achieve your business goals with LawKos <br />
                        comprehensive legal solutions, designed to <br />
                        mitigate risks and fuel your growth.
                    </p>

                </div>
            </div>

            <img src={servicesImg} alt='Services Iamge'/>
        </div>
  )
}

export default Services