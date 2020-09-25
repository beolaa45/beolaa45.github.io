import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom"

import "./CardItem.scss";
function CardItem({url, sale, price, title}) {
    return (
        <div className="CardItem">
            <div className="CardItem__photo" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0)), url(${url})`}}>
                <button className="CardItem__button">
                    <p className="CardItem__view">Quick View</p>
                    <p className="CardItem__icon">
                        <FontAwesomeIcon icon={faEye}/>
                    </p>
                   
                </button>
                {sale ? <p className="CardItem__sale">
                        -{sale}%
                    </p>:null}
            </div>
            <div className="CardItem__content">
                <h2>{title}</h2>
                <p className="CardItem__box">
                    <span className="CardItem__price">{price}</span>
                    <span className="CardItem__newPrice">{price * (100 - sale) / 100}</span>
                </p>
                
                
            </div>
        </div>
    )
}

export default CardItem

