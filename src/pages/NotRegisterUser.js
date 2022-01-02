import React, { useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { UserForm } from '../components/UserForm'
import Context from '../Context'

export const NotRegisterUser = () => {
  const contextAuh = useContext(Context.ContextAuth)
  const navigate = useNavigate()
  const location = useLocation()

  const redirect = () => {
    const from = location.state?.from?.pathname || '/admin/user'
    contextAuh.activateAuth().then(() => {
      navigate(from, { replace: true })
    })
  }

  return (
    <>
      <UserForm onSubmit={redirect} title='Registrarse' />
      <UserForm onSubmit={redirect} title='Inicia sesión' />
    </>
  )
}
