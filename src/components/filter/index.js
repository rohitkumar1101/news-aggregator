import React, { useEffect, useState } from 'react'
import Dropdown from '../../common/dropdown'
import { filterObjectsFromArray, getCategoriesAndAuthors } from '../../utils'
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
    const [selectedFilters, setSelectedFilters] = useState([])
    console.log('selectedFilters: ', selectedFilters);

    useEffect(() => {
        //Get categories & authors list
        let response = getCategoriesAndAuthors(allNews, 'option')
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

    const handleSelect = (e) => {
        console.log(e.target.value, "EVENT");
        let { value } = e.target
        setSelectedFilters([...selectedFilters, value])
    }

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
                                onChange={handleSelect}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Filter