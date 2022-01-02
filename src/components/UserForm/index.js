import React from 'react'
import { Form, Button, Input, Title } from './styles'
import { useInputValue } from '../../hooks/useInputValue'

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
        <Input
          placeholder='Email' {...email}
        />
        <Input
          placeholder='Password'
          type='password' {...password}
        />
        <Button>{title}</Button>
      </Form>
    </>
  )
}
