import React, { useEffect, useState } from 'react'
import Dropdown from '../../common/dropdown'
import { getCategoriesAndAuthors } from '../../utils'
import './styles.css'

const sourceOptions = [
    {
        option: "Source",
    },
    {
        option: "News API",
    },
    {
        option: "New York Times",
    }
]

const Filter = ({
    allNews
}) => {

    const [categoriesList, setCategoriesList] = useState([])
    const [authorsList, setAuthorsList] = useState([])

    useEffect(() => {
        //Get categories & authors list
        let response = getCategoriesAndAuthors(allNews, 'option')
        console.log('response: ', response);
        setCategoriesList(response.categories)
        setAuthorsList(response.author)
    }, [])

    const filterOptions = [
        {
            label: "Source",
            optionsList: sourceOptions
        },
        {
            label: "Author",
            optionsList: authorsList
        },
        {
            label: "Categories",
            optionsList: categoriesList
        }
    ]

    return (
        <>
            <div className='filter'>
                <p className='m-0'>Filter By:- </p>
                {
                    filterOptions?.map((item) => {
                        return (
                            <Dropdown
                                placeholder="Source"
                                label={item.label}
                                optionsList={item.optionsList}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Filter