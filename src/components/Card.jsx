import React from "react";
import "../styles/cards.css";
import Mybutton from "./UI/Button/Mybutton";

const Card = ({ item, delPosts}) => {

 
  return (
    <div className="cards" >
      <strong>
        
        {item.id}  {item.name}

       
      </strong>
      <p>{item.description}</p>
      <Mybutton onClick = {()=> delPosts(item)} > delete </Mybutton>
    </div>
  );
};

export default Card;