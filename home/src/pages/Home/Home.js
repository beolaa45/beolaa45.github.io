import React, { Fragment, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ShippingType from "../../components/ShippingType/ShippingType";
import Button from "../../components/UI/Button/Button";
import { faLifeRing, faRecycle, faUser } from '@fortawesome/free-solid-svg-icons'
import "./Home.scss";
import Card from "../../components/Card/Card";
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
              <Col xl={4} lg={4} md={12} sm={12} xs={12}>
                <div className="Shipping__content">
                  <ShippingType icon={faLifeRing} title="SUPPORT 24/7" subtitle="we support 24 hours a day"/>
                </div>
              </Col>
              <Col xl={4} lg={4} md={12} sm={12} xs={12}>
              <div className="Shipping__content">
                  <ShippingType icon={faRecycle} title="30 DAYS RETURN" subtitle="you have 30 days to return"/>
                </div>
              </Col>
              <Col xl={4} lg={4} md={12} sm={12} xs={12}>
              <div className="Shipping__content">
                  <ShippingType icon={faUser} title="PAYMENT 100% SECURE" subtitle="Payment 100% Secure"/>
                </div>
              </Col>
            </Row>
          </Container>
      </section>
      <section className="Category">
            <Container>
              <Row>
                <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                    <div className="Category__card">
                      <Card
                        title="Audio" 
                        url="https://cdn.shopify.com/s/files/1/0332/6420/5963/files/cat15_720x.jpg?v=1582857819"/>
                    </div>
                </Col>
                <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                <div className="Category__card">
                      <Card
                        title="Speaker" 
                        url="https://cdn.shopify.com/s/files/1/0332/6420/5963/files/cat13_720x.jpg?v=1582796459"/>
                    </div>
                </Col>
                <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                <div className="Category__card">
                      <Card
                        title="Hi-end" 
                        url="https://cdn.shopify.com/s/files/1/0332/6420/5963/files/hi-end_720x.jpg?v=1583147788"/>
                    </div>
                </Col>
              </Row>
            </Container>
      </section>
      <section className="BestSeller">
                <Container>
                  <Row>
                    <Col>
                      123
                    </Col>
                  </Row>
                </Container>
      </section>
    </Fragment>
  );
}

export default Home;
