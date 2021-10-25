import { useState } from 'react';
import Myinput from './UI/Input/Myinput';
import Myselect from './UI/Select/Myselect';


const Postfilter = ({filter, setFilter}) => {
	

	
	return (
		<div>
			<Myinput
				placeholder={'поиск '}
				value={filter.inputValue}
				onChange={(e) => setFilter({...filter,inputValue:e.target.value})}
			/>
			<Myselect
				value={filter.optionValue}
				options={[
					{ name: 'description', value: 'description' },
					{ name: 'name', value: 'name' },
				]}
				changeOptionState={(e) => setFilter({...filter,optionValue:e.target.value})}
			>
				sort
			</Myselect>
		</div>
	);
};

export default Postfilter;
