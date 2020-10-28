import React from 'react'
import SingleToDo from './SingleTodo'

const ToDosContainer = (props) => {
    return (
        <section>
            {
                props.todos.map((todo, i) => (
                    <SingleToDo todo={todo} />
                ))
            }
        </section>
    )
}

export default ToDosContainer