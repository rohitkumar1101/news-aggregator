import React, { useEffect, useState } from 'react'
import Dropdown from '../../common/dropdown'
import { filterObjectsFromArray, getCategoriesAndAuthors } from '../../utils'
import './styles.css'

const sourceOptions = [
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
        let { value } = e.target
        setSelectedFilters([...selectedFilters, value])
    }

    const handleRemove = (value) => {
        let filteredArray = selectedFilters.filter(item => item !== value)
        setSelectedFilters(filteredArray)
    }

    return (
        <>
            <div className='filter'>
                <p className='m-0'>Filter By:- </p>
                {
                    filterOptions?.map((item) => {
                        return (
                            <Dropdown
                                label={item.label}
                                optionsList={item.optionsList}
                                onChange={handleSelect}
                                className="filter-dropdown"
                            />
                        )
                    })
                }
            </div>
            <div className='selected-filter'>
                {
                    selectedFilters?.map((item, index) => {
                        return <p className='filter-bubble' key={index}>{item}
                            <b className='filter-bubble-close' onClick={() => handleRemove(item)}>&times;</b>
                        </p>
                    })
                }
            </div>
        </>
    )
}

export default Filter