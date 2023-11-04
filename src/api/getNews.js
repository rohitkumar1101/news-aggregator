export const fetchNewsAPI = async () => {
    try {
        let response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=b14f965559834e4f821ace904c41b854')
        let newsList = await response.json()
        return newsList
    } catch (error) {
        console.error(error, "ERROR")
        return error.message
    }
}