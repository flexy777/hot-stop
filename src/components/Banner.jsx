import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const discounts = ["20% off", "50% off", "Free Delivery"];
  const newFoodItems = ["Taco Special", "Burger of the Month", "Pizza Delight"];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Change slide every 5 seconds
  };

  return (
    <div className="banner">
      <Slider {...settings}>
        {discounts.map((discount, index) => (
          <div key={index}>
            <div className="banner-content">
              <p className="discount fw-bold">
                Limited Time Offer: {discount} on {newFoodItems[index]}!
              </p>
              <button className="order-button fw-bold">Order Now</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
