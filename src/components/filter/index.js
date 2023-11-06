import React, { useEffect, useState } from 'react'
import Dropdown from '../../common/dropdown'
import { getCategoriesAndAuthors } from '../../utils'
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
    allNews,
    handleSearch,
    selectedFilters,
    setSelectedFilters
}) => {

    const [categoriesList, setCategoriesList] = useState([])
    const [authorsList, setAuthorsList] = useState([])

    useEffect(() => {
        //Get categories & authors list
        let response = getCategoriesAndAuthors(allNews, 'option')
        setCategoriesList(response.categories)
        setAuthorsList(response.author)
    }, [allNews])

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
        handleSearch(value)
        if (!selectedFilters.includes(value)) {
            setSelectedFilters([...selectedFilters, value])
        }
    }

    const handleRemove = (value) => {
        handleSearch(value)
        let filteredArray = selectedFilters.filter(item => item !== value)
        setSelectedFilters(filteredArray)
    }

    return (
        <>
            <div className='filter'>
                <p className='mb-0'>Filter By:-</p>
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