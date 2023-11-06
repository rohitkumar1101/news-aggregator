import React from 'react'

const Dropdown = ({ optionsList, className, label, onChange }) => {
    return (
        <>
            <select className={`cursor-pointer ${className}`} onChange={onChange} name={label} id={label}>
                <option value="" disabled selected>{label}</option>
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