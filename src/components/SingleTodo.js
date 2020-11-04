import React from 'react'
import '../styles/single-todo.css'

const SingleToDo = (props) => {
    const handleDeleteClick = () => {
        props.deleteTodo(props.todoIndex)
    }

    const handleDoneClick = () => {
        props.addDoneTodo(props.todoIndex)
    }
    return (
        <article className="single-todo moveDownOpacity">
            <h2>{props.todo}</h2>
            <div className="buttons-container">
                <button className="done-button"
                        onClick = { handleDoneClick }>
                    &#10004;
                </button>
                <button className="delete-button" 
                 onClick={ handleDeleteClick }>
                            X
                </button>
            </div>
        </article>
    )
}

export default SingleToDo