import { fetchNYTimes, fetchNewsAPI } from "../api/getNews";

export const feedMenu = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'NewsAPI',
        path: '/news-api',
        api: fetchNewsAPI
    },
    {
        name: 'New York Times',
        path: '/new-york-times',
        api: fetchNYTimes
    }
]