import React from 'react'
import '../styles/single-todo.css'

const SingleToDo = (props) => {
    return (
        <article className="single-todo">
            <h2>{props.todo}</h2>
            <button>X</button>
        </article>
    )
}

export default SingleToDo