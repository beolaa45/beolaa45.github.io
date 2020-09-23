import React, { Fragment } from 'react'
import Header from '../Header/Header'

function Layout({children}) {
    return (
        <Fragment>
            <Header />
            <main>
                {children}
            </main>
        </Fragment>
    )
}

export default Layout

