import React from 'react'
import NewsImage from '../../common/image'
import { getReadableDate, getTruncatedText } from '../../utils'

const Card = ({
    image,
    title,
    description,
    publishedAt,
    trending,
    source,
    section,
    author
}) => {

    return (
        <>
            {
                trending ?
                    (
                        <div className="card border-0">
                            <p className="text-uppercase opacity-50 mb-0"><small>{source}</small></p>
                            <NewsImage src={image} className="card-img" alt={image} />
                            <div className="card-body p-0">
                                <h6 className="card-title text-uppercase">{getTruncatedText(title, 60)}</h6>
                                <p className="card-text mb-0"><small>{getTruncatedText(description, 100)}</small></p>
                                <p className="card-text"><small className="text-muted">{getReadableDate(publishedAt)}</small></p>
                            </div>
                        </div>
                    )
                    :
                    <div className="card border-0">
                        <div className="row g-0">
                            <p className="text-uppercase opacity-50 mb-0"><small>{section ? section : source}</small></p>
                            <div className="col-lg-4">
                                <NewsImage src={image} className="img-fluid" />
                            </div>
                            <div className="col-lg-8">
                                <div className="card-body py-0">
                                    <h6 className="card-title text-uppercase">{getTruncatedText(title, 50)}</h6>
                                    <p className="card-text mb-0"><small>{getTruncatedText(description, 70)}</small></p>
                                    <div className='d-flex justify-content-between '>
                                        <p className="card-text"><small className="text-muted">{getReadableDate(publishedAt)}</small></p>
                                        <p><small className="text-muted">{author}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default Card