import React, { useState } from 'react'
import BigTimeClass from './bigTime'
import NotificationClass from './notifications'

const MainView = () => {
  const [hours, setHours] = useState(0)
  const bigtime = new BigTimeClass()
  const notifications = new NotificationClass()

  const submitHours = () => {
    console.log('submitting', hours)
    bigtime.submitHours(hours)
    notifications.createNotification('Your hours were submitted. Back to work!')
  }

  return (
    <div>
      <h2>How many hours did you work today?</h2>
      <input
        autoComplete="on"
        type="number"
        placeholder="8"
        min="1"
        max="24"
        onChange={({ target: { value } }) => setHours(value)}
      />
      <span> hours</span>
      <div>
        <input name="autoLunchHours" type="checkbox" checked />
        <label htmlFor="autoLunchHours">
          Automatically add 1 hour of lunch
        </label>
      </div>
      <button onClick={submitHours}>Submit</button>
    </div>
  )
}

export default MainView
