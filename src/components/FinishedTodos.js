import React from 'react'

const FinishedTodos = ({ doneTodos }) => {
    return (
        <section className="finished-todos-container">
            <h1>Done Todos:</h1>
            <section className="finished-todos-display">
                {doneTodos.map((todo,i) => (
                <h2>&#9670; {todo}</h2>
                ))}
            </section>
        </section>
    )
}

export default FinishedTodos