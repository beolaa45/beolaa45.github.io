import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch, faUser, faShoppingBasket} from "@fortawesome/free-solid-svg-icons"
import React from 'react'
import "./UserAction.scss"
function UserAction() {
    return (
        <ul className="User__list">
            <li className="User__item">
                <FontAwesomeIcon icon={faSearch} className="User__icon" onClick={() => console.log("ok")} />
            </li>
            <li className="User__item">
                <FontAwesomeIcon icon={faUser} className="User__icon" />
            </li>
            <li className="User__item">
                <FontAwesomeIcon icon={faShoppingBasket} className="User__icon" />
                <p className="User__basket">12</p>
            </li>
        </ul>
    )
}

export default UserAction

