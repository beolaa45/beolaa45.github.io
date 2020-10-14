import React, { Fragment, useState } from "react";

import Navigation from "../Navigations/Navigations";
import UserAction from "../UserAction/UserAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
import BackDrop from "../UI/BackDrop/BackDrop";
import SideDrawer from "../Navigations/SideDrawer/SideDrawer";
import { Link, useHistory } from "react-router-dom";
import Navigations from "../Navigations/Navigations";
import ShoppingCart from "../ShopipngCart/ShoppingCart";
import { useSelector } from "react-redux";

function Header(props) {
  const [show, setShow] = useState(false);
  const [showBasket, setShowBasket] = useState(false);
  const [checked, setChecked] = useState(false);
  let history = useHistory();
  let [wanningChecked, setWanningChecked] = useState(null);
  let data = useSelector((state) => state.cart.data);
  let basket = 0;
  console.log(data)
  data.map((item) => {
    basket += item.quanlity;
  });

  const clickedUser = () => {};

  const clickedBasket = () => {
    setShowBasket((prev) => !prev);
  };

  const clickedSearch = () => {};
  const handleShowBackDrop = () => {
    setShow((prevState) => !prevState);
  };

  const closeBasket = () => {
    setShowBasket(false);
  };

  const viewCart = () => {
    history.push("/cart");
    setShowBasket(false);
  };

  const checkOut = () => {
    if (checked) {
      history.push("/checkout");
      setShowBasket(false);
      setWanningChecked(null);
    } else {
      setWanningChecked(
        <p style={{ color: "red" }}>
          You must agree with the terms and conditions of sales to check out.{" "}
        </p>
      );
    }
  };

  const changeChecked = () => {
    setChecked((prev) => !prev);
  };
  return (
    <Fragment>
      <BackDrop show={show} clicked={handleShowBackDrop} />
      <SideDrawer show={show}>
        <Navigations classN="Navigations__list--siderdrawer" />
      </SideDrawer>

      <BackDrop show={showBasket} clicked={clickedBasket} />
      <SideDrawer classN="SideDrawer--basket" show={showBasket}>
        <ShoppingCart
          data={data}
          closeBasket={closeBasket}
          viewCart={viewCart}
          checkOut={checkOut}
          changeChecked={changeChecked}
          checked={checked}
          wanningChecked={wanningChecked}
        />
      </SideDrawer>
      <header className="Header">
        <div className="container Header__container">
          <div className="row  Header__row">
            <div className="col-5 col-xl-5 col-lg-5 col-md-5 col-sm-5 Header__col">
              <div className=" Header__navigation desktop">
                <Navigation />
              </div>
              <div className="col-1 Header__icon mobile">
                <FontAwesomeIcon
                  icon={faBars}
                  className="Header__bars"
                  onClick={handleShowBackDrop}
                />
              </div>
            </div>
            <div className="col-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 Header__col">
              <div className="Header__logo">
                <Link className="Header__link" to="/">
                  {" "}
                  master
                </Link>
              </div>
            </div>
            <div className="col-5 col-xl-5 col-lg-5 col-md-5 col-sm-5 Header__col">
              <div className="Header__user">
                <UserAction
                  basket={basket}
                  clickedUser={clickedUser}
                  clickedBasket={clickedBasket}
                  clickedSearch={clickedSearch}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
}

export default Header;
