import { useState } from "react";
import Mybutton from "./UI/Button/Mybutton";
import Myinput from "./UI/Input/Myinput";

const Myform = ({createPost}) => {
  const [post, setPost] = useState({ title: "", body: "" });

  
  const addNewPost = (e) => {
    e.preventDefault();
    let postData = {
      body: post.body,
      title: post.title
    }
    createPost(postData)
    
    setPost({title:'', body:''})
    
    
  };
  const changeState = (e) => {
    let value = e.target.value;
    let command = e.target.dataset.command;
    command === "name"
      ? setPost({ ...post, title: value })
      : setPost({ ...post, body: value });
  };
  return (
    <form>
      {/*управляемый компонент */}
      <Myinput
        required="required"
        type="text"
        placeholder="add name"
        value={post.name}
        data-command="name"
        onChange={changeState}
      />
      {/*неуправляемый инпут*/}
      <Myinput
        value={post.description}
        type="text"
        placeholder="add description"
        data-command="description"
        onChange={changeState}
      />

      <Mybutton onClick={addNewPost}> Button</Mybutton>
    </form>
  );
};

export default Myform;
