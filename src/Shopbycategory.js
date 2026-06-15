import React from "react";
import Headers1 from "./Headers1";
import cookingpot from "./clay_cooking_pots.webp";
import cookingpot2 from "./ceramic_cooking_pots.jpg";
import clayplant from "./clay_plant.jpg";
import Categorycards from "./Categorycards";
import ceramicplant from "./ceramic_plant.jpg";
import hangingpots from "./hanging_pots.webp";

const Shopbycategory=()=>{
    return(
     <div >
        <Headers1 />
        <h2
        style={{ 
            margin:"0",
            marginLeft:"20px",
            display:"flex",
            alignContent:"flex-start",
        }}>Shop By Category</h2>
        <br />
        <div style={{display:"flex",gap:"20px",width:"150vh",paddingLeft:"50px"}}>
            <Categorycards 
             image={cookingpot}
            title="Clay Cooking Pots" />
            <Categorycards 
             image={cookingpot2}
            title="Ceramic Cooking Pots" />
             <Categorycards 
             image={clayplant}
            title="Clay Planters" />
            <Categorycards 
             image={ceramicplant}
            title="Ceramic Planters" />

             <Categorycards 
             image={hangingpots}
            title="Hanging planter pots" />

        </div>
     </div>
    );
};
export default Shopbycategory;