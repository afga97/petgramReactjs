import styled from 'styled-components'
import { NavLink as NavLi } from 'react-router-dom'
import { fadeIn } from '../../styles/animation'

export const Nav = styled.nav`
  align-items: 'center';
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  bottom: 0;
  display: flex;
  height: 50px;
  justify-content: space-around;
  left: 0;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 1000;
`

export const Link = styled(NavLi)`
  align-items: 'center';
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content:center;
  text-decoration: none;
  width: 100%;
  &.active {
    color: blue;
    &:after {
      ${fadeIn({ time: '25s' })};
      content: '.';
      position: absolute;
      bottom: 52;
      font-size: 35px;
      line-height: 20px;
    }
  }
`
