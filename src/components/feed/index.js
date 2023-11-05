import React from 'react'
import { useNavigate } from "react-router-dom";

import './styles.css'
import { feedMenu } from '../../constants/filter';

const Feed = () => {
    const navigate = useNavigate();

    return (
        <div className='feed'>
            {
                feedMenu.map((item) => {
                    return <p className='feed-items' onClick={() => navigate(item.path)}>{item.name}</p>
                })
            }
        </div>
    )
}

export default Feed