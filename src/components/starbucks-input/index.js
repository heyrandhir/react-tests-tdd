import React from "react";

const StarbucksInput = ({ name,value,onChange,error }) => {
    const handleTextChange = (e) => {
        onChange(e.target.value)
    }
    return (
        <>
            <label htmlFor={name}>{name}</label>
            <input
                id={name}
                value={value}
                type="textbox"
                onChange={handleTextChange}
            />
            {error && <p>{error}</p>}
        </>
    )
}

export default StarbucksInput