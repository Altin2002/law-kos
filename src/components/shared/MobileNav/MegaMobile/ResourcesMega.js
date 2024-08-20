import React from 'react'
import { ResourcesNav } from '../../../data'
import './megaMobile.scss'

const ResourcesMega = () => {
    return (
        <div className="mega-items">
            {ResourcesNav.map((props) => {
                return (
                    <p key={props.title}>
                        <span>{props.icon}</span> {props.title}
                    </p>
                )
            })}
        </div>
    )
}

export default ResourcesMega