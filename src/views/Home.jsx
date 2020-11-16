import React, { useState, useEffect } from 'react'

import { useHomeFetch } from '../hooks/useHomeFetch'
import API from '../service/API'
import ImageMovie from '../components/ImageMovie/ImageMovie.jsx'
import Grid from '../components/Grid/Grid.jsx'
import Thumb from '../components/Thumb/Thumb.jsx'
import Spinner from '../components/Spinner/Spinner.jsx'
import SearchBar from '../components/SearchBar/SearchBar.jsx'

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../helpers/config'

import NoImage from '../assets/images/no_image.jpg'

const Home = () => {

    const { movies, loading, error, searchTerm, setSearchTerm } = useHomeFetch()

    return (<>
        {!loading && movies?.results[0] ? (<ImageMovie
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies.results[0].backdrop_path}`}
            title={movies.results[0].original_title}
            text={movies.results[0].overview} />) : null}
        <SearchBar setSearchTerm={setSearchTerm}/>
        <Grid header={!searchTerm ? "Filmes Populares" : "Resultado da Busca"}>
            {movies?.results.map((movie) => (<Thumb key={movie.id} image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage} movieId={movie.id} clickable={true} />))}
        </Grid>
        <Spinner />
    </>)
}

export default Home