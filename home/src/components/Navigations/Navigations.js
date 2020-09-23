import React from 'react'

import Navigation from './Navigation/Navigation';
import "./Navigations.scss"
function Navigations({classN}) {
    let navigation = ["Navigations__list"]
    if(classN){
        navigation.push(classN)
    }
    return (
        <nav className="Navigations ">
            <ul className={navigation.join(" ")}>
               <Navigation path="/" exact={true}  name="Home" />
               <Navigation path="/shop" name="Shop" />
               <Navigation path="/about" name="About" />
               <Navigation path="/blog" name="Blog" />
            </ul>
        </nav>
    )
}



export default Navigations

