import React from 'react'

const Dropdown = ({ optionsList, className, source, onChange }) => {
    return (
        <>
            <label for={source}>{source}</label>
            <select className={`cursor-pointer ${className}`} onChange={onChange} name={source} id={source}>
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