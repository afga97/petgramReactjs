import React, { useContext } from 'react'
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import Context from './Context'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'
import { User } from './pages/User'
import { Favs } from './pages/Favs'
import { NotRegisterUser } from './pages/NotRegisterUser'

const UserLogged = () => {
  const { isAuth } = useContext(Context.ContextAuth)
  return isAuth ? <Outlet /> : <Navigate to='/notRegisterUser' />
}

export const App = () => {
  // const urlParams = new window.URLSearchParams(window.location.search)
  // const detailId = urlParams.get('detail')
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pet/:id' element={<Home />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path='/admin' element={<UserLogged />}>
          <Route exact path='user' element={<User />} />
          <Route exact path='favs' element={<Favs />} />
        </Route>
        <Route path='/notRegisterUser' element={<NotRegisterUser />} />
      </Routes>
      <NavBar />
    </div>
  )
}
// babel-eslint --save-dev se agrega a la config de slint en el package para omitir importaciones globales del js
