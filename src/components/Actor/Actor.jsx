import React from 'react';

import { Wrapper, Image } from './styles.js';

const Actor = ({ image, name, character }) => (
	<Wrapper>
		<Image data-testid="img" src={image} alt="actor-thumb" />
		<h3>{name}</h3>
		<p>{character}</p>
	</Wrapper>
);

export default Actor;