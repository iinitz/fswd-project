import { Fragment, useMemo } from 'react'

import LoginForm from '../components/Login/LoginForm'
import { useSession } from '../contexts/SessionContext'

const LoginPage = () => {
  const { loading, user, logout: handleLogout } = useSession()

  const userBox = useMemo(() => {
    if (loading) {
      return <span className="Navbar-user">Loading ...</span>
    }
    if (user) {
      return (
        <Fragment>
          <span className="Navbar-user">
            id : {user?._id} type: {user?.type}
          </span>
          <button
            className="Navbar-logout"
            type="button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </Fragment>
      )
    }
    return <LoginForm />
  }, [handleLogout, loading, user])

  return (
    <div>
      <h4>LoginPage</h4>
      {userBox}
    </div>
  )
}

export default LoginPage
