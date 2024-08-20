import React, { useState } from 'react';
import './navMobile.scss';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaRegTimesCircle } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import ServicesMega from './MegaMobile/ServicesMega';
import ResourcesMega from './MegaMobile/ResourcesMega';
import logo from '../../../assets/logo.png'
import Backdrop from './Backdrop';

const NavbarMobile = ({ open, close }) => {
    const [openServices, setOpenServices] = useState(false);
    const [openResources, setOpenResources] = useState(false);

    const toggleServices = () => setOpenServices(!openServices);
    const toggleResources = () => setOpenResources(!openResources);

    const mobileMenu = open ? 'navbar-mobile open' : 'navbar-mobile';

    return (
        <>
            {open && <Backdrop closeMenu={close} />}
            <nav className={mobileMenu}>
                <div className="mobile-header">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <FaRegTimesCircle className="close-icon" onClick={close} />
                </div>
                <ul>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link className="services-nav" onClick={toggleServices}>
                            Services <MdKeyboardArrowDown id="arrow-icon" />
                        </Link>
                        {openServices && <ServicesMega />}
                    </li>
                    <li>
                        <Link className="resources-nav" onClick={toggleResources}>
                            Resources <MdKeyboardArrowDown id="arrow-icon" />
                        </Link>
                        {openResources && <ResourcesMega />}
                    </li>
                    <li>
                        <Link to="/">News</Link>
                    </li>
                    <li>
                        <Link to="/">Careers</Link>
                    </li>
                </ul>
                <div className="side-contact">
                    <button>Contact us</button>
                    <div className="side-number">
                        <Link to="/">+383 123 456 789</Link>
                        <p>Call our office</p>
                        <FiPhoneCall />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavbarMobile;