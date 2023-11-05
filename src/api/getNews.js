import { getNYTimesAPIObject, getNewsAPIObject } from "../utils"

export const fetchNewsAPI = async () => {
    try {
        let response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=b14f965559834e4f821ace904c41b854')
        let newsList = await response.json()
        return getNewsAPIObject(newsList.articles)
    } catch (error) {
        console.error(error, "ERROR")
        return error.message
    }
}

export const fetchNYTimes = async () => {
    try {
        let response = await fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=XkYSUl7Tcpu6zYav6EuauH42DfA9dM8D')
        let newsList = await response.json()
        return getNYTimesAPIObject(newsList.results)
    } catch (error) {
        console.error(error, "ERROR")
        return error.message
    }
}