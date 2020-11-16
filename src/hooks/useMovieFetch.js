import { useEffect, useState } from 'react';

// API
import API from '../service/API';

export const useMovieFetch = (movieId) => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(false);

                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);

                //* Pegar Diretores
                const diretors = credits.crew.filter(
                    (member) => member.job === 'Director'
                );

                setState({
                    ...movie,
                    actors: credits.cast,
                    diretors,
                });
                setLoading(false);
            } catch (err) {
                console.log(err);
                setError(true);
            }
        };

        fetchData();
    }, [movieId]);

    return { state, loading, error };
};