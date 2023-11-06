//packages imports
import React, { useEffect, useState } from 'react'

//component import
import { Navbar, Feed, Filter } from '../components'

//file/function imports
import { fetchNYTimes, fetchNewsAPI } from '../api/getNews'
import '../styles/homepage.css'
import Newspage from './newspage';
import Search from './search'
import Loader from '../common/loader'

const Homepage = () => {
    const [searchValue, setSearchValue] = useState('')
    const [isLoading, setIsLoading] = useState()

    const [newsAPI, setNewsAPI] = useState([])
    const [NYTimes, setNYTimes] = useState([])
    const [allNews, setAllNews] = useState([])
    const [trendingNews, setTrendingNews] = useState([])

    useEffect(() => {
        const fetchNews = async () => {
            setIsLoading(true)
            let response = await fetchNewsAPI()
            let response2 = await fetchNYTimes()

            setNewsAPI([...response.splice(0, 6)])
            setNYTimes([...response2.splice(0, 6)])
            setAllNews([...response, ...response2])

            setTrendingNews([...response.splice(2, 2), ...response2.splice(2, 1)])
            setIsLoading(false)
        }
        fetchNews()
    }, [])



    const handleSearch = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <>
            <Navbar handleSearch={handleSearch} />
            <Feed handleSearch={handleSearch} />

            {
                isLoading ? <Loader /> :
                    searchValue ?
                        <Search searchValue={searchValue} allNews={allNews} />
                        :
                        <div className='container p-2'>
                            <Filter allNews={allNews} />
                            <Newspage trendingNews={trendingNews} NYTimes={NYTimes} newsAPI={newsAPI} />
                        </div>
            }
        </>
    )
}

export default Homepage