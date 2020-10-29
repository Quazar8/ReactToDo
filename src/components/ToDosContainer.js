import React from 'react'
import SingleToDo from './SingleTodo'

import '../styles/todos-container.css'

const ToDosContainer = (props) => {
    return (
        <section className="todos-container">
            {
                props.todos.map((todo, i) => (
                    <SingleToDo todo={todo} />
                ))
            }
        </section>
    )
}

export default ToDosContainer