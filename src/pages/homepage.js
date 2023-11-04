//packages imports
import React from 'react'

//component imports
import { Navbar, Filter } from '../components'
import Card from '../components/card'

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Filter />
            <Card />
        </div>
    )
}

export default Homepage