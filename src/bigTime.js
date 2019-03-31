import { API_SESSION } from './constants'

class BigTime {
  constructor() {
    // Initiate API session
  }

  checkSession() {}

  createSession(email, password) {
    const initOptions = {
      credentials: 'same-origin',
      method: 'POST',
    }
    const formData = new FormData()
    formData.append('UserId', email)
    formData.append('Pwd', password)
    initOptions.body = formData
    fetch(API_SESSION, initOptions)
      .then(res => res.json())
      .then(rawResponse => {
        const response = JSON.stringify(rawResponse)
        const { firm, fname, sname, token } = response
        console.log('response', response)
        localStorage.setItem('token', token)
        localStorage.setItem('firm', firm)
        localStorage.setItem('firstName', fname)
        localStorage.setItem('lastName', sname)
      })
      .catch(error => {
        alert(`An error was caught: ${JSON.stringify(error)}`)
      })
  }

  submitHours(hoursPayload) {
    console.log('called submit hours', hoursPayload)
  }
}

export default BigTime
