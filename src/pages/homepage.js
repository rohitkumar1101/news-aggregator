//packages imports
import React, { useEffect, useState } from 'react'

//component import
import { Navbar, Feed, Filter } from '../components'

//file/function imports
import { fetchNYTimes, fetchNewsAPI, fetchTheGuardian } from '../api/getNews'
import '../styles/homepage.css'
import Newspage from './newspage';
import Search from './search'
import Loader from '../common/loader'
import { spliceArray } from '../utils';

const Homepage = () => {
    const [searchValue, setSearchValue] = useState('')
    const [isLoading, setIsLoading] = useState()
    const [selectedFilters, setSelectedFilters] = useState([])

    const [newsAPI, setNewsAPI] = useState([])
    const [NYTimes, setNYTimes] = useState([])
    const [theGuardian, setTheGuardian] = useState([])
    const [allNews, setAllNews] = useState([])
    const [trendingNews, setTrendingNews] = useState([])

    useEffect(() => {
        const fetchNews = async () => {
            setIsLoading(true)
            let response = await fetchNewsAPI()
            let response2 = await fetchNYTimes()
            let response3 = await fetchTheGuardian()

            setNewsAPI(spliceArray(response, 0, 6))
            setNYTimes(spliceArray(response2, 0, 6))
            setTheGuardian(spliceArray(response3, 0, 6))
            setAllNews([...response, ...response2, ...response3])

            setTrendingNews([...spliceArray(response, 0, 2), ...spliceArray(response2, 0, 1)])
            setIsLoading(false)
        }
        fetchNews()
    }, [])

    const handleSearch = (value) => {
        setSearchValue(value)
    }

    const handleFilter = (value) => {

    }

    return (
        <>
            <Navbar handleSearch={handleSearch} />
            <Feed />
            {
                isLoading ? <Loader /> :
                    <div className='container p-2'>
                        <Filter
                            allNews={allNews}
                            handleSearch={handleSearch}
                            selectedFilters={selectedFilters}
                            setSelectedFilters={setSelectedFilters}
                        />
                        {
                            searchValue ?
                                <Search
                                    searchValue={searchValue}
                                    allNews={allNews}
                                    selectedFilters={selectedFilters}
                                />
                                :
                                <Newspage
                                    trendingNews={trendingNews}
                                    NYTimes={NYTimes}
                                    newsAPI={newsAPI}
                                    theGuardian={theGuardian}
                                />
                        }
                    </div>
            }
        </>
    )
}

export default Homepage