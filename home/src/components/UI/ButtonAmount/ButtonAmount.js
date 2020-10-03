import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import "./ButtonAmount.scss";
function ButtonAmount({plus, minus, amount, style}) {
    return (
        <div className="ButtonAmount" style={{style}}>
            <FontAwesomeIcon icon={faMinus}  className="ButtonAmount__icon"/>
            <input className="ButtonAmount__amount"  defaultValue={1}/>
            <FontAwesomeIcon icon={faPlus} className="ButtonAmount__icon"/>
        </div>
    )
}

export default ButtonAmount

