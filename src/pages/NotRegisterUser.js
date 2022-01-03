import React, { useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'
import { UserForm } from '../components/UserForm'

import Context from '../Context'

export default () => {
  const contextAuh = useContext(Context.ContextAuth)
  const navigate = useNavigate()
  const location = useLocation()

  const redirect = (token) => {
    const from = location.state?.from?.pathname || '/user'
    contextAuh.activateAuth(token).then(() => {
      navigate(from, { replace: true })
    })
  }

  return (
    <>
      <RegisterMutation>
        {
          (register, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              register({ variables }).then(({ data }) => {
                const { signup } = data
                redirect(signup)
              })
            }
            const errorMsg = error && 'El usuario ya existe o hay algún problema'
            return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Registrarse' />
          }
        }
      </RegisterMutation>
      <LoginMutation>
        {
          (login, { data, loading, error }) => {
            const handleLogin = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              login({ variables }).then(({ data }) => {
                const { login } = data
                redirect(login)
              })
            }
            const errorMsg = error && 'Usuario o contraseña incorrectos'
            return <UserForm disabled={loading} error={errorMsg} onSubmit={handleLogin} title='Inicia sesión' />
          }
        }
      </LoginMutation>
    </>
  )
}
