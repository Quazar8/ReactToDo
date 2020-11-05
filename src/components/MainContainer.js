import React from 'react'

import Input from './Input'
import ToDosContainer from './ToDosContainer'

const MainContainer = ({submitted, todos,
deleteAll, deleteTodo, addDoneTodo, moveDown}) => {
    return (
        <section className="main-container">
            <h1 id="app-title">ToDo's for today:</h1>
            <Input submitted={submitted}/>
            <ToDosContainer 
                todos = { todos } 
                deleteTodo = { deleteTodo }
                addDoneTodo = { addDoneTodo }
                deleteAll = { deleteAll }
                moveDown = { moveDown }
            />
        </section>
    )
}

export default MainContainer