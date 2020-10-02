import React, { Fragment, useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Modal from '../UI/Modal/Modal'

function Layout({children}) {
    const [showModal, setShowModal] = useState(true);
    const handleShowModal = () => {
        setShowModal(prev => !prev)
    }
    return (
        <Fragment>
            <Modal show={showModal} clicked={handleShowModal}>
                 <p>23</p>
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

