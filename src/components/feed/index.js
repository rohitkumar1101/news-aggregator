import React from 'react'

import './styles.css'
import { feedMenu } from '../../constants/filter';

const Feed = () => {
    return (
        <div className='feed'>
            {
                feedMenu.map((item) => {
                    return <p className='feed-items'>{item}</p>
                })
            }
        </div>
    )
}

export default Feed