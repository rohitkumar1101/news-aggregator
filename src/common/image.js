import React, { useEffect, useState } from 'react'
import DefaultImage from '../assets/default_image.png'

const NewsImage = ({ src, className }) => {
    const [imageSrc, setImageSrc] = useState()

    useEffect(() => {
        if (src !== null) {
            setImageSrc(src)
        } else {
            setImageSrc(DefaultImage)
        }
    }, [])

    return (
        <img src={imageSrc} alt={imageSrc} className={className} />
    )
}

export default NewsImage