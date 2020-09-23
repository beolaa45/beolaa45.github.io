import React from 'react'
import { NavLink } from "react-router-dom";
import "./Navigation.scss"
function Navigation({ name,path}) {
    return (
        <li className="Navigation__item">
            <NavLink to={path}  className="Navigation__link" activeClassName="Navigation__active" >{name}</NavLink>
        </li>
    )
}


export default Navigation

