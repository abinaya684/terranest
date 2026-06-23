import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Home from "./Home";
import Shopbycatogary from "./Shopbycategory";
import Product from "./Product";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import Headers1 from "./Headers1";

function App() {

  const [cart, setCart] = useState([]);

  const removeFromCart = (id) => {
    setCart(
      cart.filter((item) => item.id !== id)
    );
  };

  return (
    <BrowserRouter>
    

      <Routes>

        <Route
          path="/"element={<Home />}/>
        

        <Route
          path="/Shopbycategory" element={<Shopbycatogary />}/>
       

        <Route
          path="/product"element={<Product cart={cart} setCart={setCart} />}/>
        

        <Route
          path="/product/:id" element={<ProductDetails cart={cart} setCart={setCart}/>}/>
           
        <Route
          path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart}/>}/>

        <Route path="/Cart" element={<FaShoppingCart/>}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;