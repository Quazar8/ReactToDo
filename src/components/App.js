import React, { useState } from 'react'
import Input from './Input'

const App = (props) => {
    const [todos, addTodos] = useState([])

    const submitted = (text) => {
        console.log(text)
    } 
    
    return (
        <div>
            <h1>Welcome to React</h1>
            <Input  submitted={submitted}/>
        </div>
    )
}

export default App