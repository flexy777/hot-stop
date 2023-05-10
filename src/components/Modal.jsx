import React from "react";

const Modal = ({ foodItem, closeModal }) => {
  const handleCheckout = () => {
    // Perform checkout logic here
    closeModal();
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{foodItem}</h3>
        <label for="cars">Choose a {foodItem} type:</label>

        <select
          style={{
            border: "2px solid black",
            borderRadius: "5px",
            marginLeft: "5px",
          }}
          name="cars"
          id="cars"
        >
          <option value="volvo">Small</option>
          <option value="saab">Medium</option>
          <option value="mercedes">Large</option>
        </select>
        {/* Add input fields or other options for size, toppings, etc. */}
        <p>
          <button onClick={handleCheckout}>Checkout</button>
        </p>
      </div>
    </div>
  );
};

export default Modal;
