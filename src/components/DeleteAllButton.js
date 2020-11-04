import React, { useEffect } from 'react'

import '../styles/deleteAll.css'

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