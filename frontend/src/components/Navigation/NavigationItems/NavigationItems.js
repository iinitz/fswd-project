import React, { useMemo, Fragment } from 'react'
import { Link } from 'react-router-dom'

import { useSession } from '../../../contexts/SessionContext'

import classes from './NavigationItems.module.css'

const NavigationItem = React.lazy(() =>
  import('./NavigationItem/NavigationItem')
)

const NavigationItems = (props) => {
  const { loading, user } = useSession()

  const userBox = useMemo(() => {
    if (loading) {
      return <span className="Navbar-user">Loading ...</span>
    }
    if (user) {
      return (
        <Fragment>
          <Link
            to="/Login"
            className="bg-white hover:bg-gray-100 text-gray-800 py-1 px-4 border border-gray-400 rounded-full"
          >
            {user?.username}
          </Link>
        </Fragment>
      )
    }
    return (
      <Fragment>
        <Link
          to="/Login"
          className="bg-white hover:bg-gray-100 text-gray-800 py-1 px-4 border border-gray-400 rounded-full"
        >
          Login
        </Link>
      </Fragment>
    )
  }, [loading, user])

  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/products" clickedFromNav={props.cliked} exact>
        Product
      </NavigationItem>
      <NavigationItem link="/" clickedFromNav={props.clicked} exact>
        Home
      </NavigationItem>
      <NavigationItem link="/cart" clickedFromNav={props.clicked} exact>
        Cart
      </NavigationItem>
      <NavigationItem link="/order" clickedFromNav={props.clicked} exact>
        Order
      </NavigationItem>
      {userBox}
    </ul>
  )
}

export default NavigationItems
