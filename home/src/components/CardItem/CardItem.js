import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

import "./CardItem.scss";
function CardItem({url, sale, price}) {
    return (
        <div className="CardItem">
            <div className="CardItem__photo" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0)), url(${url})`}}>
                <button className="CardItem__button">
                    <p className="CardItem__view">Quick View</p>
                    <p className="CardItem__icon">
                        <FontAwesomeIcon icon={faEye}/>
                    </p>
                </button>
            </div>
            <div className="CardItem__content">

            </div>
        </div>
    )
}

export default CardItem

