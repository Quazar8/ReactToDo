import React, { useEffect, useState, useCallback } from 'react'

import Input from './Input'
import ToDosContainer from './ToDosContainer'
import DeleteAllButton from './DeleteAllButton'
import FinishedYodos from './FinishedTodos'

import '../styles/app.css'
import '../styles/animations.css'

import { deleteFromArr } from '../utils'

const App = () => {
    const [todos, setTodos] = useState([])
    const [doneTodos, setDoneTodos] = useState([])
    const [moveDown, setMoveDown] = useState(false)
        
    const submitted = (text) => {
        let newTodos = [...todos]
        newTodos.push(text)
        setTodos(newTodos)
        setMoveDown(true)
    }

    const addDoneTodo = (index) => {
        let doneArr = [...doneTodos]
        doneArr.push(todos[index])
        setDoneTodos(doneArr)
        deleteTodo(index)
    }

    const deleteTodo = (index) => {
        let newTodos = deleteFromArr(todos, index)
        setTodos(newTodos)
        setMoveDown(false)
    }

    const deleteAll = () => {
        setTodos([])
    }

    return (
        <div className="app-container">
            <main className="main-container">
                <h1 id="app-title">ToDo's for today:</h1>
                <Input submitted={submitted}/>
                <ToDosContainer 
                    todos = { todos } 
                    deleteTodo = { deleteTodo }
                    addDoneTodo = { addDoneTodo }
                />
                {
                    todos.length > 0 
                        ? <DeleteAllButton  
                                deleteAll={ deleteAll }
                                moveDown = { moveDown }
                                key = { todos.length }
                            />
                        : null
                }
            </main>
            <FinishedYodos 
                doneTodos = { doneTodos }
            />
         </div>
    )
}

export default App