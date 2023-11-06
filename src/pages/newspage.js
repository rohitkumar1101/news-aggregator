import React from 'react'
import { NewsSection } from '../components'

import '../index.css'

const Newspage = ({
    trendingNews,
    NYTimes,
    newsAPI
}) => {
    return (
        <>
            <NewsSection newsData={trendingNews} heading="Trending" />
            <NewsSection newsData={NYTimes} heading="New York Times" link='/new-york-times' />
            <NewsSection newsData={newsAPI} heading="News API" link='/news-api' />
        </>
    )
}

export default Newspage