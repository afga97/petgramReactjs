import React, { useState, createContext } from 'react'

export const ContextAuth = createContext()

const ProviderAuth = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })
  const value = {
    isAuth,
    activateAuth: token => {
      setIsAuth(true)
      window.sessionStorage.setItem('token', token)
      return Promise.resolve()
    },
    removeAuth: () => {
      setIsAuth(false)
      window.sessionStorage.removeItem('token')
    }
  }
  return (
    <ContextAuth.Provider value={value}>
      {children}
    </ContextAuth.Provider>
  )
}
export default {
  ProviderAuth,
  ContextAuth
}
