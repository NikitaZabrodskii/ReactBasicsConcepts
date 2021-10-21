import React from "react";
import classes from "./input.module.css";

const Myinput = React.forwardRef((props, ref) => {
  return <input {...props} ref={ref} className={classes.myinput} />;
});

export default Myinput;
