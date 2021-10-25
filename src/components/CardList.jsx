import React from "react";
import Card from "./Card";

const CardList = ({ posts, title, delPosts}) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((item) => {
        return <Card item={item}   delPosts ={delPosts} />;
      })}
    </div>
  );
};

export default CardList;
