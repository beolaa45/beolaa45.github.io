import React from 'react'
import "./Button.scss"
function Button({children, classN, style={}, url, clicked}) {
    let button = ["Button"]
    if(classN) button.push(classN)
    return (
        <button onClick={clicked} className={button.join(" ")} style={style}>
            {children}
        </button>
    )
}

export default Button

