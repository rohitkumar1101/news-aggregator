//packages imports
import React, { useEffect, useState } from 'react'

//component import
import { Navbar, Feed, Filter } from '../components'
import Card from "../components/card";

//file/function imports
import { fetchNYTimes, fetchNewsAPI } from '../api/getNews'
import { filterObjectsFromArray, markAsTrending } from '../utils'
import '../styles/homepage.css'

const printNews = (arr, source) => {
    return Array.isArray(arr) && arr.length && arr.map((item) => {
        return (
            <div className={`${source === "Trending" ? null : 'col-sm-4'} ${item.className && item.className}`} key={item.title}>
                <Card
                    source={item.source}
                    section={item.section}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    publishedAt={item.publishedAt}
                    trending={item.trending}
                    author={item.author}
                />
            </div>
        )
    })
}

const Homepage = () => {
    const [searchValue, setSearchValue] = useState('')

    const [newsAPI, setNewsAPI] = useState([])
    const [NYTimes, setNYTimes] = useState([])
    const [allNews, setAllNews] = useState([])
    const [trendingNews, setTrendingNews] = useState([])

    useEffect(() => {
        const fetchNews = async () => {
            let response = await fetchNewsAPI()
            let response2 = await fetchNYTimes()
            setNewsAPI([...response.splice(0, 6)])
            setNYTimes([...response2.splice(0, 6)])
            setAllNews([...response, ...response2])
            let trending = markAsTrending([...response.splice(2, 2), ...response2.splice(2, 1)])
            setTrendingNews(trending)
        }
        fetchNews()
    }, [])

    const handleSearch = (e) => {
        setSearchValue(e.target.value)

        let response = filterObjectsFromArray(allNews, searchValue)
        setAllNews(response)
        console.log('response: ', response);
    }

    return (
        <>
            <Navbar handleSearch={handleSearch} />
            <Feed />
            <Filter />

            {/* Trending News */}
            <div className='grid-container'>
                {printNews(trendingNews, "Trending")}
            </div>


            {/* New York Times */}
            <div className='container p-2'>
                <h5 className='text-uppercase'>New York Times</h5>
                <div className='row'>
                    {printNews(NYTimes, "New York Times")}
                </div>
            </div>

            {/* News API  */}
            <div className='container p-2'>
                <h5 className='text-uppercase'>News API</h5>
                <div className='row'>
                    {printNews(newsAPI, "News API")}
                </div>
            </div>
        </>
    )
}

export default Homepage