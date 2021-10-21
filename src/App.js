import "./App.css";

import { useState } from "react";

import CardList from "./components/CardList";

import Myform from "./components/Myform";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      description: "Javascript its a programm language",
      name: "Javascript",
    },
    {
      id: 2,
      description: "Javascript its a programm language",
      name: "Javascript",
    },
    {
      id: 3,
      description: "Javascript its a programm language",
      name: "Javascript",
    },
    {
      id: 4,
      description: "Javascript its a programm language",
      name: "Javascript",
    },
  ]);


  {/* спускаем в дочерний компонент и коллбэком вызываем*/}
  const createPost = (postData) =>{
    setPosts([...posts, {id:posts.length + 1, ...postData}])
  }
 

  return (
    <div>
      <Myform  createPost = {createPost}/>
      <CardList posts={posts} title={"Posts List"} />
    </div>
  );
}

export default App;
