import React, { Fragment, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navigation/Toolbar/Toolbar'

const HomePage = React.lazy(() => import('./pages/HomePage'))
const LoginPage = React.lazy(() => import('./pages/LoginPage'))
const RegisterPage = React.lazy(() => import('./pages/RegisterPage'))

const App = () => {
  return (
    <Fragment>
      <div>
        <Navbar />
        <div>
          <Suspense fallback="Loading ...">
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/register">
                <RegisterPage />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </div>
    </Fragment>
  )
}

export default App
