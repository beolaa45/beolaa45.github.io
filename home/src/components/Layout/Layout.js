import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Modal from '../UI/Modal/Modal'
import * as actions from "../../store/actions/home"
import ModalItem from '../ModalItem/ModalItem'

function Layout({children}) {
    const showModal = useSelector(state => state.home.show);
    const idItem = useSelector(state => state.home.idItem)
    const dispatch = useDispatch();

    const hiddenModal = () => {
        dispatch(actions.homeShowModal())
    }
    return (
        <Fragment>
            <Modal show={showModal} clicked={hiddenModal}>
                 <p>{idItem}</p>
                 <ModalItem />
            </Modal>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </Fragment>
    )
}

export default Layout

