import React, { useState } from 'react'

import Input from './Input'
import ToDosContainer from './ToDosContainer'

const App = (props) => {
    const [todos, addTodos] = useState([])

    const submitted = (text) => {
        let newTodos = [...todos]
        newTodos.push(text)
        addTodos(newTodos)
    }
    
    return (
        <div>
            <h1>To-Do's for today:</h1>
            <ToDosContainer todos = {todos} />
            <Input submitted={submitted}/>
        </div>
    )
}

export default App