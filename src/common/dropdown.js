import React from 'react'

const Dropdown = ({ optionsList, className, source }) => {
    return (
        <>
            <label for="cars">{source}</label>
            <select className={`cursor-pointer ${className}`}>
                {
                    optionsList?.map((items, index) => {
                        return <option key={index} value={items?.option}>
                            {items?.option}
                        </option>
                    })
                }
            </select>
        </>
    )
}

export default Dropdown