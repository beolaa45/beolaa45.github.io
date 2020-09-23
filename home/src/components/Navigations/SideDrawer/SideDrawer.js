import React, { Fragment } from 'react'
import Navigations from '../Navigations'
import "./SideDrawer.scss"

function SideDrawer({show, clicked}) {

    let translateX = 0;
      show ? translateX = 0 : translateX = -120;
    return (
        <div className="SideDrawer" style={{transform: `translateX(${translateX}%)` }} >
            
            <Navigations classN="Navigations__list--siderdrawer"/>
        </div>
    )
}


export default SideDrawer

