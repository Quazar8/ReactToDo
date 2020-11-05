import React, { useState } from 'react'

import MainContainer from './MainContainer'
import FinishedTodos from './FinishedTodos'

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
        <main className="app-container">
            <MainContainer 
                todos = { todos }
                submitted = { submitted }
                addDoneTodo = { addDoneTodo }
                deleteTodo = { deleteTodo }
                deleteAll = { deleteAll }
                moveDown = { moveDown }
            />
            <FinishedTodos 
                doneTodos = { doneTodos }
            />
         </main>
    )
}

export default App