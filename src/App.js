import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { Home } from './pages/Home'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <div>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pet/:id' element={<Home />} />
            </Routes>
      }
    </div>
  )
}
// babel-eslint --save-dev se agrega a la config de slint en el package para omitir importaciones globales del js
