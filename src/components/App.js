import React, { useState } from 'react'

import Input from './Input'
import ToDosContainer from './ToDosContainer'

import '../styles/app.css'

import { deleteFromArr } from '../utils'

const App = (props) => {
    const [todos, setTodos] = useState([])

    const submitted = (text) => {
        let newTodos = [...todos]
        newTodos.push(text)
        setTodos(newTodos)
    }

    const deleteTodo = (index) => {
        let newTodos = deleteFromArr(todos, index)
        setTodos(newTodos)
    }
    
    return (
        <main className="app-container">
            <h1 id="app-title">ToDo's for today:</h1>
            <Input submitted={submitted}/>
            <ToDosContainer 
                todos = {todos} 
                deleteTodo = {deleteTodo}
            />
        </main>
    )
}

export default App