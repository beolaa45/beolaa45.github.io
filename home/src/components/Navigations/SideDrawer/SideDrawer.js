import React, { Fragment } from 'react'
import Navigations from '../Navigations'
import "./SideDrawer.scss"

function SideDrawer({show, clicked}) {
    return (
        <div className="SideDrawer">
            
            <Navigations />
        </div>
    )
}


export default SideDrawer

