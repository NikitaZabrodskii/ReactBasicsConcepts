import React from "react";
import classes from "./btn.module.css";

const Mybutton = (props) => {
  return (
    <button {...props} className={classes.btn}>
      {props.children}
    </button>
  );
};
export default Mybutton;
