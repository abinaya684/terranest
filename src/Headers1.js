import React from "react";
import chatimage from "./ChatGPT Image Jun 13, 2026, 02_30_30 PM.png";
import './Headers1.css';
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
const Headers1=()=>{
    const listanchor=[
        {
            id:1,
            name:"Home",
            lined:"false"
        },
        {
            id:2,
            name:"Product",
            lined:"false"
        },
        {
            id:3,
            name:"About us",
            lined:"false"
        },
        {
            id:4,
            name:"Contact",
            lined:"false"
        }
    ];
    return(
        <div>
     <div className="header" >
        <header>
            <img src={chatimage} className="image-compo"/>
           <h1 className="terra-nest">TerraNest</h1>
           
            {listanchor.map( (list)=>(
                <div>
                    <ul>
                        <li><a href="/">{list.name}</a></li>
                    </ul>
                </div>
             ) )}
            
            <ul>
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