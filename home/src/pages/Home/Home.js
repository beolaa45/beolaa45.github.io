import React, { Fragment, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ShippingType from "../../components/ShippingType/ShippingType";
import Button from "../../components/UI/Button/Button";
import "./Home.scss";
function Home(props) {
  return (
    <Fragment>
      <section className="Banner">
        <Container fluid>
          <Row>
            <Col>
              <div
                className="Banner__box"
                style={{
                  backgroundImage: `url("https://cdn.shopify.com/s/files/1/0332/6420/5963/files/ban16_f6fd0b77-a64d-48a9-8163-5330297676e8_1950x.jpg?v=1582857554")`,
                }}
              >
                <div className="Banner__content">
                  <h3 className="Heading--tertiary">Decor your home with high-end audio</h3>
                  <Button classN="Button--black">show now</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="Shipping">
          <Container>
            <Row>
              <Col xl={4} lg={4}>
                <div>
                  <ShippingType />
                </div>
              </Col>
              <Col xl={4} lg={4}>1</Col>
              <Col xl={4} lg={4}>1</Col>
            </Row>
          </Container>
      </section>
    </Fragment>
  );
}

export default Home;
