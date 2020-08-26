import React from 'react';
import './Pokecard.css';

function Pokecard({ name, img, type, exp }) {
	return (
		<div className='Pokecard'>
			<h2 className='Pokecard-name'>{name}</h2>
			<img className='Pokecard-img' src={img} />
			<p>Type: {type}</p>
			<p>EXP: {exp}</p>
		</div>
	);
}

export default Pokecard;
