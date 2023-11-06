import React from 'react'
import { NewsSection } from '../components'

import '../index.css'

const Newspage = ({
    trendingNews,
    NYTimes,
    newsAPI,
    theGuardian,
}) => {

    return (
        <>
            <NewsSection newsData={trendingNews} heading="Trending" />
            <NewsSection newsData={NYTimes} heading="New York Times" link='/new-york-times' />
            <NewsSection newsData={newsAPI} heading="News API" link='/news-api' />
            <NewsSection newsData={theGuardian} heading="The Guardian" link='/the-guardian' />
        </>
    )
}

export default Newspage