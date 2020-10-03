import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner/Banner';
import Carousel2 from '../../components/Carousel2/Carousel2'
import DetailItem from '../../components/DetailItem/DetailItem';
import './Detail.scss'
function Detail(props) {
  
    const {slug} = useParams();
    console.log(slug)
    return (
       
        <Fragment>
             
            <section className="Detail__banner">
                <Container fluid>
                    <Row>
                    <Banner 
                            title="Products"
                            page="Detail"
                            url="https://cdn.shopify.com/s/files/1/0332/6420/5963/collections/men-1_1950x.jpg?v=1586521033"/>
                    </Row>
                </Container>
            </section>
            <div>
            Quiz detail {slug}
            </div>
            <section className="Detail__box">
                <Container>
                    <Row>
                        <Col  xl={6} lg={6} md={6} sm={12} xs={12} style={{overflowX: "hidden"}}>
                            <div className="Detail__box__carousel2">
                               <Carousel2 />
                            </div>
                        </Col>
                        <Col  xl={6} lg={6} md={6} sm={12} xs={12}>
                            <div className="Detail__box__item">
                               <DetailItem data/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    )
}


export default Detail

