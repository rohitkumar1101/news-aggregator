import React from 'react'
import { printNews } from '../utils'
import { useNavigate } from 'react-router-dom'

import '../index.css'

const NewsSection = (newsData, heading, link = false) => {
    const navigate = useNavigate()

    return (
        <>
            <div>
                <h5 className='text-uppercase'>
                    {heading}
                    {link && <small className='newspage-read-all' onClick={() => navigate(link)}><u>Read all</u></small>}
                </h5>
                <div className='row'>
                    {printNews(newsData, heading)}
                </div>
            </div>
            <hr />
        </>
    )
}

const Newspage = ({
    trendingNews,
    NYTimes,
    newsAPI
}) => {
    return (
        <>
            {NewsSection(trendingNews, "Trending")}
            {NewsSection(NYTimes, "New York Times", '/new-york-times')}
            {NewsSection(newsAPI, "News API", '/news-api')}
        </>
    )
}

export default Newspage