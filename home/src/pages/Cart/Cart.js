import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../../components/Banner/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Cart.scss";
import ButtonAmount from "../../components/UI/ButtonAmount/ButtonAmount";
function Cart(props) {
  return (
    <Fragment>
      <section className="Cart__banner">
        <Container fluid>
          <Row>
            <Banner
              title="SHOPPING CART"
              page="SHOPPING CART"
              url="https://cdn.shopify.com/s/files/1/0332/6420/5963/files/pendant_1296x.jpg?v=1585709654"
            />
          </Row>
        </Container>
      </section>
      <section className="Cart__content">
        <Container>
          <Row>
            <Col>
              <div className="Cart__content__list">
               
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
}

export default Cart;
