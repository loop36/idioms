import React, { useState } from 'react'
import "./card.css"
const Card = (props) => {
  return(<div className="container" onClick={()=>{props.click()}}>
   {props.children}
  </div>);
};
export default Card;