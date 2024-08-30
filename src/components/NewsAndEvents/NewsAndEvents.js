import React from 'react'
import '../styles/newsandevents.scss'

const NewsAndEvents = () => {
    return (
        <div className='news-events'>
            <div className='news-title'>
                <div className='title'>
                    <h1>News & Events</h1>
                    <hr size='5' />
                </div>
            </div>

            <div className='news-cards'>
                <div className='news-left-card'>
                    <div className='left-card-text'>
                        <p> November 3, 2023</p>
                        <h3>New law on Environmental Impact Assessment</h3>
                    </div>
                </div>
                <div className='news-right-card'>
                    <div className='up-card'>
                        <div className='up-card-text'>
                            <p> October 22, 2023</p>
                            <h3>Kosovo's first auction for solar energy park</h3>
                        </div>
                    </div>
                    <div className='down-card'>
                        <div className='down-card-text'>
                            <p> August 15, 2023</p>
                            <h3>Labor Law in Kosovo: Explained in details</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsAndEvents