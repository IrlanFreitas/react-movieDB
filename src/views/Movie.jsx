import React from 'react';
import { useParams } from 'react-router-dom';

import { IMAGE_BASE_URL, POSTER_SIZE } from '../helpers/config';

import Grid from '../components/Grid/Grid.jsx';
import Spinner from '../components/Spinner/Spinner.jsx';
import BreadCrumbs from '../components/BreadCrumb/BreadCrumb.jsx';
import MovieInfo from '../components/MovieInfo/MovieInfo.jsx';

import NoImage from '../assets/images/no_image.jpg';
import { useMovieFetch } from '../hooks/useMovieFetch';
import MovieInfoBar from '../components/MovieInfoBar/MovieInfoBar.jsx';
import Actor from '../components/Actor/Actor.jsx';

const Movie = () => {

    const { movieId } = useParams()

    const { state: movie, loading, error } = useMovieFetch(movieId)

    if (loading) return <Spinner />;
    if (error) return <div>...Opps, aconteceu algo de estranho!</div>;

    return (
        <>
            <BreadCrumbs movieTitle={movie.title} />
            <MovieInfo movie={movie} />
            <MovieInfoBar
                time={movie.runtime}
                budget={movie.budget}
                revenue={movie.revenue}
            />
            <Grid header="Atores">
				{movie.actors.map((actor) => (
					<Actor
						key={actor.credit_id}
						image={
							actor.profile_path
								? IMAGE_BASE_URL + POSTER_SIZE + actor.profile_path
								: NoImage
						}
						name={actor.name}
						character={actor.character}
					/>
				))}
			</Grid>
);
        </>
    );
};


export default Movie;