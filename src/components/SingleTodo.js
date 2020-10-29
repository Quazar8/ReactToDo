import React from 'react'
import '../styles/single-todo.css'

const SingleToDo = (props) => {

    const handleDeleteClick = () => {
        props.deleteTodo(props.todoIndex)
    }

    return (
        <article className="single-todo">
            <h2>{props.todo}</h2>
            <button onClick={handleDeleteClick}>X</button>
        </article>
    )
}

export default SingleToDo