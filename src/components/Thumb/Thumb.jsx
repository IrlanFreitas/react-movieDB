import React from 'react';

import { Image } from './styles.js';

const Thumb = ({image, movieId, clickable}) => (
    <div>
        <Image src={image} alt="movie-thumb" />
    </div>
);

export default Thumb;