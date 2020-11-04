import React from 'react'

const FinishedTodos = ({ doneTodos }) => {
    return (
        <section className="finished-todos-container">
            {doneTodos.map((todo,i) => (
               <h1>{todo}</h1>
            ))}
        </section>
    )
}

export default FinishedTodos