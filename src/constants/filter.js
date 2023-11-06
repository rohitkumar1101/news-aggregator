import { fetchNYTimes, fetchNewsAPI, fetchTheGuardian } from "../api/getNews";

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
    },
    {
        name: 'The Guardian',
        path: '/the-guardian',
        api: fetchTheGuardian
    }
]