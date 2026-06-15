import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
const Categorycards=({image,title})=>{
    return(
        <div className='card' style={{width:"14rem",flexShrink:"0"}}>
            <img
         src={image}
          className="card-img-top"
          alt={title}
          style={{height:"13rem"}}
          />
          <div className='card-body text-center'>
            <h5 style={{whiteSpace:"nowrap"}}>{title}</h5>
          </div>
        </div>
    );
};
export default Categorycards;