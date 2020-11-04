import React from 'react'

import '../styles/deleteAll.css'

const DeleteAllButton = ({ deleteAll }) => {
    return (
        <section className="delete-all-container moveDown">
            <button onClick={deleteAll}
                >Delete All
            </button>
        </section>
    )
}

export default DeleteAllButton