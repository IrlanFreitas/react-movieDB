import React, { useState, useEffect } from 'react'

import { useHomeFetch } from '../hooks/useHomeFetch'
import API from '../service/API'

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../helpers/config'

import NoImage from '../assets/images/no_image.jpg'

const Home = () => {

    const { movies, loading, error } = useHomeFetch()

    console.log(movies, loading, error)

    return (<></>)
}

export default Home