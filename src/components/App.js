import React, { useState } from 'react'

import Input from './Input'
import ToDosContainer from './ToDosContainer'
import DeleteAllButton from './DeleteAllButton'

import '../styles/app.css'
import '../styles/animations.css'

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

    const deleteAll = () => {
        setTodos([])
    }
    
    return (
        <main className="app-container">
            <h1 id="app-title">ToDo's for today:</h1>
            <Input submitted={submitted}/>
            <ToDosContainer 
                todos = {todos} 
                deleteTodo = {deleteTodo}
            />
            {
                todos.length > 0 
                    ? <DeleteAllButton  
                        deleteAll={deleteAll}
                       />
                    : null
            }
        </main>
    )
}

export default App