import { useState, useEffect } from 'react'

import API from '../service/API'

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
};

export const useHomeFetch = () => {

    const [movies, setMovies] = useState(initialState);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoadingMore, setIsLoadingMore] = useState(true);

    const fetchMovies = async (page, searchTerm = '') => {
        try {
            setError(false)
            setLoading(true)

            const moviesAPI = await API.fetchMovies(searchTerm, page)

            setMovies((prev) => ({
                ...moviesAPI,
                results:
                    page > 1
                        ? [...prev.results, ...moviesAPI.results]
                        : [...moviesAPI.results],
            }));

        } catch (error) {
            setError(true)
            console.log(error)
        }
        setLoading(false);
    }


    useEffect(() => {
        if(!isLoadingMore) return

        fetchMovies(movies.page + 1, searchTerm)
        setIsLoadingMore(false)
    }, [isLoadingMore, searchTerm, movies.page, fetchMovies])

    return { movies, loading, error, searchTerm, setSearchTerm, setIsLoadingMore }

} 