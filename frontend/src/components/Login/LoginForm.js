import { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { useSession } from '../../contexts/SessionContext'

const LoginForm = () => {
  const history = useHistory()
  const { login } = useSession()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleUsernameChange = useCallback((e) => {
    setUsername(e.target.value)
  }, [])
  const handlePasswordChange = useCallback((e) => {
    setPassword(e.target.value)
  }, [])
  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault()
      await login(username, password)
    },
    [login, password, username]
  )
  const redirectToRegister = useCallback(() => {
    history.push('/login/register')
  }, [history])
  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        value={username}
        onChange={handleUsernameChange}
        placeholder="Username"
        required
      />
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Password"
        required
      />
      <br />
      <button type="submit">Login</button>
      <br />
      <button type="button" onClick={redirectToRegister}>
        Register
      </button>
    </form>
  )
}

export default LoginForm
