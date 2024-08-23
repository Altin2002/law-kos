import { FormattedMessage } from "react-intl"
import {FaLinkedin, 
    FaFacebookF,
    FaInstagram,
    FaTwitter} from 'react-icons/fa';

export const SocialMedia = [
    {
        to:'/',
        icon: <FaFacebookF />
    },
    {
        to:'/',
        icon: <FaInstagram />
    },
    {
        to:'/',
        icon: <FaTwitter />
    },
    {
        to:'/',
        icon: <FaLinkedin />
    }
]

export const FooterData = [
    {
        category:<FormattedMessage id='company' defaultMessage='ABOUT' />,
        links:[
            {
                link: <FormattedMessage id='about-us' defaultMessage='Our Story' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='our-team' defaultMessage='Our Team' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='careers' defaultMessage='Careers' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='our-work' defaultMessage='Clients & Partners' />,
                to:'/'
            },
        
        ]
    },
    {
        category:<FormattedMessage id='services' defaultMessage='SERVICES' />,
        links:[
            {
                link: <FormattedMessage id='brand-design' defaultMessage='Practice Area' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='graphic-design' defaultMessage='Solutions' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='game-art' defaultMessage='Legal Tech' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='3d-art-work' defaultMessage='Case Studies' />,
                to:'/'            
            },
        ]
    },
    {
        category:<FormattedMessage id='support' defaultMessage='RESOURCES' />,
        links:[
            {
                link: <FormattedMessage id="contact-us" defaultMessage='Contact Us' />,
                to:'/'
            },
            {
                link: <FormattedMessage id="culture" defaultMessage='Latest News' />,
                to:'/'
            },
            {
                link: <FormattedMessage id="blog" defaultMessage='Insights' />,
                to:'/'
            },
            {
                link: <FormattedMessage id="press" defaultMessage='Legal Notices' />,
                to:'/'
            },
            
        ]
    },
]