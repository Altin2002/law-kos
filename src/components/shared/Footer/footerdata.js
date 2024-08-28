import { FormattedMessage } from "react-intl"
import {FaLinkedin, 
    FaFacebookF,
    FaInstagram,
    FaTwitter} from 'react-icons/fa';

export const SocialMedia = [
    {
        to:'/',
        icon: <FaLinkedin />
    },
    {
        to:'/',
        icon: <FaTwitter />
    },
    {
        to:'/',
        icon: <FaFacebookF />
    },
    {
        to:'/',
        icon: <FaInstagram />
    },
]

export const FooterData = [
    {
        category:<FormattedMessage id='about' defaultMessage='ABOUT' />,
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
                link: <FormattedMessage id='clients' defaultMessage='Clients & Partners' />,
                to:'/'
            },
        
        ]
    },
    {
        category:<FormattedMessage id='services' defaultMessage='SERVICES' />,
        links:[
            {
                link: <FormattedMessage id='practice' defaultMessage='Practice Area' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='solutions' defaultMessage='Solutions' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='legal-tech' defaultMessage='Legal Tech' />,
                to:'/'
            },
            {
                link: <FormattedMessage id='case' defaultMessage='Case Studies' />,
                to:'/'            
            },
        ]
    },
    {
        category:<FormattedMessage id='resources' defaultMessage='RESOURCES' />,
        links:[
            {
                link: <FormattedMessage id="contact-us" defaultMessage='Contact Us' />,
                to:'/'
            },
            {
                link: <FormattedMessage id="news" defaultMessage='Latest News' />,
                to:'/'
            },
            {
                link: <FormattedMessage id="insights" defaultMessage='Insights' />,
                to:'/'
            },
            {
                link: <FormattedMessage id="legal-notices" defaultMessage='Legal Notices' />,
                to:'/'
            },
            
        ]
    },
]