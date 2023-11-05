//packages imports
import React, { useEffect, useState } from 'react'

//component imports
import { Navbar, Filter } from '../components'
import { fetchNYTimes, fetchNewsAPI } from '../api/getNews'
import { markAsTrending, printNews } from '../utils'

import '../styles/homepage.css'

const Homepage = () => {
    const [news, setNews] = useState([])
    const [trendingNews, setTrendingNews] = useState([])

    useEffect(() => {
        const fetchNews = async () => {
            let response = await fetchNewsAPI()
            let response2 = await fetchNYTimes()
            setNews([...response.splice(0, 3), ...response2.splice(0, 3)])

            let trending = markAsTrending([...response.splice(0, 1), ...response2.splice(0, 2)])
            setTrendingNews(trending)
        }
        fetchNews()
    }, [])

    return (
        <>
            <Navbar />
            <Filter />
            <div className='grid-container'>
                {printNews(trendingNews, true)}
            </div>

            <div className='container p-2'>
                <div className='row'>
                    {printNews(news, false)}
                </div>
            </div>

        </>
    )
}

export default Homepage