import React from 'react'

import './styles.css'

const Navbar = ({
    handleSearch
}) => {

    return (
        <div className='navbar'>
            <h4 className='navbar-title'>
                News Aggregator
            </h4>
            <input
                placeholder='Search by keyword'
                className='navbar-search'
                onChange={handleSearch}
            />
        </div>
    )
}

export default Navbar