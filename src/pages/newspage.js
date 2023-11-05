import React from 'react'
import { printNews } from '../utils'

const Newspage = ({
    trendingNews,
    NYTimes,
    newsAPI
}) => {
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

export default Newspage