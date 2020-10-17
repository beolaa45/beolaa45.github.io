import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../../components/Banner/Banner";
import "./Checkout.scss";
import { Formik, Field, FastField, Form } from "formik";
import * as Yup from "yup";
import InputField from "../../components/Form/InputField";
import Button from "../../components/UI/Button/Button";
import "./Checkout.scss";
function CheckOut() {
  return (
    <Fragment>
      <section className="Checkout__banner">
        <Container fluid>
          <Row>
            <Banner
              title="Checkout"
              page="Checkout"
              url="https://cdn.shopify.com/s/files/1/0332/6420/5963/collections/men-1_1950x.jpg?v=1586521033"
            />
          </Row>
        </Container>
      </section>
      <section className="Checkout__content">
        <Container>
          <Row>
            <Col>
              <div className="Checkout__content__form">
                <Formik
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    adress: "",
                    city: "",
                    district: "",
                    commune: "",
                    note: "",
                  }}
                  validationSchema={Yup.object().shape({
                    firstName: Yup.string().required("This field is required"),
                    lastName: Yup.string().required("This field is required"),
                    email: Yup.string()
                      .email("Invalid email format")
                      .required("This field is required"),
                    phone: Yup.string("Invalid number format")
                      .min(9)
                      .required("This field is required"),
                    adress: Yup.string().required("This field is required"),
                    city: Yup.string().required("This field is required"),
                    district: Yup.string().required("This field is required"),
                    commune: Yup.string().required("This field is required"),
                    note: Yup.string().required("This field is required"),
                  })}
                  onSubmit={(values) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                    }, 500);
                  }}
                >
                  {(props) => {
                    return (
                      <Form>
                        <FastField
                          name="firstName"
                          component={InputField}
                          lable="Firs Name*"
                          type="text"
                        />

                        <FastField
                          name="lastName"
                          component={InputField}
                          lable="Last Name*"
                          type="text"
                        />

                        <FastField
                          name="email"
                          component={InputField}
                          lable="Email*"
                          type="email"
                        />

                        <FastField
                          name="phone"
                          component={InputField}
                          lable="Phone*"
                          type="number"
                        />

                        <FastField
                          name="adress"
                          component={InputField}
                          lable="Adress*"
                          type="tex"
                        />

                        <FastField
                          name="city"
                          component={InputField}
                          lable="City*"
                          type="tex"
                        />

                        <FastField
                          name="district"
                          component={InputField}
                          lable="District*"
                          type="tex"
                        />

                        <FastField
                          name="commune"
                          component={InputField}
                          lable="Commune*"
                          type="tex"
                        />

                        <FastField
                          name="note"
                          component={InputField}
                          lable="Note*"
                          type="tex"
                        />
                        <Button type="submit" classN="Button--black">
                          ORDER
                        </Button>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </Col>
            <Col>
              <div className="Checkout__content__products">
                <div className="Checkout__content__products__list">
                  <div className="Checkout__content__products__list__item">
                    <div className="Checkout__content__products__list__item__image">
                      <div className="Checkout__content__products__list__item__image__photo">
                        <img
                          alt=""
                          src="https://cdn.shopify.com/s/files/1/0332/6420/5963/products/prelic2_0_540x.jpg?v=1582860620"
                        />
                      </div>
                      <span className="Checkout__content__products__list__item__image__quanlity">
                        24
                      </span>
                    </div>
                    <p className="Checkout__content__products__list__item__title">
                      Lomo Sanremo Edition
                    </p>
                    <p className="Checkout__content__products__list__item__price">
                      $65.00
                    </p>
                  </div>
                </div>
                <div className="Checkout__content__products__subtotal">
                  <div className="Checkout__content__products__subtotal__title">
                    <p>Subtotal</p>

                    <p>$65.0</p>
                  </div>
                  <div className="Checkout__content__products__subtotal__title">
                    <p>Shipping</p>

                    <p>$5.0</p>
                  </div>
                  <div className="Checkout__content__products__subtotal__title"></div>
                </div>
                <div className="Checkout__content__products__total">
                    <p>Total</p>
                    <p>$70.00</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
}

export default CheckOut;
