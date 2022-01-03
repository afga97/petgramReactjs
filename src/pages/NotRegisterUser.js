import React, { useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'
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
      <RegisterMutation>
        {
          (register, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              register({ variables }).then(() => {
                redirect()
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
              login({ variables }).then(() => {
                redirect()
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
