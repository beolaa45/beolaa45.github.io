
import React, { Fragment, useState } from 'react'


import Navigation from '../Navigations/Navigations';
import UserAction from '../UserAction/UserAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons"
import "./Header.scss"
import BackDrop from '../UI/BackDrop/BackDrop';
import SideDrawer from '../Navigations/SideDrawer/SideDrawer';

function Header(props) {

  const [show, setShow] = useState(false)

  const handleShowBackDrop = () => {
    setShow(prevState => !prevState)
  }
    return (
      <Fragment>
         <BackDrop  show={show} clicked={handleShowBackDrop}/>
         <SideDrawer />
      <header className="Header">
          <div className="container Header__container">
              <div className="row  Header__row">
                  <div className="col-5 col-xl-5 col-lg-5 col-md-5 col-sm-5 Header__col">
                    <div className=" Header__navigation desktop">
                        <Navigation />
                    </div>
                    <div className="col-1 Header__icon mobile">
                        <FontAwesomeIcon icon={faBars} className="Header__bars" onClick={handleShowBackDrop}/>
                    </div>
                  </div>
                  <div className="col-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 Header__col">
                    <div className="Header__logo">
                      master123
                    </div>
                  </div>
                  <div className="col-5 col-xl-5 col-lg-5 col-md-5 col-sm-5 Header__col">
                    <div className="Header__user">
                      <UserAction />
                    </div>
                  </div>
              </div>
          </div>
          </header>
         
          </Fragment>
    )
}



export default Header

