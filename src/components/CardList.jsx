import React from "react";
import Card from "./Card";

const CardList = ({ posts, title }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((item) => {
        return <Card item={item} key={item.id} />;
      })}
    </div>
  );
};

export default CardList;
