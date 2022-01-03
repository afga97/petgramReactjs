import React, { useContext } from 'react'
import { SubmitButton } from '../components/SubmitButton'
import Context from '../Context'

export default () => {
  const { removeAuth } = useContext(Context.ContextAuth)
  return (
    <>
      <h1>Usuario</h1>
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </>

  )
}
