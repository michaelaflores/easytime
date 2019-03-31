import React, { Fragment, useState } from 'react'
import BigTimeClass from './bigTime'

const LoginForm = () => {
  const bigTime = new BigTimeClass()
  const [email, setEmail] = useState('mike.flores@verys.com')
  const [password, setPassword] = useState('Sigma23@')
  return (
    <Fragment>
      <input
        id="email"
        onChange={({ target: { value } }) => {
          setEmail(value)
        }}
        placeholder="email"
        type="text"
      />
      <input
        id="password"
        onChange={({ target: { value } }) => {
          setPassword(value)
        }}
        placeholder="password"
        type="password"
      />
      <button
        onClick={() => {
          bigTime.createSession(email, password)
        }}
      >
        Log in
      </button>
    </Fragment>
  )
}

export default LoginForm
