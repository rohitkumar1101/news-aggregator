import React from 'react'
import { printNews } from '../utils'
import { useNavigate } from 'react-router-dom'

import '../index.css'

const Newspage = ({
    trendingNews,
    NYTimes,
    newsAPI
}) => {

    const navigate = useNavigate()

    return (
        <>
            {/* Trending News */}
            <div className='container p-2'>
                <h5 className='text-uppercase'>Trending</h5>
                <div className='row'>
                    {printNews(trendingNews, "Trending")}
                </div>
            </div>

            {/* New York Times */}
            <div className='container p-2'>
                <h5 className='text-uppercase'>New York Times
                    <small className='newspage-read-all' onClick={() => navigate('/new-york-times')}><u>Read all</u></small>
                </h5>
                <div className='row'>
                    {printNews(NYTimes, "New York Times")}
                </div>
            </div>

            {/* News API  */}
            <div className='container p-2'>
                <h5 className='text-uppercase'>
                    News API
                    <small className='newspage-read-all' onClick={() => navigate('/news-api')}><u>Read all</u></small>
                </h5>
                <div className='row'>
                    {printNews(newsAPI, "News API")}
                </div>

            </div>
        </>
    )
}

export default Newspage