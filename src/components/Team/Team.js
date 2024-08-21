import React from 'react'
import Card from './Card'
import '../styles/team.scss'
import { TeamData } from '../data'

const Team = () => {
    return (
        <div className='team'>
            <div className='team-title'>
                <h1>Meet our team</h1>
                <hr size='6' />
                <p>Meet the brilliant minds behind LawKos. Our team of skilled lawyers and legal experts <br />
                make LawKos your best choice for legal represnatation.</p>
            </div>
            <div className="cardGroup">
                {TeamData.map((member, index) => (
                    <Card
                        key={index}
                        imageSrc={member.image}
                        description={member.description}
                        name={member.name}
                        position={member.position}
                    />
                ))}
            </div>
        </div>
    )
}

export default Team