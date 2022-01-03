import React from 'react'
import { Form, Button, Input, Title, Error } from './styles'
import { useInputValue } from '../../hooks/useInputValue'

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input
          disabled={disabled}
          placeholder='Email' {...email}
        />
        <Input
          disabled={disabled}
          placeholder='Password'
          type='password' {...password}
        />
        <Button disabled={disabled}>{title}</Button>
        {error && <Error>{error}</Error>}
      </Form>
    </>
  )
}
