import React from 'react'

const Dropdown = ({ optionsList, className }) => {
    return (
        <select className={`cursor-pointer ${className}`}>
            {optionsList?.map((items, index) => <option key={index} value={items?.option}>
                {items?.option}
            </option>)}
        </select>
    )
}

export default Dropdown