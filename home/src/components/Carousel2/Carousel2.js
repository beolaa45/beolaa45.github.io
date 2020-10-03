import React, { Component } from "react";
import Slider from "react-slick";
import CardItem from "../CardItem/CardItem";
import Image from "../UI/Image/Image";
import "./Carousel2.scss"
export default class AppendDots extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: dots => (
        <div
          style={{
            backgroundColor: "#ddd",
            borderRadius: "10px",
            padding: "10px"
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div className="Carousel2__thumbai"
          style={{
            width: "100%",
            color: "blue",
          }}
        >
           <Image url="https://cdn.shopify.com/s/files/1/0332/6420/5963/products/prelic3_0_540x.jpg?v=1582861099"/>
        </div>
      )
    };
    return (
      <div className="Carousel2">
        <Slider {...settings}>
          <div>
            <Image url="https://cdn.shopify.com/s/files/1/0332/6420/5963/products/prelic3_0_540x.jpg?v=1582861099"/>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
        
        </Slider>
      </div>
    );
  }
}