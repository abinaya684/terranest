import React from "react";
import { FaTruckFast } from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";
import { PiRepeatBold } from "react-icons/pi";
const Footer1=()=>{
    return(
        <div className="Footer1"
        style={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            width:"100%",
            padding:"20px 40px",
            gap:"50px",
            whiteSpace:"nowrap",
            boxSizing:"border-box",
        }}>
            <h3  style={{display:"flex",alignItems:"center",gap:"8px",whiteSpace:"nowrap",margin:0,marginLeft:"70px" }}><FaTruckFast />  Fast Delivery</h3>
            <h3  style={{display:"flex",alignItems:"center",gap:"8px",whiteSpace:"nowrap",margin:0,marginLeft:"120px"}}><RiSecurePaymentFill /> 100% Secure Transactions </h3>
             <h3  style={{display:"flex",alignItems:"center",gap:"8px",whiteSpace:"nowrap",margin:0,marginLeft:"120px"}}><PiRepeatBold /> Easy Returns </h3>       
        </div>
    );
};
export default Footer1;