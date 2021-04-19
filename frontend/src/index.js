import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { CookiesProvider } from 'react-cookie'
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import App from './App'
import './index.css'
import classes from './App.module.css'
import { SessionProvider } from './contexts/SessionContext'
import reportWebVitals from './reportWebVitals'

const client = new ApolloClient({
  uri: 'http://localhost:5001/graphql',
  cache: new InMemoryCache(),
  credentials: 'include',
})

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className={`${classes.fullPageLoader} ${classes.Logo}`}>
              <img width="50" src={'./img/Logo.png'} alt="shop" />
            </div>
          }
        >
          <ApolloProvider client={client}>
            <SessionProvider>
              <App />
            </SessionProvider>
          </ApolloProvider>
        </Suspense>
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
