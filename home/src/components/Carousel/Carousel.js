import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import Slider from "react-slick";
import CardItem from "../CardItem/CardItem";
import "./Carousel.scss";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    ); 
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
 const SimpleSlider = ({api}) => {

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      draggable: true,
      swipeToSlide: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      autoplay:true,
      ...api,
      responsive: [
        {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div >
          <CardItem
            // clickedToCard
            // onQuickView
            sale={10}
            price={4000}
            title="Ysamsung Camera"
            url="https://cdn.shopify.com/s/files/1/0332/6420/5963/products/prelic1_0_360x.jpg?v=1582872621"
        />
          </div>
          <div >
          <CardItem
            // clickedToCard
            // onQuickView
            sale={10}
            price={4000}
            title="Ysamsung Camera"
            url="https://cdn.shopify.com/s/files/1/0332/6420/5963/products/prelic1_0_360x.jpg?v=1582872621"
        />
          </div>
          <div >
          <CardItem
            // clickedToCard
            // onQuickView
            sale={10}
            price={4000}
            title="Ysamsung Camera"
            url="https://cdn.shopify.com/s/files/1/0332/6420/5963/products/prelic1_0_360x.jpg?v=1582872621"
        />
          </div>
          <div >
          <CardItem
            // clickedToCard
            // onQuickView
            sale={10}
            price={4000}
            title="Ysamsung Camera"
            url="https://cdn.shopify.com/s/files/1/0332/6420/5963/products/prelic1_0_360x.jpg?v=1582872621"
        />
          </div>
          <div >
          <CardItem
            // clickedToCard
            // onQuickView
            sale={10}
            price={4000}
            title="Ysamsung Camera"
            url="https://cdn.shopify.com/s/files/1/0332/6420/5963/products/prelic1_0_360x.jpg?v=1582872621"
        />
          </div>
          <div >
          <CardItem
            // clickedToCard
            // onQuickView
            sale={10}
            price={4000}
            title="Ysamsung Camera"
            url="https://cdn.shopify.com/s/files/1/0332/6420/5963/products/prelic1_0_360x.jpg?v=1582872621"
        />
          </div>
        </Slider>
      </div>
    );

}

export default SimpleSlider