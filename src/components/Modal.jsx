import React from "react";
import { Link } from "react-router-dom";

const Modal = ({ foodItem, closeModal }) => {
  const [selectedSize, setSelectedSize] = React.useState("");
  const [selectedType, setSelectedType] = React.useState("");

  const handleCheckout = () => {
    const message = `Good day, I'll like to place an Order for: ${foodItem} - Size: ${selectedSize} - Type: ${selectedType}`;
    const phoneNumber = "08169798209"; // Replace with the recipient's phone number

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappLink, "_blank");

    closeModal();
  };
  const handleClose = () => {
    closeModal();
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={handleClose}>
          &times;
        </button>
        <h1 className="fw-bold">{foodItem}</h1>

        {foodItem === "Burger" ? (
          <div>
            <label className="fw-semibold" htmlFor="types">
              Choose a {foodItem} type:
            </label>
            <select
              style={{
                border: "2px solid black",
                borderRadius: "5px",
                marginLeft: "5px",
              }}
              name="types"
              id="types"
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value=""></option>
              <option value="Beef">Beef</option>
              <option value="Chicken">Chicken</option>
            </select>{" "}
          </div>
        ) : (
          <div>
            <label className="fw-semibold" htmlFor="sizes">
              Choose a {foodItem} size:
            </label>
            <select
              className="mb-3"
              style={{
                border: "2px solid black",
                borderRadius: "5px",
                marginLeft: "5px",
              }}
              name="sizes"
              id="sizes"
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option value=""></option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
            <p>
              <label className="fw-semibold" htmlFor="types">
                Choose a {foodItem} type:
              </label>

              <select
                style={{
                  border: "2px solid black",
                  borderRadius: "5px",
                  marginLeft: "5px",
                }}
                name="types"
                id="types"
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value=""></option>
                <option value="Chicken">Chicken</option>
                <option value="Beef">Beef</option>
              </select>
            </p>
          </div>
        )}
        {/* Add input fields or other options for size, toppings, etc. */}
        <p>
          <button className="fw-bold mt-3 " onClick={handleCheckout}>
            <Link
              className="checkout-link"
              to="#"
              onClick={(e) => e.preventDefault()}
            >
              Checkout
            </Link>
          </button>
        </p>
      </div>
    </div>
  );
};

export default Modal;
