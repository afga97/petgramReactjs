import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Context from './Context'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
// HashRouter pone la almohadilla al inicio y al recargar no se pierde la ruta
const client = new ApolloClient({
  uri: 'http://localhost:3500/graphql'
})

ReactDOM.render(
  <Context.ProviderAuth>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </Context.ProviderAuth>, document.getElementById('app'))
