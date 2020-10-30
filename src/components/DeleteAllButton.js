import React from 'react'

const DeleteAllButton = (props) => {
    return (
        <section className="delete-button-container">
            <button onClick={props.deleteAll}
                >Delete All
            </button>
        </section>
    )
}

export default DeleteAllButton