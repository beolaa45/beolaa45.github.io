import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Carousel2 from "../Carousel2/Carousel2";
import DetailItem from "../DetailItem/DetailItem"
import "./ModalItem.scss";
function ModalItem() {
    return (
        <div className="ModalItem">
            <Container>
                <Row>
                    <Col xl={6} lg={6} md={6} sm={12} xs={12} >
                        <Carousel2 />
                    </Col>
                    <Col xl={6} lg={6} md={6} sm={12} xs={12} >
                        <DetailItem />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ModalItem

