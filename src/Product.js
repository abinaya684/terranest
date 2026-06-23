import React from "react";
import { FaStar } from "react-icons/fa";
import "./Product.css";
import { Link,  useNavigate } from "react-router-dom";
import { pots } from "./Productdata";
import Headers1 from "./Headers1";


function Product({ cart, setCart }) {

  const navigate= useNavigate();
  const addToCart = (pot) => {
    setCart([...cart, pot]);
    navigate("/Cart");
  };

  return (
    <div>
      <Headers1 />

      <div className="shop-page">

        <aside className="filter-section">

          <h3>Filters</h3>

          <div className="filter-title">
            <h3>Price</h3>
          </div>

          <label>
            <input type="checkbox" /> Under ₹500
          </label>

          <label>
            <input type="checkbox" /> ₹500 - ₹1000
          </label>

          <label>
            <input type="checkbox" /> ₹1000 - ₹2000
          </label>

          <label>
            <input type="checkbox" /> Above ₹2000
          </label>

          <div className="price-slider">
            <input type="range" min="500" max="3000" />
          </div>

          <div className="price-value">
            <span>₹500</span>
            <span>₹3000</span>
          </div>

          <div className="filter-title">
            <h3>Material</h3>
          </div>

          <label>
            <input type="checkbox" /> Clay
          </label>

          <label>
            <input type="checkbox" /> Ceramic
          </label>

          <label>
            <input type="checkbox" /> Plastic
          </label>

          <label>
            <input type="checkbox" /> Metal
          </label>

          <label>
            <input type="checkbox" /> Concrete
          </label>

          <div className="filter-title">
            <h3>Color</h3>
          </div>

          <div className="colors">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="filter-title">
            <h3>Size</h3>
          </div>

          <div className="size-option">
            <label>
              <input type="checkbox" /> Small
            </label>

            <label>
              <input type="checkbox" /> Medium
            </label>

            <label>
              <input type="checkbox" /> Large
            </label>
          </div>

          <div className="filter-title">
            <h3>Rating</h3>
          </div>

          <div className="rating-filter">
            <div>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <div>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              ☆
            </div>

            <div>
              <FaStar />
              <FaStar />
              <FaStar />
              ☆
              ☆
            </div>

            <div>
              <FaStar />
              <FaStar />
              ☆
              ☆
              ☆
            </div>
          </div>

        </aside>

        <section className="product-section">

          {pots.map((pot) => (

            <div className="product-card" key={pot.id}>

              <Link to={`/product/${pot.id}`}>
                <img
                  src={pot.image}
                  alt={pot.name}
                />
              </Link>

              <h3>{pot.name}</h3>

              <p>RS. {pot.price}</p>

              <button
                onClick={() => addToCart(pot)}
              >
                Add to Cart
              </button>

            </div>

          ))}

        </section>

      </div>

    </div>
  );
}

export default Product;