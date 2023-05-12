import React, { useState } from "react";
import Modal from "./Modal";

const FoodItem = ({
  name,
  imageSrc,
  small_price,
  medium_price,
  large_price,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };
  const handleOrderNow = () => {
    setModalOpen(true);
    // const phoneNumber = "08169798209";
    // const message = `Hello, I would like to order ${name}.`;
    // const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    //   message
    // )}`;
    // window.open(whatsappLink, "_blank");
  };
  return (
    <>
      {modalOpen && <Modal foodItem={name} closeModal={closeModal} />}
      <div className="food-item">
        <h3 className="fw-bold">{name}</h3>
        <img className="food-item" src={imageSrc} alt={name} />
        <p className="fw-bold">
          Small {name} Price: {small_price}
        </p>
        <p className="fw-bold">
          Medium {name} Price: {medium_price}
        </p>
        <p className="fw-bold">
          Large {name} Price: {large_price}
        </p>
        <button className="fw-bold" onClick={handleOrderNow}>
          Order Now
        </button>
      </div>
    </>
  );
};

export default FoodItem;
