import React from 'react'

import Shoe from '../../assets/shoe.png'
import './styles.css'


const Card = () => {
    return (
        <div className='card'>
            <div className='card-thumbnail'>
                <img src={Shoe} alt="card-thumbnail" />
            </div>
            <div className='card-text'>
                <h4 className='card-title'>Card title</h4>
                <p className='card-description'>Card Desc</p>
            </div>
        </div>
    )
}

export default Card