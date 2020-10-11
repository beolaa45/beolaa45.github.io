import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../../components/Banner/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Cart.scss";
import ButtonAmount from "../../components/UI/ButtonAmount/ButtonAmount";
import Button from "../../components/UI/Button/Button";
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
              <table className="Cart__content__table">
                <thead className="Cart__content__table__head">
                  <tr className="Cart__content__table__head__tr">
                    <th>Products</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody className="Cart__content__table__body">
                  <tr>
                    <td className="Cart__content__table__body__td">
                      <div>
                        <img style={{width: "100%"}} src="https://cdn.shopify.com/s/files/1/0332/6420/5963/products/prelic8_0_120x.jpg?v=1582874107" />
                      </div>
                      <div className="Cart__content__table__body__box">
                        <p>
                          <Link
                            to={{
                              pathname: "/product",
                            }}
                            className="Cart__content__table__body__link"
                          >
                            Contemporary design classic
                          </Link>
                        </p>
                        <FontAwesomeIcon
                          className="Cart__content__table__body__icon"
                          icon={faTrashAlt}
                        />
                      </div>
                    </td>
                    <td>$600</td>
                    <td>
                      <ButtonAmount />
                    </td>
                    <td className="Cart__content__table__body__total">$600</td>
                  </tr>
                </tbody>
              </table>
              <div className="Cart__content__checkout">
                <Row>
                  <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                    <div className="Cart__content__checkout__note">
                      <p className="Cart__content__checkout__note__title">
                        Add Order Note
                      </p>
                      <textarea
                        className="Cart__content__checkout__note__textarea"
                        rows="5"
                        placeholder="How can we help you?"
                        type="text"
                      />
                    </div>
                    <div className="Cart__content__checkout__coupon">
                      <p>Coupon:</p>
                      <input type="text" />
                    </div>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                    <div className="Cart__content__checkout__content">
                      <p>SUBTOTAL: $350.00</p>
                      <div className="Cart__content__checkout__content__inputGroup">
                          <input type="checkbox" id="checkout" />
                          <label htmlFor="checkout">I agree with the terms and conditions.</label>
                      </div>
                      <Button classN="Button--card">
                          Check Out
                      </Button>
                      <div>
                          <img title="" style={{width: "100%"}} src="https://cdn.shopify.com/s/files/1/0332/6420/5963/files/cart_image_500x.png?v=1585021052"/>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
}

export default Cart;
