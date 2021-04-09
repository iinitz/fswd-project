import React from 'react'

import classes from './Toolbar.module.css'

// const Logo = React.lazy(() => import('../../Logo/Logo'));
const NavigationItems = React.lazy(() =>
  import('../NavigationItems/NavigationItems.js')
)

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div className={classes.Logo}>{/* <Logo /> */}</div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
)

export default toolbar
