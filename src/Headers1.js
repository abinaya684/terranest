import React,{useState} from "react";
import chatimage from "./ChatGPT Image Jun 13, 2026, 02_30_30 PM.png";
import './Headers1.css';
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import {NavLink} from "react-router-dom";
const Headers1=()=>{
    
    const listanchor=[
        {
            id:1,
            name:"Home",
            lined:"false",
            path:"/"
        },
        {
            id:2,
            name:"Product",
            lined:"false",
            path:"/product"
        },
        {
            id:3,
            name:"About us",
            lined:"false",
            path:"/AboutUs"
        },
        {
            id:4,
            name:"Contact",
            lined:"false",
            path:"/Contact"
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
                    <ul className="side-menu">
                        <li><NavLink to={list.path}
                        className={({isActive})=>isActive?"underline-active":""}
                        >{list.name}</NavLink></li>
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
                {/* <Link to="/Cart"><FaShoppingCart /></Link> */}
            </li>
           </ul>
           
        </header>
     </div>
    <br/>
     </div>
    
    );
};
export default Headers1;