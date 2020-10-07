import React, { Fragment } from 'react'
import { Container, Row } from 'react-bootstrap'
import Banner from '../../components/Banner/Banner'

function Blog(props) {
    return (
        <Fragment>
            <section className="Blog__banner">
                <Container fluid>
                    <Row>
                        <Banner 
                            title="Blog"
                            page="Blog"
                            url="https://cdn.shopify.com/s/files/1/0332/6420/5963/collections/men-1_1950x.jpg?v=1586521033"
                        />
                    </Row>
                </Container>
            </section>
            
        </Fragment>
    )
}



export default Blog

