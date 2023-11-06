import Card from "../components/card";

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
            title: item.title,
            description: item.abstract,
            image: item.multimedia[1].url,
            publishedAt: item.published_date,
        }
        result.push(obj)
    })
    return result
}

// The Guardian
export const getTheGuardianAPIObject = (data) => {
    let result = []
    data.forEach((item) => {
        let obj = {
            source: "The Guardian",
            section: item.sectionName,
            title: item.webTitle,
            // description: item.abstract,
            // image: item.multimedia[1].url,
            publishedAt: item.webPublicationDate,
        }
        result.push(obj)
    })
    return result
}

export const filterObjectsFromArray = (arr, keyword) => {
    const results = []
    const lowercaseKeyword = keyword.toLowerCase();

    const searchableProperties = ['title', 'description', 'source', 'category', 'author']

    arr.forEach((item) => {
        searchableProperties.forEach((property) => {
            if (typeof item[property] === 'string') {
                const value = item[property].toLowerCase()
                if (value.indexOf(lowercaseKeyword) !== -1) {
                    results.push(item)
                }
            }
        })
    })
    return [...new Set(results)]
}


export const printNews = (arr, source) => {
    return Array.isArray(arr) && arr.length && arr.map((item) => {
        return (
            <div className="col-sm-4" key={item.title}>
                <Card
                    source={item.source}
                    section={item.section}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    publishedAt={item.publishedAt}
                    trending={source === "Trending" ? true : false}
                    author={item.author}
                />
            </div>
        )
    })
}

export const getCategoriesAndAuthors = (arr, keyname) => {
    let categories = [], author = []
    let apiSource = ['new api', 'new york times', 'the guardian']

    Array.isArray(arr) && arr.length && arr.map((item) => {
        if (!apiSource.includes((item.source.toLowerCase())))
            categories.push({ [keyname]: item.source })
        if (item.hasOwnProperty("author") && item.author !== null)
            author.push({ [keyname]: item.author })
        return item
    })

    return {
        categories: categories,
        author: author
    }

}

export const spliceArray = (arr, startEl, numberOfEl) => {
    return arr.splice(startEl, numberOfEl)
}

export const getReadableDate = (val) => {
    let month = new Date(val).toLocaleString('default', { month: 'short' });
    let date = new Date(val).getDate()

    return `${month} ${date}`
}