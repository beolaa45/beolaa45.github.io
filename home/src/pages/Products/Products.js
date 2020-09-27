import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import Banner from '../../components/Banner/Banner'

function Products(props) {

    return (
        <Fragment>
            <section className="Products__banners">
                <Container fluid>
                    <Row>
                            <Banner 
                            title="Products"
                            page="products"
                            url="https://cdn.shopify.com/s/files/1/0332/6420/5963/collections/men-1_1950x.jpg?v=1586521033"/>
                    </Row>
                </Container>
            </section>
            <section className="Products__lits">
                <Container>
                    <Row>
                        <Col xl={4} lg={4} md={4} sm={4} xs={12} style={{backgroundColor: "green"}}>
                            <div className="Products__list__filter">
                                1
                            </div>
                        </Col>
                        <Col  xl={8} lg={8} md={8} sm={8} xs={12}>
                            <div className="Products__list__filter">
1   
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    )
}


export default Products

