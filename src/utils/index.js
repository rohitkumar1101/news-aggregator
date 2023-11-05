export const getTruncatedText = (text, maxLength) => {
    if (text) {
        if (text.length <= maxLength) {
            return text;
        } else {
            return text.substring(0, maxLength - 3) + '...';
        }
    } else {
        return null
    }
}

// newsAPI
export const getNewsAPIObject = (data) => {
    let result = []
    data.forEach((item) => {
        let obj = {
            source: item.source.name,
            author: item.author,
            title: item.title,
            description: item.description,
            image: item.urlToImage,
            publishedAt: item.publishedAt,
        }
        result.push(obj)
    })
    return result
}

// NY Times
export const getNYTimesAPIObject = (data) => {
    let result = []
    data.forEach((item) => {
        let obj = {
            source: "New York Times",
            section: item.section,
            // author: item.author,
            title: item.title,
            description: item.abstract,
            image: item.multimedia[1].url,
            publishedAt: item.published_date,
        }
        result.push(obj)
    })
    return result
}

export const markAsTrending = (arr) => {
    arr[0].trending = true
    arr[0].className = "trending-1"
    arr[1].className = "trending-2"
    arr[2].className = "trending-3"
    return arr
}