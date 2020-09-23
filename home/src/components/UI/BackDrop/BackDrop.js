

import React from 'react'
import "./BackDrop.scss"


function BackDrop({show, clicked}) {
    console.log(show)
    return (
       show ? <div className="BackDrop" onClick={clicked}/> : null
    )
}



export default BackDrop

