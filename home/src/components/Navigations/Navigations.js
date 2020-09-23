import React from 'react'

import Navigation from './Navigation/Navigation';
import "./Navigations.scss"
function Navigations({sidedrawer}) {
    return (
        <nav className="Navigations Navigations--sidedrawer">
            <ul className="Navigations__list Navigations__list--siderdrawer ">
               <Navigation path="/"  name="Home" />
               <Navigation path="/shop" name="Shop" />
               <Navigation path="/about" name="About" />
               <Navigation path="/blog" name="Blog" />
            </ul>
        </nav>
    )
}



export default Navigations

