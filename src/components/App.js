import React, { useState } from 'react'

import Input from './Input'
import ToDosContainer from './ToDosContainer'

import '../styles/app.css'

const App = (props) => {
    const [todos, addTodos] = useState([])

    const submitted = (text) => {
        let newTodos = [...todos]
        newTodos.push(text)
        addTodos(newTodos)
    }
    
    return (
        <main className="app-container">
            <h1 id="app-title">To-Do's for today:</h1>
            <Input submitted={submitted}/>
            <ToDosContainer todos = {todos} />
        </main>
    )
}

export default App