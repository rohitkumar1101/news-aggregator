import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Navbar, Feed as FeedComponent } from '../components';
import { printNews } from '../utils';
import { feedMenu } from '../constants/filter';
import Loader from '../common/loader';

const Feed = () => {
    const params = useParams()

    const [newsData, setNewsData] = useState()
    const [isLoading, setIsLoading] = useState()
    console.log('isLoading: ', isLoading);

    useEffect(() => {
        const fetchNews = () => {
            setIsLoading(true)
            feedMenu.map(async (item) => {
                if (item.path.split('/')[1] === params.news) {
                    let response = await item.api()
                    setNewsData(response)
                }
            })
            setIsLoading(false)
        }
        fetchNews()
    }, [params])

    return (
        <>
            <Navbar />
            <FeedComponent />
            {
                isLoading ? <Loader /> :
                    <>
                        <div className='container p-2'>
                            {
                                newsData && <h6>Total Articles: {newsData.length}</h6>
                            }
                            <div className='row'>
                                {printNews(newsData, "News API")}
                            </div>
                        </div>
                    </>
            }

        </>
    )
}

export default Feed