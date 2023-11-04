import React from 'react'

import Shoe from '../../assets/shoe.png'
import './styles.css'


const Card = ({
    imageUrl,
    title,
    description
}) => {
    return (
        <div className='card'>
            <div className='card-thumbnail'>
                <img src={imageUrl} alt="card-thumbnail" height={50} width={100} />
            </div>
            <div className='card-text'>
                <h4 className='card-title'>{title}</h4>
                <p className='card-description'>{description}</p>
            </div>
        </div>
    )
}

export default Card