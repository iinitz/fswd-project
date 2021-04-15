import React, { Fragment, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import classes from './App.module.css'
import Layout from './components/Layout/Layout'

const HomePage = React.lazy(() => import('./pages/HomePage'))
const LoginPage = React.lazy(() => import('./pages/LoginPage'))
const RegisterPage = React.lazy(() => import('./pages/RegisterPage'))
const OrderPage = React.lazy(() => import('./pages/OrderPage'))
const CheckoutPage = React.lazy(() => import('./pages/CheckoutPage'))

const App = () => {
  return (
    <Fragment>
      <div>
        <Layout />
        <Suspense
          fallback={
            <div className={`${classes.fullPageLoader} ${classes.Logo}`}>
              <img width="50" src={'/shop.png'} alt="shop" />
            </div>
          }
        >
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
            <Route path="/order">
              <OrderPage />
            </Route>
            <Route path="/checkout">
              <CheckoutPage />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Fragment>
  )
}

export default App
