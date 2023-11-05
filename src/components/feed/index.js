import React from 'react'
import { useNavigate, useParams } from "react-router-dom";

import { feedMenu } from '../../constants/filter';

import './styles.css'

const Feed = () => {
    const navigate = useNavigate();
    const params = useParams()

    return (
        <div className='feed'>
            {
                feedMenu.map((item) => {
                    return <p className='feed-items' onClick={() => navigate(item.path)}>
                        {
                            params.news === item.path.split('/')[1] ? <u>{item.name}</u> : item.name
                        }
                    </p>
                })
            }
        </div>
    )
}

export default Feed