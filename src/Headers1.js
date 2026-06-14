import React from "react";
import chatimage from "./ChatGPT Image Jun 13, 2026, 02_30_30 PM.png";
import './Headers1.css';
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
const Headers1=()=>{
    return(
        <div>
     <div className="header" >
        <header>
            <img src={chatimage} className="image-compo"/>
           <h1>TerraNest</h1>
           <ul>
            <li className="list-home">
                <a href="./">Home</a>
            </li>
            <li>
                <a href="./">Product</a>
            </li>
            <li>
                <a href="./">About us</a>
            </li>
            <li>
                <a href="./">contact</a>
            </li>
            <li>
                <a href="./"><FaSearch /></a>
            </li>
            <li>
                <a href="./"><FaUser /></a>
            </li>
            <li>
                <a href="./"><FaRegHeart /></a>
            </li>
            <li>
                <a href="./"><FaShoppingCart /></a>
            </li>
           </ul>
           
        </header>
     </div>
    <br/>
     </div>
    
    );
};
export default Headers1;