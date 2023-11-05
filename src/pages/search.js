import React, { useEffect, useState } from 'react'
import { filterObjectsFromArray, printNews } from '../utils'

const Search = ({
    allNews,
    searchValue
}) => {
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        let response = filterObjectsFromArray(allNews, searchValue)
        setSearchResults(response)
    }, [searchValue, allNews])

    return (
        <div className='container p-2'>
            <div className='row'>
                {
                    searchResults.length ?
                        printNews(searchResults) :
                        <h5 className='text-center'>No results found</h5>
                }
            </div>
        </div>
    )
}

export default Search