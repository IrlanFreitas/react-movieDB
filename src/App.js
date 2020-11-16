import React from 'react'

import Header from './components/Header/Header.jsx'
import Home from './views/Home.jsx'
import Movie from './views/Movie.jsx'
import NotFound from './views/NotFound.jsx'

import { GlobalStyle } from './GlobalStyle'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <Header />
    {/* <Home /> Fixado anteriormente */} 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:movieId" element={<Movie />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <GlobalStyle />
  </Router>
)


export default App