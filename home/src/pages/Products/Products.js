import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Banner from '../../components/Banner/Banner'
import Filter from '../../components/Filter/Filter'
import "./Products.scss";
import Carousel from "../../components/Carousel/Carousel"

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
            <section className="Products__content">
                <Container>
                    <Row>
                        <Col xl={4} lg={4} md={4} sm={4} xs={12} >
                            <form className="Products__content__filter">
                                <Filter title="Categories" subTitle={["camera"]}/>
                                <div className="Products__content__filter__box">
                                        <button className="Products__content__filter__box__submit" >Filter</button>
                                        <button className="Products__content__filter__box__submit FilterOut" >Filter Out</button>
                                </div>
                            </form>
                        </Col>
                        <Col  xl={8} lg={8} md={8} sm={8} xs={12}>
                            <div className="Products__content__list">
                                <div className="Products__content__list__filter">
                                    <p className="Products__content__list__filter__sort">Sort by:</p>
                                    <select className="Products__content__list__filter__select">
                                        <option value="default" select="selected">Mặc định</option>
                                        <option value="az">A đến Z</option>
                                        <option value="za">Z đến A</option>
                                        <option value="lowHigh">Giá từ thấp đến cao</option>
                                        <option value="highLow">Giá từ cao đến thấp</option>
                                    </select>
                                </div>
                                <div className="Products__content__list__content">
                                        
                                </div>

                            </div>
                        </Col>
                    </Row>
                    
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col >
                            <Carousel />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    )
}


export default Products

