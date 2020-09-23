import React from 'react'
import "./Button.scss"
function Button({children, classN, style}) {
    let button = ["Button"]
    if(classN) button.push(classN)
    return (
        <button className={button.join(" ")} style={style}>
            {children}
        </button>
    )
}

export default Button

