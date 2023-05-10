import React from "react";

const FoodItem = ({ name, imageSrc, price }) => {
  const handleOrderNow = () => {
    const phoneNumber = "08169798209";
    const message = `Hello, I would like to order ${name}.`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };
  return (
    <div className="food-item">
      <h3>{name}</h3>
      <img className="food-item" src={imageSrc} alt={name} />
      <p>Price: {price}</p>
      <button onClick={handleOrderNow}>Order Now</button>
    </div>
  );
};

export default FoodItem;
