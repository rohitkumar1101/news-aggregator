import React, { useEffect, useState } from 'react'
import DefaultImage from '../assets/default_image.png'

const NewsImage = ({ src, className }) => {
    const [imageSrc, setImageSrc] = useState()
    console.log('imageSrc: ', src);

    useEffect(() => {
        if (src) {
            setImageSrc(src)
        } else {
            setImageSrc(DefaultImage)
        }
    }, [])

    return (
        <img src={imageSrc} alt={imageSrc} className={className} loading="lazy" />
    )
}

export default NewsImage