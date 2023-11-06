import React from 'react'

import './styles.css'
import { useParams } from 'react-router-dom'

const Navbar = ({
    handleSearch
}) => {
    const params = useParams()

    return (
        <div className='navbar'>
            <h4 className='navbar-title'>
                News Aggregator
            </h4>
            {
                !Object.keys(params).length &&
                <input
                    placeholder='Search by keyword'
                    className='navbar-search'
                    onChange={(e) => handleSearch(e.target.value)}
                />
            }

        </div>
    )
}

export default Navbar