import React, { useState } from 'react'

import '../styles/input.css'

const Input = (props) => {
    const defaultState
    const [input, setInput] = useState(defaultState)

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    
    const handleSubmit = () => {
        props.submitted(input)
        setInput(defaultState)
    }

    const handleKeyUp = (e) => {
        if(e.key === 'Enter')
            handleSubmit()
    }
    return (
        <div className="input-component">
            <input id="todo-input" 
                    value={input} type="text" 
                    onChange={handleChange}
                    onKeyUp= {handleKeyUp}
            />
            <input id="submit-button" onClick={handleSubmit} type="submit" value="Add"/>
        </div>
    )
}

export default Input