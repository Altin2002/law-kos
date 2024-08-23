import React from 'react'
import { ServicesNav } from '../../../data'
import './megaMobile.scss'


const ServicesMega = () => {
  return (
    <div className="mega-items">
      {ServicesNav.map((props) => {
        return (
          <p key={props.title}>
            <span><img src={props.icon} alt={props.title} /></span> {props.title}
          </p>
        )
      })}
    </div>
  )
}

export default ServicesMega