import React from "react";
import Headers1 from "./Headers1";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
     <Headers1 />
    <div className="body-divd">
      

      <div className="about-container">
        <h1>About TerraNest</h1>

        <p>
          Welcome to <strong>TerraNest</strong>, your destination for beautifully
          crafted clay and ceramic pots designed for both cooking and plant care.
        </p>

        <p>
          We believe that traditional cookware and eco-friendly gardening
          products bring warmth and sustainability into everyday life. Our
          collection includes cooking pots, plant pots, hanging pots, and
          handcrafted ceramic products made with quality and care.
        </p>

        <p>
          At TerraNest, we aim to blend tradition with modern living and deliver
          products that are functional, durable, and aesthetically pleasing.
        </p>
      </div>
      </div>
    </>
  );
};

export default AboutUs;