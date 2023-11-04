import React, { useEffect, useState } from 'react'
import DefaultImage from '../assets/default_image.png'

const NewsImage = ({ src }) => {
    const [imageSrc, setImageSrc] = useState()

    useEffect(() => {
        if (src !== null) {
            setImageSrc(src)
        } else {
            setImageSrc(DefaultImage)
        }
    }, [])

    return (
        <img src={imageSrc} alt={imageSrc} />
    )
}

export default NewsImage