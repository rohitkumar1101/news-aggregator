import React from 'react'
import NewsImage from '../../common/image'

const Card = ({
    imageUrl,
    title,
    description
}) => {

    return (
        <div className='card p-2'>
            <NewsImage src={imageUrl} alt="card-thumbnail" className="card-thumbnail" />
            <div className='card-text'>
                <h4 className='card-title'>{title}</h4>
                <p className='card-description'>{description}</p>
            </div>
        </div>
    )
}

export default Card



{/* <div className="container mt-4">
    <div className="card">
        <div className="row no-gutters">
            <div className="col-sm-4">
                <img src={imageUrl} className="card-img" alt="card-thumbnail" />
            </div>
            <div className="col-sm-8">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    </div>
</div> */}