//packages imports
import React, { useEffect, useState } from 'react'

//component imports
import { Navbar, Filter } from '../components'
import Card from '../components/card'
import { fetchNYTimes, fetchNewsAPI, fetchTheGuardian } from '../api/getNews'

import "./styles.css"
import { getNYTimesAPIObject, getNewsAPIObject } from '../utils'

const Homepage = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        const fetchNews = async () => {
            let response = await fetchNewsAPI()
            let response2 = await fetchNYTimes()
            let updatedResponse = getNewsAPIObject(response.articles)
            let updatedResponse2 = getNYTimesAPIObject(response2.results)
            setNews([...updatedResponse.splice(0, 3), ...updatedResponse2.splice(0, 3)])
        }
        fetchNews()
    }, [])
    console.log(news, "NEWs");
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
                                            image={item.image}
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