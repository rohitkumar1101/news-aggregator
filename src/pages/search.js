import React, { useEffect, useState } from 'react'
import { filterObjectsFromArray, printNews } from '../utils'

const Search = ({
    allNews,
    searchValue
}) => {
    const [searchResults, setSearchResults] = useState([])

    console.log('searchValue: ', searchValue);

    useEffect(() => {
        let response = filterObjectsFromArray(allNews, searchValue)
        setSearchResults(response)
        console.log('response: ', response);
    }, [searchValue])
    console.log(searchResults, "SEARch");
    return (
        <div className='container p-2'>
            <div className='row'>
                {printNews(searchResults)}
            </div>
        </div>
    )
}

export default Search