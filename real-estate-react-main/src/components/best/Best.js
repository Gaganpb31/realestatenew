import React from 'react'

import './Best.css'

const Best = ({img1, img2, img3}) => {
    return (
        <div className='best'>
            <h1>Find Best eye conic travel place</h1>
            <div>
                <p><span className='bold'>All</span></p>
                <p>Luxury travel</p>
                <p>Adventure travel</p>
                <p>Cultural travel</p>
            </div>
            <div className='container'>
                <img src={img1} alt='' />
                <img src={img2} alt='' />
                <img src={img3} alt='' />
            </div>
            <button className='btn'>View All</button>
        </div>
    )
}

export default Best
