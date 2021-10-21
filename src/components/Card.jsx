import React from "react";
import "../styles/cards.css";
import Mybutton from "./UI/Button/Mybutton";

const Card = ({ item }) => {

  const delCards = (e) =>{
    let card = e.target.closest('.cards')
    console.log(card.value)
  }
  return (
    <div className="cards" value = {item.id}>
      <strong>
        
        {item.id}  {item.name}

       
      </strong>
      <p>{item.description}</p>
      <Mybutton onClick = {delCards} > delete </Mybutton>
    </div>
  );
};

export default Card;