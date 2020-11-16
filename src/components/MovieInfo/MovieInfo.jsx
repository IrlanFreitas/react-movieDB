import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../helpers/config';

// Components
import Thumb from '../../components/Thumb/Thumb.jsx';

// Image
import NoImage from '../../assets/images/no_image.jpg';

// Styles
import { Wrapper, Content, Text } from './styles.js';

const MovieInfo = ({ movie }) => (
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumb
                image={
                    movie.poster_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                        : NoImage
                }
                clickable={false}
            />
            <Text>
                <h1>{movie.title}</h1>
                <h3>DESCRIÇÃO</h3>
                <p>{movie.overview}</p>

                <div className="rating-directors">
                    <div>
                        <h3>AVALIAÇÃO</h3>
                        <div className="score">{movie.vote_average}</div>
                    </div>
                    <div className="director">
                        <h3>DIRETORES{movie?.directors?.length > 1 ? 'S' : ''}</h3>
                        {movie?.directors?.map((director) => (
                            <p key={director.credit_id}>{director.name}</p>
                        ))}
                    </div>
                </div>
            </Text>
        </Content>
    </Wrapper>
);

export default MovieInfo;