import React from "react";
import Headers1 from "./Headers1";
import "./ProductDetails.css";
import { useParams, useNavigate} from "react-router-dom";
import { FaStar } from "react-icons/fa";
import side1 from "./clay_plant.jpg";
import side2 from "./clay_plant.jpg";
import side3 from "./clay_plant.jpg";
import side4 from "./clay_plant.jpg";
import { pots } from "./Productdata";

const ProductDetails = ({ cart, setCart }) => {

  const { id } = useParams();
  const navigate = useNavigate();

  const product = pots.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  const addToCart = () => {
    setCart([...cart, product]);

    navigate("/cart");
  };
  return (
    <div>
      <Headers1 />

      <div className="product-container">

        <div className="thumbnails">
          <img src={side1} alt="" />
          <img src={side2} alt="" />
          <img src={side3} alt="" />
          <img src={side4} alt="" />
        </div>

        <div className="main-image">
          <img
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="details">

          <h1>{product.name}</h1>

          <div className="rating">
            <FaStar />
            <span>(120 Reviews)</span>
          </div>

          <h2>₹{product.price}</h2>

          <p>
            Elegant handmade clay flower pot with a
            minimal design. Perfect for indoor and
            outdoor decoration.
          </p>

          <button
            onClick={addToCart}
            className="buy-btn"
          >
            Add To Cart
          </button>

        </div>

      </div>
    </div>
  );
};

export default ProductDetails;