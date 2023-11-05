import React from 'react'
import NewsImage from '../../common/image'
import { getTruncatedText } from '../../utils'

const Card = ({
    image,
    title,
    description,
    publishedAt,
    trending,
    source
}) => {

    return (
        <>
            {
                trending ?
                    (
                        <div className="card border-0">
                            <h6 className="">{source}</h6>
                            <div className="card-body p-0">
                                <h6 className="card-title">{getTruncatedText(title, 50)}</h6>
                                <p className="card-text mb-0"><small>{getTruncatedText(description, 70)}</small></p>
                                <p className="card-text"><small className="text-muted">{new Date(publishedAt).toDateString()}</small></p>
                            </div>
                            <NewsImage src={image} className="card-img-top" alt={image} />
                        </div>
                    )
                    :
                    <div className="card border-0 my-3">
                        <div className="row g-0">
                            <h6 className="card-title">{source}</h6>
                            <div className="col-lg-4">
                                <NewsImage src={image} className="img-fluid" />
                            </div>
                            <div className="col-lg-8">
                                <div className="card-body pb-0 pt-0 pr-0">
                                    <h6 className="card-title">{getTruncatedText(title, 50)}</h6>
                                    <p className="card-text mb-0"><small>{getTruncatedText(description, 70)}</small></p>
                                    <p className="card-text"><small className="text-muted">{new Date(publishedAt).toDateString()}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default Card
// <div className='card p-2'>
//     <NewsImage src={imageUrl} alt="card-thumbnail" />
//     <div className='card-text'>
//         <h4 className='card-title'>{title}</h4>
//         <p className='card-description'>{description}</p>
//     </div>
// </div>