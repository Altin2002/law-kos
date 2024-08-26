import React from 'react'
import { ServicesNav } from '../../data'
// import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './mega.scss'


const ServicesMega = () => {
    return (
        <div className='nav-megamenu'>
        <h3>Our practice area</h3>
        <div className='nav-megamenu-content'>
            <div className='menu-links'>
                {ServicesNav.map((props, index) => (
                    <div className='menu-link' key={index}>
                        <Link to='/'>
                            <div className='block'>
                                <div className='icon'>
                                    <img src={props.icon} alt={props.title} />
                                </div>
                                <h6>{props.title}</h6>
                            </div>
                        </Link>
                    </div>
                ))}
            </div> 
            <div className='mega-right'>
                <div className='right-personal'>
                    <hr />
                    <h1>Personal</h1>
                    <p>From family law to personal injury, we treat<br /> your 
                        case with the care it deserves. Let's <br />protect what 
                        matters most to you.</p>
                </div>
                <div className='right-business'>
                    <hr />
                    <h1>Business</h1>
                    <p>Achieve your business goals with LawKos <br />
                        comprehensive legal solutions, designed to <br />
                        mitigate risks and fuel your growth.</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ServicesMega