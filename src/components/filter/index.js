import React from 'react'

import './styles.css'
import { filterMenu } from '../../constants/filter';

const Filter = () => {
    return (
        <div className='filter'>
            {
                filterMenu.map((item) => {
                    return <p className='filter-items'>{item}</p>
                })
            }
        </div>
    )
}

export default Filter