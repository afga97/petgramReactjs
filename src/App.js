import React, { useContext, Suspense } from 'react'
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import Context from './Context'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'
import { NavBar } from './components/NavBar'
// import { Home } from './pages/Home'
// import { Detail } from './pages/Detail'
// import { User } from './pages/User'
// import { Favs } from './pages/Favs'
// import { NotRegisterUser } from './pages/NotRegisterUser'
// import { NotFound } from './pages/NotFound'

const Favs = React.lazy(() => import('./pages/Favs'))
const Home = React.lazy(() => import('./pages/Home'))
const Detail = React.lazy(() => import('./pages/Detail'))
const User = React.lazy(() => import('./pages/User'))
const NotRegisterUser = React.lazy(() => import('./pages/NotRegisterUser'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

const UserLogged = () => {
  const { isAuth } = useContext(Context.ContextAuth)
  return isAuth ? <Outlet /> : <Navigate to='/login' />
}

export const App = () => {
  // const urlParams = new window.URLSearchParams(window.location.search)
  // const detailId = urlParams.get('detail')
  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/pet/:id' element={<Home />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path='/' element={<UserLogged />}>
          <Route exact path='user' element={<User />} />
          <Route exact path='favs' element={<Favs />} />
        </Route>
        <Route path='/login' element={<NotRegisterUser />} />
      </Routes>
      <NavBar />
    </Suspense>
  )
}
// babel-eslint --save-dev se agrega a la config de slint en el package para omitir importaciones globales del js
