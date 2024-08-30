import React from 'react';
import '../../styles/footer.scss'
import { FormattedMessage } from 'react-intl';
import { FooterData, SocialMedia } from './footerdata';
import { Link } from 'react-router-dom';
import { FiPhoneCall } from 'react-icons/fi';
import { BsEnvelope } from 'react-icons/bs';
import ThemeSwitcher from './ThemeSwitcher';
import SelectLanguage from '../SelectLanguage/selectLanguage';


const Footer = (props) => {

    // const [mode, setMode] = useState(() => localStorage.getItem("mode"));

    return (
        <div className='shared-footer'>

            <div className="main-row">

                <div className="first-col">
                    <div className="top">
                        <Link to='/' className='logo-container'>
                            <div className="logo">

                            </div>
                            <div>
                                <h5>LAWKOS</h5>
                            </div>
                        </Link>
                        <h5><FormattedMessage id='footer-paragraph1' defaultMessage='LEGAL EXELLENCE' /></h5>
                        <div className='subscribe'>
                            <h5><FormattedMessage id='footer-paragraph1' defaultMessage='Subscribe to our newsletter' /></h5>
                            <input type="text" placeholder="Enter your email" />
                            <BsEnvelope id="envelope" />
                            <button>Subscribe</button>
                        </div>
                    </div>
                    <div className="links1">
                        <div className='contact-info'>
                            <div className='phone'>
                                <FiPhoneCall className='phone-svg' />
                                <div>
                                    <h4>+383 123 456 789</h4>
                                    <p>Call our office</p>
                                </div>
                            </div>
                            <div className='connect'>
                                <p>CONNECT WITH US:</p>
                            </div>
                            <div className='social'>
                                {SocialMedia.map((props) => {
                                    return (
                                        <div className='icons'>
                                            <Link className='icon' to={props.to}>{props.icon}</Link>
                                        </div>

                                    )
                                })}
                            </div>
                        </div>
                    </div>

                </div>

                <div className='all-footer-links'>
                    {FooterData.map((props, index) => {
                        return (
                            <div className="footer-list" key={index}>
                                <h6>{props.category}</h6>
                                <div className="links">
                                    {props.links.map((l, i) => {
                                        return (
                                            <Link key={l.i} to={l.to} className="footer-item">
                                                {l.link}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="last-row">
                <p><FormattedMessage id='footer-paragraph2' defaultMessage='©2024 LAWKOS | ALL RIGHTS RESERVED' /></p>
                <p><FormattedMessage id='footer-paragraph2' defaultMessage='Privacy | Cookies' /></p>
                <div className='right'>
                    <ThemeSwitcher/>
                    <SelectLanguage
                        setLanguage={props.setLanguage}
                        language={props.language}
                    />
                </div>

            </div>
        </div>
    )
};

export default Footer;
