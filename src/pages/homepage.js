//packages imports
import React, { useEffect, useState } from 'react'

//component imports
import { Navbar, Filter } from '../components'
import Card from '../components/card'
import { fetchNewsAPI } from '../api/getNews'

import "./styles.css"

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
        <>
            <Navbar />
            <Filter />
            <div className='container'>
                <div className='row'>
                    {
                        Array.isArray(news) && news.length && news.map((item) => {
                            if (item.description !== null) {
                                return (
                                    <div className='col-sm-4'>
                                        <Card
                                            title={item.title}
                                            description={item.description}
                                            imageUrl={item.urlToImage}
                                            publishedAt={item.publishedAt}
                                        />
                                    </div>
                                )
                            }

                        })
                    }
                </div>

            </div>

        </>
    )
}

export default Homepage