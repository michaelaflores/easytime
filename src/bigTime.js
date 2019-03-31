import { API_SESSION } from './constants'

class BigTime {
  constructor() {
    // Initiate API session
  }

  checkSession() {}

  async createSession(email, password) {
    const initOptions = {
      credentials: 'same-origin',
      method: 'POST',
    }
    const formData = new FormData()
    formData.append('UserId', email)
    formData.append('Pwd', password)
    initOptions.body = formData
    return fetch(API_SESSION, initOptions)
      .then(res => res.json())
      .then(response => {
        const { firm, fname, sname, token } = response
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
