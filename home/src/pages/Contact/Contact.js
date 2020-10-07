import React, { Fragment } from 'react'
import { Container, Row } from 'react-bootstrap'
import Banner from '../../components/Banner/Banner'

function Contact(props) {
    return (
        <Fragment>
            <section className="Contact__banner">
                <Container fluid>
                    <Row>
                        <Banner 
                            title="Contact"
                            page="Contact"
                            url="https://cdn.shopify.com/s/files/1/0332/6420/5963/collections/men-1_1950x.jpg?v=1586521033"
                        />
                    </Row>
                </Container>
            </section>
            
        </Fragment>
    )
}



export default Contact

