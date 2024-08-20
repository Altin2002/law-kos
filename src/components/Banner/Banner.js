import React from 'react'
import '../styles/banner.scss'
import logo from '../../assets/logo.png'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-text'>
                From family law to personal injury, <br />
                we treat your case with the care it <br />
                deserves. Let's protect what matters <br />
                most to you.
            </div>
            <div className='banner-logo'>
                <img src={logo} alt='logo' />
            </div>
        </div>
    )
}

export default Banner