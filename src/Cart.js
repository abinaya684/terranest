import React from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

function Cart({ cart, removeFromCart }) {
    const navigate =useNavigate();
  const totalAmount = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  const placeOrder = () => {
    alert("Your Order Has Been Placed Successfully!");
  };

  return (
    <div className="cart-container">

      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <h3>Your Cart is Empty</h3>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              className="cart-item"
              key={index}
            >
              <img
                src={item.image}
                alt={item.name}
                className="cart-image"
              />

              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="cart-total">
            <h2>
              Total Amount : ₹{totalAmount}
            </h2>

            <button
              className="place-order-btn"
              onClick={placeOrder}
            >
              Place Order
            </button>

            <button className="continue-btn" onClick={() => navigate("/Product")}>
                        Continue Shopping
            </button>
          </div>
        </>
      )}

    </div>
  );
}

export default Cart;