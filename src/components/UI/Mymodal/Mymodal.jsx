import React from 'react';
import classes from './modal.module.css'

export const Mymodal = ({ children, visible,setVisible}) => {

const rootclasses = [classes.modal]

if(visible){
    rootclasses.push(classes.modalactive)
}
   
    
	return (
		<div className={rootclasses.join(' ')} onClick={()=>setVisible(false)}>
			<div className={classes.modalcontent} onClick={(e) => e.stopPropagation()}>{children}</div>
		</div>
	);
};
