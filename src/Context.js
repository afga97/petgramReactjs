import React, { useState, createContext } from 'react'

export const ContextAuth = createContext()

const ProviderAuth = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)
  const value = {
    isAuth,
    activateAuth: () => {
      setIsAuth(true)
      return Promise.resolve()
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
