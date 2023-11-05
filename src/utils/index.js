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


// const nyTimes = {
//     title,
//     abstract, //desc
//     published_date,
//     multimedia: {
//         url, //image
//     },
//     author,
//     source
// }

// const NEWSAPI = {
//     source: {
//         id,
//         name
//     },
//     author,
//     title,
//     description,
//     url,
//     urlToImage,
//     publishedAt,
//     content
// }