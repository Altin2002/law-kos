import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../../styles/nav.scss'
import logo from '../../../assets/logo.png'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { PiLineVerticalBold } from 'react-icons/pi'
import { FiPhoneCall } from 'react-icons/fi'
import ServicesMega from '../MegaMenus/ServicesMega'
import ResourcesMega from '../MegaMenus/ResourcesMega'
import NavbarMobile from '../MobileNav/NavbarMobile'
import { MdMenu } from 'react-icons/md'


const Nav = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className='nav'>

            <Link to='/' className='title'>
                <img src={logo} alt='logo' className='svg' /> LAWKOS </Link>

            <div className='links'>
                <div className='nav-link'>
                    <Link to='/' className='inner-link'>About</Link>
                </div>

                <div className='nav-link'>
                    <Link to='/' className='inner-link'>Services <MdKeyboardArrowDown className='svg' /></Link>
                    <PiLineVerticalBold className='arrow' />
                    <ServicesMega />
                </div>

                <div className='nav-link'>
                    <Link to='/' className='inner-link'>Resources <MdKeyboardArrowDown className='svg' /></Link>
                    <PiLineVerticalBold className='arrow' />
                    <ResourcesMega />
                </div>


                <div className='nav-link'>
                    <Link to='/' className='inner-link'>News</Link>
                </div>

                <div className='nav-link'>
                    <Link to='/' className='inner-link'>Careers</Link>
                </div>
            </div>

            <div className='nav-contact'>
                <div className='contact-info'>
                    <FiPhoneCall className='phone-svg'/>
                    <div>
                        <h4>+383 123 456 789</h4>
                        <p>Call our office</p>
                    </div>
                </div>
                <Link to='/' className='signup'>Contact Us</Link>
            </div>

            <button className='mobile-menu-icon' onClick={toggleMobileMenu}>
                    <MdMenu />
            </button>

            <NavbarMobile open={isMobileMenuOpen} close={closeMobileMenu} />

        </div>
    )
}

export default Nav