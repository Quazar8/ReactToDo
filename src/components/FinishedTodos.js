import React from 'react'

const FinishedTodos = ({ doneTodos }) => {
    if(doneTodos.length === 0) return null
    return (
        <section className="finished-todos-container moveRight">
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