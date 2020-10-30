import React, { useState } from 'react'

import '../styles/input.css'

const Input = (props) => {
    const [input, setInput] = useState("")

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    
    const handleSubmit = () => {
        props.submitted(input)
        setInput("")
    }

    const handleKeyUp = (e) => {
        if(e.keyCode === 13)
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