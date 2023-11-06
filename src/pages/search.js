import React, { useEffect, useState } from 'react'
import { filterObjectsFromArray, printNews } from '../utils'

const Search = ({
    searchValue,
    allNews,
    selectedFilters
}) => {
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        let response
        if (selectedFilters.length) {
            response = filterObjectsFromArray(allNews, selectedFilters)
        } else {
            response = filterObjectsFromArray(allNews, searchValue)
        }
        setSearchResults(response)
    }, [searchValue, allNews, selectedFilters.length])

    return (
        <div className='container p-2'>
            <div className='row'>
                {
                    searchResults.length ?
                        printNews(searchResults, "Search") :
                        <h5 className='text-center'>No results found</h5>
                }
            </div>
        </div>
    )
}

export default Search