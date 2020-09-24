import React from 'react'
import "./Button.scss"
function Button({children, classN, style={}, url}) {
    const handleClick = () => {
        console.log("ok")
    }
    let button = ["Button"]
    if(classN) button.push(classN)
    return (
        <button onClick={handleClick} className={button.join(" ")} style={style}>
            {children}
        </button>
    )
}

export default Button

