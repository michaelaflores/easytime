import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import AuthContext from './authContext'
import LoginForm from './loginForm'
import MainView from './mainView'
import './styles.css'

function App() {
  const [token, setToken] = useState(null)
  if (!token) {
    setToken(localStorage.getItem('token'))
  }

  const [strategy, setStrategy] = useState({
    ActiveComponent: () => <LoginForm />,
    name: 'Login',
  })

  // Check if we have a token we can use to authenticate
  // If we don't, and we're not already showing Login, then show Login
  if (!token && strategy.name !== 'Login')
    setStrategy({ ActiveComponent: () => <LoginForm />, name: 'Login' })

  // When the user is authenticated and not already on main view
  if (token && strategy.name !== 'Main') {
    // Show the interface for adding time entries to BigTime
    setStrategy({ ActiveComponent: () => <MainView />, name: 'Main' })
  }
  return (
    <div className="App">
      <h1>EasyTime</h1>
      <AuthContext.Provider
        value={{
          token,
          updateToken: value => {
            setToken(value)
          },
        }}
      >
        {strategy.ActiveComponent()}
      </AuthContext.Provider>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
