import React from 'react'
import Header from './components/Header/Header'
import Home from './views/Home'
import { GlobalStyle } from './GlobalStyle'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
      Start here.
    </div>
  )
}

export default App