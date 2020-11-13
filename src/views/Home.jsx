import React, { useState, useEffect } from 'react'

import { useHomeFetch } from '../hooks/useHomeFetch'
import API from '../service/API'
import ImageMovie from '../components/ImageMovie/ImageMovie.jsx'


import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../helpers/config'

import NoImage from '../assets/images/no_image.jpg'

const Home = () => {

    const { movies, loading, error } = useHomeFetch()

    console.log(movies, loading, error)

    return (<>{movies?.results[0] && (<ImageMovie
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies.results[0].backdrop_path}`}
        title={movies.results[0].original_title}
        text={movies.results[0].overview} />)}</>)
}

export default Home