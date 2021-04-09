import { useCallback, useState } from 'react'
import { useHistory } from 'react-router'
import { useMutation } from '@apollo/client'

import { CREATE_CUSTOMER_MUTATION } from '../../graphql/createCustomerMutation'
import { CREATE_ADMIN_MUTATION } from '../../graphql/createAdminMutation'

const RegisterForm = () => {
  const history = useHistory()
  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
  })
  const [type, setType] = useState('customer')
  const [admin, setAdmin] = useState({
    companyName: '',
  })
  const [[createCustomer], [createAdmin]] = [
    useMutation(CREATE_CUSTOMER_MUTATION),
    useMutation(CREATE_ADMIN_MUTATION),
  ]
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target
    setNewUser((prev) => ({ ...prev, [name]: value }))
  }, [])
  const handleTypeChange = useCallback((e) => {
    setType(e.target.value)
  }, [])
  const handleAdminChange = useCallback((e) => {
    setAdmin({ companyName: e.target.value })
  }, [])
  const handleRegister = useCallback(
    async (e) => {
      e.preventDefault()
      try {
        console.log(JSON.stringify(newUser))
        if (type === 'customer')
          await createCustomer({ variables: { record: newUser } })
        else
          await createAdmin({ variables: { record: { ...newUser, ...admin } } })
        history.push('/')
        alert('Register success')
      } catch (err) {
        console.log(err)
        alert('Register failed')
      }
    },
    [createCustomer, createAdmin, history, newUser, admin, type]
  )

  let AdminForm =
    type === 'admin' ? (
      <input
        className="RegisterForm-input"
        type="text"
        name="companyName"
        value={admin.companyName}
        onChange={handleAdminChange}
        placeholder="companyName"
        autoComplete="off"
      />
    ) : null

  return (
    <form className="RegisterForm-form" onSubmit={handleRegister}>
      <p>Please select role:</p>
      <div>
        <input
          type="radio"
          name="type"
          value="customer"
          onChange={handleTypeChange}
          checked={type === 'customer'}
        />{' '}
        customer
        <input
          type="radio"
          name="type"
          value="admin"
          onChange={handleTypeChange}
          checked={type === 'admin'}
        />{' '}
        admin
      </div>

      <input
        className="RegisterForm-input"
        type="text"
        name="username"
        value={newUser.username}
        onChange={handleInputChange}
        placeholder="Username"
        autoComplete="off"
        required
      />
      <input
        className="RegisterForm-input"
        type="password"
        name="password"
        value={newUser.password}
        onChange={handleInputChange}
        placeholder="Password"
        required
      />
      <input
        className="RegisterForm-input"
        type="text"
        name="firstName"
        value={newUser.firstName}
        onChange={handleInputChange}
        placeholder="firstName"
        autoComplete="off"
        required
      />
      <input
        className="RegisterForm-input"
        type="text"
        name="lastName"
        value={newUser.lastName}
        onChange={handleInputChange}
        placeholder="lastName"
        autoComplete="off"
        required
      />
      {AdminForm}

      <button className="RegisterForm-button" type="submit">
        Register
      </button>
    </form>
  )
}

export default RegisterForm
