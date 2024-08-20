// Hero
import hero from '../assets/hero.png'
import hero2 from '../assets/hero2.png'

// Serives mega, icons
import { GoLaw } from "react-icons/go";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiBank } from "react-icons/ci";
import { AiOutlineInsurance } from "react-icons/ai";
import { MdOutlineWindPower } from "react-icons/md";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { FaRegCopy } from "react-icons/fa";
import { RiCriminalLine } from "react-icons/ri";

// Resources
import { GiMeshNetwork } from "react-icons/gi";
import { GiClawHammer } from "react-icons/gi";
import { CgInsights } from "react-icons/cg";
import { FaRegCommentDots } from "react-icons/fa6";
import { CiMicrophoneOn } from "react-icons/ci";


// Experience 
import experiene1 from '../assets/experience1.png';
import experiene2 from '../assets/experience2.png';
import businessman from '../assets/businessman.png';
import office from '../assets/office.png';


// Team data 
import labinot from '../assets/labinot.png';
import arbenita from '../assets/arbenita.png';
import festina from '../assets/festina.png';


export const HeroData = [
    {
        title: 'Legal solutions to solve complex problems',
        description: 'We offer legal and consultancy services tailored to our clients needs. Wherever business takes you, we are here to help.',
        button: 'Get a free consultation',
        img: hero,
        img2: hero2,
    }
]
export const ServicesNav = [
    {
        icon: <GoLaw />,
        title: 'Corporate Law',

    },
    {
        icon: <MdOutlineRealEstateAgent />,
        title: 'Real Estate',

    },
    {
        icon: <BiTask />,
        title: 'Tasks and Customs',

    },
    {
        icon: <AiOutlineShoppingCart />,
        title: 'Public Procurement',

    },
    {
        icon: <CiBank />,
        title: 'Banking & Finance',

    },
    {
        icon: <AiOutlineInsurance />,
        title: 'Insurance',

    },
    {
        icon: <MdOutlineWindPower />,
        title: 'Energy & Infrastructure',

    },
    {
        icon: <MdOutlineFamilyRestroom />,
        title: 'Family Law',

    },
    {
        icon: <MdOutlineLaptopChromebook />,
        title: 'ICT Sector',

    },
    {
        icon: <FaUserGroup />,
        title: 'Labor & Employment',

    },
    {
        icon: <FaRegCopy />,
        title: 'Intellectual Property Law',

    },
    {
        icon: <RiCriminalLine />,
        title: 'Criminal Law',

    },

]


export const ResourcesNav = [
    {
        icon: <GiMeshNetwork />,
        title: 'Network'
    },
    {
        icon: <GiClawHammer />,
        title: 'Legal Notice'
    }, {
        icon: <GoLaw />,
        title: 'Laws of Kosovo'
    }, {
        icon: <CgInsights />,
        title: 'Insights'
    }, {
        icon: <FaRegCommentDots />,
        title: 'Contact Us'
    }, {
        icon: <CiMicrophoneOn />,
        title: 'Podcast'
    },
]


export const PracticeArea = [
    {
        icon: <GoLaw />,
        title: 'Corporate Law',
        description: 'Focusing on advising and representing corporations, their executives, and shareholders on various legal matters. This includes mergers and acquisitions, intellectual property rights, corporate governance, and securities law.',
    },
    {
        icon: <CiBank />,
        title: 'Banking & Finance',
        description: 'We are specialized in legal issues concerning the transaction and regulation of financial instruments and institutions. This involve issues like lending agreements, regulatory compliance, securitization, and capital markets.',
    }, {
        icon: <MdOutlineLaptopChromebook />,
        title: 'ICT Sector',
        description: 'We help clients navigate through regulatory compliance, data protection, intellectual property issues, and e-commerce law. We also work on contracts involving software licenses, cloud computing agreements, and technology transfers.',
    }, {
        icon: <MdOutlineRealEstateAgent />,
        title: 'Real Estate',
        description: 'We guide our clients through property transactions, ensuring that all regulations are met and that contracts are legally sound. This can include zoning issues, title searches, and financing.',
    }, {
        icon: <AiOutlineInsurance />,
        title: 'Isnurance',
        description: 'We help our clients with legal issues concerning insurance policies and claims like policy interpretation, insurance fraud investigations, and litigation over denied claims.',
    }, {
        icon: <FaRegCopy />,
        title: 'Labor & Employment',
        description: 'We can help on matters involving employer-employee relationships. Including employment contracts, workplace discrimination, employee benefits, and collective bargaining agreements.',
    },

]

export const ExperienceData = [
    {
        image1: experiene1,
        image2: experiene2,
        title: 'Years of experience',
        description: 'Founded in 2008, LawKos is committed to the pursuit of justice in our country and more. Our team of dedicated professionals works tirelessly to serve our community. We offer legal services and consultancy in different areas.',
        image3: businessman,
        image4: office
    }
]

export const TeamData = [
    {
        image: labinot,
        description: 'Labinot has been working with LawKos for over 10 years. He has helped a lot of our clients achieve their goals with their cases...',
        position: 'Managin Partner',
    },
    {
        image: arbenita,
        description: 'Labinot has been working with LawKos for over 10 years. He has helped a lot of our clients achieve their goals with their cases...',
        position: 'Attorney at law, Partner',
    },
    {
        image: festina,
        description: 'Labinot has been working with LawKos for over 10 years. He has helped a lot of our clients achieve their goals with their cases...',
        position: 'Attorney at law',
    },

]