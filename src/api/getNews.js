import { getNYTimesAPIObject, getNewsAPIObject, getTheGuardianAPIObject } from "../utils"

export const fetchNewsAPI = async () => {
    try {
        let response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=b14f965559834e4f821ace904c41b854')
        let newsList = await response.json()
        return getNewsAPIObject(newsList.articles)
    } catch (error) {
        return error.message
    }
}

export const fetchNYTimes = async () => {
    try {
        let response = await fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=XkYSUl7Tcpu6zYav6EuauH42DfA9dM8D')
        let newsList = await response.json()
        return getNYTimesAPIObject(newsList.results)
    } catch (error) {
        return error.message
    }
}

export const fetchTheGuardian = async () => {
    try {
        let response = await fetch('https://content.guardianapis.com/search?api-key=8e0ef232-cf9a-44b5-9e28-a9e7b16a5896')
        let newsList = await response.json()
        return getTheGuardianAPIObject(newsList.response.results)
    } catch (error) {
        console.error(error)
        return error.message
    }
}