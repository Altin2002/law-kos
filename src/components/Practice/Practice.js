import React from 'react'
import '../styles/practice.scss'
import { PracticeArea } from '../data'

const Practice = () => {
  return (
    <div className='practice'>
    <div className='practice-content'>
        <div className='practice-title'>
            <h1>Our practice area</h1>
            <hr size='5' />
        </div>

        <div className='cards'>
            {PracticeArea.map((props, index) => {
                return (

                    <div className='card-data' key={index}>
                        <div className='practice-icon'>
                            <img src={props.icon}  alt='title'/>
                            </div>
                        <div className='practice-card-title'>{props.title}</div>
                        <div className='practice-card-description'>
                            <p>{props.description}</p>
                        </div>
                    </div>
                )

            })}
        </div>
    </div>
</div>
  )
}

export default Practice