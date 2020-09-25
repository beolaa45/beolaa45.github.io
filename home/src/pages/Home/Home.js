import React, { Fragment, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ShippingType from "../../components/ShippingType/ShippingType";
import Button from "../../components/UI/Button/Button";
import { faLifeRing, faRecycle, faUser } from '@fortawesome/free-solid-svg-icons'
import "./Home.scss";
import Card from "../../components/Card/Card";
import Heading from "../../components/Heading/Heading";
import CardItem from "../../components/CardItem/CardItem";

const data = [
  
  {id: 1,
    sale: 10,
    price: 4000,
    title:"Ysamsung Camera",
    url:"https://cdn.shopify.com/s/files/1/0332/6420/5963/products/prelic1_0_360x.jpg?v=1582872621"
  },
  {id: 2,
    sale: 10,
    price: 4000,
    title:"Ysamsung Camera",
    url:"https://cdn.shopify.com/s/files/1/0332/6420/5963/products/prelic1_0_360x.jpg?v=1582872621"
  },
  {
    id: 3,
    sale: 10,
    price: 4000,
    title:"Ysamsung Camera",
    url:"https://cdn.shopify.com/s/files/1/0332/6420/5963/products/prelic1_0_360x.jpg?v=1582872621"
  },
  {
    id: 4,
    sale: 10,
    price: 4000,
    title:"Ysamsung Camera",
    url:"https://cdn.shopify.com/s/files/1/0332/6420/5963/products/prelic1_0_360x.jpg?v=1582872621"
  }
  ,
  {
    id: 5,
    sale: 10,
    price: 4000,
    title:"Ysamsung Camera",
    url:"https://cdn.shopify.com/s/files/1/0332/6420/5963/products/prelic1_0_360x.jpg?v=1582872621"
  },
  {
    id: 6,
    sale: 10,
    price: 4000,
    title:"Ysamsung Camera",
    url:"https://cdn.shopify.com/s/files/1/0332/6420/5963/products/prelic1_0_360x.jpg?v=1582872621"
  },
  {
    id: 7,
    sale: 10,
    price: 4000,
    title:"Ysamsung Camera",
    url:"https://cdn.shopify.com/s/files/1/0332/6420/5963/products/prelic1_0_360x.jpg?v=1582872621"
  },
  {
    id: 8,
    sale: 10,
    price: 4000,
    title:"Ysamsung Camera",
    url:"https://cdn.shopify.com/s/files/1/0332/6420/5963/products/prelic1_0_360x.jpg?v=1582872621"
  }
]
function Home(props) {
  document.title = "Home";
  const clickedToCard = () => {

  }

  const onQuickView = (e) => {
      e.preventDefault()
      console.log("ee")
  }

  const handleLoadMore = () => {

  }
  let listCart = data.map((item) => {

    return(
      <Col xl={3} lg={3} md={4} sm={6} xs={12} key={item.id}>
                      <div className="BestSeller__card">
                        <CardItem
                          clickedToCard={clickedToCard}
                          onQuickView={onQuickView}
                          sale={item.sale}
                          price={item.price}
                          title={item.title}
                          url={item.url}
                        />
                      </div>
        </Col>
    )
  })
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
                  <h3 className="Heading--tertiary">
                    Decor your home with high-end audio
                  </h3>
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
                <ShippingType
                  icon={faLifeRing}
                  title="SUPPORT 24/7"
                  subtitle="we support 24 hours a day"
                />
              </div>
            </Col>
            <Col xl={4} lg={4} md={12} sm={12} xs={12}>
              <div className="Shipping__content">
                <ShippingType
                  icon={faRecycle}
                  title="30 DAYS RETURN"
                  subtitle="you have 30 days to return"
                />
              </div>
            </Col>
            <Col xl={4} lg={4} md={12} sm={12} xs={12}>
              <div className="Shipping__content">
                <ShippingType
                  icon={faUser}
                  title="PAYMENT 100% SECURE"
                  subtitle="Payment 100% Secure"
                />
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
                  url="https://cdn.shopify.com/s/files/1/0332/6420/5963/files/cat15_720x.jpg?v=1582857819"
                />
              </div>
            </Col>
            <Col xl={4} lg={4} md={4} sm={12} xs={12}>
              <div className="Category__card">
                <Card
                  title="Speaker"
                  url="https://cdn.shopify.com/s/files/1/0332/6420/5963/files/cat13_720x.jpg?v=1582796459"
                />
              </div>
            </Col>
            <Col xl={4} lg={4} md={4} sm={12} xs={12}>
              <div className="Category__card">
                <Card
                  title="Hi-end"
                  url="https://cdn.shopify.com/s/files/1/0332/6420/5963/files/hi-end_720x.jpg?v=1583147788"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="BestSeller">
        <Container>
          <Row>
            <Col>
              <div className="BestSeller__box">
                <div className="BestSeller__heading">
                  <Heading
                    title="BESTSELLER"
                    subTitle="Top seller in the week"
                  />
                </div>
                <div className="BestSeller__content">
                  <Row>
                    {/* <Col xl={3} lg={3} md={4} sm={6} xs={12}>
                      <div className="BestSeller__card">
                        <CardItem
                          clickedToCard={clickedToCard}
                          onQuickView={onQuickView}
                          sale={10}
                          price={4000}
                          title="Ysamsung Camera"
                          url="https://cdn.shopify.com/s/files/1/0332/6420/5963/products/prelic1_0_360x.jpg?v=1582872621"
                        />
                      </div>
                     
                    </Col> */}
                    {listCart}
                  </Row>
                    <div style={{textAlign: "center"}}> 
                    <Button classN="Button--black" clicked={handleLoadMore} >Load More</Button>
                    </div>
                  
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="Subscribe">
            <Container>
              <Row>
                <Col>
                    <div style={{textAlign: "center", marginBottom: "2.5rem"}}>
                    <Heading
                    title="SUBSCRIBE OUR NEWSLETTER"
                    subTitle="Sign up for our newsletter to be updated on the latest designs, exclusive offers, inspiration and tips!"
                  />
                    </div>
                    <div className="Subscribe__box">
                        <div className="Subscribe__form">
                          <input type="email" name="home[email]" placeholder="Your email address"  className="Subscribe__input" />
                          <Button classN="Button--black" style={{borderRadius: "50px", width: "70%"}}>Subscribe</Button>
                        </div>
                    </div>
                </Col>
              </Row>
            </Container>
      </section>
      <section className="Blog">
          <Container>
            <Row>
              <Col>
                  <div className="Blog__box" style={{textAlign: "center", marginBottom: "2.5rem"}}>
                      <div>
                      <Heading
                    title="LATES FROM BLOG"
                    subTitle="The freshest and most exciting news"
                  />
                      </div>
                  </div>
                  <Row>
                    <Col xl={4} lg={4} md={4} sm={6} xs={12}>
                      1
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={6} xs={12}>
                      1
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={6} xs={12}>
                      1
                    </Col>
                    
                  </Row>
              </Col>
            </Row>
          </Container>
      </section>
    </Fragment>
  );
}

export default Home;
