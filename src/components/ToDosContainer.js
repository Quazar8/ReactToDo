import React from 'react'
import SingleToDo from './SingleTodo'
import DeleteAllButton from './DeleteAllButton'

import '../styles/todos-container.css'

const ToDosContainer = ({todos, moveDown, 
    deleteAll, deleteTodo, addDoneTodo}) => {
    return (
        <section className="todos-container">
            {
                todos.map((todo, i) => (
                    <SingleToDo 
                        todo={ todo }
                        todoIndex={ i }
                        deleteTodo = { deleteTodo }
                        addDoneTodo = { addDoneTodo } 
                    />
                ))
            }
            {
                todos.length > 0 
                    ? <DeleteAllButton  
                            deleteAll={ deleteAll }
                            moveDown = { moveDown }
                            key = { todos.length }
                        />
                    : null
            }
        </section>
    )
}

export default ToDosContainer