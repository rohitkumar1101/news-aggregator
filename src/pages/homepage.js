//packages imports
import React, { useEffect, useState } from 'react'

//component imports
import { Navbar, Filter } from '../components'
import Card from '../components/card'
import { fetchNewsAPI } from '../api/getNews'

const Homepage = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        const fetchNews = async () => {
            let response = await fetchNewsAPI()
            console.log('response: ', response);
            setNews(response.articles)
        }
        fetchNews()
    }, [])

    console.log(news, "NEW");
    return (
        <div>
            <Navbar />
            <Filter />
            {
                news && news.map((item) => {
                    return <Card
                        title={item.title}
                        description={item.description}
                        imageUrl={item.urlToImage}
                    />
                })
            }
            <Card />
        </div>
    )
}

export default Homepage