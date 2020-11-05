import React from 'react'

import '../styles/delete-all.css'

const DeleteAllButton = ({ deleteAll, moveDown }) => {
    let moveClass = " moveUp"
    if(moveDown) moveClass = " moveDown"

    return (
        <section className={"delete-all-container" + moveClass}>
            <button onClick={deleteAll}
                >Delete All
            </button>
        </section>
    )
}

export default DeleteAllButton