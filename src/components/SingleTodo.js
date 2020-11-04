import React from 'react'
import '../styles/single-todo.css'

const SingleToDo = (props) => {

    const handleDeleteClick = () => {
        props.deleteTodo(props.todoIndex)
    }

    return (
        <article className="single-todo moveDownOpacity">
            <h2>{props.todo}</h2>
            <div className="buttons-container">
                <button className="done-button">&#10004;</button>
                <button className="delete-button" 
                 onClick={handleDeleteClick}>
                            X
                </button>
            </div>
        </article>
    )
}

export default SingleToDo