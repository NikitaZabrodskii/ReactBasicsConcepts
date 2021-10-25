import React from 'react';

const Myselect = ({ children, options, value,changeOptionState }) => {
	return (
		<select value ={value} onChange = {(e)=>changeOptionState(e) }>
			<option disabled >{children}</option>
			{options.map((p) => (
				<option value={p.value} key={p.value}>
					{p.name}
				</option>
			))}
		</select>
	);
};

export default Myselect;
