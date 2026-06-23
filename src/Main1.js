import React from "react";
import './Main1.css';
import chatimage2 from './ChatGPT Image Jun 14, 2026, 11_12_41 AM.png';
import {useNavigate} from "react-router-dom";
const Main1=()=>{
    const navigate=useNavigate();
    return(
        
        <div className="image-container"> 
            <main>
                <img src={chatimage2} className="image-compo2"/>
                <div  className="overlay-text1">
                    <h1>From green spaces to kitchen moments,<br/> discover pots made for every home. 
                   </h1>
                    </div>
                    <div className="overlay-text2">
                    <p>Explore a world where nature meets functionality through <br/>
                        elegant plant pots and reliable cookware crafted to <br/>
                        elevate your everyday life.</p>
                    </div>
               <div className="overlay-button">
                <button className="button1"  onClick={()=>navigate("/Shopbycategory")}>Show By Category</button>
                <button className="button2">Explore Collections</button>
               </div>
                
            </main>
        </div>
    );
};
export default Main1;