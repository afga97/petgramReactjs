import React from 'react'
import { Nav, Link } from './styles'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'

const SIZE = '80px'
export const NavBar = () => {
  return (
    <Nav>
      <Link to='/' size={SIZE}><MdHome /></Link>
      <Link to='/admin/favs' size={SIZE}><MdFavoriteBorder /></Link>
      <Link to='/admin/user' size={SIZE}><MdPersonOutline /></Link>
    </Nav>
  )
}
