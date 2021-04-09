import React from 'react'

import classes from './NavigationItems.module.css'

const NavigationItem = React.lazy(() =>
  import('./NavigationItem/NavigationItem')
)

const NavigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" clickedFromNav={props.clicked} exact>
      Home
    </NavigationItem>
    <NavigationItem link="/Login" clickedFromNav={props.clicked}>
      Login
    </NavigationItem>
  </ul>
)

export default NavigationItems
