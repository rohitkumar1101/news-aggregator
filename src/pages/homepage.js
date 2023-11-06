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

const Homepage = () => {
    const [searchValue, setSearchValue] = useState('')
    const [isLoading, setIsLoading] = useState()

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
            console.log('response3: ', response3);

            setNewsAPI([...response.splice(0, 6)])
            setNYTimes([...response2.splice(0, 6)])
            setTheGuardian([...response3.splice(0, 6)])
            setAllNews([...response, ...response2, ...response3])

            setTrendingNews([...response.splice(2, 2), ...response2.splice(2, 1)])
            setIsLoading(false)
        }
        fetchNews()
    }, [])

    const handleSearch = (value) => {
        setSearchValue(value)
    }

    return (
        <>
            <Navbar handleSearch={handleSearch} />
            <Feed />
            {
                isLoading ? <Loader /> :
                    <div className='container p-2'>
                        <Filter allNews={allNews} handleSearch={handleSearch} />
                        {
                            searchValue ?
                                <Search searchValue={searchValue} allNews={allNews} />
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