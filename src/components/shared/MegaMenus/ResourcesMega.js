import React from 'react'
import { ResourcesNav } from '../../data'
import { Link } from 'react-router-dom'
import './resources.scss'

const ResourcesMega = () => {
  return (
    <div className='nav-megamenu2'>
    <h3>Resources</h3>
    <div className='nav-megamenu-content2'>
        <div className='menu-links2'>
            {ResourcesNav.map((props, index) => (
                <div className='menu-link2' key={index}>
                    <Link to='/'>
                        <div className='block2'>
                            <div className='icon2'>
                                <img src={props.icon} alt={props.title} />
                            </div>
                            <h6>{props.title}</h6>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
        <div className='mega-right2'>
            <div className='right-personal2'>
                <hr />
                <h1>Personal</h1>
                <p>From family law to personal injury, we treat<br /> your 
                    case with the care it deserves. Let's <br />protect what 
                    matters most to you.</p>
            </div>
            <div className='right-business2'>
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

export default ResourcesMega