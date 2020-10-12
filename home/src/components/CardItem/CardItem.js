import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import {NavLink,} from "react-router-dom"
import * as actions from "../../store/actions/index"
import "./CardItem.scss";
import Button from '../UI/Button/Button';
import Spinnerr from '../UI/Spinner/Spinner';
import { useSelector, useDispatch } from 'react-redux';
function CardItem({url, sale, price, title, clickedToCard, onQuickView, id, link}) {
let dispatch = useDispatch();
let newId = id
let loading = useSelector(state => state.cart.loading)
console.log(loading)
const addToCard = (e, id) => {
    console.log("id", id)
    dispatch(actions.cartInit(id))
}
    return (
        <div className="CardItem">
            <NavLink to={
                {
                    pathname: link,
                    state: { id: `${id}`}
                }
            } >
            <div className="CardItem__photo" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0)), url(${url})`}}>
                <button className="CardItem__button desktop" onClick={onQuickView}>
                    <p className="CardItem__view">Quick View</p>
                    <p className="CardItem__icon">
                        <FontAwesomeIcon icon={faEye}/>
                    </p>
                   
                </button>
                <button className="CardItem__buttonMobile mobile" onClick={onQuickView}>
                    <p className="CardItem__iconMobile">
                        <FontAwesomeIcon icon={faEye}/>
                    </p>
                </button>
                {sale ? <p className="CardItem__sale">
                        -{sale}%
                    </p> : null }
            </div>
            </NavLink>
            <div className="CardItem__content">
                <NavLink to={
                {
                    pathname: link,
                    state: { id: `${id}`}
                }
            } className="CardItem__content__link">
                <h2 className="Heading--secondary">{title}</h2>
                </NavLink>
                <p className="CardItem__content__box">
                    { sale !== 0 ? <del className="CardItem__content__oldPrice">${price}.00</del>
                    : <span className="CardItem__content__Price">${price}.00</span>}
                    { sale !== 0 ? <span className="CardItem__content__newPrice">${price * (100 - sale) / 100}.00</span> : null}
                </p>
              
                <Button clicked={(e) => addToCard(e, id)} classN="Button--addToCard">
                    
                    Add To Card</Button>
                
                
            </div>
        </div>
    )
}

export default CardItem

