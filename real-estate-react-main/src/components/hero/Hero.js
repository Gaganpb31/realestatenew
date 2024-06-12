import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='content'>
                <h1>Find the best travel and adventure place</h1>
                <p className='search-text'> Search the  destination,travel tips,adventure activities,travel stories,cultural insights . </p>
                <form className='search'>

                    <div>
                        <input type='text' placeholder='Enter Keyword..' />
                    </div>
                    <div className='radio'> 
                        <input type='radio' checked />
                        <label>online reservation</label>
                        <input type='radio'  />
                        <label>in person reservation</label>
                        <button type='submit'><AiOutlineSearch className='icon'/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero
