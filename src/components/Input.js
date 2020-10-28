import React, { useState } from 'react'

const Input = (props) => {
    const [input, setInput] = useState("")

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    
    const handleSubmit = () => {
        props.submitted(input)
        setInput("")
    }
    return (
        <div className="input">
            <input value={input} type="text" onChange={handleChange}/>
            <input onClick={handleSubmit} type="submit" value="Add"/>
        </div>
    )
}

export default Input