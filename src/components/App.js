import React, { useState, useEffect } from 'react'
import Input from './Input'

const App = (props) => {
    const [todos, addTodos] = useState([])

    const submitted = (text) => {
        let newTodos = [...todos]
        newTodos.push(text)
        addTodos(newTodos)
    }
    
    useEffect(() => {
        console.log(todos)
    })
    
    return (
        <div>
            <h1>Welcome to React</h1>
            <Input submitted={submitted}/>
        </div>
    )
}

export default App